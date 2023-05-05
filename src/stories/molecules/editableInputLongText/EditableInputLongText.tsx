import React, { useState, useRef } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import "./editableInputLongText.scss";
import classnames from "classnames";
import { TextareaAutosize } from "@mui/material";

interface EditableInputLongTextProps {
  /**
   * Component width
   * */
  width?: string;
  /**
   * Component height
   * */
  height?: string;
  /**
   * Component color
   * */
  color?: string;

  /**
   * Value of the input
   * */
  currentValue?: string;

  /**
   * Idicates if the field is editable
   * */
  editable?: boolean;

  /**
   * Indicates if the edit icons are shown or if false if instead of icons buttons are shown
   * */
  useEditIcons?: boolean;

  /**
   * Function to save the value
   * */
  saveValueFunction: (value: string) => void;

  /*
    * Class name for the text

    */
  className?: string;

  /*
    * Style for the text
  */
  style?: React.CSSProperties;

  /**
   * Minimum number of rows
   * */
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

}

export const EditableInputLongText = ({
  width = "100%",
  height = "100%",
  color,
  currentValue,
  saveValueFunction,
  editable = true,
  useEditIcons = false,
  minRows = undefined,
  maxRows = undefined,
  maxLength = 800,
  className,
  style,

  ...props
}: EditableInputLongTextProps) => {


  const valueRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(currentValue);
  const [editValue, setEditValue] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  }

  const onSaveClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // If the value is undefined, it means that the user has not changed the value
    if (value === undefined) {
      return;
    }
    saveValueFunction(value)
  }

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // We set the value to the current value (the unedited value)
    setValue(currentValue);
  }

  return (<Box className={classnames("editable-input-long-text--container", className)}
    style={{ width: width, height: height, color: color, }}
  >

    {editValue ?
      (
        <Box className={classnames("editable-input-long-text--text-area-container", className)} >
          <TextareaAutosize
            value={value}
            onChange={onChange}
            style={{ ...style }}
            className={classnames('editable-input-long-text--text-area', className)}
            hidden={false}
            minRows={minRows}
            maxRows={maxRows}
            maxLength={maxLength}
            onKeyDown={handleKeyDown}
          />
        </Box>

      ) : (
        <Text
          className={classnames('editable-input-long-text--text', className)}
          weight="600"
          type="h5"
          style={{ ...style }}  >
          {
            (value)
          }
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
  )
}
