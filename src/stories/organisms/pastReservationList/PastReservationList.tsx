import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./pastReservationList.module.scss";
import { Reservation, ReservationProps } from "../../molecules/reservation/Reservation";

interface PastReservationListProps {
  /**
   * Past sale list
   */
  pastReservations: ReservationProps[];
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
export const PastReservationList = ({
  pastReservations,
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
  ...props
}: PastReservationListProps) => {
  // Group past sales by date
  const pastReservationsByDate = useMemo(() => {
    return pastReservations.reduce((acc, reservation) => {
      const date = reservation.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(reservation);
      return acc;
    }, {} as { [key: string]: ReservationProps[] });
  }, [pastReservations]);

  // Get all dates
  const dates = useMemo(() => {
    return Object.keys(pastReservationsByDate).sort((a, b) => {
      return new Date(b).getTime() - new Date(a).getTime();
    });
  }, [pastReservationsByDate]);

  console.log(pastReservations);
  return (
    <Box className={styles["past-reservation-list--container"]}>
      <Box className={styles["past-reservation-list--body"]}>
        {dates.map((date, index) => (
          <Box
            className={styles["past-reservation-list--body-item"]}
            key={`past-reservation-list--body-item-${index}-${date}`}
          >
            <Box
              strongShadow
              className={styles["past-reservation-list--body-item-title"]}
            >
              <Text weight="700" type="h4">
                {date}
              </Text>
            </Box>

            {pastReservationsByDate[date].map((reservation, index) => (
              <Box
                className={styles["past-reservation-list--body-item"]}
                key={`past-reservation-list--body-item-${index}-${
                  reservation.tables
                }-${reservation.start}-${reservation.owner}`}
              >
                <Reservation {...reservation} />
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box className={styles["past-reservation-list--pages"]}>
        <Box
          onClick={onPreviousPage}
          className={styles["past-reservation-list--icon"]}
          style={{ cursor: page < 2 ? "auto" : "pointer" }}
        >
          <Icon
            icon="left"
            size="18px"
            className={
              page < 2
                ? styles["past-reservation-list--icons-inactive-color"]
                : styles["past-reservation-list--icons-active-color"]
            }
          />
        </Box>

        <Box className={styles["past-reservation-list--counter"]}>
          <Text highlightStyle weight="400">
            {page} de {totalPages}
          </Text>
        </Box>

        <Box
          className={styles["past-reservation-list--icon"]}
          onClick={onNextPage}
          style={{ cursor: page > totalPages - 1 ? "auto" : "pointer" }}
        >
          <Icon
            icon="right"
            size="18px"
            className={
              page > totalPages - 1
                ? styles["past-reservation-list--icons-inactive-color"]
                : styles["past-reservation-list--icons-active-color"]
            }
          />
        </Box>
      </Box>
    </Box>
  );
};