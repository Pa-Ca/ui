import React, { useMemo } from "react";
import "./footer.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";

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
  color = '#EF7A08',
  secondaryColor = 'white',
  ...props
}: FooterProps) => {
 
  return (
    <Box className="footer--container"  backgroundColor = {color} {...props} >
      <Box className="footer--content-container"  backgroundColor = "transparent" >
        
        <Box className="footer--1st-column"  backgroundColor = "transparent" >
          <Icon  icon = 'pa-ca'  color = {secondaryColor}  size = "75px" />
          <Box className="footer--email-text-input" backgroundColor="transparent">
            <Text color = {secondaryColor}>
            Contactanos!
            </Text>
          </Box>
          <Box className="footer--social-media-container"  backgroundColor = "transparent" >
            <Icon  icon = 'facebook'  color = {secondaryColor}  size = "30px" />
            <Icon  icon = 'twitter'  color = {secondaryColor}  size = "30px" />
            <Icon  icon = 'youtube'  color = {secondaryColor}  size = "30px" />
            <Icon  icon = 'instagram'  color = {secondaryColor}  size = "30px" />
          </Box>
          <Text className="footer__text" color = {secondaryColor}>
            © 2022 - Todos los derechos reservados
          </Text>

        </Box>
      
      </Box>
    </Box>
  );
};
