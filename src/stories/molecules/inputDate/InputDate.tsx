import React, { forwardRef } from "react";
import classnames from "classnames";
import DatePicker from "react-datepicker";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { InputFormHook } from "../../hooks/useInputForm";
import textStyles from "../../atoms/text/text.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
import inputTextStyles from "../inputText/inputText.module.scss";
import styles from "./inputDate.module.scss";

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
  label = "Fecha",
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
        className={classnames(
          textStyles["text"],
          textStyles["text--h6"],
          inputTextStyles["input-text--input"]
        )}
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
      <Box
        className={inputTextStyles["input-text--input-container"]}
        checkStyle={inputHook.code == 1}
        warningStyle={inputHook.code == 3}
        errorStyle={inputHook.code == 4}
        style={{
          width,
          height,
          borderWidth:
            inputHook.code ? "2.5px" : undefined,
        }}
        innerRef={observer.ref}
      >
        <div className={inputTextStyles["input-text--content"]}>
          <DatePicker
            selected={inputHook.value}
            onChange={(date: Date) => inputHook.setValue(date)}
            onSelect={inputHook.setValue}
            customInput={<DateInputButton />}
            popperClassName={styles["react-datepicker--container"]}
            minDate={minDate}
          />

          <div className={inputTextStyles["input-text--label"]}>
            {required && (
              <Text color="red" type="h6" weight="400" style={{ zIndex: 1 }}>
                *
              </Text>
            )}
            <Text
              type="h6"
              style={{ zIndex: 1 }}
              weight={
                inputHook.code != 4 ? "600" : "400"
              }
              checkStyle={inputHook.code == 1}
              warningStyle={inputHook.code == 3}
              errorStyle={inputHook.code == 4}
            >
              &nbsp;{label}&nbsp;
            </Text>
            <div className={inputTextStyles["input-text--medium-box"]} />
          </div>
        </div>
      </Box>
      <div
        className={
          inputTextStyles["input-text--message-container"] +
          " " +
          inputTextStyles[
            inputHook.code
              ? "input-text--message-animation"
              : "input-text--message-no-animation"
          ]
        }
      >
        {inputHook.code == 4 && (
          <>
            <Icon icon="alert" errorStyle={true} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h7" errorStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
        {inputHook.code == 3 && (
          <>
            <Icon
              icon="warning"
              warningStyle={true}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h7" warningStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
        {inputHook.code == 1 && (
          <>
            <Icon
              icon="check"
              checkStyle={true}
              size="20px"
            />
            <div style={{ width: "10px" }} />
            <Text type="h7" checkStyle={true}>
              {inputHook.message}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
