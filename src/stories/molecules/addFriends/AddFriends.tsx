
import React , { useMemo, useState } from 'react';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import InvitedFriendObject  from '../../utils/objects/InvitedFriendObject';
import { Text } from '../../atoms/text/Text';

import './addFriends.scss';

export interface AddFriendsProps {
  /**
   * Component width
   * @default 100%
   * @type string
      */
  width?: string;
  /**
   * Component height
   * @default 100%
   * @type string
   * */
  height?: string;

  /**
   * List of invited friends (name and profile pic)
   * @default []
   * @type InvitedFriendObject[]
   * */
  invitedFriends?: InvitedFriendObject[];

  /**
   * On click function when the plus icon is clicked
   *  @default () => {}
   *  @type () => void
   * */
  onClick?: () => void;

  /**
   * Max number of friends to show
   * @default 3
   * @type number
   * 
   */
  maxFriends?: number;

}

const  friends = [
  {
    name: 'John Doe',
    profilePic: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg',
  },
  {
    name: 'Jane Doe',
    profilePic: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg',
  },
];


export const AddFriends = ({
  width,
  height = "100px",
  invitedFriends = friends,
  maxFriends = 5,
  onClick = () => {},
  ...props
}: AddFriendsProps) => {

  const shownFriends = useMemo(() => {
    const fin = maxFriends;
    return invitedFriends.slice(0, fin);
  }, [invitedFriends, maxFriends]);
  
  //Calculate the size of the icon based on the add-friends--container size

  const icon_size = useMemo(() => {
    const size = parseInt(height) - 10;
    return size.toString() + 'px';
  }, [height]);

  const [hoveredDiv, setHoveredDiv] = useState(-1);


  return (
    <Box className="add-friends--container" style={{ width, height }} {...props}>
      
      <Box className="add-friends--icon" onClick={onClick}>
        <Box className="add-friends--icon-sub-container" onClick={onClick} >
          <Icon icon="plus-circle" size = {icon_size} />
        </Box>
      </Box>
      <Box className="add-friends--friends-vertical">
        <Box className="add-friends--friends">
          {shownFriends.map((friend, index) => (
            
            <Box className="add-friends--image" 
              backgroundImage={friend.profilePic} 
              width={icon_size}
              height={icon_size}
              onMouseEnter={() => setHoveredDiv(index)} 
              onMouseLeave={() => setHoveredDiv(-1)}
             
            >
              {hoveredDiv === index && 
                <Box className='add-friends--hover-text' strongShadow>
                  <Text>{friend.name}</Text>
                  
                </Box>
              }
            </Box>
            
        ))}
        </Box>
      </Box>
    
    </Box>
  );
};




