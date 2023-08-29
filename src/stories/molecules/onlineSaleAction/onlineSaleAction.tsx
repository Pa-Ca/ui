import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./onlineSaleAction.module.scss";

export interface OnlineSaleActionProps {
  /**
   * Current status of the sale (Given as an integer of the enum OnlineSaleStatus)
   */
  currentStatus: number
  /**
   * Delivery indicator
   */
  delivery: boolean
  /**
   * Callback to open the modal window
   */
  setOpenModal: () => void
  /**
   * Callback to set the next status
   */
  setNextStatus: (status: number) => void
}

// Create an enum with the status of the online-sale

export const enum OnlineSaleStatuses {
  PENDING = 1,
  REJECTED = 2,
  ACCEPTED = 3,
  STARTED = 4,
  READY_TO_TAKE_OUT = 5,
  ON_THE_WAY = 6,
  DELIVERED = 7,
  CANCELLED = 8,
  CLOSED = 9
}

/**
 * Status transitions
 * 
 * PENDING -> REJECTED
 * PENDING -> ACCEPTED
 * ACCEPTED -> STARTED
 * STARTED -> READY_TO_TAKE_OUT
 * STARTED -> ON_THE_WAY (Only if delivery is true)
 * ON_THE_WAY -> DELIVERED
 * READY_TO_TAKE_OUT -> DELIVERED
 * DELIVERED -> CLOSED
 */

/**
 * Primary UI component for user interaction
 */
export const OnlineSaleAction = ({
  currentStatus,
  delivery,
  setOpenModal,
  setNextStatus,
  ...props
}: OnlineSaleActionProps) => {


  let leftButton, rightButton;

  switch (currentStatus) {

    case OnlineSaleStatuses.PENDING:
      leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.REJECTED); setOpenModal() }, text: "Rechazar" };
      rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.ACCEPTED); setOpenModal() }, text: "Aceptar", primary: true };
      break;

    case OnlineSaleStatuses.ACCEPTED:
      leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal() }, text: "Cancelar" };
      rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.STARTED); setOpenModal() }, text: "Empezar", primary: true };
      break;

    case OnlineSaleStatuses.STARTED:
      if (delivery) {
        leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal() }, text: "Cancelar" };
        rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.ON_THE_WAY); setOpenModal() }, text: "Enviar", primary: true };
      } else {
        leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal() }, text: "Cancelar" };
        rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.READY_TO_TAKE_OUT); setOpenModal() }, text: "Listo para retirar", primary: true };
      }
      break;

    case OnlineSaleStatuses.READY_TO_TAKE_OUT:
      leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal() }, text: "Cancelar" };
      rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.DELIVERED); setOpenModal() }, text: "Entregado", primary: true };
      break;

    case OnlineSaleStatuses.ON_THE_WAY:
      leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal() }, text: "Cancelar" };
      rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.DELIVERED); setOpenModal() }, text: "Entregado", primary: true };
      break;

    case OnlineSaleStatuses.DELIVERED:
      leftButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CANCELLED); setOpenModal }, text: "Cancelar" };
      rightButton = { onClick: () => { setNextStatus(OnlineSaleStatuses.CLOSED); setOpenModal }, text: "Cerrar", primary: true };
      break;

    default:
      break;

  }

  return (
    <Box className={styles["online-sale--box-button"]}>
      {leftButton &&
        <Button
          onClick={leftButton.onClick}
          className={styles["online-sale--left-button"]}
        >
          <Text type="h6">{leftButton.text}</Text>
        </Button>
      }

      {rightButton &&
        <Button
          onClick={rightButton.onClick}
          primary={rightButton.primary}
          className={styles["online-sale--right-button"]}
        >
          <Text type="h6">{rightButton.text}</Text>
        </Button>
      }
    </Box>
  );
}