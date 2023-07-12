import React, { useState, useRef } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import styles from "./editableInputTime.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import textStyles from "../../atoms/text/text.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";
import editableInputTextStyle from "../editableInputText/editableInputText.module.scss";

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
  const windowSize = useWindowResize();
  const [editValue, setEditValue] = useState(false);
  const [backupHour, setBackupHour] = useState(hoursInputHook.value);
  const [backupMinutes, setBackupMinutes] = useState(minutesInputHook.value);

  const valueRef = useRef<HTMLInputElement>(null);

  const onChangeHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      hoursInputHook.setValue(event.target.value);
      return;
    }
    if (event.target.value.length > 2) {
      return;
    }
    const number = parseInt(event.target.value);

    if (isNaN(number) || number > 24) {
      return;
    }
    if (number === 24) {
      minutesInputHook.setValue("00");
    }
    hoursInputHook.setValue(event.target.value);
  };

  const onChangeMinutes = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(hoursInputHook.value) === 24) {
      minutesInputHook.setValue("00");
      return;
    }
    if (event.target.value === "") {
      minutesInputHook.setValue(event.target.value);
      return;
    }
    if (event.target.value.length > 2) {
      return;
    }
    const number = parseInt(event.target.value);

    if (isNaN(number) || number > 59) {
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
    hoursInputHook.setCode(0);
    minutesInputHook.setCode(0);
    // We set the value to the current value (the unedited value)
    hoursInputHook.setValue(backupHour);
    minutesInputHook.setValue(backupMinutes);
  };

  return (
    <Box
      className={classnames(
        editableInputTextStyle["editable-input-text--container"],
        className,
        containerClassName
      )}
      style={{ width, height }}
    >
      <Box
        className={classnames(
          editableInputTextStyle["editable-input-text--input-container"],
          className
        )}
      >
        {editValue ? (
          <Box className={styles["editable-input-time--inputs"]}>
            <input
              type="text"
              ref={valueRef}
              onChange={onChangeHour}
              value={hoursInputHook.value}
              className={classnames(
                textStyles["text"],
                textStyles["text--h5"],
                styles["editable-input-time--text"],
                editableInputTextStyle["editable-input-text--input"],
                (hoursInputHook.code == 4) ? textStyles["text--error-border"] :
                (hoursInputHook.code == 3) ? textStyles["text--warning-border"] :
                "",
              )}
              style={{
                width: "30px",
                borderWidth:
                  hoursInputHook.code == 4 || hoursInputHook.code == 3
                    ? "2.5px"
                    : undefined,
                ...style,
              }}
            />
            <Text type="h5" weight="400" style={{ ...style }}>
              {type === "localtime"
                ? ":"
                : windowSize.resolutionType === "desktop"
                ? "horas"
                : "h"}
            </Text>
            <input
              type="text"
              ref={valueRef}
              onChange={onChangeMinutes}
              value={minutesInputHook.value}
              className={classnames(
                textStyles["text"],
                textStyles["text--h5"],
                styles["editable-input-time--text"],
                editableInputTextStyle["editable-input-text--input"],
                (minutesInputHook.code == 4) ? textStyles["text--error-border"] :
                (minutesInputHook.code == 3) ? textStyles["text--warning-border"] :
                "",
              )}
              style={{
                width: "30px",
                borderWidth:
                  minutesInputHook.code == 4 || minutesInputHook.code == 3
                    ? "2.5px"
                    : undefined,
                ...style,
              }}
            />
            <Text
              className={classnames(
                editableInputTextStyle["editable-input-text--text"],
                className
              )}
              type="h5"
              weight="400"
              style={{ ...style }}
            >
              {type === "localtime"
                ? ""
                : windowSize.resolutionType === "desktop"
                ? "minutos"
                : "m"}
            </Text>
          </Box>
        ) : (
          <Box className={styles["editable-input-time--inputs"]}>
            <Text
              type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
              weight="600"
              style={{ ...style }}
            >
              {hoursInputHook.value}
            </Text>
            <Text
              type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
              weight="400"
              style={{ ...style }}
            >
              {type === "localtime"
                ? ":"
                : windowSize.resolutionType === "desktop"
                ? "horas"
                : "h"}
            </Text>
            <Text
              type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
              weight="600"
              style={{ ...style }}
            >
              {minutesInputHook.value}
            </Text>
            <Text
              type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
              weight="400"
              style={{ ...style }}
            >
              {type === "localtime"
                ? ""
                : windowSize.resolutionType === "desktop"
                ? "minutos"
                : "m"}
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
        />
      </Box>
      <Box
        className={classnames(
          editableInputTextStyle["editable-input-text--error-message"],
          className,
          hoursInputHook.code == 4 ||
            minutesInputHook.code == 4 ||
            hoursInputHook.code == 3 ||
            minutesInputHook.code == 3
            ? editableInputTextStyle["editable-input-text--animation"]
            : editableInputTextStyle["editable-input-text--no-animation"]
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {hoursInputHook.code == 4 ? (
          <>
            <Icon icon="alert" errorStyle={true} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" errorStyle={true}>
              {hoursInputHook.message}
            </Text>
          </>
        ) : minutesInputHook.code == 4 ? (
          <>
            <Icon icon="alert" errorStyle={true} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" errorStyle={true}>
              {minutesInputHook.message}
            </Text>
          </>
        ) : null}
        {hoursInputHook.code == 3 ? (
          <>
            <Icon
              icon="warning"
              errorStyle={true}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" warningStyle={true}>
              {hoursInputHook.message}
            </Text>
          </>
        ) : minutesInputHook.code == 3 ? (
          <>
            <Icon
              icon="warning"
              errorStyle={true}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" warningStyle={true}>
              {minutesInputHook.message}
            </Text>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
