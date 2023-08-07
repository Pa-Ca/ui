import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./spinner.module.scss";
import { MutatingDots } from "react-loader-spinner";

interface SpinnerProps {
  /**
   * Indicates if the spinner is visible
   */
  visible?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Spinner = ({ visible, ...props}: SpinnerProps) => {
  return (
    <Box className={styles["spinner--container"]}>
      <MutatingDots
        height="100"
        width="100"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass={styles["spinner--color"]}
        visible={visible}
      />
    </Box>
  );
};
