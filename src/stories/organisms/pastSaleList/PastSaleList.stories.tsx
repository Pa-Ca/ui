import React from "react";
import { PastSaleList } from "./PastSaleList";
import { StoryFn, Meta } from "@storybook/react";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/PastSaleList",
  component: PastSaleList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof PastSaleList>;

function generateRandomDate(): Date {
  const from = new Date();
  from.setDate(from.getDate() - 5);
  return new Date(
    from.getTime() + Math.random() * (new Date().getTime() - from.getTime())
  );
}

function getRandomSubarray(arr: any[]) {
  const size = Math.floor(1 + Math.random() * arr.length);
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - size,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function generatePastSale(): PastSaleProps {
  const taxes = [
    {
      name: "IVA",
      value: 12,
      type: "%" as "%" | "$",
    },
    {
      name: "IGTF",
      value: 3,
      type: "%" as "%" | "$",
    },
  ];
  if (Math.random() >= 0.5) {
    taxes.push({
      name: "Propina",
      value: 10,
      type: "$" as "%" | "$",
    });
  }

  return {
    startTime: generateRandomDate(),
    hasReservation: Math.random() >= 0.5,
    tableName: `Mesa ${Math.floor(1 + Math.random() * 5)}`,
    ownerName: "John Doe",
    ownerEmail: "john_doe@fe.com",
    ownerPhone: "0424-1234567",
    persons: Math.floor(1 + Math.random() * 10),
    products: getRandomSubarray([
      {
        name: "Coca Cola",
        price: 1.5,
        amount: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Pepsi",
        price: 1.5,
        amount: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Pizza de peperoni",
        price: 10.99,
        amount: Math.floor(1 + Math.random() * 2),
      },
      {
        name: "Hamburguesa",
        price: 5.45,
        amount: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Papas fritas",
        price: 2.1,
        amount: Math.floor(1 + Math.random() * 5),
      },
    ]),
    taxes: taxes,
  };
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PastSaleList> = (args: any) => {
  return <PastSaleList {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  page: 5,
  totalPages: 10,
  // Sort by date
  pastSales: new Array(15)
    .fill(null)
    .map(generatePastSale)
    .sort((a, b) => {
      return a.startTime.getTime() - b.startTime.getTime();
    }),
};
