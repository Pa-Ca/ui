import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ResetPasswordForm } from "./ResetPasswordForm";

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
    onGoogleLogin: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ResetPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ResetPasswordForm> = (args: any) => {
  return <ResetPasswordForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
