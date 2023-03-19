import React from 'react';
import './branchItem.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import getDollars from '../../utils/getDollars';
import { Button } from '../../atoms/button/Button';
import useResizeObserver from '../../hooks/useResizeObserver';
import { StarRating } from '../../atoms/starRating/StarRating';

interface BranchItemProps {
  /**
   * Branch name
   */
  name?: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Number of branch reviews
   */
  reviews?: number;
  /**
   * Branch main category
   */
  category?: string;
  /**
   * Branch location
   */
  location?: string;
  /**
   * First reserve hour
   */
  firstReserve?: string;
  /**
   * Second reserve hour
   */
  secondReserve?: string;
  /**
   * Price score
   */
  priceScore?: number;
  /**
   * Does the user like this branch?
   */
  like?: boolean;
  /**
   * Branch image from url
   */
  image?: string;
  /**
   * On click in view more button
   */
  onViewMoreClick?: () => void;
  /**
   * On first reserve click
   */
  onFirstReserveClick?: () => void;
  /**
   * On first reserve click
   */
  onLikeClick?: () => void;
  /**
   * On second reserve click
   */
  onSecondReserveClick?: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card main color
   */
  color?: string;
  /**
   * Price color
   */
  priceColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchItem = ({
  name,
  score,
  reviews,
  category,
  location,
  firstReserve,
  secondReserve,
  priceScore = 0,
  like=false,
  image,
  onViewMoreClick,
  onLikeClick,
  onFirstReserveClick,
  onSecondReserveClick,
  width,
  height,
  color,
  priceColor,
  ...props
}: BranchItemProps) => {
  const containerObserver = useResizeObserver<HTMLDivElement>();
  const leftSideObserver = useResizeObserver<HTMLDivElement>();
  const rightSizeWidth = containerObserver.width - leftSideObserver.width - 40;

  return (
    <Box
      backgroundColor='white'
      borderRadius='12px'
      weakShadow
      className='branch-item--container'
      style={{ width, height }}
      innerRef={containerObserver.ref}
    >
      {/* Summary */}
      <Box className='branch-item--row-container'>
        {/* Image */}
        <Box
          className='branch-item--image'
          backgroundImage='https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-restaurante_79169-56.jpg?w=2000'
        />

        <Box className='branch-item--summary-container' width={`${rightSizeWidth}px`}>
          {/* Data */}
          <Box className='branch-item--summary-data'>
            <Box>
              <Text weight='600' opacity={0.75} color='#121212'>
                {name}
              </Text>
            </Box>

            <Box>
              <StarRating size={16} rating={score} color={color} />
              <Text type='h8' color='#121212' weight='400'>
                {reviews} Reviews
              </Text>
            </Box>

            <Box className='branch-item--summary'>
              <Text type='h7' weight='400'> {category} </Text>
              <Text type='h7' weight='400'> &nbsp;•&nbsp; </Text>
              <Text> {getDollars(priceScore, name)} </Text>
              <Text type='h7' weight='400'> &nbsp;•&nbsp; </Text>
              <Text type='h7' weight='400'> {location} </Text>
            </Box>

            <Box className='branch-item--reserve-container'>
              <Box>
                <Button 
                  size='extra-small' 
                  primary={true} 
                  onClick={onFirstReserveClick}
                  backgroundColor={color}
                >
                  <Text type='h7' weight='700'>
                    {firstReserve}
                  </Text>
                </Button>
              </Box>

              <Box>
                <Button 
                  size='extra-small' 
                  primary={true} 
                  onClick={onSecondReserveClick}
                  backgroundColor={color}
                >
                  <Text type='h7' weight='700'>
                    {secondReserve}
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box height='0.5px' backgroundColor='#112211' className='branch-item--line'/>
          </Box>

          {/* Price */}
          <Box className='branch-item--price-container'>
            <Text type='h7' color='#112211' opacity={0.75}>
              Starting from
            </Text>
            <Text type='h4' color={priceColor} weight='700'>
              $104
            </Text>
          </Box>
        </Box>
      </Box>

      {/* View details */}
      <Box className='branch-item--row-container'>
        {/* Dummy box */}
        <Box innerRef={leftSideObserver.ref}/>

        {/* Buttons */}
        <Box className='branch-item--button-container'>
          <Box className='branch-item--like-container'> 
            <Button size='box' primary={like} borderColor={color} backgroundColor={color} onClick={onLikeClick}>
              <Icon icon={like ? 'heart-fill' : 'heart'} size='20px' color={like ? 'white' : 'black'} />
            </Button>
          </Box>

          <Button primary fullWidth size='large' onClick={onViewMoreClick} backgroundColor={color}>
            <Text type='h6' weight='600'>
              Ver detalles
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
