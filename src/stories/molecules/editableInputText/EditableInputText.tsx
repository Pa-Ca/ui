import React, { useMemo, useState, useRef } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import { Icon } from "../../atoms/icon/Icon";
import classnames from "classnames";
import "./editableInputText.scss";
import { validateEmail, validatePhoneNumber, validateUrl } from "../../utils/stringValidation";
import styles from "../../assets/scss/variables.module.scss";
interface OptionType {
  label: string;
  value: string;
}

interface EditableInputTextProps {
  /**
   * Input name
   */
  name?: string;
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
   * Input type
   * */
  type?: "text" | "email" | "number" | "positiveNumber" | "positiveInteger" | "phoneNumber" | "select" | "url";
  /**
   * Indicates if the edit icons are shown or if false if instead of icons buttons are shown
   * */
  useEditIcons?: boolean;
  /**
   * Options for the select type
   * */
  options?: OptionType[];
  
  /**
   * Function to save the value
   * */
  saveValueFunction: (value: string) => void;
  /*
    * Class name for the text
    */
  className?: string;

  /*
    * Class name for the container

      */
  containerClassName?: string;

  /*
    * Style for the text

      */
  style?: React.CSSProperties;

  /*
    * Hide text after editing
  */
  hideTextAfterEditing?: boolean;

  /*
    * Default text to show when the value is empty or the hideTextAfterEditing is true
  */
  defaultText?: string;

  /*
    * Error message to show when the value is not valid
  */
  errorMessage?: string;


}

export const EditableInputText = ({
  width,
  height,
  color,
  currentValue,
  saveValueFunction,
  type,
  editable = true,
  useEditIcons = false,
  className,
  containerClassName,
  style,
  options,
  hideTextAfterEditing = false,
  defaultText = "Click to edit",
  errorMessage = "Valor inválido",
  ...props
}: EditableInputTextProps) => {
  


  const select_enabled = useMemo(() => type === "select", [type]);

  const hideText = useMemo(() => hideTextAfterEditing , [hideTextAfterEditing]);


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

  const [value, setValue] = useState(currentValue);
  const [editValue, setEditValue] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
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
    setValue(event.target.value);
  };

  function validateInput(input: string | any) {
    if (type === "email") {
      return validateEmail(input);
    } else if (type === "phoneNumber") {
      return validatePhoneNumber(input);
    } else if (type === "url") {
      return validateUrl(input);
    }
    else {
      return true;
    }
  }

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    // If the value is undefined, it means that the user has not changed the value
    if (value === undefined) {
      return;
    }
    // We validate the input
    // If its not valid, we show an error message and we do not save the value
    if (!validateInput(value)) {
      setError(true);
      return;
    }
    // We  disable the edit mode
    setEditValue(false);
    // Save the value
    saveValueFunction(value)
  }

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // We set the value to the current value (the unedited value)
    setValue(currentValue);
  }

  function handleChange(selectedOption: SingleValue<OptionType>, 
                        actionMeta    : ActionMeta<OptionType>) {
    if (selectedOption === null) {
      setValue("")
    } else {
      setValue(selectedOption.value);
    }
  }

  return (
  
  
  <Box className= {classnames("editable-input-text--container", className, containerClassName)}  style={{width: width, height: height,color: color,}}>
    <Box className= {classnames("editable-input-text--input-container", className)}>
    {editValue ?
      select_enabled ? 
        (
          <Select
            className = {classnames("editable-input-text--select", className)}
            value={
              {
                value : value || "",
                label : optionsMap.get(value || "") || ""
              }
            }
            options= {options}
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
        ) 
      :
      (<input
        type="text"
        ref={valueRef}
        value={value}
        onChange={onChange}
        className={classnames("editable-input-text--input", className)} 
        style={{ 
          borderColor: error ? styles.errorColor : undefined,
          borderWidth: error ? "2.5px" : undefined, 
          ...style}}        
      />
      ) : (
        hideText ? (<>
          <Text className={classnames("editable-input-text--text",className)} 
                type = "h5"  
                weight="600"
                style={{...style }}  >
              {defaultText} 
          </Text>
        </>): 
        <>
          <Text className={classnames("editable-input-text--text",className)} 
                type = "h5"  
                weight="600"
                style={{...style }}  >
            {
              select_enabled ?
                (optionsMap.get(value || "") || "")
                :
                (value)
            }
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
      <Box className={classnames("editable-intput-text--error-message", className, 
        (error
          ? "editable-input-text--animation"
          : "editable-input-text--no-animation")
      )}>
        {
          error && (
            <>
              <Icon icon="alert" color={styles.errorColor} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h6" color={styles.errorColor}>
                {errorMessage}
              </Text>
            </>
          )
        }
      </Box>


      
  </Box>
  )
}
