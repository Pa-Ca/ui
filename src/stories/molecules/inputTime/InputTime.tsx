import React from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./inputTime.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import textStyles from "../../atoms/text/text.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";
import editableInputTextStyles from "../editableInputText/editableInputText.module.scss";

interface InputTimeProps {
  /**
   * Hours input hook
   */
  hoursInputHook: InputFormHook<string>;
  /**
   * Minutes input hook
   */
  minutesInputHook: InputFormHook<string>;
  /**
   * Input type
   */
  type?: "duration" | "localtime";
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
}

export const InputTime = ({
  hoursInputHook,
  minutesInputHook,
  type,
  showError = true,
  width,
  height,
  ...props
}: InputTimeProps) => {
  const windowSize = useWindowResize();

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

  const color = (error: number) => {
    if (error === 1) {
      return styleVariables.errorColor;
    }
    if (error === 2) {
      return styleVariables.warningColor;
    }
    return undefined;
  };

  return (
    <Box
      className={editableInputTextStyles["editable-input-text--container"]}
      style={{ width, height }}
    >
      <Box
        className={
          editableInputTextStyles["editable-input-text--input-container"]
        }
      >
        <Box className={styles["input-time--inputs"]}>
          <input
            type="text"
            onChange={onChangeHour}
            value={hoursInputHook.value}
            className={classnames(
              textStyles["text"],
              textStyles["text--h5"],
              styles["input-time--input"],
              editableInputTextStyles["editable-input-text--input"]
            )}
            style={{
              width: "30px",
              borderBottomColor: color(hoursInputHook.error),
            }}
          />
          <Text
            type="h5"
            weight="400"
            className={editableInputTextStyles["editable-input-text--text"]}
          >
            {type === "localtime"
              ? ":"
              : windowSize.resolutionType === "desktop"
              ? "horas"
              : "h"}
          </Text>
          <input
            type="text"
            onChange={onChangeMinutes}
            value={minutesInputHook.value}
            className={classnames(
              textStyles["text"],
              textStyles["text--h5"],
              styles["input-time--input"],
              editableInputTextStyles["editable-input-text--input"]
            )}
            style={{
              width: "30px",
              borderBottomColor: color(minutesInputHook.error),
            }}
          />
          <Text
            type="h5"
            weight="400"
            className={editableInputTextStyles["editable-input-text--text"]}
          >
            {type === "localtime"
              ? ""
              : windowSize.resolutionType === "desktop"
              ? "minutos"
              : "m"}
          </Text>
        </Box>
      </Box>

      <Box
        className={classnames(
          editableInputTextStyles["editable-input-text--error-message"],
          hoursInputHook.error == 1 ||
            minutesInputHook.error == 1 ||
            hoursInputHook.error == 2 ||
            minutesInputHook.error == 2
            ? editableInputTextStyles["editable-input-text--animation"]
            : editableInputTextStyles["editable-input-text--no-animation"]
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {hoursInputHook.error == 1 ? (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.errorColor}>
              {hoursInputHook.errorMessage}
            </Text>
          </>
        ) : minutesInputHook.error == 1 ? (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.errorColor}>
              {minutesInputHook.errorMessage}
            </Text>
          </>
        ) : null}
        {hoursInputHook.error == 2 ? (
          <>
            <Icon icon="warning" color={styleVariables.warning} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.warningColor}>
              {hoursInputHook.errorMessage}
            </Text>
          </>
        ) : minutesInputHook.error == 2 ? (
          <>
            <Icon icon="warning" color={styleVariables.warning} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.warningColor}>
              {minutesInputHook.errorMessage}
            </Text>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
