import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./fastReserveBox.module.scss";
import { InputDate } from "../inputDate/InputDate";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import { InputSelect } from "../inputSelect/InputSelect";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";

interface FastReserveBoxProps {
  /**
   * Current date input hook
   */
  date: InputFormHook<Date>;
  /**
   * Current hour input hook
   */
  hour: InputFormHook<OptionObject<string | null>>;
  /**
   * Current persons number input hook
   */
  persons: InputFormHook<string>;
  /**
   * Valid hours (Hours that can be selected on the hours input select)
   */
  validHours?: OptionObject<string>[];
  /**
   * The height of the box
   */
  height?: string;
  /**
   * The width of the box
   */
  width?: string;
  /**
   * The title of the box
   */
  title?: string;
  /**
   * On Reserve button click
   */
  onClickReserve?: () => void;
  /**
   * On Find Hour button click
   */
  onClickFindHour?: () => void;
}

export const FastReserveBox = ({
  date,
  hour,
  persons,
  validHours,
  height,
  width,
  title = "Haz una Reserva",
  onClickReserve,
  onClickFindHour,
  ...props
}: FastReserveBoxProps) => {
  return (
    <Box
      className={styles["fast-reserve-box--container"]}
      backgroundColor="white"
      strongShadow
      style={{ width, height }}
    >
      {/* The title of the box */}
      <Box className={styles["fast-reserve-box--title"]}>
        <Text className={styles["fast-reserve-box--title-text"]} type="h4" weight="700">
          {title}
        </Text>
      </Box>

      <Box className={styles["fast-reserve-box--input-container"]}>
        {/*The box of the InputSelect components*/}
        {/* There should be 3 input select componetes*/}

        {/*Line between the tile and inputs */}
        <Box
          height="1px"
          backgroundColor="#000000"
          className={styles["fast-reserve-box--line"]}
        />
        <Box className={styles["fast-reserve-box--input-select-top"]}>
          <InputText
            label="Tamaño de Reserva"
            inputHook={persons}
            type="number"
          />
        </Box>

        <Box className={styles["fast-reserve-box--input-select-bottom"]}>
          <Box className={styles["fast-reserve-box--input-select-bottom-left"]}>
            <InputDate label="Fecha" inputHook={date} />
          </Box>

          <Box className={styles["fast-reserve-box--input-select-bottom-right"]}>
            <InputSelect label="Hora" inputHook={hour} options={validHours} />
          </Box>
        </Box>

        {/* The box of the two buttons */}
        <Box className={styles["fast-reserve-box--reserve-button-box"]} width="100%">
          <Button
            onClick={onClickReserve}
            backgroundColor="#EF7A08"
            borderColor="white"
            fullWidth
            size="large"
            primary={true}
          >
            <Text
              className={styles["fast-reserve-box--button-text"]}
              color="white"
              weight="600"
            >
              Reserva Ahora
            </Text>
          </Button>
        </Box>

        <Box className={styles["fast-reserve-box--find-hour-button-box"]} width="100%">
          <Button
            onClick={onClickFindHour}
            backgroundColor="white"
            borderColor="transparent"
            fullWidth
            size="large"
          >
            <Text
              className={styles["fast-reserve-box--button-text"]}
              color="black"
              weight="600"
            >
              Encontrar una Hora
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
