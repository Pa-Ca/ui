import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PayMethodSelector } from "./PayMethodSelector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/PayMethodSelector",
  component: PayMethodSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as Meta<typeof PayMethodSelector>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PayMethodSelector> = (args: any) => {
  return <PayMethodSelector {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#B5B5B5",
  cards: [
    { lastDigits: "4321", expirationDate: new Date() },
    { lastDigits: "1234", expirationDate: new Date() },
    { lastDigits: "0000", expirationDate: new Date() },
  ],
  activeCard: 1,
};
