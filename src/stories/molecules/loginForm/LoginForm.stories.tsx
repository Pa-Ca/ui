import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args: any) => {
  return <LoginForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
