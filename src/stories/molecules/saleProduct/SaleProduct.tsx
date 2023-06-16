import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./saleProduct.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import textStyles from "../../atoms/text/text.module.scss";
import { EditableInputText } from "../editableInputText/EditableInputText";

export interface SaleProductProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product price
   */
  price: number;
  /**
   * Product quantity
   */
  quantity: InputFormHook<string>;
  /**
   * On change quantity
   */
  onChangeQuantity: (value: string) => void;
  /**
   * On delete
   */
  onDelete: () => void;
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
export const SaleProduct = ({
  name,
  price,
  quantity,
  onChangeQuantity,
  onDelete,
  width,
  height,
  ...props
}: SaleProductProps) => {
  const total = useMemo(() => {
    if (quantity.value === "") return price;
    const total = price * parseInt(quantity.value);
    // Use only two decimals
    return Math.round(total * 100) / 100;
  }, [quantity.value, price]);

  return (
    <Box borderRadius="12px" className={styles["sale-product--container"]}>
      <Box className={styles["sale-product--title-container"]}>
        <Text weight="700" type="h4">
          {" "}
          {name}{" "}
        </Text>
      </Box>
      <Box className={styles["sale-product--pu-container"]}>
        <Text weight="400" type="h6">
          Precio unitario:
        </Text>
        <Text weight="700" type="h5">
          {" "}
          {price}${" "}
        </Text>
      </Box>
      <Box className={styles["sale-product--quantity-container"]}>
        <Text weight="400" type="h6">
          Cantidad:
        </Text>
        <EditableInputText
          useEditIcons
          width="180px"
          editable={true}
          showError={false}
          inputHook={quantity}
          type="positiveInteger"
          className={textStyles["text--h5"]}
          saveValueFunction={onChangeQuantity}
        />
      </Box>
      <Box className={styles["sale-product--left-container"]}>
        <Box>
          <Text weight="400" type="h6">
            Total:
          </Text>
          <Text weight="700" type="h5">
            {" "}
            {total}${" "}
          </Text>
        </Box>
        <Box
          onClick={onDelete}
          className={styles["sale-product--cancel-container"]}
        >
          <Icon
            size="40px"
            icon="cancel"
            className={styles["sale-product--cancel"]}
          />
        </Box>
      </Box>
    </Box>
  );
};
