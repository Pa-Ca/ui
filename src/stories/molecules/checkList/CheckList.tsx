import React, { useMemo, useState } from 'react';
import './checkList.scss';
import { Box } from '../../atoms/box/Box';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export type CheckObject = {
  value: string;
  name: string;
  selected: boolean;
}

interface CheckListProps {
  /**
   * Check box list items
   */
  items: CheckObject[];
  /**
   * Function that changes the Check box list items each time the input select
   * is updated
   */
  setItems: Function;
  /**
   * Icons color
   */
  color?: string;
  /**
   * Text class name
   */
  textClassName?: string;
}

/**
* Primary UI component for user interaction
*/
export const CheckList = ({
  items,
  setItems,
  color,
  textClassName,
  ...props
}: CheckListProps) => {
 const onSelect = (value: string) => {
   const updatedItems = items.map((item) => {
     if (item.value === value) {
       return {
         ...item,
         selected: !item.selected,
       };
     }
     return item;
   });
   setItems(updatedItems);
 };
 
 return (
   <Box className='branch-filter--container' backgroundColor='transparent'>
     {
       items.map(item => (
         <Box
           key={`branch-filter-${item.value}`}
           className='check-list--item'
           backgroundColor='transparent'
           onClick={() => onSelect(item.value)}
         >
           <Icon icon={item.selected ? 'checkbox' : 'uncheckbox'} size='18px' color={color} />
           <Box width='5px' />
           <Text type='h6' color='#112211' weight='500' className={textClassName}> {item.name} </Text>
         </Box>
       ))
     }
   </Box>
 );
};



