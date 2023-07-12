import React, { MouseEventHandler, RefObject } from "react";
import styles from "./box.module.scss";

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
   * Apply the error text style
   */
  errorStyle?: boolean;
  /**
   * Apply the warning text style
  */
  warningStyle?: boolean;
  /**
   * Apply the check text style
  */
  checkStyle?: boolean;
  /**
   * Box on Click function
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * Other Box styles
   */
  style?: React.CSSProperties;
  /**
   * Box Classname
   */
  className?: string;
  /**
   * Button content
   */
  children?: React.ReactNode;
  /**
   * Box reference
   */
  innerRef?: RefObject<HTMLDivElement>;
  /**
   * Other props
   */
  props?: object;
  /**
   * Box on mouse enter function
   * @default () => {}
   * @type () => void
   * */
  onMouseEnter?: () => void;
  /**
   * Box on mouse leave function
   * @default () => {}
   * @type () => void
   * */
  onMouseLeave?: () => void;
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
  errorStyle = false,
  warningStyle = false,
  checkStyle = false,
  onClick,
  style,
  className,
  innerRef,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: BoxProps): JSX.Element => {
  return (
    <div
      className={[
        styles["box"],
        strongShadow ? styles["box--strong-shadow"] : "",
        weakShadow ? styles["box--weak-shadow"] : "",
        errorStyle ? styles["box--error-border"] : "",
        warningStyle ? styles["box--warning-border"] : "",
        className,
      ].join(" ")}
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
        backgroundImage: !!backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
      ref={innerRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};
