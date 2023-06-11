import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./reservation.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import styleVariables from "../../assets/scss/variables.module.scss";
import classnames from "classnames";

export interface ReservationProps {
  /**
   * Reservation id
   */
  id?: number;
  /**
   * Reservation start time
   */
  start: string;
  /**
   * Reservation end time
   */
  end: string;
  /**
   * Reservation main owner
   */
  owner: string;
  /**
   * Cell phone number of the owner
   */
  ownerPhone: string;
  /**
   * Email of the owner
   */
  ownerEmail: string;
  /**
   * Special Occasion of the owner
   */
  ownerOccasion: string;
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
   * Indicates reservation status color
   */
  statusColor: string;
  /**
   * Reservation date
   */
  date: string;
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
  end,
  owner,
  ownerPhone,
  persons,
  tables,
  state,
  statusColor,
  ownerEmail,
  ownerOccasion,
  onCloseReservation,
  onReject,
  onAccept,
  width,
  height,
  color,
  ...props
}: ReservationProps) => {

  const [confirmClose, setconfirmClose] = useState(false);
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setconfirmReject] = useState(false);

  const dot = () => (
    <Box className={styles["reservation--separator"]}>
      <Text weight="600" type="h5">
        •
      </Text>
    </Box>
  );

  const hyphen = () => (
    <Box className={styles["reservation--separator"]}>
      <Text weight="600" type="h5">
        -
      </Text>
    </Box>
  );

  const [active, setActive] = useState(false);

  const onClickEye = () => {
    setActive(active => !active);
  }

  const getAction = useMemo(() => {
    switch (state) {
      // Pending reservsation
      case 1:
        return (
          <Box className={styles["reservation--box-button"]}>
            <Button
              onClick={() => setconfirmReject(true)}
              className={styles["reservation--left-button"]}
            >
              <Text type="h6">
                Rechazar Reserva
              </Text>
            </Button>
            <Button
              primary
              onClick={() => setConfirmAccept(true)}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Aceptar Reserva
              </Text>
            </Button>
          </Box>
        );

      // Active reservation
      case 2:
        return (
          <Box className={styles["reservation--box-button"]}>
            <Button
              primary
              onClick={() => setconfirmClose(true)}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Cerrar Reserva
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
      className={styles["reservation--container"]}
      borderRadius="12px"
      weakShadow
      style={{ width, height, borderLeftColor: statusColor}}
    >
      <Box className={styles["reservation-details--row"]}>
        {/* Start Hour */}
        <Box>
          <Box
            className={styles["reservation--start"]}
            borderRadius="10px"
          >
            <Text type="h6" color="white" weight="700">
              {start}
            </Text>
          </Box>
        </Box>

        {/* Info */}
        <Box>
          <Box className={styles["reservation--info"]}>
              <Text weight="700"> {owner} </Text>
          </Box>
          <Box className={styles["reservation--info"]}>
            <Box className={styles["reservation--info"]}>
              <Box className={styles["reservation--icon-container"]}>
                <Icon icon="person" size="22px" />
              </Box>
              <Text>
                {persons}
              </Text>
            </Box>

            {dot()}

            <Box className={styles["reservation--info"]}>
              <Box className={styles["reservation--icon-container"]}>
                <Icon icon="table" size="22px" />
              </Box>
              <Text>
                {tables}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Show Info Switch */}
        <Box className={styles["reservation--icon"]}
              onClick={onClickEye}
              style={{marginLeft:"auto"}}>
          <Icon icon={active ? "up" : "down" } size="32px" />
        </Box>
      </Box>

      <Box className={classnames(
        styles["reservation-details--row"],
        styles["reservation-more-details--row"]
      )}>
        <Box className={active ?
          styles["reservation-more-details--row-show"] :
          styles["reservation-more-details--row-hide"]
        }>
          <hr className={styles["reservation--hr"]}/>
          <div>
          <div className={styles["reservation--details"]}
                style={{marginBottom: "0"}}>
            <Box className={styles["reservation--icon-container"]}
                  style={{marginBottom: "2px"}}>
              <Icon icon="clock" size="22px" />
            </Box>
            <Text>{start}</Text>
            { end != "" && <Text>{hyphen()}</Text>}
            { end != "" && <Text>{end}</Text>}
          </div>

          <Box className={styles["reservation--details"]}>
            <Box className={styles["reservation--icon-container"]}>
              <Icon icon="phone" size="22px" />
            </Box>
            <Text> {ownerPhone} </Text>
          </Box>
          <Box className={styles["reservation--details"]}>
            <Box className={styles["reservation--icon-container"]}>
              <Icon icon="mail-envelope" size="22px" />
            </Box>
            <Text> {ownerEmail} </Text>
          </Box>
          { ownerOccasion != "" &&
            <Box>
              <Box>
                <Text> <span style={{fontWeight: "600"}}>Ocasion:</span> {ownerOccasion} </Text>
              </Box>
            </Box>
          }
          </div>
          <Box>
            {/* Actions */}
            {getAction}
          </Box>
        </Box>
      </Box>

      <Modal open={confirmReject} setOpen={setconfirmReject}>
        <Box className={styles["reservation-modal--box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Rechazar</span> la reserva ?
          </Text>

          <Box className={styles["reservation-flex-box"]}>
            <Button
              onClick={() => setconfirmReject(false)}
              className={styles["reservation--left-button"]}
            >
              <Text type="h6">
                No
              </Text>
            </Button>
            <Button
              primary
              onClick={onReject}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Sí
              </Text>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={confirmAccept} setOpen={setConfirmAccept}>
        <Box className={styles["reservation-modal--box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Aceptar</span> la reserva ?
          </Text>

          <Box className={styles["reservation-flex-box"]}>
            <Button
              onClick={() => setconfirmReject(false)}
              className={styles["reservation--left-button"]}
            >
              <Text type="h6">
                No
              </Text>
            </Button>
            <Button
              primary
              onClick={onAccept}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Sí
              </Text>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={confirmClose} setOpen={setconfirmClose}>
        <Box className={styles["reservation-modal--box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Cerrar</span> la reserva ?
          </Text>

          <Box className={styles["reservation-flex-box"]}>
            <Button
              onClick={() => setconfirmReject(false)}
              className={styles["reservation--left-button"]}
            >
              <Text type="h6">
                No
              </Text>
            </Button>
            <Button
              primary
              onClick={onCloseReservation}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Sí
              </Text>
            </Button>
          </Box>
        </Box>
      </Modal>

    </Box>
  );
};
