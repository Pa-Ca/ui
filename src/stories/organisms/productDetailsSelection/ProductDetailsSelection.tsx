import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./productDetailsSelection.module.scss";
import { PromotionApplied } from "../../atoms/promotionApplied/PromotionApplied";
import { MultipleSelectableList } from "../../molecules/multipleSelectableList/MultipleSelectableList";
import { SelectableList } from "../../molecules/selectableList/SelectableList";
import { Required } from "../../atoms/required/Required";
import { Counter } from "../../atoms/counter/Counter";
import { Button } from "../../atoms/button/Button";

interface ProductDetailsSelectionList {
  /**
   * Title
   */
  title: string;
  /**
   * Indicate if is required
   */
  required?: boolean;
  /**
   * Indicate if is multiple
   */
  multiple?: boolean;
  /**
   * Count
   */
  count?: number;
  /**
   * Option(s) selected
   */
  selected: string | Set<string>;
  /**
   * Options to be displayed in the list
   */
  options: string[];
  /**
   * Callback function to be called when the counter is changed
   */
  onCountChange?: (count: number) => void;
  /**
   * Callback function to be called when an item is selected
   */
  onSelect?: (item: string) => void;
}

interface ProductDetailsSelectionProps {
  /**
   * Product name
   */
  productName: string;
  /**
   * Product price
   */
  productPrice: number;
  /**
   * Product description
   */
  productDescription: string;
  /**
   * Discounted price
   */
  discountedPrice?: number;
  /**
   * Selections
   */
  selections: ProductDetailsSelectionList[];
  /**
   * On submit callback
   */
  onSubmit?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ProductDetailsSelection = ({
  productName,
  productPrice,
  productDescription,
  discountedPrice,
  selections,
  onSubmit = () => {},
  ...props
}: ProductDetailsSelectionProps) => {
  return (
    <Box className={styles["product-details-selection--container"]}>
      {/* Header */}
      <Box className={styles["product-details-selection--header-container"]}>
        <Text weight="700" type="h5">
          {productName}
        </Text>

        <Text>US$ {productPrice.toFixed(2)}</Text>

        <Text type="h6" className={styles["product-details-selection--description"]}>
          {productDescription}
        </Text>

        {!!discountedPrice && (
          <Box className={styles["product-details-selection--promotion-container"]}>
            <PromotionApplied width="100%" />
          </Box>
        )}
      </Box>

      {/* Body */}
      <Box className={styles["product-details-selection--body-container"]}>
        <Box>
          <hr />
        </Box>

        {selections.map((selection, index) => (
          <Box key={index}>
            <Box className={styles["product-details-selection--selection-header"]}>
              <Text>{selection.title}</Text>

              {selection.required && <Required />}
            </Box>

            {selection.multiple ? (
              <MultipleSelectableList
                options={selection.options}
                selected={selection.selected as Set<string>}
                onSelect={selection.onSelect}
              />
            ) : (
              <SelectableList
                options={selection.options}
                selected={selection.selected as string}
                onSelect={selection.onSelect}
              />
            )}

            {selection.count !== undefined && (
              <Box className={styles["product-details-selection--counter-container"]}>
                <Counter
                  width="50px"
                  value={selection.count}
                  setValue={(val) => selection.onCountChange?.(val)}
                />
              </Box>
            )}

            <Box style={{ marginTop: "20px" }}>
              <hr />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Footer */}
      <Box>
        <Button primary fullWidth onClick={onSubmit}>
          <Box className={styles["product-details-selection--submit-button"]}>
            <Text primaryButtonStyle weight="600">
              Añadir | US$ {(!!discountedPrice ? discountedPrice : productPrice).toFixed(2)}{" "}
            </Text>
            {!!discountedPrice && (
              <Text primaryButtonStyle weight="600" style={{ textDecoration: "line-through" }}>
                US$ {productPrice.toFixed(2)}
              </Text>
            )}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
