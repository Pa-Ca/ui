import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./selectableList.module.scss";
import { Option } from "../../atoms/option/Option";

export interface SelectableListProps {
  /**
   * Options to be displayed in the list
   */
  options: string[];
  /**
   * Current selected item
   */
  selected: string;
  /**
   * Callback function to be called when an item is selected
   */
  onSelect?: (item: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const SelectableList = ({
  options,
  selected,
  onSelect = () => {},
  ...props
}: SelectableListProps) => {
  return (
    <Box className={styles["selectable-list--container"]}>
      {options.map((option, index) => {
        return (
          <Option
            key={index}
            label={option}
            value={selected === option}
            onClick={() => onSelect(option)}
          />
        );
      })}
    </Box>
  );
};
