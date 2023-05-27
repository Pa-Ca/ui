import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { AuthPage } from "./AuthPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/AuthPage",
  component: AuthPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof AuthPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AuthPage> = (args: any) => {
  return <AuthPage {...args} />;
};

export const Default = Template.bind({});

