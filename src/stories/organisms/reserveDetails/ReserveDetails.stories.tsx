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
