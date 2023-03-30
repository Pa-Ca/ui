import React, { useState, useMemo, KeyboardEvent } from "react";
import "./inputText.scss";
import "../../atoms/text/text.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";

interface InputTextProps {
  /**
   * Input value
   */
  value?: string;
  /**
   * Function that changes the value each time the input is updated
   */
  setValue?: Function;
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
  value,
  setValue = () => {},
  type = "text",
  label = "Text input",
  width,
  height,
  ...props
}: InputTextProps) => {
  const [icon, setIcon] = useState("eye-slash");
  const [currentType, setCurrentType] = useState(type);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
          <button className="text-input--icon" onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
      case "eye-slash":
        return (
          <button className="text-input--icon" onClick={changeType}>
            <Icon icon={icon} size="24" />
          </button>
        );
    }
  }, [icon]);

  return (
    <div className="input-text--container" style={{ width, height }}>
      <div className="input-text--content">
        <input
          type={currentType}
          value={value}
          onChange={changeValue}
          className="input-text--input text text--h6"
        />
        <div className="input-text--label">
          <Text type="h6" weight="400">
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
  );
};
