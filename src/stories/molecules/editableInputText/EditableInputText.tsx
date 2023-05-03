import React, { useMemo, useState, useRef } from "react";
import Select, { ActionMeta, SingleValue } from 'react-select';
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import classnames from "classnames";
import "./editableInputText.scss";

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
   * Current select value use only if input type is select
   */
  currentSelectValue?: OptionType;

  /**
   * Idicates if the field is editable
   * */
  editable?: boolean;

  /**
   * Input type
   * */
  type?: "text" | "email" | "number" | "positiveNumber" | "positiveInteger" | "phoneNumber" | "select";

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

}


export const EditableInputText = ({
  width,
  height,
  color,
  currentValue,
  saveValueFunction,
  currentSelectValue,
  type,
  editable = true,
  useEditIcons = false,
  className,
  style,

  ...props
}: EditableInputTextProps) => {

  const select_enabled = useMemo(() => type === "select", [type]);

  const valueRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(currentValue);
  const [editValue, setEditValue] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // This part of the function is to restrict the input to the type specified type
    if (type === "positiveNumber") {
      // If the the input is a positive number we apply the following rules:
      // remove all characters except digits and decimal point
      // remove all but the first decimal point
      // limit decimal places to 2
      event.target.value = event.target.value.replace(/[^0-9.]/g, '')
        .replace(/(\..*)\./g, '$1')
        .replace(/^(\d*\.\d{0,2}).*$/, '$1');                           
    } else if (type === "positiveInteger") {
      // If the the input is a positive integer we apply the following rules:
      // remove all characters except digits
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    } else if (type === "number") {
      // If the the input is a number we apply the following rules:
      // remove all characters except digits, minus sign and decimal point
      // remove all but the first decimal point
      // remove all but the first minus sign
      // limit decimal places to 2
      event.target.value = event.target.value.replace(/[^0-9.-]/g, '')  
        .replace(/(\..*)\./g, '$1')                                       
        .replace(/^-/, '$#$').replace(/-/g, '').replace('$#$', '-')       
        .replace(/^(\d*\.\d{0,2}).*$/, '$1');                             
    } else if (type === "phoneNumber") {
      // If the the input is a phone number we apply the following rules:
      // remove all characters except digits and plus sign
      event.target.value = event.target.value.replace(/[^0-9+]/g, '');
    }
    // This part of the function is to resize the input to the length of the value
    //event.target.size = Math.max(event.target.value.length, 3000);
    // We set the value to the input container (It is not send to the parent component yet)
    setValue(event.target.value);
  };



  function validateEmail(email: string | any) {
    const regex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}){1,}$/;
    return regex.test(email);
  }

  function validatePhoneNumber(phoneNumber: string | any) {
    const regex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    return regex.test(phoneNumber);
  }


  function validateInput(input: string | any) {
    if (type === "email") {
      return validateEmail(input);
    } else if (type === "phoneNumber") {
      return validatePhoneNumber(input);
    } else {
      return true;
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
    // We validate the input
    // If its not valid, we set the value to empty
    if (!validateInput(value)) {
      setValue("");
      return;
    }
    // We pass the value to the parent component (to backend)
    if (select_enabled) {
      saveValueFunction(selectedOption?.value || "");
    } else 
    {
      saveValueFunction(value)
    }
  }

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);
    // We set the value to the current value (the unedited value)
    if (select_enabled) {
      setSelectedOption(currentSelectValue || null);
    } else {
    setValue(currentValue);
    }
  }

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(currentSelectValue || null);

  const options: OptionType[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  function handleChange(selectedOption: SingleValue<OptionType>, 
                        actionMeta    : ActionMeta<OptionType>) {
    if (selectedOption === null) {
      setSelectedOption(null);
    } else {
      setSelectedOption(selectedOption as OptionType);
    }
  }


  return (<Box className= {classnames("editable-input-text--container", className)}  style={{width: width, height: height,color: color,}}>

    {editValue ?
      select_enabled ? 
        (
          <Select
            className = {classnames( "editable-input-text--select" , className)}
            value={selectedOption}
            options= {options}
            onChange={handleChange}
            styles={
              {
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: 'grey',
                  },
                  ...style,
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  ...style,
                }),
                menu:(baseStyles) => ({
                  ...baseStyles,
                  ...style,
                })
              }
            }
          />
        ) 
      :

      (<input
        type="text"
        ref={valueRef}
        value={value}
        onChange={onChange}
        className={classnames("editable-input-text--input", className)} 
        style={{  ...style}}        
      />
      ) : (
        <>
          <Text className={classnames("editable-input-text--text",className)} 
                type = "h5"  
                weight="600"
                style={{...style }}  >
            {
              select_enabled ?
                (selectedOption?.label)
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
  )
}
