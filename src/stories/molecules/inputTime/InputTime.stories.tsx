import React from "react";
import { InputTime } from "./InputTime";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";

export default {
  title: "Design System/molecules/InputTime",
  component: InputTime,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as Meta<typeof InputTime>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputTime> = (args: any) => {
  const hoursInputHook = useInputForm("");
  const minutesInputHook = useInputForm("");
  return (
    <InputTime
      hoursInputHook={hoursInputHook}
      minutesInputHook={minutesInputHook}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: "localtime",
  showError: true,
  width: "100%",
  height: "100%",
};
