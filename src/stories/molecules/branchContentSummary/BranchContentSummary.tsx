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
   * Main branch category
   */
  category?: string;
  /**
   * Price per person
   */
  pricePerson?: number;
  /**
   * Branch location
   */
  location?: string;
  /**
   * Reservation price
   */
  price?: number;
  /**
   * Indicates that card is a consumible
   */
  consumible?: boolean;
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
  category,
  pricePerson,
  location,
  price,
  consumible = false,
  color,
  width,
  height,
  ...props
}: BranchContentSummaryProps) => {
  return (
    <Box className='branch-content-summary--container' style={{ width, height }}>
      <Box className='branch-content-summary--data-container'>
        <Text type='h3' color='#121212' weight='600'>
          {name}
        </Text>

        <Box className='branch-content-summary--review'>
          <StarRating size={16} rating={score} color={color} />
          <Text type='h8' color='#121212' weight='400' className='branch-content-summary--data-text'>
            {reviews} Reviews
          </Text>
        </Box>

        <Box className='branch-content-summary--data'>
          <Icon icon='bell' size='18px' />
          <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'> 
            {category}
          </Text>

          <Box width='16px' />
          
          <Icon icon='dollar' size='18px' />
          <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'> 
            {pricePerson}$ p/ Persona
          </Text>
        </Box>
      </Box>

      <Box className='branch-content-summary--price-container'>
        <Text type='h3' color='#121212' weight='700'> Reserva</Text>
        <Text type='h3' color={color} weight='700'> {price}$ {consumible ? 'Consumible' : ''} </Text>
      </Box>
    </Box>
  );
};
