import React from "react";
import "./path.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";

export interface PathProps {
  /**
   * Path of pages to current page
   */
  path: { name: string; onClick: () => void }[];
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Path = ({ path, color, secondaryColor, ...props }: PathProps) => {
  return (
    <Box className="path--container">
      {path.map((page, index) => {
        const last = index === path.length - 1;

        const weight = last ? "500" : "600";
        const cursor = last ? "auto" : "pointer";
        const onClick = last ? () => {} : page.onClick;
        const textColor = last ? secondaryColor : color;

        return (
          <Box
            className="path--item"
            key={`path--item-${index}-${page.name}`}
            style={{ cursor }}
            onClick={onClick}
          >
            <Text type="h6" weight={weight} color={textColor}>
              {page.name}
            </Text>
            <Box width="7px" />
            {!last && <Icon icon="right" size="15px" color={secondaryColor} />}
          </Box>
        );
      })}
    </Box>
  );
};
