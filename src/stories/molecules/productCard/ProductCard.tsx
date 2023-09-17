import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./productCard.module.scss";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";

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

/**
 * Primary UI component for user interaction
 */
export const ProductCard = ({
  name,
  cost,
  like,
  onLike,
  onAddToCart,
  width,
  height,
  productImage,
  ...props
}: ProductCardProps) => {
  const quantity = useInputForm("1");
  const [quantityMode, setQuantityMode] = useState(false);

  const onAdd = () => {
    if (quantity.value === "") {
      quantity.setValue("1");
    } else {
      quantity.setValue((parseInt(quantity.value) + 1).toString());
    }
  };

  const onSubstract = () => {
    if (quantity.value === "" || parseInt(quantity.value) < 2) {
      quantity.setValue("1");
    } else {
      quantity.setValue((parseInt(quantity.value) - 1).toString());
    }
  };

  useEffect(() => {
    quantity.setValue("1");
  }, [quantityMode]);

  return (
    <Box className={styles["product-card--container"]} weakShadow style={{ width, height }}>
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />
      </Box>

      {/* Branch data Box */}
      <Box className={styles["product-card--data-container"]} style={{ flex: 0.8 }}>
        <Box className={styles["product-card--data-sub-container"]}>
          <Box style={{ flex: 3, height: "100%", opacity: 0.75 }}>
            <Text weight="600" type="h4">
              {name}
            </Text>
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

        {quantityMode && (
          <Box className={styles["product-card--quantity-container"]}>
            <Button
              primary
              size="box"
              className={styles["product-card--button"]}
              onClick={onSubstract}
            >
              <Icon size="20px" icon="minus" />
            </Button>

            <InputText label="" showError={false} inputHook={quantity} type="naturalNumber" />

            <Button primary size="box" className={styles["product-card--button"]} onClick={onAdd}>
              <Icon size="20px" icon="plus" />
            </Button>
          </Box>
        )}
        <Box className={styles["product-card--data-sub-container"]}>
          {quantityMode ? (
            <>
              <Box>
                <Button onClick={() => setQuantityMode(false)}>
                  <Icon
                    size="25px"
                    icon="delete-outline"
                    className={styles["product-card--delete-icon"]}
                  />
                </Button>
              </Box>

              <Box style={{ flex: 1, marginLeft: "16px" }}>
                <Button
                  primary
                  fullWidth
                  size="box"
                  className={styles["product-card--button"]}
                  onClick={async () => (await onAddToCart(quantity.value)) && setQuantityMode(false)}
                  state={quantity.value === "" || parseInt(quantity.value) < 1 ? "inactive" : "normal"}
                >
                  <Box className={styles["product-card--button-inner-container"]}>
                    <Text weight="700" primaryButtonStyle type="h5">
                      Confirmar
                    </Text>
                  </Box>
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box>
                <Button
                  size="box"
                  primary={like}
                  className={like ? styles["product-card--button"] : ""}
                  onClick={onLike}
                >
                  <Icon
                    size="20px"
                    icon={like ? "heart-fill" : "heart"}
                    className={like ? "" : styles["product-card--delete-icon"]}
                  />
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
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
