import React, { useMemo, useState } from "react";
import styles from "./button.module.scss";

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
  size?: "extra-small" | "small" | "box" | "medium" | "large" | "extra-large";
  /**
   * How state should the button be?
   */
  state?: "normal" | "selected" | "active" | "inactive";
  /**
   * Does the button have to be full width?
   */
  fullWidth?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Text content
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  state = "normal",
  fullWidth = false,
  backgroundColor,
  borderColor,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const [mouseDown, setMouseDown] = useState(false);

  const currentState = useMemo(() => {
    if (state === "normal" && mouseDown) {
      return "selected";
    }
    return state;
  }, [state, mouseDown]);

  return (
    <button
      type="button"
      className={[
        styles["button"],
        styles[`button--${size}`],
        primary ? styles[`button--state-${currentState}`] : "",
        fullWidth ? styles["button--full-width"] : "",
        primary ? styles["button--primary"] : styles["button--secondary"],
      ].join(" ")}
      style={{ backgroundColor, borderColor }}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      {...props}
    >
      {children}
    </button>
  );
};
