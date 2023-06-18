import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./cancellationForm.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import { InputLongText } from "../../molecules/inputLongText/InputLongText";

interface CancellationFormProps {
  /**
   * Possible reasons for the cancellation
   * */
  cancellationReasons: OptionObject<number>[];
  /**
   * Reason for the cancellation
   */
  reason: InputFormHook<OptionObject<number | null>>;
  /**
   * Special occasion in the reservation
   */
  description: InputFormHook<string>;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;

  /**
   * On click event
   * */
  onClick?: () => void;

  /**
   * Component main color
   * */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const CancellationForm = ({
  cancellationReasons,
  reason,
  description,
  width,
  height,
  color,
  onClick,
  ...props
}: CancellationFormProps) => {
  const component_title = "Razón de la cancelación";

  return (
    <Box
      className={styles["cancellation-form--container"]}
      style={{ width, height }}
      backgroundColor="White"
      {...props}
    >
      {/* Branch details */}
      <Box
        className={styles["cancellation-form--title"]}
        style={{ justifyContent: "center" }}
      >
        <Text type="h4" color="#112211" weight="700">
          {" "}
          {component_title}{" "}
        </Text>
      </Box>

      {/* Inputs 1 */}
      <Box className={styles["cancellation-form--input-container"]}>
        <Box width="100%" className={styles["cancellation-form--input1"]}>
          <InputSelect
            inputHook={reason}
            options={cancellationReasons}
            label="* Razón"
          />
        </Box>
      </Box>
      <Box className={styles["cancellation-form--input-container"]}>
        <Box width="100%" className={styles["cancellation-form--input"]}>
          <InputLongText
            label="Descripción"
            value={description.value}
            setValue={description.setValue}
            maxLength={430}
            maxRows={5}
            minRows={5}
          />
        </Box>
      </Box>

      <Box>
        <Box
          height="0.5px"
          backgroundColor="#889188"
          style={{ flex: 1 }}
          className={styles["cancellation-form--line"]}
        />
      </Box>

      <Box className={styles["cancellation-form--button"]}>
        <Button
          primary
          size="large"
          onClick={onClick}
          fullWidth={true}
          backgroundColor={color}
        >
          <Box className={styles["cancellation-form--button-text"]}>
            <Text color="white" type="h6" weight="600">
              Cancelar
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
