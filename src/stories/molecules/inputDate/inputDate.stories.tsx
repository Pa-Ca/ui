import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputDate } from './inputDate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/InputDate',
  component: InputDate,
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
  },
} as ComponentMeta<typeof InputDate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputDate> = (args: any) => {
  const [date, setDate] = useState(new Date());

  return <InputDate date={date} setDate={setDate} {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
