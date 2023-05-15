import React, { useState, useMemo } from "react";
import "./inputText.scss";
import "../../atoms/text/text.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import styles from "../../assets/scss/variables.module.scss";

interface InputTextProps {
  /**
   * Input value hook
   */
  inputHook: InputFormHook<string>;
  /**
   * Input type
   */
  type?: "text" | "number" | "password";
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
}

/**
 * Primary UI component for user interaction
 */
export const InputText = ({
  inputHook,
  type = "text",
  label = "Text input",
  width,
  height,
  ...props
}: InputTextProps) => {
  const [icon, setIcon] = useState("eye-slash");
  const [currentType, setCurrentType] = useState(type);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          <button className="input-text--icon" onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
      case "eye-slash":
        return (
          <button className="input-text--icon" onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
    }
  }, [icon]);

  return (
    <div className="input-text--container">
      <div
        className="input-text--input-container"
        style={{
          width,
          height,
          borderColor: inputHook.error ? styles.errorColor : undefined,
          borderWidth: inputHook.error ? "2.5px" : undefined,
        }}
      >
        <div className="input-text--content">
          <input
            type={currentType}
            value={inputHook.value}
            onChange={changeValue}
            className="input-text--input text text--h6"
          />
          <div className="input-text--label">
            <Text
              type="h6"
              weight={inputHook.error ? "600" : "400"}
              color={inputHook.error ? styles.errorColor : undefined}
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

      <div
        className={
          "input-text--error-container " +
          (inputHook.error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
        }
      >
        {inputHook.error && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
