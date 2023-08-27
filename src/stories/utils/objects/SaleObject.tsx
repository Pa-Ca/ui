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
   * Sale start time
   */
  startTime: string;
  /**
   * Number of persons
   */
  clientQuantity: number;
  /**
   * Sale note
   */
  note: string;
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
