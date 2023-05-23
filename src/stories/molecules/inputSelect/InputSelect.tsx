import React, { useState, useMemo, useEffect, useRef } from "react";
import "./inputSelect.scss";
import "../../atoms/text/text.scss";
import "../inputText/inputText.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import { useDraggable } from "react-use-draggable-scroll";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";

const styles = require("../../assets/scss/variables.module.scss").default;

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
   * Indicates if the space should be placed to show possible errors
   */
  showError?: boolean;
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
  showError = true,
  width,
  height,
  ...props
}: InputSelectProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const [view, setView] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    isMounted: view,
  });

  const selectDropdown = () => {
    setView((currentView) => !currentView);
  };

  const selectOption = (option: OptionObject) => {
    setView(false);
    inputHook.setValue(option);
  };

  const iconJSX = useMemo(() => {
    if (view) {
      return (
        <div className="input-select--icon">
          <Icon icon="up" size="24" />
        </div>
      );
    } else {
      return (
        <div className="input-select--icon">
          <Icon icon="down" size="24" />
        </div>
      );
    }
  }, [view]);

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
        className="input-text--input-container"
        innerRef={observer.ref}
        backgroundColor="white"
        style={{
          height,
          width,
          borderColor: inputHook.error ? styles.errorColor : undefined,
          borderWidth:inputHook.error ? "2.5px" : undefined
        }}
      >
        <div className="input-text--content">
          <button
            className="text text--h6 input-text--input"
            onClick={selectDropdown}
          >
            {inputHook.value.name}
          </button>

          <div className="input-text--label">
            {label.length > 0 && (
              <Text
                type="h6"
                weight={inputHook.error ? "600" : "400"}
                color={inputHook.error ? styles.errorColor : undefined}
              >
                &nbsp;{label}&nbsp;
              </Text>
            )}
          </div>

          <div
            className={
              "input-select--menu input-select--menu-" + (view ? "in" : "out")
            }
            style={{
              width: `${observer.width}px`,
              maxHeight: view ? "300px" : "0px",
              opacity: view ? "1" : "0",
            }}
            {...events}
            ref={ref}
          >
            {options.map((option, index) => {
              // El background de los impares sera distinto de los pares
              // para diferenciarlos
              const backgroundColor = index % 2 === 0 ? "#F1F1F1" : "white";
              // La primera y ultima opcion deben tener bordes en la zona
              // superior e inferior respectivamente para adaptarse al
              // menu
              const borderTopLeftRadius = index === 0 ? 4 : 0;
              const borderTopRightRadius = borderTopLeftRadius;
              const borderBottomLeftRadius =
                index === options.length - 1 ? 4 : 0;
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
                  key={`input-select--option-${option.name}`}
                >
                  <button
                    className="input-select--option-button"
                    style={{ backgroundColor, ...optionStyle }}
                    onClick={() => selectOption(option)}
                  >
                    <Text type="h6">&nbsp;{option.name}&nbsp;</Text>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button onClick={selectDropdown} className="input-select--button">
          {iconJSX}
        </button>
      </Box>
      <div
        className={
          "input-text--error-container " +
          (inputHook.error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
        }
        style={{ height: showError ? undefined : "0px" }}
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
