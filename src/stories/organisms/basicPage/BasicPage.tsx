import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./basicPage.module.scss";
import { Header } from "../../organisms/header/Header";
import { Footer } from "../../organisms/footer/Footer";
import { HeaderProps } from "../../organisms/header/Header";

interface BasicPageProps {
  /**
     Element to be displayed in the page
    */
  children?: React.ReactNode;
  /**
   * Header object
   * */
  headerArgs: HeaderProps;
}

/**
 * Primary UI component for user interaction
 */
export const BasicPage = ({
  children,
  headerArgs,
  ...props
}: BasicPageProps) => {
  return (
    <Box {...props} className={styles["basic-page--container"]}>
      <Box weakShadow style={{ zIndex: 5, minHeight: "8vh" }} height="auto">
        <Header {...headerArgs} />
      </Box>
      <Box className={styles["basic-page--content-container"]}>{children}</Box>

      <Box className={styles["basic-page--footer"]}>
        <Footer />
      </Box>
    </Box>
  );
};
