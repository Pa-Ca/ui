import React from "react";
import classnames from "classnames";
import styles from "./switch.module.scss";

interface SwitchProps {
  /**
   * Switch state
   */
  active: boolean;
  /**
   * On click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Switch = ({
  active,
  onClick,
  ...props
}: SwitchProps): JSX.Element => {
  return (
    <div
      className={classnames(
        styles["switch--container"],
        active
          ? styles["switch--container-active"]
          : styles["switch--container-inactive"]
      )}
      onClick={onClick}
    >
      <div
        className={classnames(
          styles["switch--circle"],
          active
            ? styles["switch--circle-active"]
            : styles["switch--circle-inactive"]
        )}
        style={{ left: active ? "55%" : "5%" }}
      />
    </div>
  );
};
