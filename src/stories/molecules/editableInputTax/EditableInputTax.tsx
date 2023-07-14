import React, { useState, useRef, useMemo } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import styles from "./editableInputTax.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import textStyles from "../../atoms/text/text.module.scss";
import OptionObject from "../../utils/objects/OptionObject";
import useThemeProvider from "../../hooks/useThemeProvider";
import Select, { ActionMeta, SingleValue } from "react-select";
import styleVariables from "../../assets/scss/variables.module.scss";
import editableInputTextStyle from "../editableInputText/editableInputText.module.scss";

export interface EditableInputTaxProps {
  /**
   * Tax name
   */
  nameInputHook: InputFormHook<string>;
  /**
   * Tax value
   */
  valueInputHook: InputFormHook<string>;
  /**
   * Tax type
   */
  typeInputHook: InputFormHook<string>;
  /**
   * Total value
   */
  totalValue?: number;
  /**
   * Idicates if the field is editable
   */
  editable?: boolean;
  /**
   * Function to save the value
   */
  saveValueFunction: () => void;
  /**
   * Function to delete the value
   */
  deleteValueFunction: () => void;
  /**
   * Hide subtotal value
   */
  hideSubtotal?: boolean;
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
}

export const EditableInputTax = ({
  nameInputHook,
  valueInputHook,
  typeInputHook,
  totalValue = 0,
  editable = true,
  saveValueFunction = () => {},
  deleteValueFunction = () => {},
  hideSubtotal = false,
  showError = true,
  width,
  height,
  className,
  containerClassName,
  style,
  ...props
}: EditableInputTaxProps) => {
  const windowSize = useWindowResize();
  const { isDarkMode } = useThemeProvider();
  const [editValue, setEditValue] = useState(false);
  const [backupName, setBackupName] = useState(nameInputHook.value);
  const [backupType, setBackupType] = useState(typeInputHook.value);
  const [backupValue, setBackupValue] = useState(valueInputHook.value);

  const valueRef = useRef<HTMLInputElement>(null);

  const options = [
    { value: "%", label: "%" },
    { value: "$", label: "$" },
  ];
  const optionsMap = useMemo(() => {
    const map = new Map<string, string>();
    if (options) {
      options.forEach((option) => {
        map.set(option.value, option.label);
      });
    }
    return map;
  }, [options]);

  const onChangeType = (
    selectedOption: SingleValue<OptionObject<string>>,
    actionMeta: ActionMeta<OptionObject<string>>
  ) => {
    if (selectedOption === null) {
      typeInputHook.setValue("");
    } else {
      typeInputHook.setValue(selectedOption.value);
    }
  };

  const onPenClick = () => {
    setEditValue(true);
    valueRef.current?.focus();
  };

  const onSaveClick = () => {
    if (valueInputHook.value === "") {
      valueInputHook.setValue("0");
    }

    // We disable the edit mode
    setEditValue(false);

    // Save the value
    saveValueFunction();
    setBackupName(nameInputHook.value);
    setBackupType(typeInputHook.value);
    setBackupValue(valueInputHook.value);
  };

  const onCancelClick = () => {
    // We first disable the edit mode
    setEditValue(false);

    // Disabele the error message
    nameInputHook.setCode(0);
    typeInputHook.setCode(0);
    valueInputHook.setCode(0);

    // We set the value to the current value (the unedited value)
    nameInputHook.setValue(backupName);
    typeInputHook.setValue(backupType);
    valueInputHook.setValue(backupValue);
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
          styles["editable-input-tax--input-container"],
          className
        )}
      >
        <Box className={styles["editable-input-tax--content"]}>
          <Box
            className={styles["editable-input-tax--delete"]}
            style={{ width: editValue ? "30px" : "0" }}
            onClick={deleteValueFunction}
          >
            <Box style={{ width: "30px" }}>
              <Icon icon="delete" size="30px" />
            </Box>
          </Box>
          {editValue ? (
            <Box className={styles["editable-input-tax--inputs"]}>
              <input
                type="text"
                ref={valueRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  nameInputHook.setValue(event.target.value)
                }
                value={nameInputHook.value}
                className={classnames(
                  textStyles["text"],
                  textStyles["text--h5"],
                  styles["editable-input-tax--name-input"],
                  editableInputTextStyle["editable-input-text--input"]
                )}
                style={{ width: `${nameInputHook.value.length + 1}ch` }}
              />

              <input
                type="number"
                ref={valueRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  valueInputHook.setValue(event.target.value)
                }
                value={valueInputHook.value}
                className={classnames(
                  textStyles["text"],
                  textStyles["text--h5"],
                  styles["editable-input-tax--value-input"],
                  editableInputTextStyle["editable-input-text--input"]
                )}
                style={{ width: `${valueInputHook.value.length + 1}ch` }}
              />

              <Select
                className={classnames(
                  className,
                  textStyles["text"],
                  textStyles["text--p"]
                )}
                noOptionsMessage={() => "No se encuentra la opción"}
                value={{
                  label: typeInputHook.value,
                  value: optionsMap.get(typeInputHook.value) || "",
                }}
                options={options}
                onChange={onChangeType}
                styles={{
                  input: (provided: any) => ({
                    ...provided,
                    color: isDarkMode ? "black" : "white",
                  }),
                }}
              />
            </Box>
          ) : (
            <Box className={styles["editable-input-tax--inputs"]}>
              <Text
                weight="600"
                type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
                style={{ ...style }}
              >
                {nameInputHook.value}
              </Text>
              <Text
                type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
                weight="600"
                style={{ ...style }}
              >
                ({valueInputHook.value}
              </Text>
              <Text
                type={windowSize.resolutionType === "desktop" ? "h5" : "p"}
                weight="600"
                style={{ ...style }}
              >
                {typeInputHook.value})
              </Text>
            </Box>
          )}
        </Box>

        <Box className={styles["editable-input-tax--editable"]}>
          {!hideSubtotal && (
            <Box>
              <Text type="h5" weight="400">
                {typeInputHook.value === "%"
                  ? (
                      totalValue *
                      (parseFloat(valueInputHook.value) / 100)
                    ).toFixed(2)
                  : parseFloat(valueInputHook.value)}
                $
              </Text>
            </Box>
          )}
          <Editable
            useIcons
            edit={editValue}
            editable={editable}
            onPencilClick={() => onPenClick()}
            onSaveClick={() => onSaveClick()}
            onCancelClick={() => onCancelClick()}
          />
        </Box>
      </Box>
      <Box
        className={classnames(
          editableInputTextStyle["editable-input-text--error-message"],
          className,
          nameInputHook.code + valueInputHook.code + typeInputHook.code > 0
            ? editableInputTextStyle["editable-input-text--animation"]
            : editableInputTextStyle["editable-input-text--no-animation"]
        )}
        style={{ height: showError ? undefined : "0px" }}
      >
        {nameInputHook.code == 4 ? (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.errorColor}>
              {nameInputHook.message}
            </Text>
          </>
        ) : valueInputHook.code == 4 ? (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.errorColor}>
              {valueInputHook.message}
            </Text>
          </>
        ) : typeInputHook.code == 4 ? (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.errorColor}>
              {typeInputHook.message}
            </Text>
          </>
        ) : null}
        {nameInputHook.code == 3 ? (
          <>
            <Icon
              icon="warning"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.warningColor}>
              {nameInputHook.message}
            </Text>
          </>
        ) : valueInputHook.code == 3 ? (
          <>
            <Icon
              icon="warning"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.warningColor}>
              {valueInputHook.message}
            </Text>
          </>
        ) : typeInputHook.code == 3 ? (
          <>
            <Icon
              icon="warning"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.warningColor}>
              {typeInputHook.message}
            </Text>
          </>
        ) : null}
        {nameInputHook.code == 1 ? (
          <>
            <Icon
              icon="check"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.checkColor}>
              {nameInputHook.message}
            </Text>
          </>
        ) : valueInputHook.code == 1 ? (
          <>
            <Icon
              icon="check"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.checkColor}>
              {valueInputHook.message}
            </Text>
          </>
        ) : typeInputHook.code == 1 ? (
          <>
            <Icon
              icon="check"
              color={styleVariables.errorColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styleVariables.checkColor}>
              {typeInputHook.message}
            </Text>
          </>
        ) : null}
      </Box>
    </Box>
  );
};
