import React, { useMemo, useState, useRef } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import styles from "./editableInputSelect.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import textStyles from "../../atoms/text/text.module.scss";
import OptionObject from "../../utils/objects/OptionObject";
import useThemeProvider from "../../hooks/useThemeProvider";
import Select, { ActionMeta, SingleValue } from "react-select";

interface EditableInputSelectProps<T> {
  /**
   * Value input hook
   */
  inputHook: InputFormHook<OptionObject<T | null>>;
  /**
   * Idicates if the field is editable
   */
  editable: boolean;
  /**
   * Function to save the value
   */
  saveValueFunction: () => void;
  /**
   * Options for the select type
   */
  options: OptionObject<T>[];
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

export const EditableInputSelect = <T extends any>({
  inputHook,
  editable = true,
  saveValueFunction = () => {},
  options,
  useEditIcons = false,
  showError = true,
  width,
  height,
  className,
  containerClassName,
  style,
  placeholder,
  ...props
}: EditableInputSelectProps<T>) => {
  const windowSize = useWindowResize();
  const { isDarkMode } = useThemeProvider();

  const optionsMap = useMemo(() => {
    const map = new Map<string, T>();
    if (options) {
      options.forEach((option) => {
        map.set(option.label, option.value);
      });
    }
    return map;
  }, [options]);

  const valueRef = useRef<HTMLInputElement>(null);

  const [backup, setBackup] = useState(inputHook.value);
  const [editValue, setEditValue] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputHook.setValue({
      label: event.target.value,
      value: optionsMap.get(event.target.value) || null,
    });
  };

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    // If the value is undefined, it means that the user has not changed the value
    if (inputHook.value === undefined) {
      return;
    }

    // We disable the edit mode
    setEditValue(false);
    // Save the value
    saveValueFunction();
    setBackup(inputHook.value);
  };

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // Disabele the error message
    inputHook.setError(0);
    // We set the value to the current value (the unedited value)
    inputHook.setValue(backup);
  };

  function handleChange(
    selectedOption: SingleValue<OptionObject<T | null>>,
    actionMeta: ActionMeta<OptionObject<T | null>>
  ) {
    inputHook.setValue(selectedOption!);
  }

  return (
    <Box
      className={classnames(
        styles["editable-input-select--container"],
        className,
        containerClassName
      )}
      style={{ width, height }}
    >
      <Box
        className={classnames(
          styles["editable-input-select--input-container"],
          className
        )}
      >
        {editValue ? (
          <Select
            className={classnames(
              className,
              styles["editable-input-select--select"],
              textStyles["text"],
              windowSize.resolutionType === "desktop"
                ? textStyles["text--h5"]
                : textStyles["text--p"]
            )}
            noOptionsMessage={() => "No se encuentra la opción"}
            value={inputHook.value}
            options={options}
            onChange={handleChange}
            styles={{
              input: (provided: any) => ({
                ...provided,
                color: isDarkMode ? "black" : "white",
              }),
            }}
          />
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
            {inputHook.value.label}
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
          styles["editable-input-select--error-message"],
          className,
          inputHook.error
            ? styles["editable-input-select--animation"]
            : styles["editable-input-select--no-animation"]
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {inputHook.error == 1 && (
          <>
            <Icon icon="alert" errorStyle size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" errorStyle={true}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
        {inputHook.error == 2 && (
          <>
            <Icon icon="warning" warningStyle size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" warningStyle={true}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};
