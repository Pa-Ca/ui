import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputLongText } from "./EditableInputLongText";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Design System/molecules/EditableInputLongText",
  component: EditableInputLongText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    saveValueFunction: {
      table: {
        disable: true,
      },
    },
    inputHook: {
      table: {
        disable: true,
      },
    },
    className: {
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
} as Meta<typeof EditableInputLongText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EditableInputLongText> = (args: any) => {
  const inputHook = useInputForm("");
  return <EditableInputLongText inputHook={inputHook} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  minRows: 6,
  maxRows: 6,
  width: "100%",
  height: "100%",
  maxLength: 480,
  saveValueFunction: (value: string) => {},
};
