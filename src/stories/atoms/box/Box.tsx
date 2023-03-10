import React, { MouseEventHandler } from 'react';
import './box.scss';

interface BoxProps {
  /**
   * Should the box has strong shadows?
   */
  strongShadow?: boolean;
  /**
   * Should the box has strong shadows?
   */
  weakShadow?: boolean;
  /**
   * Box width
   */
  width?: string;
  /**
   * Box height
   */
  height?: string;
  /**
   * Box background color
  */
  backgroundColor?: string;
  /**
   * Box background image from url
   */
  backgroundImage?: string;
  /**
    * Box padding
  */
  padding?: string;
  /**
   * Box border radius
   */
  borderRadius?: string;
  /**
   * Box top left border radius
   */
  borderTopLeftRadius?: string;
  /**
   * Box top right border radius
   */
  borderTopRightRadius?: string;
  /**
   * Box bottom right border radius
   */
  borderBottomRightRadius?: string;
  /**
   * Box bottom left border radius
   */
  borderBottomLeftRadius?: string;
  /**
   * Box on Click function
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * Other Box styles
   */
  style?: object;
  /**
   * Box Classname
   */
  className?: string;
  /**
   * Button content
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Box = ({
  strongShadow = false,
  weakShadow = false,
  width,
  height,
  backgroundColor,
  backgroundImage,
  padding,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  onClick,
  style,
  className,
  children,
  ...props
}: BoxProps): JSX.Element => {
  
  return (
    <div
      className={[
        'box',
        strongShadow ? 'box--strong-shadow' : '',
        weakShadow ? 'box--weak-shadow' : '',
        className
      ].join(' ')}
      style={{
        backgroundColor, 
        padding, 
        width, 
        height, 
        borderRadius, 
        borderTopLeftRadius: borderTopLeftRadius ?? borderRadius,
        borderTopRightRadius: borderTopRightRadius ?? borderRadius,
        borderBottomRightRadius: borderBottomRightRadius ?? borderRadius,
        borderBottomLeftRadius: borderBottomLeftRadius ?? borderRadius,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style
      }}
    onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
