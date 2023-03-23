import React from 'react';
import './branchSearch.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import getValidHours from '../../utils/getValidHours';
import OptionObject from '../../utils/objects/OptionObject';
import { InputText } from '../../molecules/inputText/InputText';
import { InputDate } from '../../molecules/inputDate/InputDate';
import { InputSelect } from '../../molecules/inputSelect/InputSelect';

interface BranchSearchProps {
  /**
   * Current date
   */
  date?: Date;
  /**
   * Function that changes the date
   */
  setDate?: (date: Date) => void;
  /**
   * Current hour
   */
  hour?: OptionObject;
  /**
   * Function that changes the hour
   */
  setHour?: Function;
  /**
   * Current persons number
   */
  persons?: string;
  /**
   * Function that changes the persons number
   */
  setPersons?: Function;
  /**
   * Current branch search
   */
  search?: string;
  /**
   * Function that changes the branch search
   */
  setSearch?: Function;
  /**
   * On search button click
   */
  onClick?: () => void;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
  /**
   * Main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchSearch = ({
  date,
  setDate = () => {},
  hour, 
  setHour,
  persons,
  setPersons,
  search,
  setSearch,
  onClick,
  width,
  height,
  color,
  ...props
}: BranchSearchProps) => {
  return (
    <Box className='branch-search--container' style={{ width, height }}>
      {/* Searchs */}
      <Box className='branch-search--search-zone'>
        <Box className='branch-search--search-date'>
          <InputDate date={date} setDate={setDate} minDate={new Date()} />
        </Box>

        <Box className='branch-search--search-hour'>
          <InputSelect option={hour} setOption={setHour} options={getValidHours()} label='Hora'/>
        </Box>

        <Box className='branch-search--search-persons'>
          <InputText value={persons} setValue={setPersons} type='number' label='Personas' />
        </Box>

        <Box className='branch-search--search-text'>
          <InputText value={search} setValue={setSearch} label='Locación, Restaurante, Cuisine'/>
        </Box>
      </Box>

      {/* Button */}
      <Box className='branch-search--button-zone'>
        <Button primary={true} size='large' backgroundColor={color} onClick={onClick}>
          <Box className='branch-search--button' backgroundColor='transparent'>
            <Icon icon='paper-plane' size={'16px'} color='white' />
            <Text className='branch-search--button-text'>
              Muéstrame Locales
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
