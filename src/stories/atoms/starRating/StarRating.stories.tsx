import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { StarRating } from './StarRating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/StartRating',
  component: StarRating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    setRating: {
      table: {
        disable: true
      }
    },
  },
} as Meta<typeof StarRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof StarRating> = (args: any) => {
  if (args.readonly) {
    return (<StarRating {...args} />);
  }
  else {
    const [rating, setRating] = useState(0);
    return (<StarRating rating={rating} setRating={setRating} {...args} />);
  }
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
