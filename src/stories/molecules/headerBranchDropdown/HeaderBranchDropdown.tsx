import React, { useMemo, MouseEventHandler } from "react";
import "./headerBranchDropdown.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import useResizeObserver from "../../hooks/useResizeObserver";
import BranchDropdownElement from "../../utils/objects/BranchDropdownElement";

interface HeaderBranchDropdownProps {
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
  dropdownOptions?: BranchDropdownElement[];
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
export const HeaderBranchDropdown = ({
  border,
  color,
  dropdownOptions = [],
  view = false,
  ...props
}: HeaderBranchDropdownProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const substring = (str: string) => {

    if (str.length <= 40) return str;
    return str.substring(0, 39) + "...";
  };
  return (
    <Box
      strongShadow
      className={
        "header-branch-dropdown-input-select--menu header-branch-dropdown-input-select--menu-" +
        (view ? "in" : "out")
      }
      style={{
        width: "300px",
        maxHeight: view ? `${Math.min(9.5, dropdownOptions.length) * 42.5}px` : "0px",
        opacity: view ? "1" : "0",
      }}
      innerRef={observer.ref}
    >
      <ul>
        {dropdownOptions.map((option, index) => (
          <li
            onClick={() => option.func()}
            key={`profile-dropdown--item-${index}-${option.name}`}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              maxHeight: "25px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
              >
              <Text type="h7" weight="400">
                {substring(option.name)}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
};
