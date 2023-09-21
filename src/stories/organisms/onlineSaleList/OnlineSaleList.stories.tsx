import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineSaleList } from "./OnlineSaleList";
import { OnlineSaleStatuses } from "../../utils/objects/OnlineSaleStatus";
import { onlineSaleStatusList } from "../../utils/objects/OnlineSaleStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/OnlineSaleList",
  component: OnlineSaleList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof OnlineSaleList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof OnlineSaleList> = (args: any) => {
  return <OnlineSaleList {...args} />;
};

const products = [
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
]

const taxes =  [
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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onlineSales: [
    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress : "Av. 1 con calle 2",
      adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.CANCELLED],
      products : products,
      taxes : taxes
    }),
    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress : "Av. 1 con calle 2",
      adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.PENDING],
      products : products,
      taxes : taxes
    }),
    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress : "Av. 1 con calle 2",
      adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.ACCEPTED],
      products : products,
      taxes : taxes
    }),
    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2022-10-10",
      owner: "Ivan Tortolero",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "delivery",
      adress : "Av. 1 con calle 2",
      adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.ON_THE_WAY],
      products : products,
      taxes : taxes
    }),
  ],
  state: 1,
};
