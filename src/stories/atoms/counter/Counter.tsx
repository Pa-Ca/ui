import React, { useMemo } from "react";
import classnames from "classnames";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";
import styles from "./counter.module.scss";

interface CounterProps {
  /**
   * Value of the counter
   */
  value: number;
  /**
   * Function to set the value of the counter
   */
  setValue: React.Dispatch<React.SetStateAction<number>>;
  /**
   * Min value of the counter
   */
  min?: number;
  /**
   * Max value of the counter
   */
  max?: number;
}

/**
 * Primary UI component for user interaction
 */
export const Counter = ({
  value,
  setValue,
  min = -Infinity,
  max = Infinity,
}: CounterProps): JSX.Element => {
  const valueWidth = useMemo(() => {
    const valueLength = value.toString().length * 11;

    return `${valueLength}px`;
  }, [value]);

  return (
    <div className={styles["counter--container"]}>
      <div
        className={classnames(
          styles["counter--button"],
          value <= min && styles["counter--button-deactivated"]
        )}
        onClick={() => setValue(Math.max(min, value - 1))}
      >
        <div className={styles["counter--icon-container"]}>
          <Icon icon="minus" size="20px" className={styles["counter--icon"]} />
        </div>
      </div>

      <div style={{ width: valueWidth }} className={styles["counter--value-container"]}>
        <Text className={styles["counter--value"]} weight="600">
          {value}
        </Text>
      </div>

      <div
        className={classnames(
          styles["counter--button"],
          value >= max && styles["counter--button-deactivated"]
        )}
        onClick={() => setValue(Math.min(max, value + 1))}
      >
        <div className={styles["counter--icon-container"]}>
          <Icon icon="plus" size="20px" className={styles["counter--icon"]} />
        </div>
      </div>
    </div>
  );
};
