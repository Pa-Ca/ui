
import React , { useMemo , useState }from 'react';
import { Box } from '../../atoms/box/Box';
import { Header } from '../../organisms/header/Header';


import './basicPage.scss';


export type headerObject = {
  icon    ?: string | "down";
  picture ?: string | "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg";
  name    ?: string | "Jonh D.";
  color   ?: string | "#EF7A08";
  dark    ?: boolean | false;
  logged  ?: boolean | false;
  leftSection ?: string | "reserve" | "perfil";
  rightSection ?: string | "favorites" | "reserves";
  onPacaClick ?: () => void;
  onProfileClick ?: () => void;
  onLoginClick ?: () => void;
  onRegisterClick ?: () => void;
  onLeftSectionClick ?: () => void;
  onRightSectionClick ?: () => void;

}

  interface BasicPage {
    /**
     Element to be displayed in the page
    */
    children?: React.ReactNode;
    /**
     * Header object
     * */
    headerArgs?: headerObject;


  }
  
  /**
   * Primary UI component for user interaction
   */
  export const BasicPage = ({
    children,
    headerArgs = {icon: 'down', picture: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg', name: 'Jonh D.', color: '#EF7A08'},
    ...props
  }: BasicPage) => {  
  
    return (
      <Box {...props} className = "basic-page--container">
        <Box weakShadow>
          <Header {...headerArgs}/>
        </Box>
        <Box className='basic-page--content-container-zone'>
          <Box className='basic-page--content-container' weakShadow>
            {children}
          </Box>
        </Box>
      </Box>
    );
  };
  