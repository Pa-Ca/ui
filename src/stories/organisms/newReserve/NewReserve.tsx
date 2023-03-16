import React, { SyntheticEvent, useState } from 'react';
import './newReserve.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import useResizeObserver from '../../hooks/useResizeObserver';
import { InputText } from '../../molecules/inputText/InputText';
import { InputDate } from '../../molecules/inputDate/InputDate';
import { InputSelect, OptionObject } from '../../molecules/inputSelect/InputSelect';
import { BranchContentSummary } from '../../molecules/branchContentSummary/BranchContentSummary';

interface NewReserveProps {
  /**
   * Branch name
   */
  name?: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Nomber of branch reviews
   */
  reviews?: number;
  /**
   * Main branch amenity
   */
  amenity?: string;
  /**
   * Price per person
   */
  price?: number;
  /**
   * Branch location
   */
  location?: string;
  /**
   * Consumible price
   */
  consumiblePrice?: number;
  /**
   * Branch overview
   */
  overview?: string;
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
}

/**
 * Primary UI component for user interaction
 */
export const NewReserve = ({
  name,
  score,
  reviews,
  amenity,
  price,
  location,
  consumiblePrice,
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
}: NewReserveProps) => {
  const containerObserver = useResizeObserver<HTMLDivElement>();
  // Container width - 2*padding - imageWidth - priceWidth
  const summaryWidth = containerObserver.width - 550;

  return (
    <Box className='new-reserve--container' style={{ width, height }} innerRef={containerObserver.ref}>
      {/* Branch details */}
      <Box className='new-reserve--details'>
        <Box backgroundImage={picture} className='new-reserve--image'/>
        
        <BranchContentSummary
          name={name}
          score={score}
          reviews={reviews}
          amenity={amenity}
          price={price}
          location={location}
          consumiblePrice={consumiblePrice}
          color={color}
          width='100%'
        />
      </Box>

      {/* Inputs 1 */}
      <Box className='new-reserve--input-container'>
        <Box width='100%' className='new-reserve--input-date'>
          <InputDate date={date} setDate={setDate} />
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputText value={persons} setValue={setPersons} type='number' label='Personas'/>
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputSelect option={hourIn} setOption={setHourIn} options={validHoursIn} label='Hora de Llegada'/>
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputSelect option={hourOut} setOption={setHourOut} options={validHoursOut} label='Hora de Salida (Opcional)'/>
        </Box>
      </Box>

      {/* Inputs 2 */}
      <Box className='new-reserve--input-container'>
        <Box width='100%'>
          <InputText value={occasion} setValue={setOccasion} type='text' label='Ocasión Especial (Opcional)'/>
        </Box>

        <Box width='100%' className='new-reserve--input2'>
          <InputText value={petition} setValue={setPetition} type='text' label='Petición Especial (Opcional)'/>
        </Box>
      </Box>

      {/* Find */}
      <Box className='new-reserve--find-button-container'>
        <Button primary fullWidth size='large' backgroundColor={color} onClick={onClick} >
          <Text type='h6' weight='600'> Encontrar Mesa </Text>
        </Button>
      </Box>

      {/* Hours */}
      <Box>

      </Box>

      {/* Overview */}
      <Box className='new-reserve--overview-container'>
        <Text type='h5' color='#112211' weight='700'> Overview </Text>

        <Box height='16px' />

        <Text color='#112211' opacity={0.75} className='new-reserve--overview'>
          {overview}
        </Text>
      </Box>
    </Box>
  );
};
