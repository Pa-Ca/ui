import React from 'react';
import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
  /**
   * Rating
   */
  rating?: number;
  /**
   * Function to change rating
   */
  setRating?: (value: number) => void;
  /**
   * Stars size
   */
  size?: number;
  /**
   * Stars color
   */
  color?: string
  /**
   * Stars must be readonly
   */
  readonly?: boolean;
}

/**
 * StarRating component
 */
export const StarRating = ({
  rating,
  setRating,
  size,
  color,
  readonly,
  ...props
}: StarRatingProps) => {
  return (
    <Rating
      initialValue={rating}
      size={size}
      fillColor={color}
      allowFraction
      readonly={readonly}
      onClick={setRating}
    />
  );
};