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
  sale: {
    id: 1,
    ownerName: "John Doe",
    ownerPhone: "+58 4240000000",
    ownerEmail: "john_doe@gmail.com",
    startTime: new Date(),
    clientQuantity: 4,
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc.",
    taxes: [
      {
        id: 1,
        name: "IVA",
        type: 0,
        value: 16,
        saveValueFunction: async () => { },
        deleteValueFunction: async () => { },
      },
      {
        id: 2,
        name: "Propina",
        type: 1,
        value: 5,
        saveValueFunction: async () => { },
        deleteValueFunction: async () => { },
      }
    ],
    tables: [],
    products: [
      {
        id: 1,
        name: "Café",
        price: 1.5,
        amount: 2,
        onChangeAmount: () => { },
        onDelete: async () => { },
      },
      {
        id: 2,
        name: "Arepa",
        price: 2.5,
        amount: 5,
        onChangeAmount: () => { },
        onDelete: async () => { },
      },
      {
        id: 3,
        name: "Refresco",
        price: 4.5,
        amount: 1,
        onChangeAmount: () => { },
        onDelete: async () => { },
      }
    ],
    hasReservation: false,
  },
};
