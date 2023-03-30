import React, { useState } from "react";
import "./branchLocation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import { Button } from "../../atoms/button/Button";

interface BranchLocationProps {
  /**
   * Location text
   */
  location: string;
  /**
   * Location image
   */
  image: string;
  /**
   * Indicates if the data is editable
   */
  editable?: boolean;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Images width
   */
  width?: string;
  /**
   * Images height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchLocation = ({
  location,
  image,
  editable,
  color,
  width,
  height,
  ...props
}: BranchLocationProps) => {
  const [edit, setEdit] = useState(false);

  return (
    <Box className="branch-location--container">
      <Box className="branch-location--header">
        <Box>
          <Text type="h5" color="#112211" weight="700">
            Location/Map
          </Text>

          <Box height="5px" />

          <Editable
            edit={edit}
            color={color}
            editable={!!editable}
            onPencilClick={() => setEdit(true)}
            onSaveClick={() => setEdit(false)}
            onCancelClick={() => setEdit(false)}
          />
        </Box>

        <Button primary backgroundColor={color}>
          <Text type="h6" weight="600">Ver en Google Maps</Text>
        </Button>
      </Box>

      <Box
        borderRadius="10px"
        className="branch-location--image"
        backgroundImage={image}
      />

      <Box className="branch-location--footer">
        <Icon icon="location" size="20px" />
        <Text type="h6"> &nbsp;{location} </Text>
      </Box>
    </Box>
  );
};
