import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    children: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args: any) => {
  return <Box {...args} >
    <span>
      This is a Box
    </span>
  </Box>
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
