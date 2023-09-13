import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineSaleInvoice } from "./OnlineSaleInvoice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/OnlineSaleInvoice",
  component: OnlineSaleInvoice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof OnlineSaleInvoice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof OnlineSaleInvoice> = (args: any) => {
  return <OnlineSaleInvoice {...args} />;
};


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  requestTime: "6:00 PM",
  products: [
    {
      name: "Coca Cola",
      price: 1.5,
      amount: 4,
    },
    {
      name: "Pepsi",
      price: 1.5,
      amount: 3,
    },
    {
      name: "Pizza de peperoni",
      price: 10.99,
      amount: 1,
    },
    {
      name: "Hamburguesa",
      price: 5.45,
      amount: 3,
    },
    {
      name: "Papas fritas",
      price: 2.1,
      amount: 3,
    }
  ],
  taxes: [
    {
      name: "IVA",
      value: 12,
      type: "%",
    },
    {
      name: "IGTF",
      value: 3,
      type: "%",
    },
  ]
};