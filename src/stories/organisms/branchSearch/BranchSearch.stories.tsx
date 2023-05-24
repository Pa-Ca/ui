import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchSearch } from './BranchSearch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/BranchSearch',
  component: BranchSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
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
    search: {
      table: {
        disable: true
      }
    },
    setSearch: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof BranchSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchSearch> = (args: any) => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(undefined);
  const [persons, setPersons] = useState('');
  const [search, setSearch] = useState('');
  
  return (
    <BranchSearch
      date={date}
      setDate={setDate}
      hour={hour}
      setHour={setHour}
      persons={persons}
      setPersons={setPersons}
      search={search}
      setSearch={setSearch}
      {...args}
    />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
