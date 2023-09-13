import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./businessHeader.module.scss";
import { Button } from "../../atoms/button/Button";
import useWindowResize from "../../hooks/useWindowResize";
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
  onPicturePencilClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
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
  const windowSize = useWindowResize();

  return (
    <Box className={styles["business-header--container"]}>
      <Box className={styles["business-header--profile-picture"]}>
        <ProfilePicture
          size={windowSize.resolutionType === "desktop" ? "160px" : "70px"}
          picture={profilePicture}
          border
          icon="pencil"
          onClick={onPictureClick}
          onPencilClick={onPicturePencilClick}
        />

        <Box className={styles["business-header--data"]}>
          <Text
            ellipsis
            weight="600"
            highlightStyle
            type={windowSize.resolutionType === "desktop" ? "h4" : "p"}
          >
            {name}
          </Text>
          <Box height="5px" />
          <Text
            ellipsis
            weight="400"
            highlightStyle
            type={windowSize.resolutionType === "desktop" ? "p" : "h6"}
          >
            {email}
          </Text>
        </Box>
      </Box>

      <Box className={styles["business-header--button-container"]}>
        <Button
          primary
          size={windowSize.resolutionType === "desktop" ? "large" : "small"}
          onClick={onCreateBranch}
          fullWidth={windowSize.resolutionType !== "desktop"}
        >
          <Box className={styles["business-header--button"]}>
            <Text weight="700" primaryButtonStyle>
              Crear Local
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
