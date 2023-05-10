import React, { forwardRef } from "react";
import "./inputDate.scss";
import "../../atoms/text/text.scss";
import DatePicker from "react-datepicker";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import "react-datepicker/dist/react-datepicker.css";
import { InputFormHook } from "../../hooks/useInputForm";
import styles from "../../assets/scss/variables.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";

interface InputDateProps {
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
  label = "Fecha",
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
          borderColor: inputHook.error ? styles.errorColor : undefined,
          borderWidth: inputHook.error ? "2.5px" : undefined,
        }}
        ref={observer.ref}
        >
        <div className="input-text--content">
          <DatePicker
            selected={inputHook.value}
            onChange={inputHook.setValue}
            onSelect={inputHook.setValue}
            customInput={<DateInputButton />}
            minDate={minDate}
            />

          <div className="input-text--label">
            <Text 
              type="h6"
              weight="400"
              color={inputHook.error ? styles.errorColor : undefined}
            >
              &nbsp;{label}&nbsp;
            </Text>
          </div>
        </div>
      </div>
      <div
        className={
          "input-text--error-container " +
          (inputHook.error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
          }
          >
        {inputHook.error && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {inputHook.errorMessage}
            </Text>
          </>
        )}
      </div>
    </div>

  );
};
