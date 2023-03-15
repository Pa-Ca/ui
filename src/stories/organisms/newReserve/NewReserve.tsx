import React, { SyntheticEvent, useState } from 'react';
import './newReserve.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import { Button } from '../../atoms/button/Button';
import useResizeObserver from '../../hooks/useResizeObserver';
import { StarRating } from '../../atoms/starRating/StarRating';
import { InputText } from '../../molecules/inputText/InputText';
import { InputDate } from '../../molecules/inputDate/InputDate';
import { InputSelect, OptionObject } from '../../molecules/inputSelect/InputSelect';

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
        <Box className='new-reserve--data-container'>
          <Box backgroundImage={picture} className='new-reserve--image'/>

          <Box className='new-reserve--branch-data-container' width={`${summaryWidth}px`}>
            <Text type='h3' color='#121212' weight='600' opacity={0.7}>
              {name}
            </Text>

            <Box>
              <StarRating size={16} rating={score} color={color} />
              <Text type='h8' color='#121212' weight='400' className='new-reserve--data-text'>
                {reviews} Reviews
              </Text>
            </Box>

            <Box className='new-reserve--branch-type-container'>
              <Icon icon='bell' size='18px' />
              <Text type='h6' color='#112211' opacity={0.75} className='new-reserve--data-text'> 
                {amenity}
              </Text>

              <Box width='16px' />
              
              <Icon icon='dollar' size='18px' />
              <Text type='h6' color='#112211' opacity={0.75} className='new-reserve--data-text'> 
                {price}$ p/ Persona
              </Text>
            </Box>

            <Box className='new-reserve--branch-type-container'>
              <Icon icon='location' size='18px' />
              <Text type='h6' color='#112211' opacity={0.75} className='new-reserve--data-text'>
                {location}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box className='new-reserve--price-container'>
          <Text type='h3' color='#121212' weight='700'> Reserva</Text>
          <Text type='h3' color={color} weight='700'> {consumiblePrice}$ Consumible </Text>
        </Box>
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
