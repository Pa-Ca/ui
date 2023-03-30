import React, { MouseEventHandler } from 'react';
import { Box } from '../box/Box';
import { Icon } from '../icon/Icon';

interface CheckboxProps {
  /**
   * Check status
   */
  check?: boolean;
  /**
   * Checkbox size
   */
  size?: string;
  /**
   * Checkbox color
   */
  color?: string;
  /**
   * On check click
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}


/**
 * Checkbox component
 */
export const Checkbox = ({
  check,
  size = '1px',
  color = '#000',
  onClick,
  ...props
}: CheckboxProps) => {
  return (
    <Box onClick={onClick} backgroundColor='transparent'>
      <Icon icon={check ? 'checkbox' : 'uncheckbox'} size={size} color={color} />
    </Box>
  );
};