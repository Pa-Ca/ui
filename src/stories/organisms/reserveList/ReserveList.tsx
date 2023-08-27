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
  iconSize?: string;
  /**
   * Main color
   */
  color?: string;
  /**
   * Set show modal
   */
  setShowModal: (open: boolean) => void;
  /**
   * Max content height
   */
  contentHeight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ReserveList = ({
  reservations = [],
  iconSize = "450px",
  state,
  color,
  setShowModal,
  contentHeight,
  ...props
}: ReserveListProps) => {
  /**
   * Group reservations by date
   */
  const reservationsByDate = useMemo(() => {
    return reservations.reduce((result: ReservationList[], reservation) => {
      const date = new Date(reservation.date).toISOString().split("T")[0];
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

  const title = useMemo(() => {
    switch (state) {
      case 1:
        return "Reservas En Curso";
      case 2:
        return "Reservas Aprobadas";
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
            </Box>

            <Box>
              <Button
                primary
                backgroundColor={color}
                onClick={() => setShowModal(true)}
              >
                <Text type="p" weight="700" primaryButtonStyle>
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
          </Box>
        );
    }
  }, [state, color]);

  return (
    <Box className={styles["reserve-list--container"]}>
      {header}

      {reservationsByDate.length > 0 ? (
        <Box className={styles["reserve-list--reservations"]} style={{ height: contentHeight }}>
          {reservationsByDate.map((group, index) => (
            <Box
              key={`reserve-list--state-${state}-date-${group.date}-index-${index}`}
              className={styles["reserve-list--reservation"]}
            >
              <Box strongShadow className={styles["reserve-list--date"]}>
                <Text weight="700" type="h4">
                  {group.date}
                </Text>
              </Box>

              {group.reservations.map((reservation, index) => (
                <Reservation
                  key={`reserve-list--reservation-date-${reservation.date}-index-${index}}`}
                  start={reservation.start}
                  end={reservation.end}
                  requestDate={reservation.requestDate}
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
          ))}
        </Box>
      ) : (
        <Box className={styles["reserve-list--no-branch-box"]}>
          {" "}
          <Icon icon="share" size={iconSize} />
          <Text type="h4">
            {" "}
            No hay reservas
            {state == 1
              ? " En Curso"
              : state == 2
              ? " Aceptadas"
              : state == 3
              ? " Pendientes"
              : " Registradas"}
            .
          </Text>
        </Box>
      )}
    </Box>
  );
};
