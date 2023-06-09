import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./imagesCarousel.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
import classnames from "classnames";

export interface ImagesCarouselProps {
  /**
   * Images to show
   */
  images: string[];
  /**
   * Time interval for automatic scrolling. It is in ms, 0 indicates that
   * there is no automatic scroll
   */
  interval?: number;
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
export const ImagesCarousel = ({
  images,
  interval = 3000,
  width,
  height,
  ...props
}: ImagesCarouselProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const [currentImage, setCurrentImage] = useState(0);
  const [carouselInterval, setCarouselInterval] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft =
        currentImage * (observer.width + 20) + 10;
    }
  }, [observer.width, currentImage]);

  useEffect(() => {
    if (!interval) return;

    const interval_ = setInterval(
      () => setCurrentImage((lastImage) => (lastImage + 1) % images.length),
      interval
    );
    setCarouselInterval(interval_);
    return () => clearInterval(interval_);
  }, [interval]);

  const handleClick = (event: React.MouseEvent) => {
    const div = event.target as HTMLDivElement;
    const clickX = event.clientX;
    const centerX = div.offsetWidth / 2;

    if (clickX < centerX) {
      if (currentImage == 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage((lastImage) => lastImage - 1);
      }
    } else {
      setCurrentImage((lastImage) => (lastImage + 1) % images.length);
    }

    if (carouselInterval) {
      clearInterval(carouselInterval);
      setCarouselInterval(
        setInterval(
          () => setCurrentImage((lastImage) => (lastImage + 1) % images.length),
          interval
        )
      );
    }
  };

  return (
    <Box
      className={styles["images-carousel--container"]}
      borderRadius="30px"
      style={{ width, height }}
    >
      <Box
        className={styles["images-carousel--images-container"]}
        innerRef={observer.ref}
        borderRadius="30px"
        onClick={handleClick}
      >
        {images.map((image, index) => (
          <Box
            style={{ minWidth: `${observer.width + 20}px` }}
            height={`${observer.height}px`}
            backgroundImage={image}
            className={styles["images-carousel--image"]}
            key={`images-carousel--image-${index}-${image}`}
          />
        ))}
      </Box>

      <Box className={styles["images-carousel--dots"]}>
        {images.map((image, index) => (
          <Box
            borderRadius="5px"
            width="10px"
            height="10px"
            className={classnames(styles["images-carousel--dot"],
                      currentImage !== index ? styles["images-carousel--not-current-dot"] : styles["images-carousel--current-dot"])
            }
            key={`images-carousel--dot-${index}-${image}`}
            style={{
              width: currentImage !== index ? "10px" : "32px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
