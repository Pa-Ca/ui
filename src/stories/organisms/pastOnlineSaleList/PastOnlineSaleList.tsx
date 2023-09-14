import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./pastOnlineSaleList.module.scss";
import {
  OnlineSale,
  OnlineSaleProps,
} from "../../molecules/onlineSale/OnlineSale";

interface PastOnlineSaleListProps {
  /**
   * Past sale list
   */
  pastOnlineSales: OnlineSaleProps[];
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
  /**
   * Max content height
   */
  contentHeight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PastOnlineSaleList = ({
  pastOnlineSales,
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
  contentHeight,
  ...props
}: PastOnlineSaleListProps) => {
  // Group past sales by date
  const pastOnlineSalesByDate = useMemo(() => {
    return pastOnlineSales.reduce((acc, OnlineSale) => {
      const date = new Date(OnlineSale.date).toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(OnlineSale);
      return acc;
    }, {} as { [key: string]: OnlineSaleProps[] });
  }, [pastOnlineSales]);

  // Get all dates
  const dates = useMemo(() => {
    return Object.keys(pastOnlineSalesByDate).sort((a, b) => {
      return new Date(b).getTime() - new Date(a).getTime();
    });
  }, [pastOnlineSalesByDate]);

  return (
    <Box className={styles["past-online-sale-list--container"]}>
      <Box
        className={styles["past-online-sale-list--body"]}
        style={{ height: contentHeight }}
      >
        {dates.map((date, index) => (
          <Box
            className={styles["past-online-sale-list--body-item"]}
            key={`past-online-sale-list--body-item-${index}-${date}`}
          >
            <Box
              strongShadow
              className={styles["past-online-sale-list--body-item-title"]}
            >
              <Text weight="700" type="h4">
                {date}
              </Text>
            </Box>

            {pastOnlineSalesByDate[date].map((onlineSale, index) => (
              <Box
                className={styles["past-online-sale-list--body-item"]}
                key={`past-online-sale-list--body-item-${index}-${onlineSale.date}-${onlineSale.requestDate}-${onlineSale.owner}`}
              >
                <OnlineSale {...onlineSale} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box className={styles["past-online-sale-list--pages"]}>
        <Box
          onClick={onPreviousPage}
          className={styles["past-online-sale-list--icon"]}
          style={{ cursor: page < 2 ? "auto" : "pointer" }}
        >
          <Icon
            icon="left"
            size="18px"
            className={
              page < 2
                ? styles["past-online-sale-list--icons-inactive-color"]
                : styles["past-online-sale-list--icons-active-color"]
            }
          />
        </Box>

        <Box className={styles["past-online-sale-list--counter"]}>
          <Text highlightStyle weight="400">
            {page} de {totalPages}
          </Text>
        </Box>

        <Box
          className={styles["past-online-sale-list--icon"]}
          onClick={onNextPage}
          style={{ cursor: page > totalPages - 1 ? "auto" : "pointer" }}
        >
          <Icon
            icon="right"
            size="18px"
            className={
              page > totalPages - 1
                ? styles["past-online-sale-list--icons-inactive-color"]
                : styles["past-online-sale-list--icons-active-color"]
            }
          />
        </Box>
      </Box>
    </Box>
  );
};
