import React, { useState, useMemo, useEffect, useRef } from "react";
import "./inputSelect.scss";
import "../../atoms/text/text.scss";
import "../inputText/inputText.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { useDraggable } from "react-use-draggable-scroll";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";
import styles from "../../assets/scss/variables.module.scss";

interface InputSelectProps {
  /**
   * Current input option
   */
  option?: OptionObject;
  /**
   * Function that changes the option each time the input select is updated
   */
  setOption?: Function;
  /**
   * Possible options
   */
  options?: OptionObject[];
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Indicates whether the input should display an error message
   */
  error?: boolean;
  /**
   * Message displayed when there is an error
   */
  errorMessage?: string;
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
  option = { value: 0, name: "" },
  setOption = () => {},
  options = [],
  label = "Text select",
  error = false,
  errorMessage = "",
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
    setOption(option);
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
    <div>
      <Box
        className="input-text--input-container"
        style={{
          width,
          height,
          borderColor: error ? styles.errorColor : undefined,
          borderWidth: error ? "2.5px" : undefined,
        }}
        innerRef={observer.ref}
        backgroundColor="white"
      >
        <div className="input-text--content">
          <button
            className="text text--h6 input-text--input"
            onClick={selectDropdown}
          >
            {option.name}
          </button>

          <div className="input-text--label">
            {label.length > 0 && (
              <Text type="h6" weight="400">
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
              const borderBottomLeftRadius = index === options.length - 1 ? 4 : 0;
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

        <button
          onClick={selectDropdown}
          className="input-select--button"
        >
          {iconJSX}
        </button>
      </Box>
      <div
        className={
          "input-text--error-container " +
          (error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
        }
      >
        {error && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {errorMessage}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
