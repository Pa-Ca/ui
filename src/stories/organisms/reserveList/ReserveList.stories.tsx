import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ReserveList } from "./ReserveList";
import ReservationStatusObject from "../../utils/objects/ReservationStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/ReserveList",
  component: ReserveList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ReserveList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ReserveList> = (args: any) => {
  return <ReserveList {...args} />;
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
  reservations: [
    ...new Array(13).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero",
      identityDocument: "V27420616",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 6,
      tables: 6,
      status: reservationsStatus[1],
    }),
    ...new Array(5).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-11",
      owner: "Ivan Tortolero",
      identityDocument: "V27420616",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 6,
      tables: 6,
      status: reservationsStatus[0],
    }),
    ...new Array(8).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-12",
      owner: "Ivan Tortolero",
      identityDocument: "V27420616",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 6,
      tables: 6,
      status: reservationsStatus[0],
    }),
    ...new Array(12).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero",
      identityDocument: "V27420616",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 6,
      tables: 6,
      status: reservationsStatus[1],
    }),
  ],
  state: 1,
};
