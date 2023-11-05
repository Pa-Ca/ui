import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./productCard.module.scss";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
import { StarRating } from "../../atoms/starRating/StarRating";

export interface ProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Indicates if the user liked the product
   */
  like: boolean;
  /**
   * Number of reviews
   */
  reviews: number;
  /**
   * On like click
   */
  onLike: () => void;
  /**
   * On add to cart click
   */
  onAddToCart: (quantity: string) => Promise<boolean>;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const ProductCard = ({
  name,
  cost,
  like,
  reviews,
  onLike,
  width,
  height,
  productImage,
  ...props
}: ProductCardProps) => {
  const quantity = useInputForm("1");
  const [quantityMode, setQuantityMode] = useState(false);

  useEffect(() => {
    quantity.setValue("1");
  }, [quantityMode]);

  return (
    <Box className={styles["product-card--container"]} style={{ width, height }}>
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />
      </Box>

      {/* Branch data Box */}
      <Box className={styles["product-card--data-container"]} style={{ flex: 0.8 }}>
        <Box className={styles["product-card--data-sub-container"]}>
          <Box className={styles["product-card--data"]}>
            <Text weight="600" type="h4">
              {name}
            </Text>

            <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <StarRating
                rating={4}
                size={20}
                readonly
                className={styles["product-card--rating"]}
              />
              <Text type="h7">{reviews} reviews</Text>
            </Box>
          </Box>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>
            <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
              {cost}$
            </Text>
          </Box>
        </Box>

        <hr className={styles["product-card--hr"]} />

        <Box className={styles["product-card--data-sub-container"]}>
          <Box>
            <Button
              size="box"
              primary={like}
              className={like ? styles["product-card--button"] : ""}
              onClick={onLike}
            >
              <Icon size="20px" icon={like ? "heart-fill" : "heart"} />
            </Button>
          </Box>

          <Box style={{ flex: 1, marginLeft: "16px" }}>
            <Button
              primary
              fullWidth
              size="box"
              onClick={() => setQuantityMode(true)}
              className={styles["product-card--button"]}
            >
              <Box className={styles["product-card--button-inner-container"]}>
                <Text weight="700" primaryButtonStyle type="h5">
                  Agregar al Carrito
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export interface SimpleProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Cost with discount
   */
  discountCost?: number;
  /**
   * On delete click
   */
  onDelete: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const SimpleProductCard = ({
  name,
  cost,
  discountCost,
  onDelete,
  width,
  height,
  productImage,
  ...props
}: SimpleProductCardProps) => {
  const quantity = useInputForm("1");
  const [quantityMode, setQuantityMode] = useState(false);

  useEffect(() => {
    quantity.setValue("1");
  }, [quantityMode]);

  return (
    <Box
      className={styles["product-card--container"]}
      style={{ width, height, minHeight: "225px", minWidth: "225px" }}
    >
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex", position: "relative" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />

        <Box
          onClick={onDelete}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="delete" size="30px" />
        </Box>
      </Box>

      {/* Branch data Box */}
      <Box className={styles["product-card--data-container"]}>
        <Box
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text weight="600" type="h4">
            {name}
          </Text>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>

            {discountCost && (
              <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
                  {discountCost}$
                </Text>

                <Text weight="400" type="h6">
                  <del>{cost}$ </del>
                </Text>
              </Box>
            )}

            {!discountCost && (
              <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
                {cost}$
              </Text>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
