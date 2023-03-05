import React from 'react';
import { Slider } from '@mui/material';

interface RangeProps {
  /**
   * Current values for range
   */
  values?: number[];
  /**
   * 
   */
  setValues?: Function;
  /**
   * Min value in range
   */
  min?: number;
  /**
   * Max value in range
   */
  max?: number;
  /**
   * Mark of min value
   */
  minMark?: string;
  /**
   * Mark of min value
   */
  maxMark?: string;
  /**
   * Range size 
   */
  size?: 'small' | 'medium';
  /**
   * Range color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Range = ({
  values,
  setValues = () => {},
  min = 0,
  max = 100,
  minMark = '',
  maxMark = '',
  size = 'medium',
  color,
  ...props
}: RangeProps) => {
  const handleChangeRange = (
    event: Event,
    values: number | number[],
    activeThumb: number
  ) => {
    const newValues = values as number[];
    setValues(newValues);
  }

  return (
    <Slider
      value={values}
      min={min}
      max={max}
      size={size}
      onChange={handleChangeRange}
      valueLabelDisplay="auto"
      style={{
        color: color
      }}
      marks={[
        {
          value: min,
          label: minMark
        },
        {
          value: max,
          label: maxMark
        },
      ]}
    />
  );
};
