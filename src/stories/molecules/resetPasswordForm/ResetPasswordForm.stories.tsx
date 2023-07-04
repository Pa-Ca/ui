import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ResetPasswordForm",
  component: ResetPasswordForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
    password: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ResetPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ResetPasswordForm> = (args: any) => {
  const password = useInputForm("");
  return <ResetPasswordForm password={password} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
