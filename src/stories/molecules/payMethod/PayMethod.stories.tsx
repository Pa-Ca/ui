import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PayMethod } from "./PayMethod";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/PayMethod",
  component: PayMethod,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof PayMethod>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PayMethod> = (args: any) => {
  return <PayMethod {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  method: "visa",
  color: "#EF7A08",
  secondaryColor: "B5B5B5",
  cards: [
    { lastDigits: "4321", expirationDate: new Date() },
    { lastDigits: "1234", expirationDate: new Date() },
    { lastDigits: "0000", expirationDate: new Date() },
  ],
  activeCard: 1,
};
