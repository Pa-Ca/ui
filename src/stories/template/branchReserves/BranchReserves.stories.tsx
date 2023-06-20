import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchReserves } from "./BranchReserves";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchReserves",
  component: BranchReserves,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchReserves>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchReserves> = (args: any) => {
  // Reservation data
  const date = useInputForm<Date>(new Date());
  const hourIn = useInputForm<OptionObject>({ text: "", label: "" });
  const hourOut = useInputForm<OptionObject>({ text: "", label: "" });
  const persons = useInputForm<string>("");
  const occasion = useInputForm<string>("");

  // Client data
  const firstName = useInputForm("");
  const lastName = useInputForm("");
  const phone = useInputForm("");
  const email = useInputForm("");
  const [showModal, setshowModal] = useState(false);

  return (
    <BranchReserves
      date={date}
      hourIn={hourIn}
      hourOut={hourOut}
      persons={persons}
      occasion={occasion}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      email={email}
      showModal={showModal}
      setShowModal={setshowModal}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    name: "Sempre Dritto",
    color: "#EF7A08",
    branchOptions: []
  },
  icon_size: "450px",
  durationHour: 1,
  durationMin: 30,
  submitButtonColor: "#EF7A08",
  cancelButtonColor: "#EF7A08",
  validHoursIn: [
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
  ],
  validHoursOut:[
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
    {text: "9:00", number:9, label: "9:00"},
  ],
  reservations: [
    ...new Array(13).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero 4",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 4,
      tables: 4,
      state: 4,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(5).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-11",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 1,
      tables: 1,
      state: 1,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},      
    }),
    ...new Array(8).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-12",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 1,
      tables: 1,
      state: 1,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(12).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 3",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 3,
      tables: 3,
      state: 3,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(9).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 5",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 5,
      tables: 5,
      state: 5,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(7).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 6",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      persons: 6,
      tables: 6,
      state: 6,
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
  ],
};
