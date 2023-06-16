import React from "react";
import { InputSelect } from "./InputSelect";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { StoryFn, Meta } from "@storybook/react";

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
  const options: OptionObject[] = [
    {
      number: 0,
      text: "option1",
      label: "A. Option 1",
    },
    {
      number: 1,
      text: "option2",
      label: "A. Option 2",
    },
    {
      number: 2,
      text: "option3",
      label: "A. Option 3",
    },
    {
      number: 3,
      text: "option4",
      label: "B. Option 4",
    },
    {
      number: 4,
      text: "option5",
      label: "B. Option 5",
    },
    {
      number: 5,
      text: "option6",
      label: "C. Option 6",
    },
    {
      number: 6, 
      text: "option7",
      label: "C. Option 7",
    },
    {
      number: 7,
      text: "option8",
      label: "C. Option 8",
    },
    {
      number: 8,
      text: "option9",
      label: "Very very very very very very very very very very very very very very very very very very very very very large Option",
    },
  ];
  const inputHook = useInputForm<OptionObject | undefined>({
    label: "",
    text: "",
  });
  return <InputSelect inputHook={inputHook} options={options} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
