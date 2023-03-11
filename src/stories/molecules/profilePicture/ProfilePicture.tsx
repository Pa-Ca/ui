import React, { useEffect, useRef, useState, useMemo, MouseEventHandler } from 'react';
import './profilePicture.scss'
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';

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
  // useRef allows us to "store" the div in a constant, 
  // and to access it via observedDiv.current
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconWidth, setIconWidth] = useState(0);

  const handleContainerResized = () => {
    if(iconRef.current!.offsetWidth !== iconWidth) {
      setIconWidth(iconRef.current!.offsetWidth - 2); 
    }
  }
  
  // we also instantiate the resizeObserver and we pass
  // the event handler to the constructor
  const resizeObserver = new ResizeObserver(handleContainerResized);

  useEffect(() => {
    // the code in useEffect will be executed when the component
    // has mounted, so we are certain iconRef.current will contain
    // the div we want to observe
    resizeObserver.observe(iconRef.current!);


    // if useEffect returns a function, it is called right before the
    // component unmounts, so it is the right place to stop observing
    // the div
    return function cleanup() {
      resizeObserver.disconnect();
    }
  })

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
      <div
        className='profile-picture--icon'
        style={{ backgroundColor: color }}
        ref={iconRef}
      >
        <Icon size={`${iconWidth * iconProportion!}px`} icon={icon} />
      </div>
    </Box>
  );
};
