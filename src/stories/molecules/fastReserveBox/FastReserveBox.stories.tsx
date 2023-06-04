import React from "react";
import { FastReserveBox } from "./FastReserveBox";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";

const validHours = [
  { value: "1", label: "9:00 am" },
  { value: "2", label: "9:30 am" },
  { value: "3", label: "10:00 am" },
  { value: "4", label: "10:30 am" },
  { value: "5", label: "11:00 am" },
  { value: "6", label: "11:30 am" },
  { value: "7", label: "12:00 pm" },
  { value: "8", label: "12:30 pm" },
  { value: "9", label: "1:00 pm" },
  { value: "10", label: "1:30 pm" },
  { value: "11", label: "2:00 am" },
  { value: "12", label: "2:30 pm" },
  { value: "13", label: "3:00 pm" },
  { value: "14", label: "3:30 pm" },
  { value: "15", label: "4:00 pm" },
  { value: "16", label: "4:30 pm" },
  { value: "17", label: "5:00 pm" },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/FastReserveBox",
  component: FastReserveBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    date: {
      table: {
        disable: true,
      },
    },
    hour: {
      table: {
        disable: true,
      },
    },
    persons: {
      table: {
        disable: true,
      },
    },
    validHours: {
      table: {
        disable: true,
      },
    },
    onClickReserve: {
      table: {
        disable: true,
      },
    },
    onClickFindHour: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof FastReserveBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof FastReserveBox> = (args: any) => {
  const date = useInputForm(new Date());
  const hour = useInputForm({ value: "", name: "" });
  const persons = useInputForm("1");

  return (
    <FastReserveBox
      date={date}
      hour={hour}
      validHours={validHours}
      persons={persons}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Haz una Reserva",
  width: "450px",
  height: "450px",
  validHours: validHours,
};
