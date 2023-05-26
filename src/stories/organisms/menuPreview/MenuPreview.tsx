import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./menuPreview.module.scss";
import { Button } from "../../atoms/button/Button";
import { Editable } from "../../molecules/editable/Editable";
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
   * Indicates if the data is editable
   */
  editable?: boolean;
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
  editable,
  width,
  height,
  color,
  ...props
}: MenuPreviewProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const [edit, setEdit] = useState(false);

  const nPlates = useMemo(() => {
    return Math.max(1, Math.floor(observer.width / 312));
  }, [observer.width]);

  return (
    <Box
      className={styles["menu-preview--container"]}
      style={{ width, height }}
      innerRef={observer.ref}
    >
      <Box className={styles["menu-preview--header"]}>
        <Box className={styles["menu-preview--title-container"]}>
          <Text type="h5" color="#112211" weight="700">
            Menú
          </Text>

          <Editable
            edit={edit}
            editable={!!editable}
            onPencilClick={() => setEdit(true)}
            onSaveClick={() => setEdit(false)}
            onCancelClick={() => setEdit(false)}
          />
        </Box>

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

      <Box className={styles["menu-preview--content"]}>
        {plates?.slice(0, nPlates).map((plate, index) => (
          <Box
            className={styles["menu-preview--plate"]}
            style={{ marginLeft: index === 0 ? "0px" : "8px" }}
            key={`menu-preview--plate-${index}-${plate.title}`}
          >
            <Plate {...plate} color={color} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
