import React, { useState, useMemo } from "react";
import classnames from "classnames";
import styles from "./inputText.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import textStyles from "../../atoms/text/text.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";

interface InputTextProps {
  /**
   * Input value hook
   */
  inputHook: InputFormHook<string>;
  /**
   * Input type
   */
  type?: "text" | "number" | "naturalNumber" | "password" | "phoneNumber" | "noNegativeNumber";
  /**
   * Indicates if the input is required
   */
  required?: boolean;
  /**
   * Indicates if the space should be placed to show possible errors
   */
  showError?: boolean;
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Input width
   */
  width?: string;
  /**
   * Input height
   */
  height?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputText = ({
  inputHook,
  type = "text",
  required,
  showError = true,
  label = "Text input",
  width,
  height,
  placeholder,
  ...props
}: InputTextProps) => {
  const [icon, setIcon] = useState("eye-slash");
  const [currentType, setCurrentType] = useState(type);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "naturalNumber") {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    } else if (type === "phoneNumber") {
      // If the the input is a phone number we apply the following rules:
      // remove all characters except digits and plus sign
      event.target.value = event.target.value.replace(/[^0-9+]/g, "");
    } else if (type === "noNegativeNumber") {
      // If the input is a positive float number we apply the following rules:
      // remove all characters except digits and dot
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
      // remove all dots except the first one
      event.target.value = event.target.value.replace(/\.(?=.*\.)/g, "");
      // remove all dots if they are the first character
      event.target.value = event.target.value.replace(/^\./g, "");
    }
    inputHook.setValue(event.target.value);
  };

  const changeType = () => {
    setCurrentType((currentType) => {
      if (currentType === "text") return "password";
      return "text";
    });
    setIcon((currentIcon) => {
      if (currentIcon === "eye") return "eye-slash";
      return "eye";
    });
  };

  const iconJSX = useMemo(() => {
    switch (icon) {
      case "eye":
        return (
          <button className={styles["input-text--icon"]} onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
      case "eye-slash":
        return (
          <button className={styles["input-text--icon"]} onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
    }
  }, [icon]);

  return (
    <div className={styles["input-text--container"]}>
      <div
        className={styles["input-text--input-container"]}
        style={{
          width,
          height,
          borderColor:
            inputHook.error == 1
              ? styleVariables.errorColor
              : inputHook.error == 2
              ? styleVariables.warningColor
              : undefined,
          borderWidth:
            inputHook.error == 1 || inputHook.error == 2 ? "2.5px" : undefined,
        }}
      >
        <div className={styles["input-text--content"]}>
          <input
            placeholder={placeholder}
            type={
              currentType == "number" ||
                currentType == "text" ||
                currentType == "password"
                ? currentType
                : "text"
            }
            value={inputHook.value}
            onChange={changeValue}
            className={classnames(styles["input-text--input"], textStyles["text"], textStyles["text--h6"])}
          />
          <div className={styles["input-text--label"]}>
            {required && (
              <Text color="red" weight="400">
                *
              </Text>
            )}
            <Text
              type="h6"
              weight={
                inputHook.error == 1 || inputHook.error == 2 ? "600" : "400"
              }
              color={
                inputHook.error == 1
                  ? styleVariables.errorColor
                  : inputHook.error == 2
                  ? styleVariables.warningColor
                  : undefined
              }
            >
              &nbsp;{label}&nbsp;
            </Text>
          </div>
        </div>

        {type === "password" ? (
          <div>{iconJSX}</div>
        ) : (
          <div style={{ width: 16 }} />
        )}
      </div>

      {showError && (
        <div
          className={
            styles["input-text--error-container"] + " " +
            (inputHook.error == 1 || inputHook.error == 2
              ? styles["input-text--error-animation"]
              : styles["input-text--error-no-animation"])
          }
        >
          {inputHook.error == 1 && (
            <>
              <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h6" color={styleVariables.errorColor}>
                {inputHook.errorMessage}
              </Text>
            </>
          )}
          {inputHook.error == 2 && (
            <>
              <Icon icon="warning" color={styleVariables.warningColor} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h6" color={styleVariables.warningColor}>
                {inputHook.errorMessage}
              </Text>
            </>
          )}
        </div>
      )}
    </div>
  );
};
