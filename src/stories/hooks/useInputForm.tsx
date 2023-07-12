import { useState } from "react";

/**
 * Input form hook interface
 */
export interface InputFormHook<T> {
  /**
   * Current value
   */
  value: T;
  /**
   * Hook to change current value
   */
  setValue: React.Dispatch<React.SetStateAction<T>>;
  /**
   * Indicates no code = 0, check = 1,
   * log = 2, warning = 3, error = 4
   */
  code: number;
  /**
   * Hook to change the current code
   */
  setCode: (code: number) => void;
  /**
   * Code message if any
   */
  message: string;
  /**
   * Hook to change the code message
   */
  setMessage: (message: string) => void;
}

/**
 * Hook to control the state of the inputs of the forms
 */
export default <T extends any>(
  initialValue: T,
  initialmessage: string = ""
): InputFormHook<T> => {
  const [value, setValue_] = useState<T>(initialValue);
  const [code, setCode] = useState<number>(0);
  const [message, setMessage] = useState<string>(initialmessage);

  const setValue = (newValue: React.SetStateAction<T>) => {
    if (code != 2) setCode(0);
    setValue_(newValue);
  };

  return {
    value,
    setValue,
    code,
    setCode,
    message,
    setMessage,
  };
};
