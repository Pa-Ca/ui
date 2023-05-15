import React from 'react';
import { InputDate } from './InputDate';
import useInputForm from '../../hooks/useInputForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/InputDate',
  component: InputDate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    inputHook: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof InputDate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputDate> = (args: any) => {
  const date = useInputForm<Date>(new Date());

  return <InputDate inputHook={date} {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
