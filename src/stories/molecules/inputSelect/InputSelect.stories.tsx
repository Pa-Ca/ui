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
      label: "option1",
      text: "Option 1",
    },
    {
      label: "option2",
      text: "Option 2",
    },
    {
      label: "option3",
      text: "Option 3",
    },
    {
      label: "option4",
      text: "Option 4",
    },
    {
      label: "option5",
      text: "Option 5",
    },
    {
      label: "option6",
      text: "Option 6",
    },
    {
      label: "option7",
      text: "Option 7",
    },
    {
      label: "option8",
      text: "Very very very very very very very very very very very very very very very very very very very very very large Option",
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
