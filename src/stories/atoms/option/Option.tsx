import React from "react";
import styles from "./option.module.scss";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";

export interface OptionProps {
  /**
   * Selected value
   */
  value: boolean;
  /**
   * Label
   */
  label: string;
  /**
   * Indicates if the option is multiple
   */
  multiple?: boolean;
  /**
   * On click funtcion
   */
  onClick?: () => void;
  /**
   * Class name
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Option = ({
  value,
  label,
  multiple = false,
  onClick,
  className,
  ...props
}: OptionProps) => {
  return (
    <div className={styles["option--container"]} onClick={onClick}>
      {!multiple ? (
        <div
          className={styles["option--container-circle"]}
          style={{ borderRadius: multiple ? "20%" : "100%" }}
        >
          {value && !multiple && <div className={styles["option--container-circle-selected"]} />}
        </div>
      ) : value ? (
        <Icon icon="checkbox" size="28px" className={styles["option--checkbox"]} />
      ) : (
        <Icon icon="uncheckbox" size="28px" className={styles["option--checkbox"]} />
      )}
      <Text className={className}>{label}</Text>
    </div>
  );
};
