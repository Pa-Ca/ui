import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./extraOption.module.scss";

interface ExtraOptionProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product description
   */
  description: string;
  /**
   * On click function
   */
  onClick: () => void;
}

export const ExtraOption = ({ name, description, onClick, ...props }: ExtraOptionProps) => {
  return (
    <Box className={styles["extra-option--container"]}>
      <Box>
        <Text>{name}</Text>

        <Text type="h6" weight="400" className={styles["extra-option--description"]}>
          {description}
        </Text>
      </Box>

      <Box className={styles["extra-option--icon-container"]} onClick={onClick}>
        <Icon icon="plus" size="20px" className={styles["extra-option--icon"]} />
      </Box>
    </Box>
  );
};
