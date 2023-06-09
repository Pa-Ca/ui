import React from "react";
import styles from "./footer.module.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import useWindowResize from "../../hooks/useWindowResize";

export interface FooterProps {
  /**
   * Component main color
   */
  color?: string;

  /**
   * Component secondary color
   * */
  secondaryColor?: string;

  /**
   * Is dark mode?
   * */
  isDarkMode?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Footer = ({
  color          = "#EF7A08",
  secondaryColor = "white",
  isDarkMode,
  ...props
}: FooterProps) => {
  const footerLinks = {
    instargam: "",
    facebook: "",
    twitter: "",
    youtube: "",
  };
  const windowSize = useWindowResize();

  if (isDarkMode && !secondaryColor) {
    secondaryColor = "black";
  }
  else {
    secondaryColor = "white";
  }


  return (
    <Box
      className={styles["footer--container"]}
      backgroundColor={color}
      {...props}
    >
      <Box className={styles["footer--content-container"]}>
        <Box className={styles["footer--1st-column"]}>
          <Box>
            <Icon icon="pa-ca" color={secondaryColor} size="75px" />
            <Box className={styles["footer--email-text-input"]}>
              <Text color={secondaryColor}>Contactanos!</Text>
            </Box>
          </Box>
          <Box className={styles["footer--social-media-container"]}>
            <Box onClick={() => window.open(footerLinks.facebook, "_blank")}>
              <Icon icon="facebook" size="30px" />
            </Box>
            <Box onClick={() => window.open(footerLinks.twitter, "_blank")}>
              <Icon icon="twitter" size="30px"  className={styles["footer--icon"]}/> 
            </Box>
            <Box onClick={() => window.open(footerLinks.youtube, "_blank")}>
              <Icon icon="youtube" size="30px" />
            </Box>
            <Box onClick={() => window.open(footerLinks.instargam, "_blank")}>
              <Icon icon="instagram" size="30px" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Text
        type={windowSize.resolutionType === "desktop" ? "p" : "h6"}
        color={secondaryColor}
      >
        © 2022 - Todos los derechos reservados
      </Text>
    </Box>
  );
};
