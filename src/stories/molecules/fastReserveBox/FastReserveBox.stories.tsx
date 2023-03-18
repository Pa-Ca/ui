
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FastReserveBox } from './FastReserveBox';


const validHours = [
  { value: '1', name: '9:00 am' },
  { value: '2', name: '9:30 am' },
  { value: '3', name: '10:00 am' },
  { value: '4', name: '10:30 am' },
  { value: '5', name: '11:00 am' },
  { value: '6', name: '11:30 am' },
  { value: '7', name: '12:00 pm' },
  { value: '8', name: '12:30 pm' },
  { value: '9', name: '1:00 pm' },
  { value: '10', name: '1:30 pm' },
  { value: '11', name: '2:00 am' },
  { value: '12', name: '2:30 pm' },
  { value: '13', name: '3:00 pm' },
  { value: '14', name: '3:30 pm' },
  { value: '15', name: '4:00 pm' },
  { value: '16', name: '4:30 pm' },
  { value: '17', name: '5:00 pm' },
]


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Design System/Molecules/FastReserveBox',
    component: FastReserveBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: { 
      onClickFindHour: {
        table: {
          disable: true
        }
      },
      onClickReserve: {
        table: {
          disable: true
        }
      },
      date: {
        table: {
          disable: true
        }
      },
      setDate: {
        table: {
          disable: true
        }
      },
      hour: {
        table: {
          disable: true
        }
      },
      setHour: {
        table: {
          disable: true
        }
      },
      validHours: {
        table: {
          disable: true
        }
      },
      persons: {
        table: {
          disable: true
        }
      },
      setPersons: {
        table: {
          disable: true
        }
      },
    },
  } as ComponentMeta<typeof FastReserveBox>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof FastReserveBox> = (args: any) => {
    const [date, setDate]        = useState(new Date());
    const [hour, setHour]        = useState(undefined);
    const [persons, setPersons]  = useState('1');
    
    const modifyPersons = (value : string ) => {

      if (parseInt(value) < 1){
        setPersons('1');
      }
      else {
        setPersons(value);
      }
      
    }


    return <FastReserveBox 
      date = {date}
      setDate={setDate}
      hour={hour}
      setHour={setHour}
      validHours={validHours}
      persons={persons}
      setPersons={modifyPersons}
      {...args} />; 
  }
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    title : 'Haz una Reserva',
    width  : '450px',
    height : '450px',
    validHours : validHours,
  };
  
