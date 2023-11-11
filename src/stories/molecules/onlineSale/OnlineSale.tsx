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
import { OnlineSaleDetails } from "../onlineSaleDetails/OnlineSaleDetails";
import { OnlineSaleAction } from "../onlineSaleAction/onlineSaleAction";
import { OnlineSaleModal } from "../onlineSaleModals/OnlineSaleModal";

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
  adressLink?: string;
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
   * Callback to reject the online-sale
   */
  onReject : () => void
  /**
   * Callback to accept the online-sale
   */ 
  onAccept : () => void
  /**
   * Callback to cancel the online-sale
   */
  onCancel : () => void
  /**
   * Callback to start the online-sale
   */
  onStart : () => void
  /**
   * Callback to set the online-sale as ready to take out
   */
  onReadyToTakeOut : () => void
  /**
   * Callback to set the online-sale as on the way
   */
  onOnTheWay : () => void
  /**
   * Callback to set the online-sale as delivered
   */
  onDelivered : () => void
  /**
   * Callback to close the online-sale
   */
  onClose : () => void
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
  adressLink,
  note,
  saleType,
  products,
  taxes,
  onReject,
  onCancel,
  onAccept,
  onStart,
  onReadyToTakeOut,
  onOnTheWay,
  onDelivered,
  onClose,
  width,
  height,
  ...props
}: OnlineSaleProps) => {

  const [openModal , setOpenModal] = useState(false);
  const [nextStatus , setNextStatus] = useState(0);

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

  const [active, setActive] = useState(false);

  const onClickEye = () => {
    setActive(active => !active);
  }

  const SaleTypeIcon = ({ saleType }: { saleType: "pick-up" | "delivery" }) => {
    return (
      <Box className={styles["online-sale--icon"]}>
        {saleType === "delivery" && <Icon icon="delivery" size="32px" />}
        {saleType === "pick-up" && <Icon icon="pick-up" size="32px" />}
      </Box>
    );
  }
  
  return (
    <div>
      <Box
        className={classnames(
          styles["online-sale--container"],
          active ? styles["online-sale--container-expanded"] : styles["online-sale--container-colapsed"]
        )}
        weakShadow
        style={{ width, height }}
      >

        <Box
          className={classnames(
            styles["online-sale--status-box"],
            styles[`online-sale--status-${status.name}`],

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
          {/* Info:  Lo que se ve de la tarjeta cuando no esta expandida */}
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
              <OnlineSaleDetails
                requestTime={requestTime}
                identityDocument={identityDocument}
                phoneNumber={ownerPhone}
                email={ownerEmail}
                adress={adress ? adress : ""}
                adressLink={adressLink ? adressLink : ""}
                note={note}
              />
              <hr/>
              <Box className={styles["online-sale--invoice-title"]}>
                <Box className={styles["online-sale--info"]}>
                  <Text weight="700"> {"Detalles del pedido"} </Text>
                </Box>
              </Box>
              <hr />
              <Box className={styles["online-sale--invoice-box"]}>
                <OnlineSaleInvoice
                  requestTime={requestTime}
                  products={products}
                  taxes={taxes} />
              </Box>
              <hr />
              <Box>
                {/* Actions */}
                <OnlineSaleAction
                  currentStatus={status.number}
                  delivery={saleType === "delivery"}
                  setOpenModal={() => setOpenModal(true)}
                  setNextStatus={setNextStatus}
                />
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
      {/* Modales */}
      <OnlineSaleModal
        nextStatus={nextStatus}
        openModal={openModal}
        setOpenModal={setOpenModal}
        onReject={onReject}
        onCancel={onCancel}
        onAccept={onAccept}
        onStart={onStart}
        onReadyToTakeOut={onReadyToTakeOut}
        onOnTheWay={onOnTheWay}
        onDelivered={onDelivered}
        onClose={onClose}
      />
      
    </div>
  );
};
