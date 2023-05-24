import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
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
} as Meta<typeof RestaurantDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof RestaurantDetails> = (args: any) => {
  return <RestaurantDetails {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branchName: 'Restaurant Name',
  backgroundImage: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg',
  width: '0px',
  height: '0px',
  zone: "Zona Estándar",
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
};