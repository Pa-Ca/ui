import React from "react";
import "./editable.scss";
import { Box } from "../../atoms/box/Box";
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
  color,
  ...props
}: EditableProps) => {
  return (
    <Box className="editable--container">
      {editable && (
        <Box
          className="editable--editable-icon"
          onClick={onPencilClick}
          style={{ "--editable-color": color }}
        >
          <Icon
            icon="pencil"
            size="25px"
            style={{
              animation: edit
                ? "editable--edit-animation 500ms linear forwards"
                : "editable--edit-animation-reverse 500ms linear forwards",
            }}
          />
        </Box>
      )}
      <Box className="editable--edit-button-container">
        <Box
          className="editable--edit-buttons"
          style={{
            width: edit ? "220px" : "0",
          }}
        >
          <Button borderColor={color} onClick={onCancelClick}>
            <Text> Cancelar </Text>
          </Button>
          <Button backgroundColor={color} primary onClick={onSaveClick}>
            <Text> Guardar </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
