import React, { useMemo, useState, useRef } from "react";
import "./editableInputText.scss";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import { InputFormHook } from "../../hooks/useInputForm";
import styles from "../../assets/scss/variables.module.scss";
import Select, { ActionMeta, SingleValue } from "react-select";
import {
  validateEmail,
  validatePhoneNumber,
  validateUrl,
} from "../../utils/stringValidation";
interface OptionType {
  label: string;
  value: string;
}

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
    | "select"
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
   * Options for the select type
   */
  options?: OptionType[];
  /**
   * Default text to show when the value is empty or the hideTextAfterEditing is true
   */
  defaultText?: string;
  /**
   * Hide text after editing
   */
  hideTextAfterEditing?: boolean;
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

export const EditableInputText = ({
  inputHook,
  editable = true,
  type,
  saveValueFunction = () => {},
  useEditIcons = false,
  options,
  defaultText = "Click to edit",
  hideTextAfterEditing = false,
  width,
  height,
  color,
  className,
  containerClassName,
  style,
  ...props
}: EditableInputTextProps) => {
  const select_enabled = useMemo(() => type === "select", [type]);

  const hideText = useMemo(() => hideTextAfterEditing, [hideTextAfterEditing]);

  const optionsMap = useMemo(() => {
    const map = new Map<string, string>();
    if (options) {
      options.forEach((option) => {
        map.set(option.value, option.label);
      });
    }
    return map;
  }, [options]);

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
    if (type === "email") {
      return validateEmail(input);
    } else if (type === "phoneNumber") {
      return validatePhoneNumber(input);
    } else if (type === "url") {
      return validateUrl(input);
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
      inputHook.setError(true);
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
    // We set the value to the current value (the unedited value)
    inputHook.setValue(backup);
  };

  function handleChange(
    selectedOption: SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) {
    if (selectedOption === null) {
      inputHook.setValue("");
    } else {
      inputHook.setValue(selectedOption.value);
    }
  }

  return (
    <Box
      className={classnames(
        "editable-input-text--container",
        className,
        containerClassName
      )}
      style={{ width: width, height: height, color: color }}
    >
      <Box
        className={classnames(
          "editable-input-text--input-container",
          className
        )}
      >
        {editValue ? (
          select_enabled ? (
            <Select
              className={classnames("editable-input-text--select", className)}
              value={{
                value: inputHook.value || "",
                label: optionsMap.get(inputHook.value || "") || "",
              }}
              options={options}
              onChange={handleChange}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "grey",
                  },
                  ...style,
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  ...style,
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  ...style,
                }),
              }}
            />
          ) : (
            <input
              type="text"
              ref={valueRef}
              value={inputHook.value}
              onChange={onChange}
              className={classnames("editable-input-text--input", className)}
              style={{
                borderColor: inputHook.error ? styles.errorColor : undefined,
                borderWidth: inputHook.error ? "2.5px" : undefined,
                ...style,
              }}
            />
          )
        ) : hideText ? (
          <>
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="600"
              style={{ ...style }}
            >
              {defaultText}
            </Text>
          </>
        ) : (
          <>
            <Text
              className={classnames("editable-input-text--text", className)}
              type="h5"
              weight="600"
              style={{ ...style }}
            >
              {select_enabled ? optionsMap.get(inputHook.value || "") || "" : inputHook.value}
            </Text>
          </>
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
          "editable-intput-text--error-message",
          className,
          inputHook.error
            ? "editable-input-text--animation"
            : "editable-input-text--no-animation"
        )}
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
      </Box>
    </Box>
  );
};
