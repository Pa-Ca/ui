import React from 'react';
import './promotionCard.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';

interface PromotionCardProps {
  /**
   * Promotion text
   */
  promotion?: string;
  /**
   * Date text
   */
  date?: string;
  /**
   * Button text
   */
  buttonText?: string;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component second color
   */
  secondaryColor?: string;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PromotionCard = ({
  promotion,
  date,
  buttonText,
  color,
  secondaryColor='white',
  width,
  height,
  ...props
}: PromotionCardProps) => {
  return (
    <Box
      className='promotion-card--container'
      borderRadius='5px'
      backgroundColor={color}
      style={{ width, height }}
    >
      <Box className='promotion-card--menu' backgroundColor='transparent'>
        <Box backgroundColor='transparent'>
          <Text
            className='promotion-card--menu-text'
            weight='700'
            color={secondaryColor}
            type='h4'
          >
            {promotion}
          </Text>
        </Box>
        <Box backgroundColor='transparent'>
          <Text
            className='promotion-card--menu-text'
            weight='400'
            color={secondaryColor}>
            {date}
          </Text>
        </Box>
      </Box>
      
      <Box className='promotion-card--menu' backgroundColor='transparent'>
        <Button size='small' primary backgroundColor={secondaryColor}>
          <Text type='h6' weight='700' color={color}>
            {buttonText}
          </Text>
        </Button>
    </Box>
    </Box>
  );
};
