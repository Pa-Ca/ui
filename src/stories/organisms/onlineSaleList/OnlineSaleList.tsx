import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./onlineSaleList.module.scss";
import { Button } from "../../atoms/button/Button";
import { OnlineSale } from "../../molecules/onlineSale/OnlineSale";
import { OnlineSaleProps } from "../../molecules/onlineSale/OnlineSale";
import OnlineSalesList from "../../utils/objects/OnlineSalesList"
import { OnlineSaleStatuses } from "../../utils/objects/OnlineSaleStatus";

interface OnlineSaleListProps {
  /**
   * Reservation list data
   */
  onlineSales: OnlineSaleProps[];
  /**
   * State of reservations that will be displayed
   */
  state: number;
  /**
   * Icon size
   */
  icon_size: string;
  /**
   * Main color
   */
  color?: string;
  /**
   * Set show modal
   */
  setShowModal: (open: boolean) => void;
}

/**
 * Primary UI component for user interaction
 */
export const OnlineSaleList = ({
  onlineSales = [],
  icon_size = "450px",
  state,
  color,
  setShowModal,
  ...props
}: OnlineSaleListProps) => {
  /**
   * Group reservations by date
   */
  const reservationsByDate = useMemo(() => {
    return onlineSales.reduce((result: OnlineSalesList[], onlineSale) => {
      
      const date = new Date(onlineSale.date).toISOString().split("T")[0];
      const group = result.find((group) => group.date === date);
      
      if (group) {
        group.onlineSales.push(onlineSale);
      } else {
        result.push({
          date,
          onlineSales: [onlineSale],
        });
      }
      return result;
    }, []).reverse();;
  }, [onlineSales]);

  const title = useMemo(() => {
    switch (state) {
      case OnlineSaleStatuses.PENDING:
        return "Pedidos Pendientes";
      case OnlineSaleStatuses.ACCEPTED:
        return "Pedidos Aceptados";
      case OnlineSaleStatuses.STARTED:
        return "Pedidos en preparacion"
      case OnlineSaleStatuses.READY_TO_TAKE_OUT:
        return "Pedidos listos para ser buscados";
      case OnlineSaleStatuses.ON_THE_WAY:
        return "Pedidos en camino"
      case OnlineSaleStatuses.DELIVERED:
        return "Pedidos Entregados y pendientes por pago"
      default:
        return "Histórico";
    }
  }, [state]);

  const header = useMemo(() => {
    switch (state) {
      case 3:
        return (
          <Box className={styles["online-sale-list--header"]}>
            <Box className={styles["online-sale-list--active"]}>
              <Text weight="700" type="h3">
                {title}
              </Text>
            </Box>

            <Box>
              <Button
                primary
                backgroundColor={color}
                onClick={() => setShowModal(true)}
              >
                <Text type="h6">Añadir Reserva</Text>
              </Button>
            </Box>
          </Box>
        );
      default:
        return (
          <Box className={styles["online-sale-list--header-record"]}>
            <Text weight="700" type="h3">
              {title}
            </Text>
          </Box>
        );
    }
  }, [state, color]);

  return (
    <Box className={styles["online-sale-list--container"]}>
      {header}

      {reservationsByDate.length > 0 ? (
        <Box className={styles["online-sale-list--reservations"]}>
          {reservationsByDate.map((group, index) => (
            <Box
              key={`online-sale-list--state-${state}-date-${group.date}-index-${index}`}
              className={styles["online-sale-list--reservation"]}
            >
              <Box
                strongShadow
                className={styles["online-sale-list--date"]}
              >
                <Text weight="700" type="h4">{group.date}</Text>
              </Box>

              {group.onlineSales.map((onlinesale, index) => (
                <OnlineSale {...onlinesale}/>
              ))}
            </Box>
          ))}
        </Box>
      ) : (
        <Box className={styles["online-sale-list--no-branch-box"]}>
          {" "}
          <Icon icon="share" size={icon_size} />
          <Text type="h4">
            {" "}
            No hay pedidos
            {state == OnlineSaleStatuses.PENDING
              ? " En Curso"
              : state == OnlineSaleStatuses.ACCEPTED
              ? " Aceptadas"
              : state == OnlineSaleStatuses.STARTED
              ? " Empezados"
              : state == OnlineSaleStatuses.ON_THE_WAY
              ? " En Camino"
              : state == OnlineSaleStatuses.DELIVERED
              ? " Entregados (pendientes por pago)" 
              : state == OnlineSaleStatuses.READY_TO_TAKE_OUT
              ? " Listos para ser buscados"
              : " Registradas"}
            .
          </Text>
        </Box>
      )}
    </Box>
  );
};
