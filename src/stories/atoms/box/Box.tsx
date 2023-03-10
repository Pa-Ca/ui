import React, { useEffect, useRef, useState } from 'react';
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
   * Box background image from a webpage
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
  children,
  ...props
}: BoxProps): JSX.Element => {

  return (
    <div
      className={[
        'box',
        strongShadow ? 'box--strong-shadow' : '',
        weakShadow ? 'box--weak-shadow' : '',
      ].join(' ')}
      style={{
        backgroundColor, 
        padding, 
        width, 
        height, 
        borderRadius, 
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%',
      }}
      {...props}
    >
      {children}
    </div>
  );
};
