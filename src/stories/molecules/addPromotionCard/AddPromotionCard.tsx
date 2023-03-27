import React from 'react';
import './addPromotionCard.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';

export interface AddPromotionCardProps {
  /**
   * Promotion text
   */
  text: string;
  /**
   * On component click
   */
  onClick: () => void;
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
export const AddPromotionCard = ({
  text = "Agregar promoción",
  onClick,
  color = '#A5A5A5',
  secondaryColor = 'white',
  width,
  height,
  ...props
}: AddPromotionCardProps) => {
  return (
    <Box
      className='promotion-card--container'
      borderRadius='5px'
      backgroundColor={color}
      onClick={onClick}
      strongShadow
      style={{ width, height }}
    >
      <Box className='promotion-card--text-container' backgroundColor='transparent'>
        <Box backgroundColor='transparent'>
          <Text
            className='add-promotion-card--menu-text'
            weight='700'
            color={secondaryColor}
            type='h4'
          >
            {text}
          </Text>
        </Box>
      </Box>
      
      <Box className='add-promotion-card--menu-button' backgroundColor={secondaryColor} weakShadow onClick={onClick}>
          <Text type='h6' weight='700' color={color}>
            {"+"}
          </Text>
      </Box>
    </Box>
  );
};
