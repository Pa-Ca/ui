import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./businessHeader.module.scss";
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
  ...props
}: BusinessHeaderProps) => {
  return (
    <Box className={styles["business-header--container"]}>
      <Box className={styles["business-header--profile-picture"]}>
        <ProfilePicture
          size="160px"
          picture={profilePicture}
          border
          icon="pencil"
          onClick={onPictureClick}
          onPencilClick={onPicturePencilClick}
        />
        <Box height="20px" />
        <Text highlightStyle type="h4" weight="600">
          {name}
        </Text>
        <Box height="10px" />
        <Text highlightStyle weight="400">
          {email}
        </Text>
      </Box>

      <Box className={styles["business-header--button-container"]}>
        <Button primary  size="large" onClick={onCreateBranch}>
          <Box className={styles["business-header--button"]}>
            <Text highlightStyle type="h6" weight="500">
              Crear Local
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
