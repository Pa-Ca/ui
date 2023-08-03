import React, { useMemo, MouseEventHandler } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./profilePicture.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
import inputSelectStyles from "../inputSelect/inputSelect.module.scss";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";

interface ProfilePictureProps {
  /**
   * Profile picture
   */
  picture?: string;
  /**
   * User name
   */
  userName?: string;
  /**
   * Picture size
   */
  size?: string;
  /**
   * Show border
   */
  border?: boolean;
  /**
   * Icon type
   */
  icon?: "pencil" | "down" | "up";
  /**
   * Possible options
   */
  dropdownOptions?: UserDropdownElement[];
  /**
   * Boolean controls
   */
  view?: Boolean;
  /**
   * On click in profile
   */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * On click in pencil
   */
  onPencilClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * Primary UI component for user interaction
 */
export const ProfilePicture = ({
  size,
  icon,
  picture,
  border = false,
  userName,
  dropdownOptions = [],
  onClick,
  onPencilClick,
  ...props
}: ProfilePictureProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const iconProportion = useMemo(() => {
    switch (icon) {
      case "pencil":
        return 0.7;
      case "down":
        return 1;
    }
  }, [icon]);

  const borderSize = useMemo(() => {
    return `${observer.width * 0.2}px`;
  }, [observer.width]);

  return (
    <div
      style={{
        position: "relative",
        minWidth: size,
        minHeight: size,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        backgroundImage={
          picture == ""
            ? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
            : picture
        }
        borderRadius="100%"
        width={size}
        height={size}
        //style={{ border: `${border} solid ${color}` }}
        className={border ? styles["profile-picture--container"] : ""}
        style={border ? { borderWidth: borderSize } : {}}
        onClick={onClick}
      >
        <Box
          innerRef={observer.ref}
          onClick={onPencilClick}
          className={styles["profile-picture--icon-container"]}
        >
          <Icon icon={icon} size={`${observer.width * iconProportion!}px`} />
        </Box>
      </Box>
    </div>
  );
};
