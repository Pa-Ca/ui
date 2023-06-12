import React, { useState, useMemo, useEffect, useRef } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./inputSelect.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import { useDraggable } from "react-use-draggable-scroll";
import textStyles from "../../atoms/text/text.module.scss";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";
import inputTextStyles from "../inputText/inputText.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";

interface InputSelectProps {
  /**
   * Input hook
   */
  inputHook: InputFormHook<OptionObject>;
  /**
   * Possible options
   */
  options?: OptionObject[];
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Indicates if the input is required
   */
  required?: boolean;
  /**
   * Indicates if the space should be placed to show possible errors
   */
  showError?: boolean;
  /**
   * Add empty option
   */
  addEmptyOption?: boolean;
  /**
   * Input width
   */
  width?: string;
  /**
   * Input height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputSelect = ({
  inputHook,
  options = [],
  label = "Text select",
  required,
  showError = true,
  addEmptyOption = false,
  width,
  height,
  ...props
}: InputSelectProps) => {
  const [view, setView] = useState(false);
  const [filter, setFilter] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const [currentValue, setCurrentValue] = useState(inputHook.value.label!);

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

  const selectOption = (option: OptionObject) => {
    setView(false);
    inputHook.setValue(option);
    setCurrentValue(option.label!);
  };

  const onWrite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setView(true);
    setFilter(true);
    setCurrentValue(event.target.value);
    setCurrentFilter(event.target.value);
  };

  const currentOptions = useMemo(() => {
    // Filter options
    const currentOptions = options.filter(
      (option) =>
        !filter ||
        option.label!.toLowerCase().includes(currentFilter.toLowerCase())
    );

    // Verify if the current value is in the options. If not, unselect
    if (
      !!inputHook.value.label &&
      !currentOptions.some(
        (option) =>
          option.label!.toLowerCase() ===
            inputHook.value.label!.toLowerCase() &&
          option.text!.toLowerCase() === inputHook.value.text!.toLowerCase() &&
          option.number === inputHook.value.number
      )
    ) {
      inputHook.setValue({ label: "", text: "", number: -1 });
      setCurrentValue("");
    }

    // Add empty option
    if (addEmptyOption) {
      return [{ label: "", text: "", value: -1 }, ...currentOptions];
    } else {
      return currentOptions;
    }
  }, [options, addEmptyOption, filter, currentFilter]);

  const iconJSX = useMemo(() => {
    if (view) {
      return (
        <div className={styles["input-select--icon"]}>
          <Icon icon="up" size="24" />
        </div>
      );
    } else {
      return (
        <div className={styles["input-select--icon"]}>
          <Icon icon="down" size="24" />
        </div>
      );
    }
  }, [view]);

  useEffect(() => {
    setCurrentValue(inputHook.value.label!);
  }, [inputHook.value.label]);

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
    <Box>
      <Box
        className={inputTextStyles["input-text--input-container"]}
        innerRef={observer.ref}
        style={{
          width,
          height,
          borderColor:
            inputHook.error == 1
              ? styleVariables.errorColor
              : inputHook.error == 2
              ? styleVariables.warningColor
              : undefined,
          borderWidth:
            inputHook.error == 1 || inputHook.error == 2 ? "2.5px" : undefined,
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
          <div className={inputTextStyles["input-text--label"]}>
            {required && (
              <Text color="red" weight="400" style={{ zIndex: 1 }}>
                *
              </Text>
            )}
            {label.length > 0 && (
              <Text
                type="h6"
                style={{ zIndex: 1 }}
                weight={
                  inputHook.error == 1 || inputHook.error == 2 ? "600" : "400"
                }
                color={
                  inputHook.error == 1
                    ? styleVariables.errorColor
                    : inputHook.error == 2
                    ? styleVariables.warningColor
                    : undefined
                }
              >
                &nbsp;{label}&nbsp;
              </Text>
            )}
            <div className={inputTextStyles["input-text--medium-box"]} />
          </div>

          <div
            className={
              styles["input-select--menu"] +
              " " +
              styles["input-select--menu-" + (view ? "in" : "out")]
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
              // La primera y ultima opcion deben tener bordes en la zona
              // superior e inferior respectivamente para adaptarse al
              // menu
              const borderTopLeftRadius = index === 0 ? 4 : 0;
              const borderTopRightRadius = borderTopLeftRadius;
              const borderBottomLeftRadius =
                index === currentOptions.length - 1 ? 4 : 0;
              const borderBottomRightRadius = borderBottomLeftRadius;
              // Estilo de los bordes de la opcion
              const optionStyle = {
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                height: `${observer.height}px`,
                width: `${observer.width}px`,
              };

              return (
                <div
                  style={{ ...optionStyle }}
                  key={`input-select--option-${index}-${option.label}`}
                >
                  <button
                    className={classnames(
                      styles["input-select--option-button"],
                      index % 2 === 0
                        ? styles["input-select--option--pair"]
                        : styles["input-select--option--odd"]
                    )}
                    style={{ ...optionStyle }}
                    onClick={() => selectOption(option)}
                  >
                    <Text type="h6">&nbsp;{option.label}&nbsp;</Text>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={selectDropdown}
          className={styles["input-select--button"]}
        >
          {iconJSX}
        </button>
      </Box>
      <div
        className={
          inputTextStyles["input-text--error-container"] +
          " " +
          inputTextStyles[
            inputHook.error == 1 || inputHook.error == 2
              ? "input-text--error-animation"
              : "input-text--error-no-animation"
          ]
        }
        style={{ height: showError ? undefined : "0px" }}
      >
        {inputHook.error == 1 && (
          <>
            <Icon icon="alert" color={styleVariables.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h7" color={styleVariables.errorColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
        {inputHook.error == 2 && (
          <>
            <Icon
              icon="warning"
              color={styleVariables.warningColor}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h7" color={styleVariables.warningColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </div>
    </Box>
  );
};
