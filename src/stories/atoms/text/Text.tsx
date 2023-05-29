import React from "react";
import classnames from "classnames";
import styles from "./text.module.scss";

interface TextProps {
  /**
   * Text size
   */
  type?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";
  /**
   * Text color
   */
  color?: string;
  /**
   * Font weight
   */
  weight?: string;
  /**
   * Font opacity
   */
  opacity?: number;
  /**
   * Should the text be italic?
   */
  italic?: boolean;
  /**
   * Should the text be uppercase?
   */
  uppercase?: boolean;
  /**
   * Indicates if the text should be truncated
   */
  ellipsis?: boolean;
  /**
   * Other Box styles
   */
  style?: object;
  /**
   * Text className
   */
  className?: string;
  /**
   * Text content
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Text({
  type = "p",
  weight = "500",
  opacity,
  italic = false,
  uppercase = false,
  ellipsis = false,
  color,
  style,
  className,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <div
      className={classnames(
        styles["text"],
        styles[`text--${type}`],
        italic ? styles["text--italic"] : "",
        uppercase ? styles["text--uppercase"] : "",
        ellipsis ? styles["text--truncated"] : "",
        className
      )}
      style={{ color, opacity, fontWeight: weight, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
