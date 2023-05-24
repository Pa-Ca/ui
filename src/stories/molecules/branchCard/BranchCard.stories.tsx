import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { BranchCard } from './BranchCard';

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
} as Meta<typeof BranchCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchCard> = (args: any) => {
  return <BranchCard {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Restaurant Name',
  backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
  score: 3.7,
  reviews: 42,
  discount: true,
  category: 'Italian',
  location: 'Las Mercedes',
  firstReserve: '8:00 pm',
  secondReserve: '9:00 pm',
  priceScore: 3,
  width: '0px',
  height: '0px',
  color: '#EF7A08',
};
