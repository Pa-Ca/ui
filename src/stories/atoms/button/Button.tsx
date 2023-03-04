import React from 'react';
import './button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What border color to use
   */
  borderColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'extra-small' | 'small' | 'box' | 'medium' | 'large' | 'extra-large';
  /**
   * How state should the button be?
   */
  state?: 'normal' | 'selected' | 'active' | 'inactive';
  /**
   * Does the button have to be full width?
   */
  fullWidth?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  state = 'normal',
  fullWidth = false,
  backgroundColor,
  borderColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size}`,
        primary   ? `button--state-${state}` : '',
        fullWidth ? 'button--full-width'     : '',
        primary   ? 'button--primary'        : 'button--secondary'
      ].join(' ')}
      style={{ backgroundColor, borderColor }}
      {...props}
    >
      {label}
    </button>
  );
};
