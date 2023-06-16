import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputText } from "./EditableInputText";
import { StoryFn, Meta } from "@storybook/react";
import OptionObject from "../../utils/objects/OptionObject";

export default {
  title: "Design System/Molecules/EditableInputText",
  component: EditableInputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputHook: {
      table: {
        disable: true,
      },
    },
    saveValueFunction: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    containerClassName: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof EditableInputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EditableInputText> = (args: any) => {
  const inputHook = useInputForm("");
  const options  = [
    {
      text: "Option 1",
      label: "Option 1",
      number: 1,
    },
    {
      text: "Option 2",
      label: "Option 2",
      number: 2,
    },
    {
      text: "Option 3",
      label: "Option 3",
      number: 3,
    },
  ];
  return <EditableInputText inputHook={inputHook} options={options} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  saveValueFunction: (value: string) => {},
};
