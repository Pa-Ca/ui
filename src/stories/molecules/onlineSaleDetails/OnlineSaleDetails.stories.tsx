import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineSaleDetails } from "./OnlineSaleDetails";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/OnlineSaleDetails",
  component: OnlineSaleDetails,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof OnlineSaleDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof OnlineSaleDetails> = (args: any) => {
  return <OnlineSaleDetails {...args} />;
};


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  requestTime: "6:00 PM",
  phoneNumber: "0414-8732414",
  identityDocument: "V27722357",
  email: "hola@fe.com",
  adress : "Av. 1 con calle 2",
  note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
};
