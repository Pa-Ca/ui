import React from 'react';
import './branchContentSummary.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import { StarRating } from '../../atoms/starRating/StarRating';

interface BranchContentSummaryProps {
  /**
   * Branch name
   */
  name?: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Nomber of branch reviews
   */
  reviews?: number;
  /**
   * Main branch amenity
   */
  amenity?: string;
  /**
   * Price per person
   */
  price?: number;
  /**
   * Branch location
   */
  location?: string;
  /**
   * Consumible price
   */
  consumiblePrice?: number;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchContentSummary = ({
  name,
  score,
  reviews,
  amenity,
  price,
  location,
  consumiblePrice,
  color,
  width,
  height,
  ...props
}: BranchContentSummaryProps) => {
  return (
    <Box className='branch-content-summary--container' style={{ width, height }}>
      <Box className='branch-content-summary--data-container'>
        <Text type='h3' color='#121212' weight='600' opacity={0.7}>
          {name}
        </Text>

        <Box>
          <StarRating size={16} rating={score} color={color} />
          <Text type='h8' color='#121212' weight='400' className='branch-content-summary--data-text'>
            {reviews} Reviews
          </Text>
        </Box>

        <Box className='branch-content-summary--data'>
          <Icon icon='bell' size='18px' />
          <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'> 
            {amenity}
          </Text>

          <Box width='16px' />
          
          <Icon icon='dollar' size='18px' />
          <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'> 
            {price}$ p/ Persona
          </Text>
        </Box>

        <Box className='branch-content-summary--data'>
          <Icon icon='location' size='18px' />
          <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'>
            {location}
          </Text>
        </Box>
      </Box>

      <Box className='branch-content-summary--price-container'>
        <Text type='h3' color='#121212' weight='700'> Reserva</Text>
        <Text type='h3' color={color} weight='700'> {consumiblePrice}$ Consumible </Text>
      </Box>
    </Box>
  );
};
