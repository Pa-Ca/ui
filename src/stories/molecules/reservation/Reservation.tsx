import React, { useMemo, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./reservation.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";

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
   * Indicates reservation status name
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
   * On reject reservation button click
   */
  onReject?: () => {};
  /**
   * On accept reservation button click
   */
  onAccept?: () => {};
  /**
   * On retire reservation button click
   */
  onRetire?: () => {};
  /**
   * On retire reservation button click
   */
  onStart?: () => {};
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
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
  onRetire,
  onStart,
  width,
  height,
  ...props
}: ReservationProps) => {

  const [confirmClose, setConfirmClose] = useState(false);
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);
  const [confirmStart, setConfirmStart] = useState(false);
  const [confirmRetire, setConfirmRetire] = useState(false);

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
      // Started reservation
      case 5:
        return (
          <Box className={styles["reservation--box-button"]}>
            <Button
              primary
              onClick={() => setConfirmClose(true)}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Finalizar
              </Text>
            </Button>
          </Box>
        );

        // Accepted reservation
        case 3:
          return (
            <Box className={styles["reservation--box-button"]}>
              <Button
                onClick={() => setConfirmRetire(true)}
                className={styles["reservation--left-button"]}
              >
                <Text type="h6">
                  Retirar
                </Text>
              </Button>
              <Button
                primary
                onClick={() => setConfirmStart(true)}
                className={styles["reservation--right-button"]}
              >
                <Text type="h6">
                  Empezar
                </Text>
              </Button>
            </Box>
          );

      // Pending reservation
      case 1:
        return (
          <Box className={styles["reservation--box-button"]}>
            <Button
              onClick={() => setConfirmReject(true)}
              className={styles["reservation--left-button"]}
            >
              <Text type="h6">
                Rechazar
              </Text>
            </Button>
            <Button
              primary
              onClick={() => setConfirmAccept(true)}
              className={styles["reservation--right-button"]}
            >
              <Text type="h6">
                Aceptar
              </Text>
            </Button>
          </Box>
        );

      default:
        return (
          <Box className={styles["reservation--box-button"]}></Box>
        );
    }
  }, [state]);

  const doReject = () => {
    onReject!();
    setConfirmReject(false);
  }

  const doAccept = () => {
    onAccept!();
    setConfirmAccept(false);
  }

  const doRetire = () => {
    onRetire!();
    setConfirmRetire(false);
  }

  const doStart = () => {
    onStart!();
    setConfirmStart(false);
  }

  const doClose = () => {
    onCloseReservation!();
    setConfirmStart(false);
  }

  return (
    <Box
      className={classnames(
        styles["reservation--container"],
        styles[`reservation--status-${statusColor}`]
      )}
      borderRadius="12px"
      weakShadow
      style={{ width, height}}
    >
      <Box className={styles["reservation--details-row"]}>
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
        styles["reservation--details-row"],
        styles["reservation--more-details-row"]
      )}>
        <Box className={active ?
          styles["reservation--more-details-row-show"] :
          styles["reservation--more-details-row-hide"]
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

      {/* Rechazar */}
      <Modal open={confirmReject} setOpen={setConfirmReject}>
        <Box className={styles["reservation--modal-box"]}>

          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Rechazar</span> la reserva ?
          </Text>

          <Box className={styles["reservation--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmReject(false)}
              fullWidth
              className={styles["reservation--left-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={doReject}
              className={styles["reservation--right-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Aceptar */}
      <Modal open={confirmAccept} setOpen={setConfirmAccept}>
        <Box className={styles["reservation--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Aceptar</span> la reserva ?
          </Text>

          <Box className={styles["reservation--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmAccept(false)}
              fullWidth
              className={styles["reservation--left-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={doAccept}
              className={styles["reservation--right-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Empezar */}
      <Modal open={confirmStart} setOpen={setConfirmStart}>
        <Box className={styles["reservation--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Empezar</span> la reserva ?
          </Text>

          <Box className={styles["reservation--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmStart(false)}
              fullWidth
              className={styles["reservation--left-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={doStart}
              className={styles["reservation--right-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Retirar */}
      <Modal open={confirmRetire} setOpen={setConfirmRetire}>
        <Box className={styles["reservation--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Retirar</span> la reserva ?
          </Text>

          <Box className={styles["reservation--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmRetire(false)}
              fullWidth
              className={styles["reservation--left-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={doRetire}
              className={styles["reservation--right-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Finalizar */}
      <Modal open={confirmClose} setOpen={setConfirmClose}>
        <Box className={styles["reservation--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{fontWeight: "600"}}>Finalizar</span> la reserva ?
          </Text>

          <Box className={styles["reservation--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmClose(false)}
              fullWidth
              className={styles["reservation--left-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={doClose}
              className={styles["reservation--right-button"]}
            >
              <Box className={styles["reservation--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

    </Box>
  );
};
