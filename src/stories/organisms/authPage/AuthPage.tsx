import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./authPage.module.scss";

interface AuthPageProps {
  /**
   * Element to be displayed in the page
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const AuthPage = ({ children, ...props }: AuthPageProps) => {
  return <Box className={styles["auth-page--container"]}>{children}</Box>;
};
