import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./onlineSaleModal.module.scss";
import { Modal } from "../modal/Modal";
import { OnlineSaleStatuses } from "../onlineSaleAction/onlineSaleAction";

interface ModalConfirmProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  text: string;
  confirmText: string;
  cancelText : string;
  onConfirm: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  open,
  setOpen,
  text,
  confirmText,
  cancelText,
  onConfirm
}) => {

  return (
    <Modal open={open} setOpen={setOpen}>
      <Box className={styles["online-sale--modal-box"]}>
        <Text>
          {text}
        </Text>

        <Box className={styles["online-sale--confirmation-button-row"]}>
          <Button 
            onClick={() => setOpen(false)}
            fullWidth 
            className={styles["online-sale--left-button"]}>
            <Box className={styles["online-sale--confirmation-button-box"]}>
            <Text type="h6">
            {cancelText}
            </Text>
          </Box>
          </Button>

          <Button primary
            fullWidth
            onClick={() => { onConfirm!(); setOpen(false); }}>
            <Box className={styles["online-sale--confirmation-button-box"]}>
              <Text type="h6">
                {confirmText}
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Modal>
  );

};

export interface OnlineModalProps {
  nextStatus: number;
  openModal : boolean;
  setOpenModal : (open: boolean) => void;
  onReject : () => void;
  onCancel : () => void;
  onAccept : () => void;
  onStart : () => void;
  onReadyToTakeOut : () => void;
  onOnTheWay : () => void;
  onDelivered : () => void;
  onClose : () => void;
}


/**
 * Primary UI component for user interaction
 */
export const OnlineSaleModal = ({
  nextStatus,
  openModal,
  setOpenModal,
  onReject,
  onCancel,
  onAccept,
  onStart,
  onReadyToTakeOut,
  onOnTheWay,
  onDelivered,
  onClose,
  ...props
}: OnlineModalProps) => {

  

  let text : string;
  let confirmText : string;
  let onConfirm;
  switch (nextStatus) {
    
    case OnlineSaleStatuses.ACCEPTED:
      text = "¿Está seguro que desea aceptar la venta?";
      confirmText = "Aceptar";
      onConfirm = onAccept;
      break;
    
    case OnlineSaleStatuses.STARTED:
      text = "¿Está seguro que desea empezar la venta?";
      confirmText = "Empezar";
      onConfirm = onStart;
      break;
    
    case OnlineSaleStatuses.READY_TO_TAKE_OUT:
      text = "¿Está seguro que desea marcar la venta como lista para retirar?";
      confirmText = "Listo para retirar";
      onConfirm = onReadyToTakeOut;
      break;
    
    case OnlineSaleStatuses.ON_THE_WAY:
      text = "¿Está seguro que desea marcar la venta como en camino?";
      confirmText = "Enviar";
      onConfirm = onOnTheWay;
      break;
    
    case OnlineSaleStatuses.DELIVERED:
      text = "¿Está seguro que desea marcar la venta como entregada?";
      confirmText = "Entregado";
      onConfirm = onDelivered;
      break;
    
    case OnlineSaleStatuses.CLOSED:
      text = "¿Está seguro que desea cerrar la venta?";
      confirmText = "Cerrar";
      onConfirm = onClose;
      break;
    
    case OnlineSaleStatuses.CANCELLED:
      text = "¿Está seguro que desea cancelar la venta?";
      confirmText = "Cancelar";
      onConfirm = onCancel;
      break;
    
    case OnlineSaleStatuses.REJECTED:
      text = "¿Está seguro que desea rechazar la venta?";
      confirmText = "Rechazar";
      break;
    
    default:
      text = "¿Está seguro que desea realizar esta acción?";
      confirmText = "Aceptar";
      break;
  }

  const object = useMemo(() => {
    return <ModalConfirm
      open={openModal}
      setOpen={setOpenModal}
      text= {text}
      confirmText={confirmText}
      cancelText="Volver"
      onConfirm={onCancel}
    />
  }, [openModal])
  return (
    <div>
      {object}
    </div>
  );
}