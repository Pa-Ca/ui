import React, { useMemo , useEffect, useState} from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./editable.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import classnames from "classnames";

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
  const width = useMemo(() => (useIcons ? "65px" : "220px"), [useIcons]);

  // type StyleProps = {
  //   [key: string]: string | number | undefined;
  // };

  // function setStyle(style: StyleProps): StyleProps {
  //   return {
  //     ...style,
  //     "--editable-initial-color": initialColor,
  //     "--editable-end-color": color,
  //   };
  // }

  return (
    <Box
      className={styles["editable--container"]}
      style={{ display: editable ? "flex" : "none" }}
    >
      {editable && (
        <Box
          className={styles["editable--editable-icon"]}
          onClick={onPencilClick}       
        >
          <Icon
            icon="pencil"
            size="25px"
            className={edit ? styles['editable--edit-animation'] : styles['editable--edit-animation-reverse']}
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
