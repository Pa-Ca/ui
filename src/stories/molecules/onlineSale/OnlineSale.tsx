import React, { useMemo, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./onlineSale.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../modal/Modal";
import ReservationStatus from "../../utils/objects/ReservationStatus";
import { OnlineSaleInvoice } from "../onlineSaleInvoice/OnlineSaleInvoice";

export interface OnlineSaleProps {
  /**
   * Reservation id
   */
  id?: number;
  /**
   * Sale time-stamp 
   */
  requestTime: string;
  /**
   * Date when reservation was requested
   */
  requestDate: string;
  /**
   * Online Sale main owner (clients name)
   */
  owner: string;
  /**
   * Cell phone number of the owner/client
   */
  ownerPhone: string;
  /**
   * Email of the owner
   */
  ownerEmail: string;
  /**
   * Identity document the owner
   */
  identityDocument: string;
  /**
   * Note of the owner/client
   */
  note: string;
  /**
   * Object with all info related with reservation state
   */
  status: ReservationStatus;
  /**
   * Sale date
   */
  date: string;

  /**
   * Is sale a pick-up or delivery
   */
  saleType: "pick-up" | "delivery";


  /**
   * Sale address (only if sale is delivery)
   */
  adress?: string;

  /**
   * Sale address (google maps link)
   */
  addressLink?: string;

  /**
   * 
   */
  /**
   * Product list
   */
  products: {
    name: string;
    price: number;
    amount: number;
  }[];
  /**
   * Taxes list
   */
  taxes: {
    name: string;
    value: number;
    type: "%" | "$";
  }[];

  /**
   * On close reservation button click
   */
  onCloseSale?: () => {};
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
export const OnlineSale = ({
  requestTime,
  requestDate,
  owner,
  ownerPhone,
  identityDocument,
  status,
  ownerEmail,
  adress,
  note,
  saleType,
  products,
  taxes,
  onCloseSale,
  onReject,
  onAccept,
  onRetire,
  onStart,
  width,
  height,
  ...props
}: OnlineSaleProps) => {

  const [confirmClose, setConfirmClose] = useState(false);
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);
  const [confirmStart, setConfirmStart] = useState(false);
  const [confirmRetire, setConfirmRetire] = useState(false);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    // Get taxes
    const totalTaxes = taxes.reduce((acc, tax) => {
      if (tax.type === "%") {
        return acc + (subTotal * tax.value) / 100;
      } else {
        return acc + tax.value;
      }
    }, 0);

    return subTotal + totalTaxes;
  }, [subTotal, taxes]);

  const dot = () => (
    <Box className={styles["online-sale--separator"]}>
      <Text weight="600" type="h5">
        •
      </Text>
    </Box>
  );

  const hyphen = () => (
    <Box className={styles["online-sale--separator"]}>
      <Text weight="600" type="h5">
        -
      </Text>
    </Box>
  );

  const [active, setActive] = useState(false);

  const onClickEye = () => {
    setActive(active => !active);
  }

  const SaleTypeIcon = ({saleType} : { saleType: "pick-up" | "delivery" }) => {
    return (
      <Box className={styles["online-sale--icon"]}>
        {saleType === "delivery" && <Icon icon="delivery" size="32px" />}
        {saleType === "pick-up" && <Icon icon="pick-up" size="32px" />}
      </Box>
    );
  }

  // const [showInvoice, setShowInvoice] = useState(false);

  // const onClickInvoiceEye = () => {
  //   setShowInvoice(showInvoice => !showInvoice);
  // }

  const getAction = useMemo(() => {
    switch (status.number) {
      // Started online-sale
      case 5:
        return (
          <Box className={styles["online-sale--box-button"]}>
            <Button
              primary
              onClick={() => setConfirmClose(true)}
              className={styles["online-sale--right-button"]}
            >
              <Text type="h6">
                Finalizar
              </Text>
            </Button>
          </Box>
        );

      // Accepted online-sale
      case 3:
        return (
          <Box className={styles["online-sale--box-button"]}>
            <Button
              onClick={() => setConfirmRetire(true)}
              className={styles["online-sale--left-button"]}
            >
              <Text type="h6">
                Retirar
              </Text>
            </Button>
            <Button
              primary
              onClick={() => setConfirmStart(true)}
              className={styles["online-sale--right-button"]}
            >
              <Text type="h6">
                Empezar
              </Text>
            </Button>
          </Box>
        );

      // Pending online-sale
      case 1:
        return (
          <Box className={styles["online-sale--box-button"]}>
            <Button
              onClick={() => setConfirmReject(true)}
              className={styles["online-sale--left-button"]}
            >
              <Text type="h6">
                Rechazar
              </Text>
            </Button>
            <Button
              primary
              onClick={() => setConfirmAccept(true)}
              className={styles["online-sale--right-button"]}
            >
              <Text type="h6">
                Aceptar
              </Text>
            </Button>
          </Box>
        );

      default:
        return (
          <Box className={styles["online-sale--box-button"]}></Box>
        );
    }
  }, [status.number]);

  return (
    <div>
      <Box
        className={classnames(
          styles["online-sale--container"]
        )}
        weakShadow
        style={{ width, height }}
      >

        <Box
          className={classnames(
            styles["online-sale--status-box"],
            styles[`online-sale--status-${status.name}`]
          )}
        >
          <Box className={styles["online-sale--status-box-inner"]}>
            <Icon icon={status.icon} size="50px"
              className={styles["online-sale--status-icon-color"]} />
            <Text ellipsis={true} weight="700" className={styles["online-sale--status-text"]} color="white">
              {status.nameShow}
            </Text>
          </Box>
        </Box>
        <Box className={styles["online-sale--information-box"]}>
          {/* Info */}
          <Box className={styles["online-sale--details-row"]}>
            {/* Start Hour */}
            <Box>
              <Box
                className={styles["online-sale--start"]}
                borderRadius="10px"
              >
                <Text type="h6" color="white" weight="700">
                  {requestTime}
                </Text>
              </Box>
            </Box>

            {/* Info */}
            <Box>
              <Box className={styles["online-sale--info"]}>
                <Text weight="700"> {owner} </Text>
              </Box>
            </Box>

            {/* Sale  type icons */}
            <SaleTypeIcon saleType={saleType} />

            {/* Total price */}
            <Box className={styles["online-sale--icon"]}>
              <Text weight="700"> {total} $</Text>
            </Box>



            {/* Show Info Switch */}
            <Box className={styles["online-sale--icon"]}
              onClick={onClickEye}
              style={{ marginLeft: "auto" }}>
              <Icon icon={active ? "up" : "down"} size="32px" />
            </Box>
          </Box>

          {/* Details */}
          <Box className={classnames(
            styles["online-sale--details-row"],
            styles["online-sale--more-details-row"]
          )}>
            <Box className={active ?
              styles["online-sale--more-details-row-show"] :
              styles["online-sale--more-details-row-hide"]
            }>
              <hr className={styles["online-sale--hr"]} />
              <div>
                <div className={styles["online-sale--details"]}
                  style={{ marginBottom: "0" }}>
                  <Box className={styles["online-sale--icon-container"]}
                    style={{ marginBottom: "2px" }}>
                    <Icon icon="clock" size="22px" />
                  </Box>
                  <Text>{requestTime}</Text>
                </div>
                <Box className={styles["online-sale--details"]}>
                  <Box className={styles["online-sale--icon-container"]}>
                    <Icon icon="identity-document" size="22px" />
                  </Box>
                  <Text> {identityDocument} </Text>
                </Box>
                <Box className={styles["online-sale--details"]}>
                  <Box className={styles["online-sale--icon-container"]}>
                    <Icon icon="phone" size="22px" />
                  </Box>
                  <Text> {ownerPhone} </Text>
                </Box>
                <Box className={styles["online-sale--details"]}>
                  <Box className={styles["online-sale--icon-container"]}>
                    <Icon icon="mail-envelope" size="22px" />
                  </Box>
                  <Text> {ownerEmail} </Text>
                </Box>
                <Box className={styles["online-sale--details"]}>
                  <Box className={styles["online-sale--icon-container"]}>
                    <Icon icon="location" size="22px" />
                  </Box>
                  <Text> {adress} </Text>
                </Box>
                {note != "" &&
                  <Box>
                    <Box>
                      <Text> <span style={{ fontWeight: "600" }}>Nota:</span> {note} </Text>
                    </Box>
                  </Box>
                }
              </div>

              <hr/>
              <Box className={styles["online-sale--invoice-title"]}>
                <Box className={styles["online-sale--info"]}>
                  <Text weight="700"> {"Detalles del pedido"} </Text>
                </Box>
                {/* <Box className={styles["online-sale--icon"]}
                  onClick={onClickInvoiceEye}
                  style={{ marginLeft: "auto" }}>
                  <Icon icon={active ? "up" : "down"} size="32px" />
                </Box> */}
              </Box>
              <hr/>
              <Box className={styles["online-sale--invoice-box"]}>
                <OnlineSaleInvoice
                  requestTime={requestTime}
                  products={products}
                  taxes={taxes} />
              </Box>
              <hr/>
              <Box>
                {/* Actions */}
                {getAction}
                <Box className={styles["online-sale--box-button"]}>
                  <Text className={styles["online-sale--right-button"]}>
                    {requestDate}
                  </Text>
                </Box>
              </Box>
              
              
            </Box>
          </Box>


        </Box>
      </Box>

      {/* Rechazar */}
      <Modal open={confirmReject} setOpen={setConfirmReject}>
        <Box className={styles["online-sale--modal-box"]}>

          <Text>
            ¿Está seguro que desea <span style={{ fontWeight: "600" }}>Rechazar</span> la reserva ?
          </Text>

          <Box className={styles["online-sale--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmReject(false)}
              fullWidth
              className={styles["online-sale--left-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={() => { onReject!(); setConfirmReject(false); }}
              className={styles["online-sale--right-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
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
        <Box className={styles["online-sale--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{ fontWeight: "600" }}>Aceptar</span> la orden ?
          </Text>

          <Box className={styles["online-sale--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmAccept(false)}
              fullWidth
              className={styles["online-sale--left-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={() => { onAccept!(); setConfirmAccept(false); }}
              className={styles["online-sale--right-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
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
        <Box className={styles["online-sale--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{ fontWeight: "600" }}>Empezar</span> la reserva ?
          </Text>

          <Box className={styles["online-sale--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmStart(false)}
              fullWidth
              className={styles["online-sale--left-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={() => { onStart!(); setConfirmStart(false); }}
              className={styles["online-sale--right-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
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
        <Box className={styles["online-sale--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{ fontWeight: "600" }}>Retirar</span> la reserva ?
          </Text>

          <Box className={styles["online-sale--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmRetire(false)}
              fullWidth
              className={styles["online-sale--left-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={() => { onRetire!(); setConfirmRetire(false); }}
              className={styles["online-sale--right-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
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
        <Box className={styles["online-sale--modal-box"]}>
          <Text>
            ¿Está seguro que desea <span style={{ fontWeight: "600" }}>Finalizar</span> la reserva ?
          </Text>

          <Box className={styles["online-sale--confirmation-button-row"]}>
            <Button
              onClick={() => setConfirmClose(false)}
              fullWidth
              className={styles["online-sale--left-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Cancelar
                </Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              onClick={() => { onCloseSale!(); setConfirmClose(false); }}
              className={styles["online-sale--right-button"]}
            >
              <Box className={styles["online-sale--confirmation-button-box"]}>
                <Text type="h6">
                  Confirmar
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
