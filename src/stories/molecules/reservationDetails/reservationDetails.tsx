import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import scoreString from "../../utils/scoreString";
import styles from "./reservationDetails.module.scss";
import ReservationDetail from "../../utils/objects/ReservationDetail";

interface ReservationDetailsProps {
  /**
   * Branch name
   */
  branchName?: string;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Main card color
   */
  backgroundColor?: string;
  /**
   * Branch score
   */
  text?: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Number of branch reviews
   */
  reviews?: number;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card background image from url
   */
  backgroundImage?: string;
  /**
   * Reservation details list
   */
  detailsList: ReservationDetail[];
}

/**
 * Primary UI component for user interaction
 */
export const ReservationDetails = ({
  branchName,
  score,
  color,
  reviews,
  text,
  width,
  height,
  backgroundImage,
  backgroundColor = "white",
  detailsList,
  ...props
}: ReservationDetailsProps) => {
  const totalPrice = useMemo(() => {
    return detailsList.reduce((sum, detail) => sum + detail.price, 0);
  }, [detailsList]);

  return (
    <Box
      className={styles["reservation-details--details-card--container"]}
      weakShadow
      backgroundColor={backgroundColor}
      style={{ width }}
    >
      <Box className={styles["reservation-details--details-card--summary"]}>
        {/* Image Box */}
        <Box
          backgroundImage={backgroundImage}
          className={styles["reservation-details--reservation-detail-image"]}
        ></Box>
        <Box className={styles["reservation-details--resumen-box-text"]}>
          <Text>Resumen</Text>
          <Text type="h5" weight="600">
            {branchName}
          </Text>
          <Box className={styles["reservation-details--score-box"]}>
            <Box
              className={styles["reservation-details--score-box-with-border"]}
              style={{ borderColor: color }}
            >
              {score}
            </Box>
            <Text type="h7" weight="700">
              {scoreString(score ?? 0)}
            </Text>
            <Text type="h7">{reviews} reviews</Text>
          </Box>
        </Box>
      </Box>

      <Box
        backgroundColor="#112211"
        height="0.5px"
        className={styles["reservation-details--detail--line"]}
      />

      <Box>
        <Text>{text}</Text>
      </Box>

      <Box
        backgroundColor="#112211"
        height="0.5px"
        className={styles["reservation-details--detail--line"]}
      />

      <Box className={styles["reservation-details--details-title"]}>
        <Text weight="700">Detalles de Reserva </Text>
      </Box>

      {detailsList.map((detail, index) => (
        <Box
          key={`check-list--item-${index}-${detail.name}`}
          className={styles["reservation-details--detail-element"]}
        >
          <Text>{detail.name}</Text>
          <Text>${detail.price} </Text>
        </Box>
      ))}

      <Box
        backgroundColor="#112211"
        height="0.5px"
        className={styles["reservation-details--detail--line"]}
      />

      <Box className={styles["reservation-details--detail-element"]}>
        <Text>Total</Text>
        <Text>${totalPrice}</Text>
      </Box>
    </Box>
  );
};
