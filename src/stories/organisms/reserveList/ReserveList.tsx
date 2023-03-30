import React, { useMemo } from "react";
import "./reserveList.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import ReservationList from "../../utils/objects/ReservationList";
import { Reservation } from "../../molecules/reservation/Reservation";

interface ReserveListProps {
  /**
   * Reservation list data
   */
  reservations: ReservationList[];
  /**
   * State of reservations that will be displayed
   */
  state: number;
  /**
   * Main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ReserveList = ({
  reservations = [],
  state,
  color,
  ...props
}: ReserveListProps) => {
  const reservationsToShow = useMemo(() => {
    return reservations.reduce((result: ReservationList[], group) => {
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
  }, [reservations, state]);

  const title = useMemo(() => {
    switch (state) {
      case 0:
        return "Reservas Pendientes";
      case 1:
        return "Reservas Activas";
      default:
        return "Reservas";
    }
  }, [state]);

  const header = useMemo(() => {
    switch (state) {
      case 1:
        return (
          <Box className="reserve-list--header">
            <Box className="reserve-list--active">
              <Text weight="700" type="h3">
                {title}
              </Text>

              <Box className="reserve-list--type">
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
              >
                <Text type="h6" color="#112211">
                  Cerrar mesa
                </Text>
              </Button>
            </Box>
          </Box>
        );
      default:
        return (
          <Box className="reserve-list--header">
            <Text weight="700" type="h3">
              {title}
            </Text>

            <Box className="reserve-list--type">
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
    <Box className="reserve-list--container">
      {header}

      <Box className="reserve-list--reservations">
        {reservationsToShow.map((group) => (
          <Box className="reserve-list--reservation">
            <Box
              height="52px"
              borderRadius="16px"
              weakShadow
              className="reserve-list--date"
            >
              <Text weight="600" color="#112211">
                {group.date}
              </Text>
            </Box>

            <Box
              className="reserve-list--reservations"
              borderRadius="16px"
              weakShadow
              backgroundColor="white"
            >
              {group.reservations.map((reservation) => (
                <Reservation
                  start={reservation.start}
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
