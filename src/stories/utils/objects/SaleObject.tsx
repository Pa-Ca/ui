import TaxObject from "./TaxObject";
import TableObject from "./TableObject";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";

type SaleObject = {
  /**
   * Sale id
   */
  id: number;
  /**
   * Sale owner name
   */
  ownerName: string;
  /**
   * Sale owner phone
   */
  ownerPhone: string;
  /**
   * Sale owner email
   */
  ownerEmail: string;
  /**
   * Sale start time
   */
  startTime: Date;
  /**
   * Number of persons
   */
  clientQuantity: number;
  /**
   * Sale note
   */
  note: string;
  /**
   * Indicates if sale has a associated reservation
   */
  hasReservation: boolean;
  /**
   * Taxes
   */
  taxes: TaxObject[];
  /**
   * Tables
   */
  tables: TableObject[];
  /**
   * Product list
   */
  products: SaleProductProps[];
};

export { type SaleObject as default };
