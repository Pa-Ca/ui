import React, { useMemo } from "react";
import './restaurantDetails.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from "../../atoms/icon/Icon";
import { Button } from '../../atoms/button/Button';
import AmenityObject from "../../utils/objects/AmenityObject";
interface RestaurantDetailsProps {
  /**
   * Branch name
   */
  name?: string;
  /**
   * Location name
   */
  location?: string;
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
   * Branch score
   */
  text?: string;
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
  name,
  textColor,
  buttonColor,
  borderColor,
  price,
  text,
  width,
  height,
  backgroundImage,
  iconList,
  location,
  ...props
}: RestaurantDetailsProps) => {
  return (
    <Box className='details-card--container' weakShadow style={{ width }}>

      <Box className='name-and-price-box'>
          <Text type="h4" weight="700">
            {name}
          </Text>
          <Text type="h4" weight="700" color={textColor}>
            {price === 0 ? "Gratis" : "Consumible $"+price}
          </Text>
      </Box>

      <Box className='img-and-icons-box'>
        <Box className="score-box-with-border" style={{borderColor: borderColor}}>
          <Box
            backgroundImage={backgroundImage}
            className="detail-image"
          >
          </Box>
        </Box>
        <Box className='amenity-box'>
          {
          iconList.map((icon,index) => (
            <Box
              key={`check-list--item-${index}-${icon.name}`}
              className='amenity-box'
            >
              <Icon icon={icon.icon} size="24px" />
              {index !== iconList.length -1 ?
                <Box className="branch-listing--vertical-line"/> : null
              }
            </Box>
          ))
          }
        </Box>
      </Box>

      {/* Button */}
      <Box className='branch-search--button-box'>
        <Text>
          {location}
        </Text>
        <Button primary={true} size='large' backgroundColor={buttonColor} onClick={onClick}>
          <Box backgroundColor='transparent'>
            <Text>
              Ver en Google Maps
            </Text>
          </Box>
        </Button>
      </Box>

    </Box>
  );
};