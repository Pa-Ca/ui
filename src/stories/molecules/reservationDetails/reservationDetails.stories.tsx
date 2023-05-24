import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ReservationDetails } from './reservationDetails';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/ReservationDetails',
  component: ReservationDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as Meta<typeof ReservationDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ReservationDetails> = (args: any) => {
  return <ReservationDetails {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branchName: 'Sempre Dritto',
  backgroundImage: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg',
  score: 4.2,
  reviews: 42,
  width: '0px',
  height: '0px',
  detailsList: [{name: "servicio", price: 14.3},{name: "impuestos", price: 0.7}],
  color: '#8DD3BB',
  text: "Tu reserva está protegida por Pa´Ca",
};