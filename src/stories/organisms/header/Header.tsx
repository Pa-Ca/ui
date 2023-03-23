import React from 'react';
import './header.scss'
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import { ProfilePicture } from '../../molecules/profilePicture/ProfilePicture';

export interface HeaderProps {
  /**
   * Profile picture
   */
  picture?: string;
  /**
   * User name
   */
  name?: string;
  /**
   * Profile icon
   */
  icon?: 'down' | 'up';
  /**
   * Dark mode
   */
  dark?: boolean;
  /**
   * Left section of header
   */
  leftSection?: 'reserve' | 'perfil';
  /**
   * Left section of header
   */
  rightSection?: 'favorites' | 'reserves';
  /**
   * Is the user logged?
   */
  logged: boolean;
  /**
   * On Left Section click function
   */
  onLeftSectionClick?: () => void;
  /**
   * On PA-CA logo click function
   */
  onPacaClick: () => void;
  /**
   * On Right Section click function
   */
  onRightSectionClick?: () => void;
  /**
   * On profile click function
   */
  onProfileClick?: () => void;
  /**
   * On login click function
   */
  onLoginClick?: () => void;
  /**
   * On register click function
   */
  onRegisterClick?: () => void;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Main component color
   */
  color?: string;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  picture,
  name,
  icon = 'down',
  dark = false,
  leftSection,
  rightSection,
  logged,
  onLeftSectionClick,
  onPacaClick,
  onRightSectionClick,
  onProfileClick,
  onLoginClick,
  onRegisterClick,
  backgroundColor,
  color,
  width,
  height,
  ...props
}: HeaderProps) => {
  const logoColor = dark ? 'white' : 'black';
  const leftSectionText = leftSection === 'reserve' ? 'Reservar' : 'Perfil';
  const rightSectionText = rightSection === 'favorites' ? 'Favoritos' : 'Reservas';
  const rightSectionIcon = rightSection === 'favorites' ? 'heart-fill' : 'table';

  const rightSectionComponent = () => {
    if (logged) {
      return (
        <>
          <Box className='header--zone' onClick={onRightSectionClick}>
            <Icon icon={rightSectionIcon} size='20px' color={logoColor} />
            <Text type='h6' weight='600' className='header--text' color={logoColor}> {rightSectionText} </Text>
            <Text type='h6' weight='600' className='header--text' color={logoColor}> &nbsp;&nbsp;| </Text>
          </Box>
          <Box className='header--zone header--profile' onClick={onProfileClick}>
            <Box className='header--profile-picture'>
              <ProfilePicture
                size='45px'
                border='0px'
                icon={icon}
                color={color}
                picture={picture}
              />
            </Box>
            <Box className='header--name'>
              <Text type='h6' weight='600' className='header--text header--name' color={logoColor}> {name} </Text>
            </Box>
          </Box>
        </>
      )
    }
    else {
      return (
        <>
          <Box className='header--zone' onClick={onLoginClick}>
            <Text type='h6' weight='600' className='header--text' color={logoColor}> Login </Text>
          </Box>
          <Box className='header--zone header--profile'>
            <Button primary  onClick={onRegisterClick} backgroundColor={dark ? 'white' : color}>
              <Text type='h6' style={{ fontWeight: '600' }} color={dark ? 'black' : 'white'}>
                Regístrate
              </Text>
            </Button>
          </Box>
        </>
      )
    }
  }

  return (
    <Box className='header--container' style={{ width, height, backgroundColor }}>
      <Box className='header--subcontainer'>
        {/* Left section */}
        <Box className='header--zone' onClick={onLeftSectionClick}>
          <Icon icon='bell' size='20px' color={logoColor} />
          <Text type='h6' weight='600' className='header--text' color={logoColor}> {leftSectionText} </Text>
        </Box>

        {/* PA-CA */}
        <Box className='header--pa-ca header--zone' onClick={onPacaClick}>
          <Icon icon='pa-ca' size='41px' color={logoColor} />
        </Box>

        {/* Right section */}
        <Box className='header--zone'>
          {rightSectionComponent()}
        </Box>
      </Box>
    </Box>
  );
};
