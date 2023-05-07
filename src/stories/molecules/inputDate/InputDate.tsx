import React, { forwardRef, SyntheticEvent } from "react";
import "./inputDate.scss";
import "../../atoms/text/text.scss";
import DatePicker from "react-datepicker";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../assets/scss/variables.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";

interface InputDateProps {
  /**
   * Current selected date
   */
  date?: Date;
  /**
   * Function to select date
   */
  setDate: (date: Date, event: SyntheticEvent<any, Event> | undefined) => void;
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Minimun date
   */
  minDate?: Date;
  /**
   * Indicates whether the input should display an error message
   */
  error?: boolean;
  /**
   * Message displayed when there is an error
   */
  errorMessage?: string;
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
  date,
  setDate,
  label = "Fecha",
  error = false,
  errorMessage = "",
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
          borderColor: error ? styles.errorColor : undefined,
          borderWidth: error ? "2.5px" : undefined,
        }}
        ref={observer.ref}
        >
        <div className="input-text--content">
          <DatePicker
            selected={date}
            onChange={setDate}
            onSelect={setDate}
            customInput={<DateInputButton />}
            minDate={minDate}
            />

          <div className="input-text--label">
            <Text 
              type="h6"
              weight="400"
              color={error ? styles.errorColor : undefined}
            >
              &nbsp;{label}&nbsp;
            </Text>
          </div>
        </div>
      </div>
      <div
        className={
          "input-text--error-container " +
          (error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
          }
          >
        {error && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              {errorMessage}
            </Text>
          </>
        )}
      </div>
    </div>

  );
};
