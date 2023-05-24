import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputLongText } from './InputLongText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/InputLongText',
  component: InputLongText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    value: {
      table: {
        disable: true
      }
    },
    setValue: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof InputLongText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputLongText> = (args: any) => {
  const [value, setValue] = useState('');
  return <InputLongText value={value} setValue={setValue} {...args} />;
}

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  minRows : 6,
  maxRows : 6,
  width : "100%",
  height : "100%",
  maxLength : 480,
};

