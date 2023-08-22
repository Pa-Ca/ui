import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Reservation } from "./Reservation";
import ReservationStatusObject from "../../utils/objects/ReservationStatus";

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

const reservationsStatus: ReservationStatusObject[] = [
  {number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status"},
  {number: 2, name: "rejected", nameShow: "Rechazada", icon: "rejected-status"},
  {number: 3, name: "accepted", nameShow: "Aceptada", icon: "accepted-status"},
  {number: 4, name: "retired", nameShow: "Retirada", icon: "retired-status"},
  {number: 5, name: "started", nameShow: "En curso", icon: "started-status"},
  {number: 6, name: "closed", nameShow: "Finalizada", icon: "closed-status"}
]

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  start: "6:00 PM",
  end: "7:00 PM",
  requestDate: "24/10/2023 7:45 PM",
  owner: "Ivan Tortolero",
  ownerPhone: "0414-8732414",
  identityDocument: "V27722357",
  status: reservationsStatus[1],
  persons: 6,
  tables: 6,
  ownerEmail: "hola@fe.com",
  ownerOccasion: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
};
