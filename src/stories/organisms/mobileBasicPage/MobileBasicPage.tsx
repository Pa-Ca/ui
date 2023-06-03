import React from "react";
import { Box } from "../../atoms/box/Box";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { HeaderProps } from "../header/Header";
import styles from"./mobileBasicPage.module.scss";

interface MobileBasicPageProps {
  /**
     Element to be displayed in the page
    */
  children?: React.ReactNode;
  /**
   * Header object
   * */
  headerArgs?: HeaderProps;
}

/**
 * Primary UI component for user interaction
 */
export const MobileBasicPage = ({
  children,
  headerArgs = {
    logged: false,
    onPacaClick: () => {},
  },
  ...props
}: MobileBasicPageProps) => {
  return (
    <Box {...props} className={styles["mobile-basic-page--container"]}>
      <Box weakShadow style={{ zIndex: 1 }}>
        <Header {...headerArgs} />
      </Box>
      <Box className={styles["mobile-basic-page--content-container"]}>{children}</Box>

      <Box className={styles["mobile-basic-page--footer"]}>
        <Footer />
      </Box>
    </Box>
  );
};
