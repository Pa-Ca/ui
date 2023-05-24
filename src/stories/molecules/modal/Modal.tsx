import React from "react";
import "./modal.scss";
import { Box } from "../../atoms/box/Box";
import { Modal as MuiModal } from "@mui/material";

interface ModalProps {
  /**
   * Indicates if the modal is open
   */
  open: boolean;
  /**
   * Function that changes the visibility of the modal
   */
  setOpen: (open: boolean) => void;
  /**
   * Button content
   */
  children?: React.ReactNode;
}

export const Modal = ({
  open = false,
  setOpen = () => {},
  children,
  ...props
}: ModalProps) => {
  return (
    <MuiModal open={open} onClose={() => setOpen(false)}>
      <div
        className="modal--container"
        onClick={() => setOpen(false)}
      >
        <Box
          className="modal--content"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </Box>
      </div>
    </MuiModal>
  );
};
