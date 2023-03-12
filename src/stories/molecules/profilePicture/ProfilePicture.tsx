import React, { useMemo, MouseEventHandler } from 'react';
import './profilePicture.scss'
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import useResizeObserver from '../../hooks/useResizeObserver';

interface ProfilePictureProps {
  /**
   * Profile picture
   */
  picture?: string;
  /**
   * Picture size
   */
  size?: string;
  /**
   * Border size
   */
  border?: string;
  /**
   * Icon type
   */
  icon?: 'pencil' | 'down' | 'up';
  /**
   * Main color
   */
  color?: string;
  /**
   * On click in profile
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * Primary UI component for user interaction
 */
export const ProfilePicture = ({
  picture,
  size,
  border,
  icon,
  color,
  onClick,
  ...props
}: ProfilePictureProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const iconProportion = useMemo(() => {
    switch (icon) {
      case 'pencil': return 0.7;
      case 'down': return 1;
    }
  }, [icon])

  return (
    <Box
      backgroundImage={picture}
      borderRadius='100%'
      width={size}
      height={size}
      style={{ border: `${border} solid ${color}` }}
      className='profile-picture--container'
      onClick={onClick}
    >
      <Box
        className='profile-picture--icon'
        style={{ backgroundColor: color }}
        innerRef={observer.ref}
      >
        <Icon size={`${observer.width * iconProportion!}px`} icon={icon} />
      </Box>
    </Box>
  );
};
