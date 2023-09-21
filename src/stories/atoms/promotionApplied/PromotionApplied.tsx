import React from "react";
import { Text } from "../text/Text";
import { Icon } from "../icon/Icon";
import styles from "./promotionApplied.module.scss";

export interface PromotionAppliedProps {
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
export const PromotionApplied = ({ width, height, ...props }: PromotionAppliedProps) => {
  return (
    <div className={styles["promotion-applied--container"]} style={{ width, height }}>
      <div className={styles["promotion-applied--text-container"]}>
        <Text type="h6" weight="600">
          Promotion applied
        </Text>

        <Text type="h6">View basket for final discount</Text>
      </div>

      <div className={styles["promotion-applied--icon-container"]}>
        <Icon icon="info" size="27px" />
      </div>
    </div>
  );
};
