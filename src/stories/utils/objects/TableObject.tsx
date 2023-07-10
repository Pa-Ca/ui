type TableDTO = {
  /**
   * Table id
   */
  id: number;
  /**
   * Id of the branch that corresponds to the table
   */
  branchId: number;
  /**
   * Indicates if the product is deleted
   */
  deleted: boolean;
  /**
   * Table name
   */
  name: string;
  /**
   * Indicates if the table has a active sale
   */
  hasSale: boolean;
  /**
   * On click function
   */
  onClick: () => void;
};

export { type TableDTO as default };
