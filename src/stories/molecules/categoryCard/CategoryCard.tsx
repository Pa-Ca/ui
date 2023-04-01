import React from "react";
import "./categoryCard.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Icon } from "../../atoms/icon/Icon";

export interface CategoryCardProps {
  /**
   * Category name
   */
  title: string;
  /**
   * Category description
   */
  description: string;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card the text in the title and description
   */
  textColor?: string;
  /**
   * Color of the button (Note: the color of the text in the button is always white)
   */
  buttonColor?: string;
  /**
   * Card background image from url
   */
  backgroundImage: string;
  /**
   * On click in the button
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const CategoryCard = ({
  title,
  description,
  width,
  height,
  textColor = "#FFFFFF",
  buttonColor = "#EF7A08",
  backgroundImage,
  onClick,
  ...props
}: CategoryCardProps) => {
  return (
    <Box
      backgroundImage={backgroundImage}
      className="category-card--container"
      style={{ width, height }}
    >
      {/* Add a div that has a gradient of color as a background*/}
      <div className="category-card--overlay" />
      {/* Title data Box */}
      <Box className="category-card--info-zone" backgroundColor="transparent">
        <Box
          weakShadow={false}
          className="category-card-title--zone"
          backgroundColor="transparent"
        >
          <center>
            <Text color={textColor} weight="400" type="h2">
              {title}
            </Text>
          </center>
        </Box>

        {/*  Description  Box */}
        <Box
          weakShadow={false}
          className="category-card-description--zone"
          backgroundColor="transparent"
        >
          <center>
            <Text color={textColor} weight="400">
              {description}
            </Text>
          </center>
        </Box>

        {/*  Button  Box */}
        <Box
          weakShadow={false}
          className="category-card-button--zone"
          backgroundColor="transparent"
        >
          <Button
            backgroundColor={buttonColor}
            primary={true}
            size="large"
            onClick={onClick}
          >
            <Box className="category-card--button">
              <Icon icon="paper-plane" size={"16px"} color="white" />
              <Text className="category-card--button-text">Muéstrame</Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
