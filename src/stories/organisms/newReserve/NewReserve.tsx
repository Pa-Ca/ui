import React from 'react';
import './newReserve.scss';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';
import { Button } from '../../atoms/button/Button';
import useInputForm, { InputFormHook } from '../../hooks/useInputForm';
import OptionObject from '../../utils/objects/OptionObject';
import { InputText } from '../../molecules/inputText/InputText';
import { InputDate } from '../../molecules/inputDate/InputDate';
import { InputSelect } from '../../molecules/inputSelect/InputSelect';
import { BranchContentSummary } from '../../molecules/branchContentSummary/BranchContentSummary';
import { BranchContentOverview } from '../../molecules/branchContentOverview/BranchContentOverview';

interface NewReserveProps {
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
  date: InputFormHook<Date>;
  /**
   * Current entry hour
   */
  hourIn: InputFormHook<OptionObject>;
  /**
   * Valid entry hours
   */
  validHoursIn?: OptionObject[];
  /**
   * Current departure hour
   */
  hourOut: InputFormHook<OptionObject>;
  /**
   * Valid departure hours
   */
  validHoursOut?: OptionObject[];
  /**
   * Number of people in the reservation
   */
  persons: InputFormHook<string>;
  /**
   * Special occasion in the reservation
   */
  occasion: InputFormHook<string>;
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
  category,
  pricePerson,
  location,
  price,
  overview,
  picture,
  date,
  hourIn,
  validHoursIn,
  hourOut,
  validHoursOut,
  persons,
  occasion,
  onClick,
  color,
  width,
  height,
  ...props
}: NewReserveProps) => {
  return (
    <Box className='new-reserve--container' style={{ width, height }}>
      {/* Branch details */}
      <Box className='new-reserve--details'>
        <Box backgroundImage={picture} className='new-reserve--image'/>
        
        <Box width='100%'>
          <BranchContentSummary
            name={name}
            score={score}
            reviews={reviews}
            category={category}
            price={price}
            pricePerson={pricePerson}
            color={color}
            width='100%'
          />
          <Box className='new-reserve--location'>
            <Icon icon='location' size='18px' />
            <Text type='h6' color='#112211' opacity={0.75} className='branch-content-summary--data-text'> 
              {location}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Inputs 1 */}
      <Box className='new-reserve--input-container'>
        <Box width='100%' className='new-reserve--input-date'>
          <InputDate inputHook={date}/>
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputText inputHook={persons} type='number' label='Personas'/>
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputSelect inputHook={hourIn} options={validHoursIn} label='Hora de Llegada'/>
        </Box>

        <Box width='100%' className='new-reserve--input1'>
          <InputSelect inputHook={hourOut} options={validHoursOut} label='Hora de Salida (Opcional)'/>
        </Box>
      </Box>

      {/* Inputs 2 */}
      <Box className='new-reserve--input-container'>
        <Box width='100%'>
          <InputText inputHook={occasion} type='text' label='Ocasión Especial (Opcional)'/>
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
      <Box>
        <BranchContentOverview overview={overview} />
      </Box>
    </Box>
  );
};
