import React from 'react';
import './text.scss';

interface TextProps {
  /**
   * Text size
   */
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
  /**
   * Text color
   */
  color?: string;
  /**
   * Should the text be bold?
   */
  bold?: boolean;
  /**
   * Should the text be italic?
   */
  italic?: boolean;
  /**
   * Should the text be uppercase?
   */
  uppercase?: boolean;
  /**
   * Text content
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Text({
  type = 'p',
  bold = false,
  italic = false, 
  uppercase = false,
  color,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <span
      className={[
        'text',
        `text--${type}`,
        bold ? 'text--bold' : '',
        italic ? 'text--italic' : '',
        uppercase ? 'text--uppercase' : '',
      ].join(' ')}
      style={{ color }}
      {...props}
    >
      {children}
    </span>
  );
};
