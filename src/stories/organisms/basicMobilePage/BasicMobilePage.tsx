import React from "react";
import { Box } from "../../atoms/box/Box";
import { Footer } from "../footer/Footer";
import { HeaderProps } from "../header/Header";
import styles from "./basicMobilePage.module.scss";
import { MobileHeader } from "../mobileHeader/MobileHeader";

interface BasicMobilePageProps {
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
export const BasicMobilePage = ({
  children,
  headerArgs = {
    logged: false,
    onPacaClick: () => { },
    branchOptions: [],
  },
  ...props
}: BasicMobilePageProps) => {
  return (
    <Box {...props} className={styles["basic-mobile-page--container"]}>
      <Box height="auto" style={{ zIndex: 300 }}>
        <MobileHeader {...headerArgs} />
      </Box>
      <Box className={styles["basic-mobile-page--content-container"]}>
        <Box className={styles["basic-mobile-page--children-container"]}>
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
