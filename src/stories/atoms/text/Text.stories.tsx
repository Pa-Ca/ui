import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Text } from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Text> = (args: any) => {
  return (
    <div style={{gap: "10px", display:"flex", flexDirection:"column"}}>
    <Text {...args} >
      Text example
    </Text>
    <Text warningStyle >
      Warning text example
    </Text>
    <Text errorStyle >
      Error text example
    </Text>
    <Text primaryButtonStyle >
      Primary button text example
    </Text>
    <Text hyperlinkStyle >
      Hyperlink text example
    </Text>
    </div>
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
