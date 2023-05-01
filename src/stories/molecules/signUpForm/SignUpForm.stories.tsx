import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SignUpForm } from "./SignUpForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/SignUpForm",
  component: SignUpForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onLogin: {
      table: {
        disable: true,
      },
    },
    onTermsAndConditionsClick: {
      table: {
        disable: true,
      },
    },
    onClientSignUp: {
      table: {
        disable: true,
      },
    },
    onBusinessSignUp: {
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
} as ComponentMeta<typeof SignUpForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUpForm> = (args: any) => {
  return <SignUpForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
