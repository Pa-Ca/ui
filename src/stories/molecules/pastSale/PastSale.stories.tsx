import React from "react";
import { PastSale } from "./PastSale";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/PastSale",
  component: PastSale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PastSale>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PastSale> = (args: any) => {
  return <PastSale {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  startDate: new Date(),
  hasReservation: true,
  tableName: "Mesa 1",
  ownerName: "John Doe",
  ownerEmail: "john_doe@fe.com",
  ownerPhone: "0424-1234567",
  persons: 4,
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
