import React from "react";
import { InputText } from "./InputText";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/InputText",
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    inputHook: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof InputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputText> = (args: any) => {
  const value = useInputForm("");
  return (
    <>
      <Box height="50px" />
      <InputText inputHook={value} {...args} />
    </>
  );
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  type: "text",
  placeholder: "Ej: Placeholder",
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  type: "password",
};
