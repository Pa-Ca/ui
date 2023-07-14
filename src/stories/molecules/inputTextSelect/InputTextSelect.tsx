import React, { useState, useMemo, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./inputTextSelect.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Box } from "../../atoms/box/Box";
import { InputFormHook } from "../../hooks/useInputForm";
import { useDraggable } from "react-use-draggable-scroll";
import textStyles from "../../atoms/text/text.module.scss";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";
import inputTextStyles from "../inputText/inputText.module.scss";
import inputSelectStyles from "../inputSelect/inputSelect.module.scss";

interface InputTextSelectProps<T> {
  /**
   * Identity document options Option Object
   */
  inputHookSelectOptions?: OptionObject<T>[];
  /**
   * Input text value hook
   */
  inputHookText: InputFormHook<string>;
  /**
   * Input select value hook
   */
  inputHookSelect:  InputFormHook<OptionObject<T | null>>;
  /**
   * Add empty option
   */
  addEmptyOption?: boolean;
  /**
   * Block writing in select input
   */
  onlySelectOptions?: boolean;
  /**
   * Empty option label
   */
  emptyLabel?: string;
  /**
   * Input type
   */
  type?: "text" | "number" | "naturalNumber" | "phoneNumber" | "noNegativeNumber";
  /**
   * Indicates if the input is required
   */
  required?: boolean;
  /**
   * Indicates if the space should be placed to show possible errors
   */
  showError?: boolean;
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Indicates if the input is disabled
   */
  disabled?: boolean;
  /**
   * Input width
   */
  width?: string;
  /**
   * Input height
   */
  height?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputTextSelect = <T extends any> ({
  inputHookText,
  inputHookSelect,
  inputHookSelectOptions  = [],
  addEmptyOption = false,
  emptyLabel = "Seleccione una opción",
  onlySelectOptions = false,
  type = "text",
  required,
  showError = true,
  label = "Text input",
  disabled,
  width,
  height,
  placeholder,
  ...props
}: InputTextSelectProps<T>) => {

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "naturalNumber") {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    } else if (type === "phoneNumber") {
      // If the the input is a phone number we apply the following rules:
      // remove all characters except digits and plus sign
      event.target.value = event.target.value.replace(/[^0-9+]/g, "");
    } else if (type === "noNegativeNumber") {
      // If the input is a positive float number we apply the following rules:
      // remove all characters except digits and dot
      event.target.value = event.target.value.replace(/[^0-9.]/g, "");
      // remove all dots except the first one
      event.target.value = event.target.value.replace(/\.(?=.*\.)/g, "");
      // remove all dots if they are the first character
      event.target.value = event.target.value.replace(/^\./g, "");
    }
    inputHookText.setValue(event.target.value);
  };

  const [view, setView] = useState(false);
  const [filter, setFilter] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const [currentValue, setCurrentValue] = useState(inputHookSelect.value.label!);

  const observer = useResizeObserver<HTMLDivElement>();

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, { isMounted: view });

  const selectDropdown = () => {
    setView((currentView) => {
      // If the dropdown is being opened, the filter is reset
      if (!currentView) {
        setFilter(true);
        setCurrentFilter("");
      }
      return !currentView;
    });
  };

  const selectOption = (option: OptionObject<T | null>) => {
    setView(false);
    inputHookSelect.setValue(option);
    setCurrentValue(option.label!);
  };

  const onWrite = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onlySelectOptions){
      event.target.value = event.target.value.replace(/[\s\S]*/g, "");
    }

    setView(true);
    setFilter(true);
    setCurrentValue(event.target.value);
    setCurrentFilter(event.target.value);
  };

  const currentOptions = useMemo(() => {
    // Filter options
    let currentOptions: OptionObject<T | null>[] = inputHookSelectOptions.filter(
      (option) =>
        !filter ||
        option.label!.toLowerCase().includes(currentFilter.toLowerCase())
    );

    // Add empty option
    if (addEmptyOption) {
      currentOptions = [
        { label: emptyLabel, value: null},
        ...currentOptions,
      ];
    }

    // Verify if the current value is in the options. If not, unselect
    if (
      !!inputHookSelect.value.value &&
      !currentOptions.some(
        (option) =>
          option.label!.toLowerCase() === inputHookSelect.value.label!.toLowerCase()
      )
    ) {
      inputHookSelect.setValue({ label: emptyLabel, value: null });
      setCurrentValue("");
    }

    return currentOptions;
  }, [inputHookSelectOptions, addEmptyOption, filter, currentFilter]);

  const iconJSX = useMemo(() => {
    if (view) {
      return (
        <div className={styles["input-text-select--icon"]}>
          <Icon icon="up" size="24" />
        </div>
      );
    } else {
      return (
        <div className={styles["input-text-select--icon"]}>
          <Icon icon="down" size="24" />
        </div>
      );
    }
  }, [view]);

  useEffect(() => {
    setCurrentValue(inputHookSelect.value.label!);
  }, [inputHookSelect.value.label]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        observer.ref.current &&
        !observer.ref.current.contains(event.target as Node)
      ) {
        setView(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [observer.ref]);

  return (    
    <div className={inputTextStyles["input-text--container"]}>
      <Box
        className={inputTextStyles["input-text--input-container"]}
        warningStyle={inputHookText.code == 3}
        errorStyle={inputHookText.code == 4}
        style={{
          width,
          height,
          borderWidth:
            inputHookText.code == 4 || inputHookText.code == 3 ? "2.5px" : undefined,
        }}
      >
        <div className={inputTextStyles["input-text--content"]} style={{paddingLeft: 0}}>
          <div className={styles["input-text-select--inputs-box"]}>
            <Box
              className={inputTextStyles["input-text--input-container"]}
              innerRef={observer.ref}
              warningStyle={inputHookSelect.code == 3}
              errorStyle={inputHookSelect.code == 4}
              style={{
                width: "125px",
                marginRight: "15px",
                borderBottomRightRadius: 0,
                borderBottom: 0,
                height: "2.8rem",
                marginBottom: "1px",
                borderWidth:
                  inputHookSelect.code == 4 || inputHookSelect.code == 3 ? "2.5px" : undefined,
              }}
            >
              <div className={inputTextStyles["input-text--content"]}>
                <input
                  value={currentValue}
                  onChange={onWrite}
                  className={classnames(
                    textStyles["text"],
                    textStyles["text--h6"],
                    inputTextStyles["input-text--input"]
                  )}
                />

                <div
                  className={
                    inputSelectStyles["input-select--menu"] +
                    " " +
                    inputSelectStyles["input-select--menu-" + (view ? "in" : "out")]
                  }
                  style={{
                    width: `${observer.width}px`,
                    maxHeight: view ? "300px" : "0px",
                    opacity: view ? "1" : "0",
                  }}
                  {...events}
                  ref={ref}
                >
                  {currentOptions.map((option, index) => {
                    // The first and last option must have borders in the upper
                    // and lower zone respectively to adapt to the menu
                    const borderTopLeftRadius = index === 0 ? 4 : 0;
                    const borderTopRightRadius = borderTopLeftRadius;
                    const borderBottomLeftRadius =
                      index === currentOptions.length - 1 ? 4 : 0;
                    const borderBottomRightRadius = borderBottomLeftRadius;

                    // Style of the option borders
                    const optionStyle = {
                      borderTopLeftRadius,
                      borderTopRightRadius,
                      borderBottomLeftRadius,
                      borderBottomRightRadius,
                      height: `${observer.height}px`,
                      width: `${observer.width}px`,
                    };

                    // If the option is the first and the empty option is added
                    const emptyOption = addEmptyOption && index === 0;

                    return (
                      <div
                        style={{ ...optionStyle }}
                        key={`input-select--option-${index}-${option.label}`}
                      >
                        <button
                          className={classnames(
                            inputSelectStyles["input-select--option-button"],
                            index % 2 === 0
                              ? inputSelectStyles["input-select--option--pair"]
                              : inputSelectStyles["input-select--option--odd"]
                          )}
                          style={{ ...optionStyle }}
                          onClick={() => selectOption(option)}
                        >
                          <Text
                            type="h6"
                            italic={emptyOption}
                            weight={emptyOption ? "600" : "500"}
                          >
                            &nbsp;{option.label}&nbsp;
                          </Text>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={selectDropdown}
                className={inputSelectStyles["input-select--button"]}
              >
                {iconJSX}
              </button>
            </Box>
            <input
              placeholder={placeholder}
              type={
                type == "number" ||
                  type == "text"
                  ? type
                  : "text"
              }
              disabled={disabled}
              value={inputHookText.value}
              onChange={changeValue}
              className={classnames(inputTextStyles["input-text--input"], textStyles["text"], textStyles["text--h6"])}
            />
          </div>
          <div className={inputTextStyles["input-text--label"]}>
            {required && (
              <Text color="red" type="h6" weight="400" style={{ zIndex: 2 }}>
                *
              </Text>
            )}
            <Text
              type="h6"
              weight={
                inputHookText.code != 0 ? "600" : "400"
              }
              checkStyle={inputHookText.code == 1}
              warningStyle={inputHookText.code == 3}
              errorStyle={inputHookText.code == 4}
              style={{ zIndex: 2 }}
            >
              &nbsp;{label}&nbsp;
            </Text>
            <div className={inputTextStyles["input-text--medium-box"]} />
          </div>
        </div>
      </Box>

      {showError && (
        <div
          className={
            inputTextStyles["input-text--message-container"] + " " +
            (inputHookText.code
              ? inputTextStyles["input-text--message-animation"]
              : inputTextStyles["input-text--message-no-animation"])
          }
        >
          {inputHookText.code == 1 && (
            <>
              <Icon icon="check" checkStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" checkStyle={true}>
                {inputHookText.message}
              </Text>
            </>
          )}
          {inputHookText.code == 3 && (
            <>
              <Icon icon="warning" warningStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" warningStyle={true}>
                {inputHookText.message}
              </Text>
            </>
          )}
          {inputHookText.code == 4 && (
            <>
              <Icon icon="alert" errorStyle={true} size="20px" />
              <div style={{ width: "10px" }} />
              <Text type="h7" errorStyle={true}>
                {inputHookText.message}
              </Text>
            </>
          )}
        </div>
      )}
    </div>
  );
};
