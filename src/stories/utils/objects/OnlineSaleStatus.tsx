import { IconType } from "../../atoms/icon/Icon";

type OnlineSaleStatusObject = {
  /**
   * Numerical value
   */
  number: number;
  /**
   * Standard name of the status
   */
  name: string;
  /**
   * Name to show to the user
   */
  nameShow: string;

  /**
   * Name to icon that corresponds with the status in UI
   */
  icon: IconType;
};

export const enum OnlineSaleStatuses {
  PENDING = 0,
  REJECTED = 1,
  ACCEPTED = 2,
  STARTED = 3,
  READY_TO_TAKE_OUT = 4,
  ON_THE_WAY = 5,
  DELIVERED = 6,
  CANCELLED = 7,
  CLOSED = 8
}

export const onlineSaleStatusList: OnlineSaleStatusObject[] = [
  { number: OnlineSaleStatuses.PENDING, name: "pending", nameShow: "Pendiente", icon: "pending-status" },
  { number: OnlineSaleStatuses.REJECTED, name: "rejected", nameShow: "Rechazada", icon: "rejected-status" },
  { number: OnlineSaleStatuses.ACCEPTED, name: "accepted", nameShow: "Aceptada", icon: "accepted-status" },

  { number: OnlineSaleStatuses.STARTED, name: "started", nameShow: "En curso", icon: "started-status" },

  { number: OnlineSaleStatuses.READY_TO_TAKE_OUT, name: "ready-to-take-out", nameShow: "Lista", icon: "pick-up" },
  { number: OnlineSaleStatuses.ON_THE_WAY, name: "on-the-way", nameShow: "En Camino", icon: "delivery" },

  { number: OnlineSaleStatuses.DELIVERED, name: "delivered", nameShow: "Entregada", icon: "reciving-package" },

  { number: OnlineSaleStatuses.CANCELLED, name: "canceled", nameShow: "Cancelada", icon: "retired-status" },
  { number: OnlineSaleStatuses.CLOSED, name: "closed", nameShow: "Finalizada", icon: "closed-status" }
]

export { type OnlineSaleStatusObject as default };  