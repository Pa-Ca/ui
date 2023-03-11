import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HighlightReview } from './HighlightReview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/HighlightReview',
  component: HighlightReview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    viewMore: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof HighlightReview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HighlightReview> = (args: any) => {  
  return (<HighlightReview {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'A real sense of community, nurtured',
  review: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
  score: 4.7,
  author: 'Olga',
  authorDescription: 'Weave Studios – Kai Tak',
  color: '#EF7A08',
  shadowColor: 'rgba(239, 122, 8, 0.4)',
  width: '0px',
  height: '0px',
  image: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
};
