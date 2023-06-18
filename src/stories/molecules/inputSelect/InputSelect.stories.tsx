import React from "react";
import { InputSelect } from "./InputSelect";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/InputSelect",
  component: InputSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputHook: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof InputSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputSelect> = (args: any) => {
  const options: OptionObject<string>[] = [
    {
      value: "option1",
      label: "A. Option 1",
    },
    {
      value: "option2",
      label: "A. Option 2",
    },
    {
      value: "option3",
      label: "A. Option 3",
    },
    {
      value: "option4",
      label: "B. Option 4",
    },
    {
      value: "option5",
      label: "B. Option 5",
    },
    {
      value: "option6",
      label: "C. Option 6",
    },
    { 
      value: "option7",
      label: "C. Option 7",
    },
    {
      value: "option8",
      label: "C. Option 8",
    },
    {
      value: "option9",
      label: "Very very very very very very very very very very very very very very very very very very very very very large Option",
    },
  ];
  const inputHook = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });
  return <InputSelect inputHook={inputHook} options={options} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
