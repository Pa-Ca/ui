import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./promotionBanner.module.scss";

export interface PromotionBannerProps {
  /**
   * Promotion price
   */
  price: string;
  /**
   * Promotion description
   */
  description: string;
  /**
   * Promotion date
   */
  date: Date;
  /**
   * On select function
   */
  onSelect?: () => void;
  /**
   * Width
   */
  width?: string;
  /**
   * Height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PromotionBanner = ({
  price,
  description,
  date,
  onSelect,
  width,
  height,
  ...props
}: PromotionBannerProps) => {
  return (
    <Box className={styles["promotion-banner--container"]} style={{ width, height }}>
      <Box style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Text type="h4">Promociones</Text>
        <Text type="h6" weight="400">
          Términos y condiciones aplican
        </Text>
      </Box>
      <Box className={styles["promotion-banner--data-container"]}>
        <Box>
          <Text type="h4" weight="700">
            {price}
          </Text>
          <Text type="h6" className={styles["promotion-banner--text"]} weight="600">
            {description}
          </Text>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Text type="h6" className={styles["promotion-banner--text"]}>
            Hasta el {date.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}
          </Text>

          <Box>
            <Button primary size="small" onClick={onSelect}>
              <Text primaryButtonStyle>Seleccionar</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
