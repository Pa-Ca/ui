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
  setValue: (newValue: React.SetStateAction<T>) => void;
  /**
   * Indicates if there is an error in the input
   */
  error: boolean;
  /**
   * Hook to change the current error
   */
  setError: (error: boolean) => void;
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
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>(initialErrorMessage);

  const setValue = (newValue: React.SetStateAction<T>) => {
    setError(false);
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
