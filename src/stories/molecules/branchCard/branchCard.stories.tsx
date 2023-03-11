import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchCard } from './branchCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/BranchCard',
  component: BranchCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
      table: {
        disable: true
      }
    },
    onFirstReserveClick: {
      table: {
        disable: true
      }
    },
    onSecondReserveClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof BranchCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchCard> = (args: any) => {
  return <BranchCard {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
