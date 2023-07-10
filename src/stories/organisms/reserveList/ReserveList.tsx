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
   * Icon size
   */
  icon_size: string;
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
  icon_size,
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
          // (reservation) => reservation.state === state
          (reservation) => true
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
        return "Reservas En Curso";
      case 2:
          return "Reservas Aceptadas";
      case 3:
        return "Reservas Pendientes";
      default:
        return "Histórico";
    }
  }, [state]);

  const header = useMemo(() => {
    switch (state) {
      case 3:
        return (
          <Box className={styles["reserve-list--header"]}>
            <Box className={styles["reserve-list--active"]}>
              <Text weight="700" type="h3">
                {title}
              </Text>

              <Box className={styles["reserve-list--type"]}>
                <Text weight="600"  type="h6">
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
                <Text type="h6" >
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
              <Text weight="600"  type="h6">
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

      {reservationsToShow.length > 0 ? (
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
                <Text weight="600">
                  {group.date}
                </Text>
              </Box>

              <Box
                className={styles["reserve-list--reservations"]}
                borderRadius="16px"
                weakShadow
              >
                {group.reservations.map((reservation, index) => (
                  <Reservation
                    key={`reserve-list--reservation-date-${reservation.date}-index-${index}}`}
                    start={reservation.start}
                    end={reservation.end}
                    date={reservation.date}
                    owner={reservation.owner}
                    ownerPhone={reservation.ownerPhone}
                    identityDocument={reservation.identityDocument}
                    ownerEmail={reservation.ownerEmail}
                    ownerOccasion={reservation.ownerOccasion}
                    persons={reservation.persons}
                    tables={reservation.tables}
                    status={reservation.status}
                    onCloseReservation={reservation.onCloseReservation}
                    onReject={reservation.onReject}
                    onRetire={reservation.onRetire}
                    onStart={reservation.onStart}
                    onAccept={reservation.onAccept}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box className={styles["reserve-list--no-branch-box"]}>
          {" "}
          <Icon icon="share" size={icon_size} />
          <Text type="h4">
            {" "}
            No hay reservas
            {state == 1 ? " En Curso" : 
             state == 2 ? " Aceptadas" :
             state == 3 ? " Pendientes" :
              " Registradas"}.
          </Text>
        </Box>
      )}
    </Box>
  );
};
