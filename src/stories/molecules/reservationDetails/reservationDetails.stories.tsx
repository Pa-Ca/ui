import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReservationDetails } from './reservationDetails';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/ReservationDetails',
  component: ReservationDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof ReservationDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReservationDetails> = (args: any) => {
  return <ReservationDetails {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Restaurant Name',
  backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
  score: 4.2,
  reviews: 42,
  width: '0px',
  height: '0px',
  detailsList: [{name: "drogas", price: 500},{name: "masDrogas", price: 500}],
  color: '#8DD3BB',
  text: "Tu reserva está protegida por Pa´Ca",
};