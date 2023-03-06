import React from 'react';
import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
  /**
   * Rating
   */
  rating?: number;
  /**
   * Stars size
   */
  size?: number;
  /**
   * Stars color
   */
  color?: string
}

/**
 * StarRating component
 */
export const StarRating = ({
  rating,
  size,
  color,
  ...props
}: StarRatingProps) => {
  return (
    <Rating initialValue={rating} size={size} fillColor={color} allowFraction readonly/>
  );
};