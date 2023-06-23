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

interface InputSelectProps<T> {
  /**
   * Input hook
   */
  inputHook: InputFormHook<OptionObject<T | null>>;
  /**
   * Possible options
   */
  options?: OptionObject<T>[];
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
   * Empty option label
   */
  emptyLabel?: string;
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
export const InputSelect = <T extends any>({
  inputHook,
  options = [],
  label = "Text select",
  required,
  showError = true,
  addEmptyOption = false,
  emptyLabel = "Seleccione una opción",
  width,
  height,
  ...props
}: InputSelectProps<T>) => {
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

  const selectOption = (option: OptionObject<T | null>) => {
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
    let currentOptions: OptionObject<T | null>[] = options.filter(
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
      !!inputHook.value.value &&
      !currentOptions.some(
        (option) =>
          option.label!.toLowerCase() === inputHook.value.label!.toLowerCase()
      )
    ) {
      inputHook.setValue({ label: emptyLabel, value: null });
      setCurrentValue("");
    }

    return currentOptions;
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
        warningStyle={inputHook.error == 2}
        errorStyle={inputHook.error == 1}
        style={{
          width,
          height,
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
              <Text color="red" type="h6" weight="400" style={{ zIndex: 1 }}>
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
                warningStyle={inputHook.error == 2}
                errorStyle={inputHook.error == 1}
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
                      styles["input-select--option-button"],
                      index % 2 === 0
                        ? styles["input-select--option--pair"]
                        : styles["input-select--option--odd"]
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
            <Icon icon="alert" errorStyle={true} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h7" errorStyle={true}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
        {inputHook.error == 2 && (
          <>
            <Icon
              icon="warning"
              warningStyle={true}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h7" warningStyle={true}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </div>
    </Box>
  );
};
