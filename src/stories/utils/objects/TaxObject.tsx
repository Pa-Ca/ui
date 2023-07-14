import { InputFormHook } from "../../hooks/useInputForm";

type TaxObject = {
  /**
   * Tax name
   */
  name: string;
  /**
   * Tax type
   */
  type: number;
  /**
   * Tax value
   */
  value: number;
  /**
   * On save function
   */
  saveValueFunction: (
    name: InputFormHook<string>,
    type: InputFormHook<string>,
    value: InputFormHook<string>
  ) => Promise<void>,
  /**
   * On delete function
   */
  deleteValueFunction: () => Promise<void>,
};

export { type TaxObject as default };
