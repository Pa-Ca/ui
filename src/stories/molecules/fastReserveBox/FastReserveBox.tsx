import React, { SyntheticEvent } from "react";
import "./fastReserveBox.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputDate } from "../inputDate/InputDate";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import { InputSelect } from "../inputSelect/InputSelect";
import OptionObject from "../../utils/objects/OptionObject";

interface FastReserveBoxProps {
  /*
      The height of the box
  */
  height?: string;
  /*
      The width of the box
  */
  width?: string;
  /*
      The title of the box
  */
  title?: string;
  /**
   * Current date (Date variable)
   */
  date?: Date;
  /**
   * Function that changes the date
   */
  setDate: (date: Date, event: SyntheticEvent<any, Event> | undefined) => void;
  /**
   * Current hour (Hour variable)
   */
  hour?: OptionObject;
  /**
   * Function that changes the hour
   */
  setHour?: Function;
  /**
   * Valid hours (Hours that can be selected on the hours input select)
   */
  validHours?: OptionObject[];
  /**
   * Current persons number (Attendants (Personas) variable)
   */
  persons?: string;
  /**
   * Function that changes the persons number (Attendants (Personas) variable)
   */
  setPersons?: Function;

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
  height,
  width,
  title = "Haz una Reserva",
  onClickReserve,
  onClickFindHour,
  date,
  setDate,
  hour,
  setHour,
  validHours,
  persons,
  setPersons,
  ...props
}: FastReserveBoxProps) => {
  return (
    <Box
      className="fast-reserve-box--container"
      backgroundColor="white"
      strongShadow
      style={{ width, height }}
    >
      {/* The title of the box */}
      <Box className="fast-reserve-box--title">
        <Text className="fast-reserve-box--title-text" type="h4" weight="700">
          {title}
        </Text>
      </Box>

      <Box className="fast-reserve-box--input-container">
        {/*The box of the InputSelect components*/}
        {/* There should be 3 input select componetes*/}

        {/*Line between the tile and inputs */}
        <Box
          height="1px"
          backgroundColor="#000000"
          className="fast-reserve-box--line"
        />
        <Box className="fast-reserve-box--input-select-top">
          <InputText
            label="Tamaño de Reserva"
            setValue={setPersons}
            value={persons}
            type="number"
          />
        </Box>

        <Box className="fast-reserve-box--input-select-bottom">
          <Box className="fast-reserve-box--input-select-bottom-left">
            <InputDate label="Fecha" setDate={setDate} date={date} />
          </Box>

          <Box className="fast-reserve-box--input-select-bottom-right">
            <InputSelect
              label="Hora"
              option={hour}
              options={validHours}
              setOption={setHour}
            />
          </Box>
        </Box>

        {/* The box of the two buttons */}
        <Box className="fast-reserve-box--reserve-button-box" width="100%">
          <Button
            onClick={onClickReserve}
            backgroundColor="#EF7A08"
            borderColor="white"
            fullWidth
            size="large"
            primary={true}
          >
            <Text
              className="fast-reserve-box--button-text"
              color="white"
              weight="600"
            >
              Reserva Ahora
            </Text>
          </Button>
        </Box>

        <Box className="fast-reserve-box--find-hour-button-box" width="100%">
          <Button
            onClick={onClickFindHour}
            backgroundColor="white"
            borderColor="transparent"
            fullWidth
            size="large"
          >
            <Text
              className="fast-reserve-box--button-text"
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
