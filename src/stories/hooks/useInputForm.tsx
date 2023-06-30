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
   * Indicates if there is no error = 0, 
   * error = 1, warning = 2 in the input
   */
  error: number;
  /**
   * Hook to change the current error
   */
  setError: (error: number) => void;
  /**
   * Error message if any
   */
  errorMessage: string;
  /**
   * Hook to change the error message
   */
  setErrorMessage: (message: string) => void;
}

/**
 * Hook to control the state of the inputs of the forms
 */
export default <T extends any>(
  initialValue: T,
  initialErrorMessage: string = ""
): InputFormHook<T> => {
  const [value, setValue_] = useState<T>(initialValue);
  const [error, setError] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>(initialErrorMessage);

  const setValue = (newValue: React.SetStateAction<T>) => {
    if (error != 2) setError(0);
    setValue_(newValue);
  };

  return {
    value,
    setValue,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  };
};
