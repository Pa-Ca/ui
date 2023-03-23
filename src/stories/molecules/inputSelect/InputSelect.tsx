import React, { useState, useMemo, useEffect, useRef } from "react";
import "./inputSelect.scss";
import "../../atoms/text/text.scss";
import "../inputText/inputText.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { useDraggable } from "react-use-draggable-scroll";
import useResizeObserver from "../../hooks/useResizeObserver";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export type OptionObject = {
  value: string;
  name: string;
};

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
  option = { value: "", name: "" },
  setOption = () => {},
  options = [],
  label = "Text select",
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
        <view className="text-input--icon input-select--icon">
          <Icon icon="up" size="24" />
        </view>
      );
    } else {
      return (
        <view className="text-input--icon input-select--icon">
          <Icon icon="down" size="24" />
        </view>
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
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [observer.ref]);

  return (
    <Box
      className="input-text--container"
      style={{ width, height }}
      innerRef={observer.ref}
    >
      <div className="input-text--content">
        <button
          className="text text--h6 input-text--input"
          onClick={selectDropdown}
        >
          {option.name}
        </button>

        <div className="input-text--label">
          <Text type="h6">&nbsp;{label}&nbsp;</Text>
        </div>

        <AnimatePresence>
          {view && (
            <motion.div
              initial={{ maxHeight: "0px" }}
              animate={{ maxHeight: view ? "300px" : "0px" }}
              exit={{ maxHeight: "0px" }}
              transition={{ duration: 0.5 }}
              className="input-select--menu scrollbar-hide"
              style={{ width: `${observer.width}px` }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={selectDropdown}
        style={{ backgroundColor: "transparent", border: 0 }}
      >
        {iconJSX}
      </button>
    </Box>
  );
};
