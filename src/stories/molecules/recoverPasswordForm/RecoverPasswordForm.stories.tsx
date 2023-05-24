import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { RecoverPasswordForm } from "./RecoverPasswordForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/RecoverPasswordForm",
  component: RecoverPasswordForm,
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
} as Meta<typeof RecoverPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof RecoverPasswordForm> = (args: any) => {
  return <RecoverPasswordForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
