import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RestaurantDetails } from './restaurantDetails';
import AmenityObject from "../../utils/objects/AmenityObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/RestaurantDetails',
  component: RestaurantDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof RestaurantDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RestaurantDetails> = (args: any) => {
  return <RestaurantDetails {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branchName: 'Restaurant Name',
  backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
  width: '0px',
  height: '0px',
  price: 10,
  buttonColor: '#EF7A08',
  location: 'Las Mercedes',
  iconList: [
    { name: "Piscina interior", icon: "pool" },
    { name: "Centro de spa", icon: "spa" },
    { name: "Bar/Salón", icon: "wine" },
    { name: "Wifi libre", icon: "wifi" }
  ],
  textColor: '#FF8682',
  borderColor: '#8DD3BB',
  text: "Tu reserva está protegida por Pa´Ca",
};