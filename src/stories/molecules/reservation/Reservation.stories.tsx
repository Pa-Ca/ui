import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Reservation } from "./Reservation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Reservation",
  component: Reservation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onAccept: {
      table: {
        disable: true,
      },
    },
    onReject: {
      table: {
        disable: true,
      },
    },
    onCloseReservation: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Reservation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Reservation> = (args: any) => {
  return <Reservation {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  start: "6:00 PM",
  end: "7:00 PM",
  owner: "Ivan Tortolero",
  ownerPhone: "0414-8732414",
  persons: 6,
  tables: 6,
  ownerEmail: "hola@fe.com",
  ownerOccasion: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
};
