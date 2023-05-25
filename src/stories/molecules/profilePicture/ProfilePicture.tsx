import React, { useMemo, MouseEventHandler } from "react";
import "./profilePicture.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import useResizeObserver from "../../hooks/useResizeObserver";
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
   * Border size
   */
  border?: string;
  /**
   * Icon type
   */
  icon?: "pencil" | "down" | "up";
  /**
   * Main color
   */
  color?: string;
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
  border,
  icon,
  color,
  picture,
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

  return (
    <div style={{ position: "relative", width: size, display: "flex", alignItems: "center" }}>
      <Box
        backgroundImage={picture == "" ? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" : picture}
        borderRadius="100%"
        width={size}
        height={size}
        style={{ border: `${border} solid ${color}` }}
        className="profile-picture--container"
        onClick={onClick}
      >
        <Box
          className="profile-picture--icon"
          style={{ backgroundColor: color }}
          innerRef={observer.ref}
        >
          <div className="input-select--button">
            <div className="dropdown-input-select--icon" onClick={onPencilClick}>
              <Icon
                icon={icon}
                size={`${observer.width * iconProportion!}px`}
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};
