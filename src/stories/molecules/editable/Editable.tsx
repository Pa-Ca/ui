import React, { useEffect, useMemo, useState } from "react";
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
  ...props
}: EditableProps) => {
  const [prevEditable, setPrevEditable] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (editable && !prevEditable) {
      setAnimate(false);
      setPrevEditable(editable);
    } else if (!editable) {
      setPrevEditable(editable);
    } else {
      setAnimate(true);
    }
  }, [editable, edit]);

  const width = useMemo(() => (useIcons ? "65px" : "220px"), [useIcons]);

  return (
    <Box
      className={styles["editable--container"]}
      style={{ display: editable ? "flex" : "none" }}
    >
      <Box
        className={styles["editable--editable-icon"]}
        onClick={onPencilClick}
        style={{
          display: editable ? undefined : "none",
        }}
      >
        <Icon
          icon="pencil"
          size="25px"
          className={
            animate && edit
              ? styles["editable--edit-animation"]
              : animate && !edit
              ? styles["editable--edit-animation-reverse"]
              : ""
          }
        />
      </Box>
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
                <Icon icon="check" size="30px" />
              </Box>
            </>
          ) : (
            <>
              <Button onClick={onCancelClick}>
                <Text> Cancelar </Text>
              </Button>
              <Button primary onClick={onSaveClick}>
                <Text> Guardar </Text>
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
