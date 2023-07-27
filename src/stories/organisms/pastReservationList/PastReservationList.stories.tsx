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
  {number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status"},
  {number: 2, name: "rejected", nameShow: "Rechazada", icon: "rejected-status"},
  {number: 3, name: "accepted", nameShow: "Aceptada", icon: "accepted-status"},
  {number: 4, name: "retired", nameShow: "Retirada", icon: "retired-status"},
  {number: 5, name: "started", nameShow: "En curso", icon: "started-status"},
  {number: 6, name: "closed", nameShow: "Finalizada", icon: "closed-status"}
]

function formatAMPM(date: Date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function generateRandomDate(): Date {
  const from = new Date();
  from.setDate(from.getDate() - 5);
  return new Date(
    from.getTime() + Math.random() * (new Date().getTime() - from.getTime())
  );
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePastReservation(): ReservationProps {
  return {
    start: formatAMPM(generateRandomDate()),
    end: formatAMPM(generateRandomDate()),
    owner: "John Doe",
    ownerPhone: "0424-1234567",
    ownerEmail: "john_doe@fe.com",
    identityDocument: "V61642069",
    ownerOccasion: "cositas",
    persons: Math.floor(1 + Math.random() * 10),
    tables: Math.floor(1 + Math.random() * 10),
    status: reservationsStatus[randomIntFromInterval(0,5)],
    date: new Date(generateRandomDate().toISOString().split('T')[0]).toLocaleDateString(),
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
