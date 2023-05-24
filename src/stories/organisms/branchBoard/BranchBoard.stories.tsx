import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BranchBoard } from './BranchBoard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/organisms/BranchBoard',
  component: BranchBoard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onButtonClick: {
      table: {
        disable: true
      }
    }
  },
} as Meta<typeof BranchBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchBoard> = (args: any) => {
  return (
    <BranchBoard {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    width: '1300px',  
};
