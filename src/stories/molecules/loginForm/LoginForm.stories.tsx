import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { LoginForm } from "./LoginForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/LoginForm",
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onLogin: {
      table: {
        disable: true,
      },
    },
    onForgotClick: {
      table: {
        disable: true,
      },
    },
    onSignUp: {
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
} as Meta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof LoginForm> = (args: any) => {
  return <LoginForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
