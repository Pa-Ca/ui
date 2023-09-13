import React, { useMemo, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./pastSale.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import SaleObject from "../../utils/objects/SaleObject";

export interface PastSaleProps {
  /**
   * Sale data
   */
  sale: SaleObject;

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
export const PastSale = ({
  sale,

  width,
  height,
  ...props
}: PastSaleProps) => {
  const [viewDetails, setViewDetails] = useState(false);

  const subTotal = useMemo(() => {
    return sale.products.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
  }, [sale.products]);

  const total = useMemo(() => {
    // Get taxes
    const totalTaxes = sale.taxes.reduce((acc, tax) => {
      if (tax.type === 0) {
        return acc + (subTotal * tax.value) / 100;
      } else {
        return acc + tax.value;
      }
    }, 0);

    return subTotal + totalTaxes;
  }, [subTotal, sale.taxes]);

  return (
    <Box
      weakShadow
      borderRadius="12px"
      style={{ width, height }}
      className={styles["past-sale--container"]}
    >
      <Box className={styles["past-sale--header"]}>
        <Box className={styles["past-sale--header-hour"]}>
          <Icon icon="calendar" size="28px" />

          <Box>
            <Text weight="700"> {sale.startTime.toISOString().split("T")[1].substring(0, 5)} </Text>
          </Box>
        </Box>

        <Box>
          <Text weight="700" type="h5">
            {" "}
            {sale.ownerName}{" "}
          </Text>
        </Box>

        <Box className={styles["past-sale--price-and-icon-container"]}>
          <Text weight="700" type="h5">
            {" "}
            {total.toFixed(2)}${" "}
          </Text>
          <Box
            className={styles["past-sale--icon-container"]}
            onClick={() => setViewDetails((prev) => !prev)}
          >
            <Icon icon={viewDetails ? "up" : "down"} size="30px" />
          </Box>
        </Box>
      </Box>

      <Box
        className={classnames(
          styles["past-sale--details-container"],
          styles[
            viewDetails ? "past-sale--details-container-show" : "past-sale--details-container-hide"
          ]
        )}
      >
        <hr className={styles["past-sale--details-container-hr"]} />

        <Box className={styles["past-sale--details"]}>
          <Box className={styles["past-sale--details-products-container"]}>
            {/* Header */}
            <Box className={styles["past-sale--item"]}>
              <Box className={styles["past-sale--item-amount"]}>
                <Text type="h5" weight="600">
                  Cantidad
                </Text>
              </Box>
              <Box className={styles["past-sale--item-product"]}>
                <Text type="h5" weight="600">
                  Producto
                </Text>
              </Box>
              <Box className={styles["past-sale--item-price"]}>
                <Text type="h5" weight="600">
                  Precio
                </Text>
              </Box>
            </Box>
            <hr className={styles["past-sale--details-container-hr"]} />

            {/* Products */}
            <Box className={styles["past-sale--details-products"]}>
              {sale.products.map((product, index) => (
                <Box
                  key={`past-sale--${sale.startTime}-product-${index}-${product.name}`}
                  className={styles["past-sale--item"]}
                >
                  <Box className={styles["past-sale--item-amount"]}>
                    <Text type="h5">{product.amount}</Text>
                  </Box>
                  <Box className={styles["past-sale--item-product"]}>
                    <Text type="h5">{product.name}</Text>
                  </Box>
                  <Box className={styles["past-sale--item-price"]}>
                    <Text type="h5">{product.price.toFixed(2)}$</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className={styles["past-sale--summary"]}>
            <Box className={styles["past-sale--reservation-container"]}>
              <Box className={styles["past-sale--reservation-title"]}>
                <Text type="h5" weight="600">
                  Cliente:
                </Text>
              </Box>
              <hr className={styles["past-sale--details-container-hr"]} />

              <Box width="100%">
                <Box className={styles["past-sale--reservation-item"]}>
                  <Text type="h5" weight="600">
                    Nombre:
                  </Text>
                  <Text type="h5" weight="400">
                    {sale.ownerName}
                  </Text>
                </Box>

                <Box className={styles["past-sale--reservation-item"]}>
                  <Text type="h5" weight="600">
                    Teléfono:
                  </Text>
                  <Text type="h5" weight="400">
                    {sale.ownerPhone}
                  </Text>
                </Box>

                <Box className={styles["past-sale--reservation-item"]}>
                  <Text type="h5" weight="600">
                    Correo:
                  </Text>
                  <Text type="h5" weight="400">
                    {sale.ownerEmail}
                  </Text>
                </Box>

                <Box className={styles["past-sale--reservation-item"]}>
                  <Text type="h5" weight="600">
                    Número de personas:
                  </Text>
                  <Text type="h5" weight="400">
                    {sale.clientQuantity}
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box width="100%">
              <Box className={styles["past-sale--summary-item"]}>
                <Text type="h5" weight="600">
                  SUB-TOTAL:
                </Text>
                <Text type="h5" weight="400">
                  {subTotal.toFixed(2)}$
                </Text>
              </Box>
              {sale.taxes.map((tax, index) => (
                <Box
                  key={`past-sale--date-${sale.id}-index-${index}`}
                  className={styles["past-sale--summary-item"]}
                >
                  <Text type="h5" weight="600">
                    {tax.name} ({tax.value}
                    {tax.type === 0 ? "%" : "$"}):
                  </Text>
                  <Text type="h5" weight="400">
                    {(tax.type === 0 ? (subTotal * tax.value) / 100 : tax.value).toFixed(2)}$
                  </Text>
                </Box>
              ))}
              <hr className={styles["past-sale--hr"]} />
              <Box className={styles["past-sale--summary-item"]}>
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
      </Box>
    </Box>
  );
};
