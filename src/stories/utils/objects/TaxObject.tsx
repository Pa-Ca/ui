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
  ) => void,
  /**
   * On delete function
   */
  deleteValueFunction: () => void,
};

export { type TaxObject as default };
