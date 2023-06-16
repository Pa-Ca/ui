import React, { useMemo, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./pastSale.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";

export interface PastSaleProps {
  /**
   * Sale start date
   */
  startDate: Date;
  /**
   * Table name
   */
  tableName: string;
  /**
   * Product list
   */
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
  /**
   * Taxes list
   */
  taxes: {
    name: string;
    value: number;
    type: "%" | "$";
  }[];

  /**
   * Indicates if the sale has a reservation associated
   */
  hasReservation: boolean;
  /**
   * Reservation owner name
   */
  ownerName?: string;
  /**
   * Reservation owner email
   */
  ownerEmail?: string;
  /**
   * Reservation owner phone
   */
  ownerPhone?: string;
  /**
   * Number of person in the reservation
   */
  persons?: number;

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
  startDate,
  tableName,
  products = [],
  taxes = [],

  hasReservation = false,
  ownerName = "",
  ownerEmail = "",
  ownerPhone = "",
  persons = 0,

  width,
  height,
  ...props
}: PastSaleProps) => {
  const [viewDetails, setViewDetails] = useState(false);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
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
            <Text weight="700"> {startDate.toISOString().split("T")[0]} </Text>
            <Text>
              {" "}
              {startDate.toLocaleTimeString("en-US", { hour12: false })}{" "}
            </Text>
          </Box>
        </Box>

        <Box className={styles["past-sale--header-table"]}>
          <Icon icon="table" size="28px" />
          <Text type="h5"> {tableName} </Text>
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
            viewDetails
              ? "past-sale--details-container-show"
              : "past-sale--details-container-hide"
          ]
        )}
      >
        <hr className={styles["past-sale--details-container-hr"]} />

        <Box className={styles["past-sale--details"]}>
          <Box className={styles["past-sale--details-products-container"]}>
            {/* Header */}
            <Box className={styles["past-sale--item"]}>
              <Box className={styles["past-sale--item-quantity"]}>
                <Text type="h5" weight="600">
                  Cantidad
                </Text>
              </Box>
              <Box className={styles["past-sale--item-price"]}>
                <Text type="h5" weight="600">
                  Precio
                </Text>
              </Box>
              <Box className={styles["past-sale--item-product"]}>
                <Text type="h5" weight="600">
                  Producto
                </Text>
              </Box>
            </Box>
            <hr className={styles["past-sale--details-container-hr"]} />

            {/* Products */}
            <Box className={styles["past-sale--details-products"]}>
              {products.map((product, index) => (
                <Box
                  key={`past-sale--${startDate.toISOString()}-${tableName}-product-${index}-${
                    product.name
                  }`}
                  className={styles["past-sale--item"]}
                >
                  <Box className={styles["past-sale--item-quantity"]}>
                    <Text type="h5">{product.quantity}</Text>
                  </Box>
                  <Box className={styles["past-sale--item-price"]}>
                    <Text type="h5">{product.price.toFixed(2)}$</Text>
                  </Box>
                  <Box className={styles["past-sale--item-product"]}>
                    <Text type="h5">{product.name}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className={styles["past-sale--summary"]}>
            <Box className={styles["past-sale--reservation-container"]}>
              <Box className={styles["past-sale--reservation-title"]}>
                <Text type="h5" weight="600">
                  Reservación:
                </Text>
              </Box>
              <hr className={styles["past-sale--details-container-hr"]} />

              {hasReservation ? (
                <Box width="100%">
                  <Box className={styles["past-sale--reservation-item"]}>
                    <Text type="h5" weight="600">
                      Nombre:
                    </Text>
                    <Text type="h5" weight="400">
                      {ownerName}
                    </Text>
                  </Box>

                  <Box className={styles["past-sale--reservation-item"]}>
                    <Text type="h5" weight="600">
                      Teléfono:
                    </Text>
                    <Text type="h5" weight="400">
                      {ownerPhone}
                    </Text>
                  </Box>

                  <Box className={styles["past-sale--reservation-item"]}>
                    <Text type="h5" weight="600">
                      Correo:
                    </Text>
                    <Text type="h5" weight="400">
                      {ownerEmail}
                    </Text>
                  </Box>

                  <Box className={styles["past-sale--reservation-item"]}>
                    <Text type="h5" weight="600">
                      Personas:
                    </Text>
                    <Text type="h5" weight="400">
                      {persons}
                    </Text>
                  </Box>
                </Box>
              ) : (
                <Text>No hay ninguna reservación asociada</Text>
              )}
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
              {taxes.map((tax, index) => (
                <Box className={styles["past-sale--summary-item"]}>
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
