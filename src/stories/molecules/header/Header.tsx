import React, { MouseEventHandler } from 'react';
import './header.scss'
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { ProfilePicture } from '../profilePicture/ProfilePicture';

interface HeaderProps {
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
  icon: 'down' | 'up';
  /**
   * On Reserve click function
   */
  onReserveClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * On PA-CA logo click function
   */
  onPacaClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * On Favorite click function
   */
  onFavoriteClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * On profile click function
   */
  onProfileClick?: MouseEventHandler<HTMLDivElement>;
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
  onReserveClick,
  onPacaClick,
  onFavoriteClick,
  onProfileClick,
  backgroundColor,
  color,
  width,
  height,
  ...props
}: HeaderProps) => {
  return (
    <Box className='header--container' style={{ width, height, backgroundColor }}>
      <Box className='header--subcontainer'>
        {/* Reserve */}
        <Box className='header--zone' onClick={onReserveClick}>
          <Icon icon='bell' size='20px' />
          <Text type='h6' className='header--text'> Reservar </Text>
        </Box>

        {/* PA-CA */}
        <Box className='header--pa-ca header--zone' onClick={onPacaClick}>
          <Icon icon='pa-ca' size='41px'/>
        </Box>

        {/* Profile */}
        <Box className='header--zone'>
          <Box className='header--zone' onClick={onFavoriteClick}>
            <Icon icon='heart-fill' size='20px' />
            <Text type='h6' className='header--text'> Favoritos </Text>
            <Text type='h6' className='header--text'> &nbsp;&nbsp;| </Text>
          </Box>
          <Box className='header--zone header--profile' onClick={onProfileClick}>
            <Box className='header--profile-picture'>
              <ProfilePicture
                size='40px'
                border='0px'
                icon={icon}
                color={color}
                picture={picture}
              />
            </Box>
            <Box className='header--name'>
              <Text type='h6' className='header--text header--name'> {name} </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
