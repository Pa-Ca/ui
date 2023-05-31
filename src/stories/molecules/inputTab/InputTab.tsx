import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./inputTab.module.scss";
import { Text } from "../../atoms/text/Text";
import useResizeObserver from "../../hooks/useResizeObserver";

interface InputTabProps {
  /**
   * Current tab index
   */
  index: number;
  /**
   * Change tab index
   */
  setIndex?: (i: number) => void;
  /**
   * Tab title list
   */
  tabs?: string[];
}

/**
 * Primary UI component for user interaction
 */
export const InputTab = ({
  index,
  setIndex = () => {},
  tabs = [],
  ...props
}: InputTabProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const lineWidth = useMemo(() => {
    return (observer.width / Math.max(tabs.length, 1)) * 0.6;
  }, [observer.width, tabs.length]);

  const lineLeft = useMemo(() => {
    return (index * observer.width) / Math.max(tabs.length, 1) + 20;
  }, [index, observer.width, tabs.length]);

  return (
    <Box
      className={styles["input-tab--container"]}
      borderRadius="12px"
      weakShadow
      innerRef={observer.ref}
    >
      {tabs.map((tab, i) => (
        <Box
          className={styles["input-tab--tab"]}
          key={`input-tab--item-${i}-${tab}`}
          onClick={() => setIndex(i)}
        >
          <Text highlightStyle weight="600">
            {tab}
          </Text>
          {i !== 0 && <Box className={styles["input-tab--separator"]} />}
        </Box>
      ))}

      <Box
        className={styles["input-tab--line"]}
        style={{
          left: `${lineLeft}px`,
          width: `${lineWidth}px`,
        }}
        
      />
    </Box>
  );
};
