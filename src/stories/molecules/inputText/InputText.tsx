import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./inputText.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon, IconType } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import textStyles from "../../atoms/text/text.module.scss";

interface InputTextProps {
  /**
   * Input value hook
   */
  inputHook: InputFormHook<string>;
  /**
   * Input type
   */
  type?:
    | "text"
    | "number"
    | "naturalNumber"
    | "password"
    | "phoneNumber"
    | "noNegativeNumber";
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
   * Indicates if the input is disabled
   */
  disabled?: boolean;
  /**
   * Icon to show at the left of the input
   */
  leftIcon?: IconType;
  /**
   * Max length of the input
   */
  maxLength?: number;
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
  /**
   * On left icon click
   */
  onLeftIconClick?: () => void;
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
  disabled,
  leftIcon,
  maxLength,
  width,
  height,
  placeholder,
  onLeftIconClick,
  ...props
}: InputTextProps) => {
  const [icon, setIcon] = useState("eye-slash");
  const [currentType, setCurrentType] = useState(type);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // If the input has a max length we check that the new value is not longer
    // than the max length
    if (maxLength && event.target.value.length > maxLength) {
      return;
    }
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
            <Icon
              icon={icon}
              size="24"
              className={styles["input-text--hide-icon"]}
            />
          </button>
        );
      case "eye-slash":
        return (
          <button className={styles["input-text--icon"]} onClick={changeType}>
            <Icon
              icon={icon}
              size="24"
              className={styles["input-text--hide-icon"]}
            />
          </button>
        );
    }
  }, [icon]);

  return (
    <div className={styles["input-text--container"]}>
      <Box
        className={styles["input-text--input-container"]}
        warningStyle={inputHook.code == 3}
        errorStyle={inputHook.code == 4}
        checkStyle={inputHook.code == 1}
        style={{
          width,
          height,
          borderWidth: inputHook.code ? "2.5px" : undefined,
        }}
      >
        {leftIcon && (
          <Box
            onClick={onLeftIconClick}
            className={styles["input-text--left-icon"]}
          >
            <Icon icon={leftIcon} size="35" />
          </Box>
        )}
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
            disabled={disabled}
            value={inputHook.value}
            onChange={changeValue}
            className={classnames(
              styles["input-text--input"],
              textStyles["text"],
              textStyles["text--h6"]
            )}
          />
          <div className={styles["input-text--label"]}>
            {required && (
              <Text color="red" type="h6" weight="400" style={{ zIndex: 2 }}>
                *
              </Text>
            )}
            {label && (
              <Text
                type="h6"
                weight={inputHook.code ? "600" : "400"}
                warningStyle={inputHook.code == 3}
                errorStyle={inputHook.code == 4}
                checkStyle={inputHook.code == 4}
                style={{ zIndex: 2 }}
              >
                &nbsp;{label}&nbsp;
              </Text>
            )}
            <div className={styles["input-text--medium-box"]} />
          </div>
        </div>

        {type === "password" ? (
          <div>{iconJSX}</div>
        ) : (
          <div style={{ width: 16 }} />
        )}
      </Box>

      {showError && (
        <div
          className={
            styles["input-text--message-container"] +
            " " +
            (inputHook.code
              ? styles["input-text--message-animation"]
              : styles["input-text--message-no-animation"])
          }
        >
          {inputHook.code == 4 && (
            <>
              <Icon icon="alert" errorStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" errorStyle={true}>
                {inputHook.message}
              </Text>
            </>
          )}
          {inputHook.code == 3 && (
            <>
              <Icon icon="warning" warningStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" warningStyle={true}>
                {inputHook.message}
              </Text>
            </>
          )}
          {inputHook.code == 1 && (
            <>
              <Icon icon="check" checkStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" checkStyle={true}>
                {inputHook.message}
              </Text>
            </>
          )}
        </div>
      )}
    </div>
  );
};
