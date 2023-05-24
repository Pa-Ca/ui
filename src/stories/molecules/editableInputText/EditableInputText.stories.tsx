import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputText } from "./EditableInputText";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/molecules/EditableInputText",
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
} as ComponentMeta<typeof EditableInputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableInputText> = (args: any) => {
  const inputHook = useInputForm("");
  return <EditableInputText inputHook={inputHook} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  saveValueFunction: (value: string) => {},
};
