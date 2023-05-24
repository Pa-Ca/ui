import React from "react";
import { FastReserveBox } from "./FastReserveBox";
import useInputForm from "../../hooks/useInputForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const validHours = [
  { value: "1", name: "9:00 am" },
  { value: "2", name: "9:30 am" },
  { value: "3", name: "10:00 am" },
  { value: "4", name: "10:30 am" },
  { value: "5", name: "11:00 am" },
  { value: "6", name: "11:30 am" },
  { value: "7", name: "12:00 pm" },
  { value: "8", name: "12:30 pm" },
  { value: "9", name: "1:00 pm" },
  { value: "10", name: "1:30 pm" },
  { value: "11", name: "2:00 am" },
  { value: "12", name: "2:30 pm" },
  { value: "13", name: "3:00 pm" },
  { value: "14", name: "3:30 pm" },
  { value: "15", name: "4:00 pm" },
  { value: "16", name: "4:30 pm" },
  { value: "17", name: "5:00 pm" },
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
} as ComponentMeta<typeof FastReserveBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FastReserveBox> = (args: any) => {
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
