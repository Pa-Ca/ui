import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./addFriends.module.scss";
import InvitedFriendObject from "../../utils/objects/InvitedFriendObject";

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

const friends = [
  {
    name: "Juan Perez",
    profilePic:
      "https://images.generated.photos/ISFmKHIfRZO75QFJEhpaVGjSZHk7py234IE-ts_--Us/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjA1MTg3LmpwZw.jpg",
  },
  {
    name: "Maria Gomez",
    profilePic:
      "https://images.generated.photos/firxKQOxuvVLe9RQ5nPcMvTh6SrtJMovsMXs0G2LCok/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzQwMDc0LmpwZw.jpg",
  },
];

export const AddFriends = ({
  width,
  height = "55px",
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

  const friends_size = useMemo(() => {
    const size = parseInt(height) - 10;
    return size.toString() + "px";
  }, [height]);

  const icon_size = useMemo(() => {
    const size = parseInt(height) * 0.45;
    return size.toString() + "px";
  }, [height]);

  const separtation = useMemo(() => {
    const size = parseInt(height) * 0.5;
    return size.toString() + "px";
  }, [height]);
  const [hoveredDiv, setHoveredDiv] = useState(-1);

  return (
    <Box
      className={styles["add-friends--container"]}
      style={{ width, height }}
      {...props}
    >
      <Box
        className={styles["add-friends--icon"]}
        style={{
          marginRight: parseInt(separtation) + "px",
        }}
      >
        <Box className={styles["add-friends--icon-sub-container"]} onClick={onClick}>
          <Icon icon="plus-circle" size={icon_size} />
        </Box>
      </Box>
      <Box className={styles["add-friends--friends-vertical"]}>
        <Box className={styles["add-friends--friends"]}>
          {shownFriends.map((friend, index) => (
            <Box
              className={styles["add-friends--image"]}
              backgroundImage={friend.profilePic}
              width={friends_size}
              height={friends_size}
              onMouseEnter={() => setHoveredDiv(index)}
              onMouseLeave={() => setHoveredDiv(-1)}
            >
              {hoveredDiv === index && (
                <Box className={styles["add-friends--hover-text"]} strongShadow>
                  <Text type="h8">{friend.name}</Text>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
