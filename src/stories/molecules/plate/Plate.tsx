import React from "react";
import classnames from "classnames";
import styles from "./plate.module.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";

export interface PlateProps {
  /**
   * Plate price
   */
  price: number;
  /**
   * Plate name
   */
  title: string;
  /**
   * Plate description
   */
  description: string;
  /**
   * Plate image example
   */
  image: string;
  /**
   * On component click
   */
  onClick: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card style color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Plate = ({
  price,
  title,
  description,
  image,
  onClick,
  width,
  height,
  color,
  ...props
}: PlateProps) => {
  return (
    <Box
      className={styles["plate--container"]}
      weakShadow
      style={{ width, height }}
      onClick={onClick}
    >
      <Box backgroundImage={image} className={styles["plate--image"]} />

      <Box className={styles["plate--summary-container"]}>
        <Box
          className={classnames(styles["plate--text"], styles["plate--price"])}
        >
          <Text type="h5" weight="400" color={color}>
            ${price}
          </Text>
        </Box>

        <Box
          className={classnames(styles["plate--text"], styles["plate--title"])}
        >
          <Text color="#24262F" weight="700">
            {title}
          </Text>
        </Box>

        <Box
          className={classnames(
            styles["plate--text"],
            styles["plate--description"]
          )}
        >
          <Text color="#969AB0" weight="300">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
