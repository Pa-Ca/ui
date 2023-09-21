import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./optionBar.module.scss";

type Option = {
  name: string;
  description: string;
};

export interface OptionBarProps {
  /**
   * Items to be displayed
   */
  items: Option[];
  /**
   * Index selected
   */
  indexSelected: number;
}

/**
 * Primary UI component for user interaction
 */
export const OptionBar = ({ items, indexSelected, ...props }: OptionBarProps) => {
  return (
    <Box className={styles["option-bar--container"]}>
      {items.map((item, index) => {
        return (
          <Box key={index} className={styles["option-bar--option-container"]}>
            <Text type="h6" weight="600">
              {item.name}
            </Text>
            <Text type="h8" className={styles["option-bar--description"]}>
              {item.description}
            </Text>
          </Box>
        );
      })}

      <Box
        className={styles["option-bar--bar"]}
        style={{ left: `${10 + 100 * Math.min(items.length - 1, indexSelected)}px` }}
      />
    </Box>
  );
};
