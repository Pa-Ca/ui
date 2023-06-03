import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./editable.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";

interface EditableProps {
  /**
   * Indicates if the editing pencil will be shown
   */
  editable: boolean;
  /**
   * Indicates if the component is in edit mode
   */
  edit: boolean;
  /**
   * On pencil click function
   */
  onPencilClick: () => void;
  /**
   * On save button click function
   */
  onSaveClick: () => void;
  /**
   * On cancel button click function
   */
  onCancelClick: () => void;
  /**
   * Use icons instead of buttons
   */
  useIcons?: boolean;
  /**
   * Pencil initial color
   */
  initialColor?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Editable = ({
  editable,
  edit,
  onPencilClick,
  onSaveClick,
  onCancelClick,
  useIcons = false,
  initialColor,
  color,
  ...props
}: EditableProps) => {
  const width = useMemo(() => (useIcons ? "65px" : "220px"), [useIcons]);

  return (
    <Box
      className={styles["editable--container"]}
      style={{ display: editable ? "flex" : "none" }}
    >
      {editable && (
        <Box
          className={styles["editable--editable-icon"]}
          onClick={onPencilClick}
          style={{
            "--editable-initial-color": initialColor,
            "--editable-end-color": color,
          }}
        >
          <Icon
            icon="pencil"
            size="25px"
            style={{
              animation: edit
                ? styles["editable--edit-animation"] + " 500ms linear forwards"
                : styles["editable--edit-animation-reverse"] + " 500ms linear forwards",
            }}
          />
        </Box>
      )}
      <Box
        className={styles["editable--edit-button-container"]}
        style={{
          width: edit ? width : "0",
        }}
      >
        <Box
          className={styles["editable--edit-buttons"]}
          style={{
            width: edit ? width : "0",
          }}
        >
          {useIcons ? (
            <>
              <Box
                onClick={onCancelClick}
                className={styles["editable--action-icon"]}
              >
                <Icon icon="cancel" size="30px" />
              </Box>
              <Box
                onClick={onSaveClick}
                className={styles["editable--action-icon"]}
              >
                <Icon icon="check" color={color} size="30px" />
              </Box>
            </>
          ) : (
            <>
              <Button borderColor={color} onClick={onCancelClick}>
                <Text> Cancelar </Text>
              </Button>
              <Button backgroundColor={color} primary onClick={onSaveClick}>
                <Text> Guardar </Text>
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
