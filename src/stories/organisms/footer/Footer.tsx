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
}

/**
 * Primary UI component for user interaction
 */
export const Footer = ({
  color = "#EF7A08",
  secondaryColor = "white",
  ...props
}: FooterProps) => {
  const footerLinks = {
    instargam: "",
    facebook: "",
    twitter: "",
    youtube: "",
  };
  const windowSize = useWindowResize();

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
              <Icon icon="facebook" color={secondaryColor} size="30px" />
            </Box>
            <Box onClick={() => window.open(footerLinks.twitter, "_blank")}>
              <Icon icon="twitter" color={secondaryColor} size="30px" />
            </Box>
            <Box onClick={() => window.open(footerLinks.youtube, "_blank")}>
              <Icon icon="youtube" color={secondaryColor} size="30px" />
            </Box>
            <Box onClick={() => window.open(footerLinks.instargam, "_blank")}>
              <Icon icon="instagram" color={secondaryColor} size="30px" />
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
