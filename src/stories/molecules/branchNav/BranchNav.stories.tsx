import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchNav } from './BranchNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/BranchNav',
  component: BranchNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onLikeClick: {
      table: {
        disable: true
      }
    },
    onShareClick: {
      table: {
        disable: true
      }
    },
    onResumeClick: {
      table: {
        disable: true
      }
    },
    onPicturesClick: {
      table: {
        disable: true
      }
    },
    onMenuClick: {
      table: {
        disable: true
      }
    },
    onReviewsClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof BranchNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchNav> = (args: any) => {
  return <BranchNav {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
