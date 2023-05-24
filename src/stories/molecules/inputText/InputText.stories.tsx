import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from './InputText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/InputText',
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    type: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    setValue: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof InputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args: any) => {
  const [value, setValue] = useState('');
  return <InputText value={value} setValue={setValue} {...args} />;
}

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  type: 'text'
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  type: 'password'
};
