import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicPage } from './BasicPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/template/BasicPage',
  component: BasicPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    children: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof BasicPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicPage> = (args: any) => {
  return (
    <BasicPage {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};


