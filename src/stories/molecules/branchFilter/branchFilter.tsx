import React, { SyntheticEvent, useState } from 'react';
import './branchFilter.scss'
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
import { InputText } from '../inputText/InputText';
import { InputDate } from '../inputDate/inputDate';
import { InputSelect, OptionObject } from '../inputSelect/InputSelect';

interface BranchFilterProps {
  /**
   * Current date
   */
  date?: Date;
  /**
   * Function that changes the date
   */
  setDate: (date: Date, event: SyntheticEvent<any, Event> | undefined) => void;
  /**
   * Current hour
   */
  hour?: OptionObject;
  /**
   * Function that changes the hour
   */
  setHour?: Function;
  /**
   * Valid hours
   */
  validHours?: OptionObject[];
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
export const BranchFilter = ({
  date,
  setDate,
  hour, 
  setHour,
  validHours,
  persons,
  setPersons,
  search,
  setSearch,
  width,
  height,
  color,
  ...props
}: BranchFilterProps) => {
  return (
    <Box className='branch-filter--container' style={{ width, height }}>
      {/* Filters */}
      <Box className='branch-filter--filter-zone'>
        <Box className='branch-filter--filter-date'>
          <InputDate date={date} setDate={setDate} />
        </Box>

        <Box className='branch-filter--filter-hour'>
          <InputSelect option={hour} setOption={setHour} options={validHours} label='Hora'/>
        </Box>

        <Box className='branch-filter--filter-persons'>
          <InputText value={persons} setValue={setPersons} type='number' label='Personas' />
        </Box>

        <Box className='branch-filter--filter-search'>
          <InputText value={search} setValue={setSearch} label='Locación, Restaurante, Cuisine'/>
        </Box>
      </Box>

      {/* Button */}
      <Box className='branch-filter--button-zone'>
        <Button primary={true} size='large' backgroundColor={color} >
          <Icon icon='paper-plane' size={'16px'} color='white' />
          <Text className='branch-filter--button-text'>
            Muéstrame Locales
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
