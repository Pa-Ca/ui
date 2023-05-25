import React, { MouseEventHandler } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./profileDropdown.module.scss";
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
      className={classnames(
        styles["profile-dropdown--menu"],
        styles["profile-dropdown--menu-" + (view ? "in" : "out")]
      )}
      style={{
        width: "300px",
        maxHeight: view
          ? `${73 + Math.min(9.5, dropdownOptions.length) * 52}px`
          : "0px",
        opacity: view ? "1" : "0",
      }}
      innerRef={observer.ref}
    >
      <ul>
        <div>
          <Box
            backgroundImage={
              picture == ""
                ? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                : picture
            }
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
