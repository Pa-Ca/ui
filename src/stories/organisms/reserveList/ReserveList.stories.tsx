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
  tableList: [
    {
      id: 1,
      branchId: 1,
      name: "0001",
    },
    {
      id: 2,
      branchId: 1,
      name: "0002",
    },
    {
      id: 3,
      branchId: 1,
      name: "0003",
    },
    {
      id: 4,
      branchId: 1,
      name: "0004",
    },
    {
      id: 5,
      branchId: 1,
      name: "0005",
    },
    {
      id: 6,
      branchId: 1,
      name: "0006",
    },
    {
      id: 7,
      branchId: 1,
      name: "0007",
    },
    {
      id: 8,
      branchId: 1,
      name: "0008",
    },
    {
      id: 9,
      branchId: 1,
      name: "0009",
    },
    {
      id: 10,
      branchId: 1,
      name: "0010",
    },
    {
      id: 11,
      branchId: 1,
      name: "0011",
    },
    {
      id: 12,
      branchId: 1,
      name: "0012",
    },
    {
      id: 13,
      branchId: 1,
      name: "0013",
    },
    {
      id: 14,
      branchId: 1,
      name: "0014",
    },
    {
      id: 15,
      branchId: 1,
      name: "0015",
    },
  ],
  state: 1,
};
