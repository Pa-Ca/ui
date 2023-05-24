import React, { forwardRef, SyntheticEvent } from "react";
import "./inputDate.scss";
import "../../atoms/text/text.scss";
import DatePicker from "react-datepicker";
import { Text } from "../../atoms/text/Text";
import "react-datepicker/dist/react-datepicker.css";
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
    <div
      className="input-text--container"
      style={{ width, height }}
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
          <Text type="h6" weight="400">
            &nbsp;{label}&nbsp;
          </Text>
        </div>
      </div>
    </div>
  );
};
