import React from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { TextareaAutosize } from "@mui/material";
import styles from "./inputLongText.module.scss";
import inputTextStyles from "../inputText/inputText.module.scss";

interface InputLongTextProps {
  /**
   * Label to be displayed at the top of the input
   */
  label?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input width
   * @default 100%
   */
  width?: string;
  /**
   * Input height
   * @default 100%
   */
  height?: string;
  /**
   * Minimum number of rows
   * */
  minRows?: number;
  /**
   * Maximum number of rows. Leave undefined for no limit
   */
  maxRows?: number;
  /**
   * Function that changes the value each time the input is updated
   * (It is only visual!, the user can still write more lines but a scrollbar will appear)
   * To limit the number of characters, use the maxLength prop
   */
  setValue?: Function;
  /**
   * Maximum number of characters
   * @default 800
   */
  maxLength?: number;
  /**
   * Class name
   * */
  className?: string;
  /**
   * Style
   * */
  style?: React.CSSProperties;
}

export const InputLongText = ({
  label = "",
  value,
  placeholder,
  setValue = () => {},
  minRows = undefined,
  maxRows = undefined,
  width = "100%",
  height = "100%",
  maxLength = 800,
  className,
  style,
  ...props
}: InputLongTextProps) => {
  return (
    <Box
      className={styles["input-long-text-container"]}
      style={{ width, height }}
      {...props}
    >
      {label != "" && (
        <div className={inputTextStyles["input-text--label"]}>
          <Text type="h6" weight={"400"} color={undefined} style={{ zIndex: 1 }}>
            &nbsp;{label}&nbsp;
          </Text>
          <div className={inputTextStyles["input-text--medium-box"]} />
        </div>
      )}
      <TextareaAutosize
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        style={{ opacity: "0.75", lineHeight: "20px", ...style }}
        className={classnames(styles["input-long-text"], className)}
        hidden={true}
        minRows={minRows}
        maxRows={maxRows}
        maxLength={maxLength}
      />
    </Box>
  );
};
