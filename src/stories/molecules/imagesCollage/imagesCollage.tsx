import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./imagesCollage.module.scss";
import { Button } from "../../atoms/button/Button";

interface ImagesCollageProps {
  width?: string;
  images?: string[];
  buttonTitle?: string;
  buttonColor?: string;
  buttonSize?:
    | "extra-small"
    | "small"
    | "box"
    | "medium"
    | "large"
    | "extra-large";
  onButtonClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ImagesCollage = ({
  width,
  images,
  buttonTitle,
  buttonColor,
  buttonSize,
  onButtonClick,
  ...props
}: ImagesCollageProps) => {
  const galleryMode = ["single", "double", "triple", "quadruple", "quintuple"];

  const listImages =
    images && images.length > 0
      ? images.map((image, index) => {
          return (
            <Box
              key={`image-collage--image-index-${index}`}
              backgroundImage={image}
              className={
                styles[galleryMode[Math.min(Math.max(images.length - 1, 0), 4)]]
              }
            />
          );
        })
      : [<Box className={styles["single empty"]} />];

  return (
    <div className={styles["images-collage--container"]}>
      <Button
        size={buttonSize}
        primary={true}
        backgroundColor={buttonColor}
        onClick={onButtonClick}
      >
        <Text type="h6" weight="700">
          {buttonTitle}
        </Text>
      </Button>
      <Box className={styles["images-collage--content"]}>{listImages}</Box>
    </div>
  );
};
