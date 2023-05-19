import React, { useState, useRef } from "react";
import "./editableInputTime.scss";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import { InputFormHook } from "../../hooks/useInputForm";
import styles from "../../assets/scss/variables.module.scss";

interface EditableInputTimeProps {
  /**
   * Hours input hook
   */
  hoursInputHook: InputFormHook<string>;
  /**
   * Minutes input hook
   */
  minutesInputHook: InputFormHook<string>;
  /**
   * Idicates if the field is editable
   */
  editable?: boolean;
  /**
   * Input type
   */
  type?: "duration" | "localtime";
  /**
   * Function to save the value
   */
  saveValueFunction: (hour: string, minutes: string) => void;
  /**
   * Indicates if the edit icons are shown or if false if instead of icons buttons are shown
   */
  useEditIcons?: boolean;
  /**
   * Indicates if the space should be placed to show possible errors
   */
  showError?: boolean;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component color
   */
  color?: string;
  /*
   * Class name for the text
   */
  className?: string;
  /**
   * Class name for the container
   */
  containerClassName?: string;
  /**
   * Style for the text
   */
  style?: React.CSSProperties;
}

export const EditableInputTime = ({
  hoursInputHook,
  minutesInputHook,
  editable = true,
  type,
  saveValueFunction = () => {},
  useEditIcons = false,
  showError = true,
  width,
  height,
  color,
  className,
  containerClassName,
  style,
  ...props
}: EditableInputTimeProps) => {
  const [editValue, setEditValue] = useState(false);
  const [backupHour, setBackupHour] = useState(hoursInputHook.value);
  const [backupMinutes, setBackupMinutes] = useState(minutesInputHook.value);

  const valueRef = useRef<HTMLInputElement>(null);

  const onChangeHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      hoursInputHook.setValue(event.target.value);
      return;
    }
    event.target.value = event.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^([3-9][0-9]*|[2][4-9]+)$/, "")
      .replace(/^(\d{2}).*$/, "$1");

    if (event.target.value === "") {
      return;
    }
    hoursInputHook.setValue(event.target.value);
  };

  const onChangeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      minutesInputHook.setValue(event.target.value);
      return;
    }
    event.target.value = event.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^([6-9][0-9]*)$/, "")
      .replace(/^(\d{2}).*$/, "$1");

    if (event.target.value === "") {
      return;
    }
    minutesInputHook.setValue(event.target.value);
  };

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    let hoursFormatted, minutesFormatted;

    if (!hoursInputHook.value || hoursInputHook.value.length === 0)
      hoursFormatted = "00";
    else if (hoursInputHook.value.length === 1)
      hoursFormatted = "0" + hoursInputHook.value;
    else hoursFormatted = hoursInputHook.value;

    if (!minutesInputHook.value || minutesInputHook.value.length === 0)
      minutesFormatted = "00";
    else if (minutesInputHook.value.length === 1)
      minutesFormatted = "0" + minutesInputHook.value;
    else minutesFormatted = minutesInputHook.value;

    // We disable the edit mode
    setEditValue(false);
    // Format time
    hoursInputHook.setValue(hoursFormatted);
    minutesInputHook.setValue(minutesFormatted);
    // Save the value
    saveValueFunction(hoursFormatted, minutesFormatted);
    setBackupHour(hoursFormatted);
    setBackupMinutes(minutesFormatted);
  };

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // Disabele the error message
    hoursInputHook.setError(false);
    minutesInputHook.setError(false);
    // We set the value to the current value (the unedited value)
    hoursInputHook.setValue(backupHour);
    minutesInputHook.setValue(backupMinutes);
  };

  return (
    <Box
      className={classnames(
        "editable-input-text--container",
        className,
        containerClassName
      )}
      style={{ width, height }}
    >
      <Box
        className={classnames(
          "editable-input-text--input-container",
          className
        )}
      >
        {editValue ? (
          <Box className="editable-input-time--inputs">
            <input
              type="text"
              ref={valueRef}
              onChange={onChangeHour}
              value={hoursInputHook.value}
              className={classnames("editable-input-text--input", className)}
              style={{
                width: "30px",
                borderColor: hoursInputHook.error
                  ? styles.errorColor
                  : undefined,
                borderWidth: hoursInputHook.error ? "2.5px" : undefined,
                ...style,
              }}
            />
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="400"
              style={{ ...style }}
            >
              {type === "duration" ? "horas" : ":"}
            </Text>
            <input
              type="text"
              ref={valueRef}
              onChange={onChangeMinutes}
              value={minutesInputHook.value}
              className={classnames("editable-input-text--input", className)}
              style={{
                width: "30px",
                borderColor: minutesInputHook.error
                  ? styles.errorColor
                  : undefined,
                borderWidth: minutesInputHook.error ? "2.5px" : undefined,
                ...style,
              }}
            />
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="400"
              style={{ ...style }}
            >
              {type === "duration" ? "minutos" : ""}
            </Text>
          </Box>
        ) : (
          <Box className="editable-input-time--inputs">
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="600"
              style={{ ...style }}
            >
              {hoursInputHook.value}
            </Text>
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="400"
              style={{ ...style }}
            >
              {type === "duration" ? "horas" : ":"}
            </Text>
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="600"
              style={{ ...style }}
            >
              {minutesInputHook.value}
            </Text>
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="400"
              style={{ ...style }}
            >
              {type === "duration" ? "minutos" : ""}
            </Text>
          </Box>
        )}

        <Editable
          editable={editable}
          edit={editValue}
          onPencilClick={() => onPenClick()}
          onSaveClick={() => onSaveClick()}
          onCancelClick={() => onCancelClick()}
          useIcons={useEditIcons}
          initialColor="black"
          color={color}
        />
      </Box>
      <Box
        className={classnames(
          "editable-input-text--error-message",
          className,
          hoursInputHook.error || minutesInputHook.error
            ? "editable-input-text--animation"
            : "editable-input-text--no-animation"
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {hoursInputHook.error ? (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {hoursInputHook.errorMessage}
            </Text>
          </>
        ) : minutesInputHook.error ? (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {minutesInputHook.errorMessage}
            </Text>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
