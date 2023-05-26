import React from "react";
import styles from "./review.module.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import scoreString from "../../utils/scoreString";

export interface ReviewProps {
  /**
   * Review score
   */
  score: number;
  /**
   * Review author
   */
  author: string;
  /**
   * Review text
   */
  review: string;
  /**
   * Author image
   */
  image: string;
  /**
   * On flag click function
   */
  onFlagClick?: () => void;
  /**
   * Total component width
   */
  width?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Review = ({
  score,
  author,
  review,
  image,
  onFlagClick,
  width,
  ...props
}: ReviewProps) => {
  return (
    <Box
      className={styles["review--container"]}
      backgroundColor="transparent"
      style={{ width }}
    >
      <Box className={styles["review--image-container"]}>
        <Box
          className={styles["review--image"]}
          borderRadius="100%"
          width="45px"
          height="45px"
          backgroundImage={image}
        />
      </Box>

      <Box className={styles["review--data-container"]}>
        <Box className={styles["review--data-header"]}>
          <Text weight="700" color="#112211">
            {" "}
            {score} {scoreString(score ?? 0)}{" "}
          </Text>
          <Text weight="400" color="#112211">
            {" "}
            &nbsp;&nbsp;|&nbsp; {author}{" "}
          </Text>
        </Box>

        <Box className={styles["review--data-text"]}>
          <Text weight="400" color="#112211">
            {review}
          </Text>
        </Box>
      </Box>

      <Box className={styles["review--flag"]} onClick={onFlagClick}>
        <Icon icon="flag" size="17.5px" color="#112211" />
      </Box>
    </Box>
  );
};
