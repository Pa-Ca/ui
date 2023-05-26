import React from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./branchCard.module.scss";
import getDollars from "../../utils/getDollars";
import { Button } from "../../atoms/button/Button";
import { StarRating } from "../../atoms/starRating/StarRating";

export interface BranchCardProps {
  /**
   * Branch name
   */
  name: string;
  /**
   * Branch score
   */
  score: number;
  /**
   * Number of branch reviews
   */
  reviews: number;
  /**
   * Indicates if the branch has discounts
   */
  discount: boolean;
  /**
   * Branch main category
   */
  category: string;
  /**
   * Branch location
   */
  location: string;
  /**
   * First reserve hour
   */
  firstReserve: string;
  /**
   * Second reserve hour
   */
  secondReserve: string;
  /**
   * Price score
   */
  priceScore: number;
  /**
   * On click in image or title
   */
  onClick: () => void;
  /**
   * On first reserve click
   */
  onFirstReserveClick: () => void;
  /**
   * On second reserve click
   */
  onSecondReserveClick: () => void;
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
  /**
   * Card background image from url
   */
  backgroundImage: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchCard = ({
  name,
  score,
  reviews,
  discount,
  category,
  location,
  firstReserve,
  secondReserve,
  priceScore,
  onClick,
  onFirstReserveClick,
  onSecondReserveClick,
  width,
  height,
  color,
  backgroundImage,
  ...props
}: BranchCardProps) => {
  return (
    <Box className={styles["branch-card--container"]} style={{ width, height }}>
      {/* Image Box */}
      <Box
        backgroundImage={backgroundImage}
        borderTopLeftRadius="16px"
        borderTopRightRadius="16px"
        weakShadow
        className={classnames(styles["branch-card--zone"], styles["branch-card--image"])}
        onClick={onClick}
      >
        {discount && (
          <Box
            className={styles["branch-card--discount"]}
            width="31px"
            height="25px"
            borderRadius="5px"
            backgroundColor={color}
          >
            <Text type="h7" weight="700" color="white">
              %
            </Text>
          </Box>
        )}
      </Box>

      {/* Branch data Box */}
      <Box
        borderBottomLeftRadius="16px"
        borderBottomRightRadius="16px"
        weakShadow
        className={styles["branch-card--zone"]}
      >
        {/* Title */}
        <Box className={styles["branch-card--title-zone"]} onClick={onClick}>
          <Text weight="600" color="#121212" opacity={0.7}>
            {name}
          </Text>
        </Box>

        {/* Data */}
        <Box className={styles["branch-card--info"]}>
          <Box className={styles["branch-card--reviews-zone"]}>
            <Box className={styles["branch-card--reviews"]}>
              <StarRating size={20} rating={score} color={color} readonly />
              <Text
                type="h8"
                weight="400"
                className={styles["branch-card--reviews-text"]}
              >
                {reviews} Reviews
              </Text>
            </Box>
          </Box>
          <Box className={styles["branch-card--summary"]}>
            <Text type="h7" weight="400">
              {" "}
              {category}{" "}
            </Text>
            <Text type="h7" weight="400">
              {" "}
              &nbsp;•&nbsp;{" "}
            </Text>
            <Text> {getDollars(priceScore ?? 0, name)} </Text>
            <Text type="h7" weight="400">
              {" "}
              &nbsp;•&nbsp;{" "}
            </Text>
            <Text type="h7" weight="400">
              {" "}
              {location}{" "}
            </Text>
          </Box>
        </Box>

        {/* Reservations */}
        <Box className={styles["branch-card--buttons"]}>
          <Box>
            <Button
              size="extra-small"
              primary
              backgroundColor={color}
              onClick={onFirstReserveClick}
            >
              <Text type="h7" weight="700">
                {firstReserve}
              </Text>
            </Button>
          </Box>

          <Box>
            <Button
              size="extra-small"
              primary
              backgroundColor={color}
              onClick={onSecondReserveClick}
            >
              <Text type="h7" weight="700">
                {secondReserve}
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
