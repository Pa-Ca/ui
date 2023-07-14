import React, { useMemo, useState, useRef } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import styles from "./editableInputText.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import textStyles from "../../atoms/text/text.module.scss";
import {
  validateEmail,
  validatePhoneNumber,
  validateUrl,
} from "../../utils/stringValidation";

interface EditableInputTextProps {
  /**
   * Value input hook
   */
  inputHook: InputFormHook<string>;
  /**
   * Idicates if the field is editable
   */
  editable?: boolean;
  /**
   * Input type
   */
  type?:
    | "text"
    | "email"
    | "number"
    | "positiveNumber"
    | "positiveInteger"
    | "phoneNumber"
    | "url";
  /**
   * Function to save the value
   */
  saveValueFunction: (value: string) => void;
  /**
   * Indicates if the edit icons are shown or if false if instead of icons buttons are shown
   */
  useEditIcons?: boolean;
  /**
   * Default text to show when the value is empty or the hideTextAfterEditing is true
   */
  defaultText?: string;
  /**
   * Hide text after editing
   */
  hideTextAfterEditing?: boolean;
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
  /**
   * Placeholder for the input
   */
  placeholder?: string;
}

export const EditableInputText = ({
  inputHook,
  editable = true,
  type,
  saveValueFunction = () => {},
  useEditIcons = false,
  defaultText = "Click to edit",
  hideTextAfterEditing = false,
  showError = true,
  width,
  height,
  className,
  containerClassName,
  style,
  placeholder,
  ...props
}: EditableInputTextProps) => {
  const windowSize = useWindowResize();
  const hideText = useMemo(() => hideTextAfterEditing, [hideTextAfterEditing]);

  const valueRef = useRef<HTMLInputElement>(null);

  const [backup, setBackup] = useState(inputHook.value);
  const [editValue, setEditValue] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // This part of the function is to restrict the input to the type specified type
    if (type === "positiveNumber") {
      // If the the input is a positive number we apply the following rules:
      // remove all characters except digits and decimal point
      // remove all but the first decimal point
      // limit decimal places to 2
      event.target.value = event.target.value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*)\./g, "$1")
        .replace(/^(\d*\.\d{0,2}).*$/, "$1");
    } else if (type === "positiveInteger") {
      // If the the input is a positive integer we apply the following rules:
      // remove all characters except digits
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    } else if (type === "number") {
      // If the the input is a number we apply the following rules:
      // remove all characters except digits, minus sign and decimal point
      // remove all but the first decimal point
      // remove all but the first minus sign
      // limit decimal places to 2
      event.target.value = event.target.value
        .replace(/[^0-9.-]/g, "")
        .replace(/(\..*)\./g, "$1")
        .replace(/^-/, "$#$")
        .replace(/-/g, "")
        .replace("$#$", "-")
        .replace(/^(\d*\.\d{0,2}).*$/, "$1");
    } else if (type === "phoneNumber") {
      // If the the input is a phone number we apply the following rules:
      // remove all characters except digits and plus sign
      event.target.value = event.target.value.replace(/[^0-9+]/g, "");
    }
    // This part of the function is to resize the input to the length of the value
    //event.target.size = Math.max(event.target.value.length, 3000);
    // We set the value to the input container (It is not send to the parent component yet)
    inputHook.setValue(event.target.value);
  };

  function validateInput(input: string | any) {
    if (type === "email" && !validateEmail(input)) {
      inputHook.setMessage("Correo inválido");
      return false;
    } else if (type === "phoneNumber" && !validatePhoneNumber(input)) {
      inputHook.setMessage("Número de teléfono inválido");
      return false;
    } else if (type === "url" && !validateUrl(input)) {
      inputHook.setMessage("Url inválido");
      return false;
    } else {
      return true;
    }
  }

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    // If the value is undefined, it means that the user has not changed the value
    if (inputHook.value === undefined) {
      return;
    }
    // We validate the input
    // If its not valid, we show an error message and we do not save the value
    if (!validateInput(inputHook.value)) {
      inputHook.setCode(1);
      return;
    }
    // We disable the edit mode
    setEditValue(false);
    // Save the value
    saveValueFunction(inputHook.value);
    setBackup(inputHook.value);
  };

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // Disabele the error message
    inputHook.setCode(0);
    // We set the value to the current value (the unedited value)
    inputHook.setValue(backup);
  };

  return (
    <Box
      className={classnames(
        styles["editable-input-text--container"],
        className,
        containerClassName
      )}
      style={{ width, height }}
    >
      <Box
        className={classnames(
          styles["editable-input-text--input-container"],
          className
        )}
      >
        {editValue ? (
          <input
            type="text"
            placeholder={placeholder}
            ref={valueRef}
            value={inputHook.value}
            onChange={onChange}
            className={classnames(
              styles["editable-input-text--input"],
              textStyles["text"],
              windowSize.resolutionType === "desktop"
                ? textStyles["text--h5"]
                : textStyles["text--p"],
              inputHook.code == 4
                ? textStyles["text--error-border"]
                : inputHook.code == 3
                ? textStyles["text--warning-border"]
                : inputHook.code == 1
                ? textStyles["text--check-border"]
                : "",
              className
            )}
            style={{
              borderWidth:
                inputHook.code
                  ? "2.5px"
                  : undefined,
              ...style,
            }}
          />
        ) : hideText ? (
          <>
            <Text
              ellipsis
              weight="600"
              style={{ ...style }}
              type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
              className={classnames(
                styles["editable-input-text--text"],
                className
              )}
            >
              {defaultText}
            </Text>
          </>
        ) : (
          <Text
            ellipsis
            weight="700"
            style={{ ...style }}
            type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
            className={classnames(
              styles["editable-input-text--text"],
              className
            )}
          >
            {inputHook.value}
          </Text>
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
          styles["editable-input-text--error-message"],
          className,
          inputHook.code
            ? styles["editable-input-text--animation"]
            : styles["editable-input-text--no-animation"]
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {inputHook.code == 4 && (
          <>
            <Icon icon="alert" errorStyle size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" errorStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
        {inputHook.code == 3 && (
          <>
            <Icon icon="warning" warningStyle size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" warningStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
        {inputHook.code == 1 && (
          <>
            <Icon icon="check" checkStyle size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" checkStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};
