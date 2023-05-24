import React, { useState } from "react";
import { ReserveDetails } from "./ReserveDetails";
import useInputForm from "../../hooks/useInputForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/ReserveDetails",
  component: ReserveDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    date: {
      table: {
        disable: true,
      },
    },
    hourIn: {
      table: {
        disable: true,
      },
    },
    validHoursIn: {
      table: {
        disable: true,
      },
    },
    hourOut: {
      table: {
        disable: true,
      },
    },
    validHoursOut: {
      table: {
        disable: true,
      },
    },
    persons: {
      table: {
        disable: true,
      },
    },
    occasion: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ReserveDetails>;

const validHours = [
  { value: "00:00:00", name: "00:00:00" },
  { value: "00:30:00", name: "00:30:00" },
  { value: "01:00:00", name: "01:00:00" },
  { value: "01:30:00", name: "01:30:00" },
  { value: "02:00:00", name: "02:00:00" },
  { value: "02:30:00", name: "02:30:00" },
  { value: "03:00:00", name: "03:00:00" },
  { value: "03:30:00", name: "03:30:00" },
  { value: "04:00:00", name: "04:00:00" },
  { value: "04:30:00", name: "04:30:00" },
  { value: "05:00:00", name: "05:00:00" },
  { value: "05:30:00", name: "05:30:00" },
  { value: "06:00:00", name: "06:00:00" },
  { value: "06:30:00", name: "06:30:00" },
  { value: "07:00:00", name: "07:00:00" },
  { value: "07:30:00", name: "07:30:00" },
  { value: "08:00:00", name: "08:00:00" },
  { value: "08:30:00", name: "08:30:00" },
  { value: "09:00:00", name: "09:00:00" },
  { value: "09:30:00", name: "09:30:00" },
  { value: "10:00:00", name: "10:00:00" },
  { value: "10:30:00", name: "10:30:00" },
  { value: "11:00:00", name: "11:00:00" },
  { value: "11:30:00", name: "11:30:00" },
  { value: "12:00:00", name: "12:00:00" },
  { value: "12:30:00", name: "12:30:00" },
  { value: "13:00:00", name: "13:00:00" },
  { value: "13:30:00", name: "13:30:00" },
  { value: "14:00:00", name: "14:00:00" },
  { value: "14:30:00", name: "14:30:00" },
  { value: "15:00:00", name: "15:00:00" },
  { value: "15:30:00", name: "15:30:00" },
  { value: "16:00:00", name: "16:00:00" },
  { value: "16:30:00", name: "16:30:00" },
  { value: "17:00:00", name: "17:00:00" },
  { value: "17:30:00", name: "17:30:00" },
  { value: "18:00:00", name: "18:00:00" }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReserveDetails> = (args: any) => {
  const date = useInputForm(new Date());
  const hourIn = useInputForm({ value: "", name: "" });
  const hourOut = useInputForm({ value: "", name: "" });
  const persons = useInputForm("");
  const occasion = useInputForm("");

  return (
    <ReserveDetails
      {...args}
      date={date}
      hourIn={hourIn}
      validHoursIn={validHours}
      hourOut={hourOut}
      validHoursOut={validHours}
      persons={persons}
      occasion={occasion}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
