import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Counter } from './Counter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Counter',
  component: Counter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as Meta<typeof Counter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Counter> = (args: any) => {
  const [value, setValue] = React.useState(0)

  return <Counter value={value} setValue={setValue} {...args} />
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  min: 0,
  max: 10,
};
