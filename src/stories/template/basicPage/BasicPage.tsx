import React from "react";
import "./basicPage.scss";
import { Box } from "../../atoms/box/Box";
import { Header } from "../../organisms/header/Header";
import { HeaderProps } from "../../organisms/header/Header";

interface BasicPage {
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
export const BasicPage = ({
  children,
  headerArgs = {
    logged: false,
    onPacaClick: () => {},
  },
  ...props
}: BasicPage) => {
  return (
    <Box {...props} className="basic-page--container">
      <Box weakShadow>
        <Header {...headerArgs} />
      </Box>
      <Box className="basic-page--content-container">{children}</Box>
    </Box>
  );
};
