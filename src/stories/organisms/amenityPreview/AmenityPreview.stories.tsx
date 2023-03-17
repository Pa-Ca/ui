import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AmenityPreview } from './AmenityPreview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/AmenityPreview',
  component: AmenityPreview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof AmenityPreview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AmenityPreview> = (args: any) => {
  return (
    <AmenityPreview {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Perfectos en pareja',
  description: 'Diviertete en una salida perfecta en pareja',
  color: '#EF7A08',
  branches: [
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
    {
      name: 'Restaurant Name',
      backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
      score: 3.7,
      reviews: 42,
      discount: true,
      amenity: 'Italian',
      location: 'Las Mercedes',
      firstReserve: '8:00 pm',
      secondReserve: '9:00 pm',
      priceScore: 3,
      onClick: () => {},
      onFirstReserveClick: () => {},
      onSecondReserveClick: () => {}
    },
  ]
};
