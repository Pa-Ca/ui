import React from "react";
import { PastReservationList } from "./PastReservationList";
import { StoryFn, Meta } from "@storybook/react";
import { ReservationProps } from "../../molecules/reservation/Reservation";
import ReservationStatusObject from "../../utils/objects/ReservationStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/PastReservationList",
  component: PastReservationList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof PastReservationList>;

const reservationsStatus: ReservationStatusObject[] = [
  { number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status" },
  { number: 2, name: "rejected", nameShow: "Rechazada", icon: "rejected-status" },
  { number: 3, name: "accepted", nameShow: "Aceptada", icon: "accepted-status" },
  { number: 4, name: "retired", nameShow: "Retirada", icon: "retired-status" },
  { number: 5, name: "started", nameShow: "En curso", icon: "started-status" },
  { number: 6, name: "closed", nameShow: "Finalizada", icon: "closed-status" },
];

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let strMinutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + strMinutes + " " + ampm;
  return strTime;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
    "/"
  );
}

function generateRandomDate(): Date {
  const from = new Date();
  from.setDate(from.getDate() - 5);
  return new Date(from.getTime() + Math.random() * (new Date().getTime() - from.getTime()));
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePastReservation(): ReservationProps {
  return {
    start: formatAMPM(generateRandomDate()),
    end: formatAMPM(generateRandomDate()),
    requestDate: formatDate(generateRandomDate()) + " " + formatAMPM(generateRandomDate()),
    owner: "John Doe",
    ownerPhone: "0424-1234567",
    ownerEmail: "john_doe@fe.com",
    identityDocument: "V61642069",
    ownerOccasion: "cositas",
    persons: Math.floor(1 + Math.random() * 10),
    tables: Math.floor(1 + Math.random() * 10),
    status: reservationsStatus[randomIntFromInterval(0, 5)],
    date: new Date(generateRandomDate().toISOString().split("T")[0]).toLocaleDateString(),
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
  };
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PastReservationList> = (args: any) => {
  return <PastReservationList {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  page: 5,
  totalPages: 10,
  // Sort by date
  pastReservations: new Array(15)
    .fill(null)
    .map(generatePastReservation)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    }),
};
