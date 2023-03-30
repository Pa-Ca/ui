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
  width,
  height,
  color = "white",
  mode = 'free',
  ...props
}: ReserveDetailsProps) => {

  if (mode === 'paid') {
    var  component_title =  'Detalles de la reserva';
    var centering = 'flex-start';
  } else {
    var  component_title =  'Completa tus datos para reservar';
    var centering = 'center';
  };

  return (
    <Box className='reserve-details--container' style={{ width, height }} backgroundColor = {color} weakShadow {...props}>
      {/* Branch details */}
        <Box className='reserve-details--title' style = {
        {
          justifyContent:  centering
  
        }}>
      <Text type="h4" color="#112211" weight="700" >
          {" "}{component_title}{" "}
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
        {" "}Petición Especial (Opcional){" "}
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
