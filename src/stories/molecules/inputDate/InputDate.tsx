import React, { forwardRef } from "react";
import "./inputDate.scss";
import "../../atoms/text/text.scss";
import DatePicker from "react-datepicker";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import "react-datepicker/dist/react-datepicker.css";
import { InputFormHook } from "../../hooks/useInputForm";
import useResizeObserver from "../../hooks/useResizeObserver";

import styles from "../../assets/scss/variables.module.scss";

interface InputDateProps {
  /**
   * Indicates if the input is required
   */
  required?: boolean;
  /**
   * Date input hook
   */
  inputHook: InputFormHook<Date>;
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Minimun date
   */
  minDate?: Date;
  /**
   * Input width
   */
  width?: string;
  /**
   * Input height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputDate = ({
  inputHook,
  label = "* Fecha",
  required,
  minDate,
  width,
  height,
  ...props
}: InputDateProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  type ButtonProps = React.HTMLProps<HTMLButtonElement>;
  const DateInputButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ value, onClick }, ref) => (
      <button
        className="text text--h6 input-text--input"
        style={{ height: `${observer.height}px` }}
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    )
  );

  return (
    <div>
      <div
        className="input-text--input-container"
        style={{
          width,
          height,
          borderColor: inputHook.error == 1 ? styles.errorColor : 
                        inputHook.error == 2 ? styles.warningColor :  undefined,
          borderWidth: inputHook.error == 1 || inputHook.error == 2
                        ? "2.5px" : undefined,
        }}
        ref={observer.ref}
        >
        <div className="input-text--content">
          <DatePicker
            selected={inputHook.value}
            onChange={(date: Date) => inputHook.setValue(date)}
            onSelect={inputHook.setValue}
            customInput={<DateInputButton />}
            minDate={minDate}
            />

          <div className="input-text--label">
            {required && (
              <Text color="red" weight="400">
                *
              </Text>
            )}
            <Text
              type="h6"
              weight={inputHook.error == 1 || inputHook.error == 2 ? "600" : "400"}
              color={inputHook.error == 1 ? styles.errorColor :
                      inputHook.error == 2 ? styles.warningColor : undefined}
            >
              &nbsp;{label}&nbsp;
            </Text>
          </div>
        </div>
      </div>
      <div
        className={
          "input-text--error-container " +
          (inputHook.error == 1 || inputHook.error == 2
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
          }
          >
        {inputHook.error == 1 && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
        {inputHook.error == 2 && (
          <>
            <Icon icon="warning" color={styles.warningColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.warningColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </div>
    </div>

  );
};
