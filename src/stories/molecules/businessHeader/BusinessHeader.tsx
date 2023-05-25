import React from "react";
import "./businessHeader.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import { ProfilePicture } from "../profilePicture/ProfilePicture";

interface BusinessHeaderProps {
  /**
   * Business main image
   */
  mainImage: string;
  /**
   * Business profile picture
   */
  profilePicture: string;
  /**
   * Business name
   */
  name: string;
  /**
   * Business email
   */
  email: string;
  /**
   * On create new branch button click
   */
  onCreateBranch: () => void;
  /**
   * Function that is executed when clicking on the profile picture
   */
  onPictureClick: () => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
  /**
   * Function that is executed when clicking on the pencil icon
   * @param event
   */
  onPicturePencilClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const BusinessHeader = ({
  mainImage,
  profilePicture,
  name,
  email,
  onCreateBranch,
  onPictureClick,
  onPicturePencilClick,
  color,
  secondaryColor,
  ...props
}: BusinessHeaderProps) => {
  return (
    <Box className="business-header--container">
      <Box className="business-header--profile-picture">
        <ProfilePicture
          size="160px"
          picture={profilePicture}
          color={secondaryColor}
          border="5px"
          icon="pencil"
          onClick={onPictureClick}
          onPencilClick={onPicturePencilClick}
        />
        <Box height="20px" />
        <Text color="#112211" type="h4" weight="600">
          {name}
        </Text>
        <Box height="10px" />
        <Text color="#112211" weight="400">
          {email}
        </Text>
      </Box>

      <Box className="business-header--button-container">
        <Button primary backgroundColor={color} size="large" onClick={onCreateBranch}>
          <Box className="business-header--button">
            <Text color="#112211" type="h6" weight="500">
              Crear Local
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
