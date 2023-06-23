import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputSelect } from "./EditableInputSelect";

export default {
  title: "Design System/Molecules/EditableInputSelect",
  component: EditableInputSelect,
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
} as Meta<typeof EditableInputSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EditableInputSelect> = (args: any) => {
  const inputHook = useInputForm("");
  const options  = [
    {
      value: 1,
      label: "Option 1",
    },
    {
      value: 1,
      label: "Option 2",
    },
    {
      value: 1,
      label: "Option 3",
    },
  ];
  return <EditableInputSelect<number> inputHook={inputHook} options={options} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  saveValueFunction: () => {},
};
