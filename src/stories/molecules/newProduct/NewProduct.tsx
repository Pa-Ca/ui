import React from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./newProduct.module.scss";
import { InputText } from "../inputText/InputText";
import { Button } from "../../atoms/button/Button";
import { InputFormHook } from "../../hooks/useInputForm";
import productStyles from "../product/product.module.scss";

export interface NewProductProps {
  /**
   * NewProduct name
   */
  name: InputFormHook<string>;
  /**
   * NewProduct category
   */
  category: string;
  /**
   * NewProduct sub-category
   */
  subCategory: string;
  /**
   * NewProduct price
   */
  price: InputFormHook<string>;
  /**
   * Indicates if the NewProduct can be created
   */
  canCreate: boolean;
  /**
   * On create product
   */
  onCreate: () => void;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const NewProduct = ({
  name,
  category,
  subCategory,
  price,
  canCreate,
  onCreate,
  width,
  height,
  ...props
}: NewProductProps) => {
  return (
    <Box
      weakShadow
      borderRadius="12px"
      style={{ width, height }}
      className={classnames(
        styles["new-product--container"],
        productStyles["product--container"]
      )}
    >
      <Box
        className={classnames(
          productStyles["product--header"],
          styles["new-product--header"]
        )}
      >
        <Box className={styles["new-product--name"]}>
          <InputText required type="text" label="Nombre" inputHook={name} />
        </Box>
        <Box className={styles["new-product--category-container"]}>
          <Text type="h5"> {`${category} | ${subCategory}`} </Text>
        </Box>
        <Box
          className={classnames(
            productStyles["product--price-and-icon-container"],
            styles["new-product--left-section"]
          )}
        >
          <InputText
            required
            width="150px"
            inputHook={price}
            label="Precio ($)"
            type="noNegativeNumber"
          />
          <Button
            primary
            size="large"
            onClick={onCreate}
            state={canCreate ? "normal" : "inactive"}
          >
            <Box className={productStyles["product--modal-button"]}>
              <Text weight="600">Agregar</Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
