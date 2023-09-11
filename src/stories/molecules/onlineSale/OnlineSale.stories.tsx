import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineSale } from "./OnlineSale";
import OnlineSaleStatusObject from "../../utils/objects/OnlineSaleStatus";
import { onlineSaleStatusList } from "../../utils/objects/OnlineSaleStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/OnlineSale",
  component: OnlineSale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onAccept: {
      table: {
        disable: true,
      },
    },
    onReject: {
      table: {
        disable: true,
      },
    },
    onCloseReservation: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof OnlineSale>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof OnlineSale> = (args: any) => {
  return <OnlineSale {...args} />;
};



export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  requestTime: "6:00 PM",
  requestDate: "24/10/2023 7:45 PM",
  owner: "Ivan Tortolero",
  ownerPhone: "0414-8732414",
  identityDocument: "V27722357",
  status: onlineSaleStatusList[4],
  ownerEmail: "hola@fe.com",
  saleType: "pick-up",
  adress : "Av. 1 con calle 2",
  adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
  note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
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
