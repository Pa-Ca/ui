import React, { SyntheticEvent, useState } from 'react';
import './reserveDetails.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import OptionObject from '../../utils/objects/OptionObject';
import { InputText } from '../../molecules/inputText/InputText';
import { InputDate } from '../../molecules/inputDate/InputDate';
import { InputSelect } from '../../molecules/inputSelect/InputSelect';
import { InputLongText } from '../../molecules/inputLongText/InputLongText';

interface ReserveDetailsProps {
  /**
   * Branch name
   */
  name: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Nomber of branch reviews
   */
  reviews?: number;
  /**
   * Main branch category
   */
  category?: string;
  /**
   * Price per person
   */
  pricePerson: number;
  /**
   * Branch location
   */
  location?: string;
  /**
   * Consumible price
   */
  price: number;
  /**
   * Branch overview
   */
  overview: string;
  /**
   * Branch picture from uri
   */
  picture?: string;
  /**
   * Current date
   */
  date?: Date;
  /**
   * Function that changes the date
   */
  setDate: (date: Date, event: SyntheticEvent<any, Event> | undefined) => void;
  /**
   * Current entry hour
   */
  hourIn?: OptionObject;
  /**
   * Function that changes the entry hour
   */
  setHourIn?: Function;
  /**
   * Valid entry hours
   */
  validHoursIn?: OptionObject[];
  /**
   * Current departure hour
   */
  hourOut?: OptionObject;
  /**
   * Function that changes the departure hour
   */
  setHourOut?: Function;
  /**
   * Valid departure hours
   */
  validHoursOut?: OptionObject[];
  /**
   * Number of people in the reservation
   */
  persons?: string;
  /**
   * Function that changes the number of people in the reservation
   */
  setPersons?: Function;
  /**
   * Special occasion in the reservation
   */
  occasion?: string;
  /**
   * Function that changes the special occasion in the reservation
   */
  setOccasion?: Function;
  /**
   * Special petiton in the reservation
   */
  petition?: string;
  /**
   * Function that changes the special petiton in the reservation
   */
  setPetition?: Function;
  /**
   * On reservation button click
   */
  onClick?: () => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Mode
   */
  mode?: 'free' | 'paid';
}

/**
 * Primary UI component for user interaction
 */
export const ReserveDetails = ({
  name,
  score,
  reviews,
  category,
  pricePerson,
  location,
  price,
  overview,
  picture,
  date,
  setDate,
  hourIn,
  setHourIn,
  validHoursIn,
  hourOut,
  setHourOut,
  validHoursOut,
  persons,
  setPersons,
  occasion,
  setOccasion,
  petition,
  setPetition,
  onClick,
  color,
  width,
  height,
  ...props
}: ReserveDetailsProps) => {
  return (
    <Box className='reserve-details--container' style={{ width, height }}>
      {/* Branch details */}
      <Box className='reserve-details--title'>
      <Text type="h4" color="#112211" weight="700">
          {" "}Detalles de la reserva{" "}
        </Text>
        </Box>
      {/* Inputs 1 */}
      <Box className='reserve-details--input-container'>
        <Box width='100%' className='reserve-details--input-date'>
          <InputDate date={date} setDate={setDate} />
        </Box>

        <Box width='100%' className='reserve-details--input1'>
          <InputText value={persons} setValue={setPersons} type='number' label='Personas'/>
        </Box>

        <Box width='100%' className='reserve-details--input1'>
          <InputSelect option={hourIn} setOption={setHourIn} options={validHoursIn} label='Hora de Llegada'/>
        </Box>

        <Box width='100%' className='reserve-details--input1'>
          <InputSelect option={hourOut} setOption={setHourOut} options={validHoursOut} label='Hora de Salida (Opcional)'/>
        </Box>
      </Box>

      
      <Text type="h5" color="#112211" weight="700">
          {" "}Petición Especial{" "}
        </Text>
      <InputLongText
        value={petition}
        setValue={setPetition}
        maxLength={480}
        maxRows={6}
        minRows={6}

      />


    </Box>
  );
};
