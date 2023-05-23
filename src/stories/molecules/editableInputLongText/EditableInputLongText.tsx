import React, { useState, useRef } from "react";
import classnames from "classnames";
import "./editableInputLongText.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import { TextareaAutosize } from "@mui/material";
import { InputFormHook } from "../../hooks/useInputForm";

const styles = require("../../assets/scss/variables.module.scss").default;

interface EditableInputLongTextProps {
  /**
   * Value of the input
   */
  inputHook: InputFormHook<string>;
  /**
   * Idicates if the field is editable
   */
  editable?: boolean;
  /**
   * Function to save the value
   */
  saveValueFunction: (value: string) => void;
  /**
   * Minimum number of rows
   */
  minRows?: number;
  /**
   * Maximum number of rows. Leave undefined for no limit
   */
  maxRows?: number;
  /**
   * Maximum number of characters
   * @default 800
   */
  maxLength?: number;
  /**
   * Indicates if the edit icons are shown or if false if instead of icons buttons are shown
   */
  useEditIcons?: boolean;
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
  /**
   * Class name for the text
   */
  className?: string;
  /**
   * Style for the text
   */
  style?: React.CSSProperties;
}

export const EditableInputLongText = ({
  inputHook,
  editable = true,
  saveValueFunction,
  minRows = undefined,
  maxRows = undefined,
  maxLength = 800,
  useEditIcons = false,
  width = "100%",
  height = "100%",
  color,
  className,
  style,
  ...props
}: EditableInputLongTextProps) => {
  const valueRef = useRef<HTMLInputElement>(null);

  const [backup, setBackup] = useState(inputHook.value);
  const [editValue, setEditValue] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    inputHook.setValue(event.target.value);
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // If the value is undefined, it means that the user has not changed the value
    if (inputHook.value === undefined) {
      return;
    }
    saveValueFunction(inputHook.value);
    setBackup(inputHook.value);
  };

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // We set the value to the current value (the unedited value)
    inputHook.setValue(backup);
  };

  return (
    <Box className="editable-input-long-text--super-container">
      <Box
        className={classnames("editable-input-long-text--container", className)}
        style={{ width, height  }}
      >
        {editValue ? (
          <Box
            className={classnames(
              "editable-input-long-text--text-area-container",
              className
            )}
          >
            <TextareaAutosize
              value={inputHook.value}
              onChange={onChange}
              style={{ ...style }}
              className={classnames(
                "editable-input-long-text--text-area",
                className
              )}
              hidden={false}
              minRows={minRows}
              maxRows={maxRows}
              maxLength={maxLength}
              onKeyDown={handleKeyDown}
            />
          </Box>
        ) : (
          <Text
            className={classnames("editable-input-long-text--text", className)}
            weight="600"
            type="h5"
            style={{ ...style }}
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
          initialColor="black"
          color={color}
        />
      </Box>
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
    </Box>
  );
};
