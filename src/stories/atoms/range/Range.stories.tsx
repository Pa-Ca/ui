import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Range } from './Range';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Range',
  component: Range,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    values: {
      table: {
        disable: true
      }
    },
    setValues: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof Range>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Range> = (args: any) => {
  const [values, setValues] = useState([args.min, args.max])
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 50 }}>
      <Range values={values} setValues={setValues} {...args} />
    </div>
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
