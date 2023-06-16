import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./pastSaleList.module.scss";
import { PastSale, PastSaleProps } from "../../molecules/pastSale/PastSale";

interface PastSaleListProps {
  /**
   * Past sale list
   */
  pastSales: PastSaleProps[];
  /**
   * Current page
   */
  page: number;
  /**
   * Total pages
   */
  totalPages: number;
  /**
   * On next page
   */
  onNextPage: () => void;
  /**
   * On previous page
   */
  onPreviousPage: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PastSaleList = ({
  pastSales,
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
  ...props
}: PastSaleListProps) => {
  // Group past sales by date
  const pastSalesByDate = useMemo(() => {
    return pastSales.reduce((acc, pastSale) => {
      const date = pastSale.startDate.toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(pastSale);
      return acc;
    }, {} as { [key: string]: PastSaleProps[] });
  }, [pastSales]);

  // Get all dates
  const dates = useMemo(() => {
    return Object.keys(pastSalesByDate).sort((a, b) => {
      return new Date(a).getTime() - new Date(b).getTime();
    });
  }, [pastSalesByDate]);

  return (
    <Box className={styles["past-sale-list--container"]}>
      <Box className={styles["past-sale-list--body"]}>
        {dates.map((date, index) => (
          <Box
            className={styles["past-sale-list--body-item"]}
            key={`past-sale-list--body-item-${index}-${date}`}
          >
            <Box
              strongShadow
              className={styles["past-sale-list--body-item-title"]}
            >
              <Text weight="700" type="h4">
                {date}
              </Text>
            </Box>

            {pastSalesByDate[date].map((pastSale, index) => (
              <Box
                className={styles["past-sale-list--body-item"]}
                key={`past-sale-list--body-item-${index}-${
                  pastSale.tableName
                }-${pastSale.startDate.toISOString()}`}
              >
                <PastSale {...pastSale} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box className={styles["past-sale-list--pages"]}>
        <Box
          onClick={onPreviousPage}
          className={styles["past-sale-list--icon"]}
          style={{ cursor: page < 2 ? "auto" : "pointer" }}
        >
          <Icon
            icon="left"
            size="18px"
            className={
              page < 2
                ? styles["past-sale-list--icons-inactive-color"]
                : styles["past-sale-list--icons-active-color"]
            }
          />
        </Box>

        <Box className={styles["past-sale-list--counter"]}>
          <Text highlightStyle weight="400">
            {page} de {totalPages}
          </Text>
        </Box>

        <Box
          className={styles["past-sale-list--icon"]}
          onClick={onNextPage}
          style={{ cursor: page > totalPages - 1 ? "auto" : "pointer" }}
        >
          <Icon
            icon="right"
            size="18px"
            className={
              page > totalPages - 1
                ? styles["past-sale-list--icons-inactive-color"]
                : styles["past-sale-list--icons-active-color"]
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
