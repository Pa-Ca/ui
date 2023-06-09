import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Review } from './Review';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/Review',
  component: Review,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onFlagClick: {
      table: {
        disable: true
      }
    },
  },
} as Meta<typeof Review>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Review> = (args: any) => {
  return (
    <Review {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  score: 4.5,
  author: 'Giovanni Giorgio',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg'
};
