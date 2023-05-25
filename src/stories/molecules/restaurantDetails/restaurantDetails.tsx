import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./restaurantDetails.module.scss";
import AmenityObject from "../../utils/objects/AmenityObject";

interface RestaurantDetailsProps {
  /**
   * Branch name
   */
  branchName?: string;
  /**
   * Location name
   */
  location?: string;
  /**
   * Zone name
   */
  zone?: string;
  /**
   * Reservation price
   */
  price?: number;
  /**
   * Text main color
   */
  textColor?: string;
  /**
   * Button main color
   */
  buttonColor?: string;
  /**
   * Border main color
   */
  borderColor?: string;
  /**
   * Main card color
   */
  backgroundColor?: string;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card background image from url
   */
  backgroundImage?: string;
  /**
   * Amenity icon list
   */
  iconList: AmenityObject[];
  /**
   * On click in the button
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const RestaurantDetails = ({
  onClick,
  branchName,
  zone,
  textColor,
  buttonColor,
  borderColor,
  price,
  width,
  height,
  backgroundImage,
  backgroundColor = "white",
  iconList,
  location,
  ...props
}: RestaurantDetailsProps) => {
  return (
    <Box
      className={styles["restaurant-details--details-card--container"]}
      weakShadow
      backgroundColor={backgroundColor}
      style={{ width }}
    >
      <Box className={styles["restaurant-details--name-and-price-box"]}>
        <Text type="h4" weight="700">
          {branchName}
        </Text>
        <Text type="h4" weight="700" color={textColor}>
          {price === 0 ? "Gratis" : "Consumible $" + price}
        </Text>
      </Box>

      {/* <Box className='img-and-icons-box'>
        <Box className={styles["restaurant-details--score-box-with-border"]} style={{borderColor: borderColor}}>
          <Box
            backgroundImage={backgroundImage}
            className={styles["restaurant-details--restaurant-detail-image"]}
          >
          </Box>
          <Text type="h4" weight="600">
            {zone}
          </Text>
        </Box>
        <Box className={styles["restaurant-details--amenity-box"]}>
          {
          iconList.map((icon,index) => (
            <Box
              key={`check-list--item-${index}-${icon.name}`}
              className={styles["restaurant-details--amenity-box"]}
            >
              <Icon icon={icon.icon} size="24px" />
              {index !== iconList.length -1 ?
                <Box className={styles["restaurant-details--branch-amenity--vertical-line"]}/> : null
              }
            </Box>
          ))
          }
        </Box>
      </Box> */}

      {/* Button */}
      <Box className={styles["restaurant-details--branch-search--button-box"]}>
        <Text>{location}</Text>
        <Button
          primary={true}
          size="large"
          backgroundColor={buttonColor}
          onClick={onClick}
        >
          <Box>
            <Text>Ver en Google Maps</Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
