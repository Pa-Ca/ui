import React from "react";
import styles from "./addBox.module.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import useResizeObserver from "../../hooks/useResizeObserver";

export interface AddBoxProps {
  /**
   * Box size
   */
  size: string;
  /**
   * On click event
   */
  onClick?: () => void;
}

export const AddBox = ({ size, onClick }: AddBoxProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box
      className={styles["add-box--container"]}
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <Box className={styles["add-box--circle"]} innerRef={observer.ref}>
        <Icon icon="plus" size={`${observer.width}px`} />
      </Box>
    </Box>
  );
};
