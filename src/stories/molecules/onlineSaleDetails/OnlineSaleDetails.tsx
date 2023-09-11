import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./onlineSaleDetails.module.scss";

import { openLinkInNewWindow } from "../../utils/openLinkInNewWindow";

export interface OnlineSaleDetailsProps {
  /**
   * requestTime (Time when the sale was opended)
   */
  requestTime: string
  /**
   * Identity document of the client
  */
  identityDocument: string;
  /**
   * Owner phone number
   */
  phoneNumber: string;
  /**
   * Owner email
   */
  email: string;
  /**
   * Owner address
   */
  adress: string;
  /**
   * Adress google maps link
   */
  adressLink?: string;
  /**
   * Note by the owner
   */
  note: string;
  /**
   * Total width of the component
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

/**
 * Primary UI component for user interaction
 */
export const OnlineSaleDetails = ({
  requestTime,
  identityDocument,
  phoneNumber,
  email,
  adress,
  adressLink,
  note,
  width,
  height,
  ...props
}: OnlineSaleDetailsProps) => {

  return (
    <Box width={width} height={height}>
      <div className={styles["online-sale-details--item"]}
        style={{ marginBottom: "0" }}>
        <Box className={styles["online-sale-details--icon-container"]}
          style={{ marginBottom: "2px" }}>
          <Icon icon="clock" size="22px" />
        </Box>
        <Text>{requestTime}</Text>
      </div>
      <Box className={styles["online-sale-details--item"]}>
        <Box className={styles["online-sale-details--icon-container"]}>
          <Icon icon="identity-document" size="22px" />
        </Box>
        <Text> {identityDocument} </Text>
      </Box>
      <Box className={styles["online-sale-details--item"]}>
        <Box className={styles["online-sale-details--icon-container"]}>
          <Icon icon="phone" size="22px" />
        </Box>
        <Text> {phoneNumber} </Text>
      </Box>
      <Box className={styles["online-sale-details--item"]}>
        <Box className={styles["online-sale-details--icon-container"]}>
          <Icon icon="mail-envelope" size="22px" />
        </Box>
        <Text> {email} </Text>
      </Box>
      <Box className={styles["online-sale-details--item"]}>
        <Box className={styles["online-sale-details--icon-container"]}>
          <Icon icon="location" size="22px" />
        </Box>
        <Text> {adress} </Text>
      </Box>

      {
        adressLink && 
        <Box className={styles["online-sale-details--item"]}>
        <Box className={styles["online-sale-details--icon-container"]}>
          <Icon icon="location" size="22px" />
        </Box>
        <Box onClick={
          () => openInNewTab(adressLink!)
        }>
          <Text hyperlinkStyle> Google Maps </Text>

        </Box>

      </Box> 
      }
      


      {note != "" &&
        <Box>
          <Box>
            <Text> <span style={{ fontWeight: "600" }}>Nota:</span> {note} </Text>
          </Box>
        </Box>
      }
    </Box>
  );
};
