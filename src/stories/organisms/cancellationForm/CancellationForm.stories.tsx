import React, { useState } from "react";
import { CancellationForm } from "./CancellationForm";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/CancellationForm",
  component: CancellationForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reason: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<typeof CancellationForm>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CancellationForm> = (args: any) => {
  const reason = useInputForm({ value: "", name: "" });
  const description = useInputForm("");
  const cancellationReasons = [
    { value: "1", name: "Reason 1" },
    { value: "2", name: "Reason 2" },
    { value: "3", name: "Reason 3" },
  ];

  return (
    <CancellationForm
      cancellationReasons={cancellationReasons}
      reason={reason}
      description={description}
      color = "#EF7A08"
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
