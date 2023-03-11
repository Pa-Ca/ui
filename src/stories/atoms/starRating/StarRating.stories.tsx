import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/StartRating',
  component: StarRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof StarRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StarRating> = (args: any) => <StarRating {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
