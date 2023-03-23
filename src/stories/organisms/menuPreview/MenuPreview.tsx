import React, { useMemo } from "react";
import "./menuPreview.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import useResizeObserver from "../../hooks/useResizeObserver";
import { Plate, PlateProps } from "../../molecules/plate/Plate";

interface MenuPreviewProps {
  /**
   * Branch main plates
   */
  plates?: PlateProps[];
  /**
   * On menu button click
   */
  onButtonClick?: () => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const MenuPreview = ({
  plates,
  onButtonClick,
  width,
  height,
  color,
  ...props
}: MenuPreviewProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const nPlates = useMemo(() => {
    return Math.max(1, Math.floor(observer.width / 312));
  }, [observer.width]);

  return (
    <Box
      className="menu-preview--container"
      style={{ width, height }}
      innerRef={observer.ref}
    >
      <Box className="menu-preview--header">
        <Text type="h5" color="#112211" weight="700">
          Menú
        </Text>

        <Button
          primary
          size="extra-large"
          backgroundColor={color}
          onClick={onButtonClick}
        >
          <Text type="h6" weight="600">
            Ver Menú
          </Text>
        </Button>
      </Box>

      <Box className="menu-preview--content">
        {plates?.slice(0, nPlates).map((plate, index) => (
          <Box
            className="menu-preview--plate"
            style={{ marginLeft: index === 0 ? "0px" : "8px" }}
            key={`menu-preview--plate-${plate.title}`}
          >
            <Plate {...plate} color={color} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
