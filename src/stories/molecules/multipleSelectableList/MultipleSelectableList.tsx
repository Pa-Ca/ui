import React, { useCallback, useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Option } from "../../atoms/option/Option";
import styles from "./multipleSelectableList.module.scss";

export interface MultipleSelectableListProps {
  /**
   * Options to be displayed in the list
   */
  options: string[];
  /**
   * Current selected item
   */
  selected: Set<string>;
  /**
   * Callback function to be called when an item is selected
   */
  onSelect?: (item: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const MultipleSelectableList = ({
  options,
  selected,
  onSelect = () => {},
  ...props
}: MultipleSelectableListProps) => {
  const handleSelect = useCallback(
    (item: string) => {
      onSelect?.(item);
    },
    [onSelect]
  );

  const mappedOptions = useMemo(
    () =>
      options.map((option, index) => (
        <Option
          multiple
          key={index}
          label={option}
          onClick={() => handleSelect(option)}
          value={selected.has(option)}
        />
      )),
    [options, selected.size, handleSelect]
  );

  return <Box className={styles["selectable-list--container"]}>{mappedOptions}</Box>;
};
