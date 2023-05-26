import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./reserveList.module.scss";
import { Button } from "../../atoms/button/Button";
import ReservationList from "../../utils/objects/ReservationList";
import { Reservation } from "../../molecules/reservation/Reservation";
import { ReservationProps } from "../../molecules/reservation/Reservation";

interface ReserveListProps {
  /**
   * Reservation list data
   */
  reservations: ReservationProps[];
  /**
   * State of reservations that will be displayed
   */
  state: number;
  /**
   * Main color
   */
  color?: string;
  /**
   * Set show modal
   */
  setShowModal: (open: boolean) => void;
}

/**
 * Primary UI component for user interaction
 */
export const ReserveList = ({
  reservations = [],
  state,
  color,
  setShowModal,
  ...props
}: ReserveListProps) => {
  /**
   * Group reservations by date
   */
  const reservationsByDate = useMemo(() => {
    return reservations.reduce((result: ReservationList[], reservation) => {
      const date = new Date(reservation.date).toLocaleDateString();
      const group = result.find((group) => group.date === date);
      if (group) {
        group.reservations.push(reservation);
      } else {
        result.push({
          date,
          reservations: [reservation],
        });
      }
      return result;
    }, []);
  }, [reservations]);

  const reservationsToShow = useMemo(() => {
    return reservationsByDate.reduce((result: ReservationList[], group) => {
      const filteredGroup = {
        ...group,
        reservations: group.reservations.filter(
          (reservation) => reservation.state === state
        ),
      };
      if (filteredGroup.reservations.length > 0) {
        result.push(filteredGroup);
      }
      return result;
    }, []);
  }, [reservationsByDate, state]);

  const title = useMemo(() => {
    switch (state) {
      case 1:
        return "Reservas Pendientes";
      case 2:
        return "Reservas Activas";
      default:
        return "Reservas";
    }
  }, [state]);

  const header = useMemo(() => {
    switch (state) {
      case 1:
        return (
          <Box className={styles["reserve-list--header"]}>
            <Box className={styles["reserve-list--active"]}>
              <Text weight="700" type="h3">
                {title}
              </Text>

              <Box className={styles["reserve-list--type"]}>
                <Text weight="600" color="#112211" type="h6">
                  Upcoming
                </Text>
                <Icon icon="down" size="24px" />
              </Box>
            </Box>

            <Box>
              <Button
                primary
                backgroundColor={color}
                onClick={() => setShowModal(true)}
              >
                <Text type="h6" color="#112211">
                  Añadir Reserva
                </Text>
              </Button>
            </Box>
          </Box>
        );
      default:
        return (
          <Box className={styles["reserve-list--header"]}>
            <Text weight="700" type="h3">
              {title}
            </Text>

            <Box className={styles["reserve-list--type"]}>
              <Text weight="600" color="#112211" type="h6">
                Upcoming
              </Text>
              <Icon icon="down" size="24px" />
            </Box>
          </Box>
        );
    }
  }, [state, color]);

  return (
    <Box className={styles["reserve-list--container"]}>
      {header}

      <Box className={styles["reserve-list--reservations"]}>
        {reservationsToShow.map((group, index) => (
          <Box
            key={`reserve-list--state-${state}-date-${group.date}-index-${index}`}
            className={styles["reserve-list--reservation"]}
          >
            <Box
              height="52px"
              borderRadius="16px"
              weakShadow
              className={styles["reserve-list--date"]}
            >
              <Text weight="600" color="#112211">
                {group.date}
              </Text>
            </Box>

            <Box
              className={styles["reserve-list--reservations"]}
              borderRadius="16px"
              weakShadow
              backgroundColor="white"
            >
              {group.reservations.map((reservation, index) => (
                <Reservation
                  key={`reserve-list--reservation-date-${reservation.date}-index-${index}}`}
                  start={reservation.start}
                  date={reservation.date}
                  owner={reservation.owner}
                  ownerPhone={reservation.ownerPhone}
                  persons={reservation.persons}
                  tables={reservation.tables}
                  state={reservation.state}
                  onCloseReservation={reservation.onCloseReservation}
                  onReject={reservation.onReject}
                  onAccept={reservation.onAccept}
                  color={color}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
