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
      value: "option1",
      name: "Option 1",
    },
    {
      value: "option2",
      name: "Option 2",
    },
    {
      value: "option3",
      name: "Option 3",
    },
    {
      value: "option4",
      name: "Option 4",
    },
    {
      value: "option5",
      name: "Option 5",
    },
    {
      value: "option6",
      name: "Option 6",
    },
    {
      value: "option7",
      name: "Option 7",
    },
    {
      value: "option8",
      name: "Very very very very very very very very very very very very very very very very very very very very very large Option",
    },
  ];
  const inputHook = useInputForm<OptionObject | undefined>({
    value: "",
    name: "",
  });
  return <InputSelect inputHook={inputHook} options={options} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
