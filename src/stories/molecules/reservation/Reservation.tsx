import React, { useMemo } from "react";
import "./reservation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";

export interface ReservationProps {
  /**
   * Reservation start time
   */
  start: string;
  /**
   * Reservation main owner
   */
  owner: string;
  /**
   * Cell phone number of the owner
   */
  ownerPhone: string;
  /**
   * Number of person in the reservation
   */
  persons: number;
  /**
   * Number of tables in the reservation
   */
  tables: number;
  /**
   * Indicates the current reservation state
   */
  state: number;
  /**
   * On close reservation button click
   */
  onCloseReservation?: () => {};
  /**
   * On reject reservation icon click
   */
  onReject?: () => {};
  /**
   * On accept reservation icon click
   */
  onAccept?: () => {};
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
  /**
   * Main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Reservation = ({
  start,
  owner,
  ownerPhone,
  persons,
  tables,
  state,
  onCloseReservation,
  onReject,
  onAccept,
  width,
  height,
  color,
  ...props
}: ReservationProps) => {
  const dot = () => (
    <Box className="reservation--dot">
      <Text weight="700" type="h4">
        •
      </Text>
    </Box>
  );

  const getAction = useMemo(() => {
    switch (state) {
      // Pending reservsation
      case 0:
        return (
          <Box className="reservation--icon-container">
            <Box className="reservation--icon" onClick={onReject}>
              <Icon icon="cancel" size="32px" />
            </Box>
            <Box className="reservation--icon" onClick={onAccept}>
              <Icon icon="check" size="32px" />
            </Box>
          </Box>
        );

      // Active reservation
      case 1:
        return (
          <Box className="reservation--button">
            <Button
              primary
              onClick={onCloseReservation}
              backgroundColor={color}
            >
              <Text type="h6" color="#112211">
                Crear Reserva
              </Text>
            </Button>
          </Box>
        );

      default:
        return <></>;
    }
  }, [state]);

  return (
    <Box
      className="reservation--container"
      borderRadius="12px"
      weakShadow
      style={{ width, height }}
    >
      <Box className="reservation--details">
        <Box
          className="reservation--start"
          borderRadius="10px"
          backgroundColor="#646464"
        >
          <Text type="h6" color="white" weight="700">
            {start}
          </Text>
        </Box>

        <Box>
          <Text weight="700"> {owner} </Text>
        </Box>

        {dot()}

        <Box>
          <Text> {ownerPhone} </Text>
        </Box>

        {dot()}

        <Box className="reservation--details">
          <Box className="reservation--icon-container">
            <Icon icon="person" size="20px" />
          </Box>
          <Text> {persons} </Text>
        </Box>

        {dot()}

        <Box className="reservation--details">
          <Box className="reservation--icon-container">
            <Icon icon="table" size="20px" />
          </Box>
          <Text> {tables} </Text>
        </Box>
      </Box>

      {getAction}
    </Box>
  );
};
