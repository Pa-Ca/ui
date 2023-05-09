import React, { useMemo, MouseEventHandler } from "react";
import "./profileDropdown.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import useResizeObserver from "../../hooks/useResizeObserver";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";

interface ProfileDropdownProps {
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
   * Main color
   */
  color?: string;
  /**
   * Possible options
   */
  dropdownOptions?: UserDropdownElement[];
  /**
   * Controls if dropdown shows
   */
  view: boolean;
  /**
   * On click in profile
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

/**
 * Primary UI component for user interaction
 */
export const ProfileDropdown = ({
  size,
  border,
  color,
  picture,
  userName,
  dropdownOptions = [],
  view = false,
  ...props
}: ProfileDropdownProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box
      strongShadow
      className={
        "dropdown-input-select--menu dropdown-input-select--menu-" +
        (view ? "in" : "out")
      }
      style={{
        width: "300px",
        maxHeight: view ? "300px" : "0px",
        opacity: view ? "1" : "0",
      }}
      innerRef={observer.ref}
    >
      <ul>
        <div>
          <Box
            backgroundImage={picture == "" ? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" : picture}
            borderRadius="100%"
            width={"45px"}
            height={"45px"}
          />
          <Text weight="500">{userName}</Text>
        </div>

        <hr />

        {dropdownOptions.map((option, index) => (
          <li
            onClick={() => option.func()}
            key={`profile-dropdown--item-${index}-${option.name}`}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon icon={option.icon} size="24px" />
              <Text type="h7" weight="400">
                {option.name}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
};
