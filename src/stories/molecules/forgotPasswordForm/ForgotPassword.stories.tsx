import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ForgotPasswordForm",
  component: ForgotPasswordForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
    onGoogleSignUp: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ForgotPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForgotPasswordForm> = (args: any) => {
  return <ForgotPasswordForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
