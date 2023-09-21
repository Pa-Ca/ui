import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./onlineSaleInvoice.module.scss";

export interface OnlineSaleInvoiceProps {
  /**
   * requestTime (Time when the sale was opended)
   */
  requestTime : string
  /**
   * Product list
   */
  products: {
    name: string;
    price: number;
    amount: number;
  }[];
  /**
   * Taxes list
   */
  taxes: {
    name: string;
    value: number;
    type: "%" | "$";
  }[];
  
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const OnlineSaleInvoice = ({
  requestTime,
  products,
  taxes,
  width,
  height,
  ...props
}: OnlineSaleInvoiceProps) => {


  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    // Get taxes
    const totalTaxes = taxes.reduce((acc, tax) => {
      if (tax.type === "%") {
        return acc + (subTotal * tax.value) / 100;
      } else {
        return acc + tax.value;
      }
    }, 0);

    return subTotal + totalTaxes;
  }, [subTotal, taxes]);

  return (
    <div>
      <Box className={styles["online-sale-invoice--details"]}>
        <Box className={styles["online-sale-invoice--details-products-container"]}>
          
          {/* Header */}
          <Box className={styles["online-sale-invoice--item"]}>
            <Box className={styles["online-sale-invoice--item-product"]}>
              <Text type="h5" weight="600">
                Producto
              </Text>
            </Box>
            <Box className={styles["online-sale-invoice--item-price"]}>
              <Text type="h5" weight="600">
                Precio Unitario
              </Text>
            </Box>
            <Box className={styles["online-sale-invoice--item-amount"]}>
              <Text type="h5" weight="600">
                Cantidad
              </Text>
            </Box>
           
          </Box>
          <hr className={styles["online-sale-invoice--hr"]} />

          {/* Products */}
          <Box className={styles["online-sale-invoice--details-products"]}>
            {products.map((product, index) => (
              <Box
                key={`online-sale-invoice--${requestTime}-product-${index}-${
                  product.name
                }`}
                className={styles["online-sale-invoice--item"]}
              >
                <Box className={styles["online-sale-invoice--item-product"]}>
                  <Text type="h5">{product.name}</Text>
                </Box>
                
                <Box className={styles["online-sale-invoice--item-price"]}>
                  <Text type="h5">{product.price.toFixed(2)}$</Text>
                </Box>

                <Box className={styles["online-sale-invoice--item-amount"]}>
                  <Text type="h5">{product.amount}</Text>
                </Box>
              </Box>
            ))}
          </Box>   
        </Box>

        <div className={styles["online-sale-invoice--vertical-line"]} />

        <Box className={styles["online-sale-invoice--summary"]}>
          
          <Box className={styles["online-sale-invoice--reservation-container"]}>
             <Box className={styles["online-sale-invoice--reservation-title"]}>
              <Text type="h5" weight="600">
                Resumen
              </Text>
              </Box>
            <hr className={styles["online-sale-invoice--hr"]} />

          </Box>

          <Box width="100%">
            <Box className={styles["online-sale-invoice--summary-item"]}>
              <Text type="h5" weight="600">
                SUB-TOTAL:
              </Text>
              <Text type="h5" weight="400">
                {subTotal.toFixed(2)}$
              </Text>
            </Box>
            
            {taxes.map((tax, index) => (
              <Box
                key={`online-sale-invoice--date-${requestTime}-index-${index}`}
                className={styles["online-sale-invoice--summary-item"]}
              >
                <Text type="h5" weight="600">
                  {tax.name} ({tax.value}
                  {tax.type}):
                </Text>
                <Text type="h5" weight="400">
                  {(tax.type === "%"
                    ? (subTotal * tax.value) / 100
                    : tax.value
                  ).toFixed(2)}
                  $
                </Text>
              </Box>
            ))}

            <hr className={styles["online-sale-invoice--hr"]} />
            <Box className={styles["online-sale-invoice--summary-item"]}>
              <Text type="h5" weight="600">
                TOTAL:
              </Text>
              <Text type="h5" weight="400">
                {total.toFixed(2)}$
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
