import React from "react";
import styles from "./required.module.scss";
import { Text } from "../../atoms/text/Text";

export interface RequiredProps {
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Required = ({ width, height, ...props }: RequiredProps) => {
  return (
    <div className={styles["required--container"]} style={{ width, height }}>
      <Text type="h6" primaryButtonStyle>
        Requerido
      </Text>
    </div>
  );
};
