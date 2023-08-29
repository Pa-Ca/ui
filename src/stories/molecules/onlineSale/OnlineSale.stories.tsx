import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { OnlineSale } from "./OnlineSale";
import OnlineSaleStatusObject from "../../utils/objects/OnlineSaleStatus";

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

const onlineSaleStatus: OnlineSaleStatusObject[] = [
  {number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status"},
  {number: 2, name: "rejected", nameShow: "Rechazada", icon: "rejected-status"},
  {number: 3, name: "accepted", nameShow: "Aceptada", icon: "accepted-status"},
  
  {number: 4, name: "started", nameShow: "En curso", icon: "started-status"},
  
  {number: 5, name: "ready-to-take-out",nameShow: "Lista para llevar", icon: "delivery"},
  {number: 6, name: "on-the-way",       nameShow: "Retirada", icon: "retired-status"},

  {number: 7, name: "delivered", nameShow: "Entregada", icon: "delivery"},
  
  {number: 8, name: "canceled", nameShow: "Retirada", icon: "retired-status"},
  {number: 9, name: "closed", nameShow: "Finalizada", icon: "closed-status"}
]

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  requestTime: "6:00 PM",
  requestDate: "24/10/2023 7:45 PM",
  owner: "Ivan Tortolero",
  ownerPhone: "0414-8732414",
  identityDocument: "V27722357",
  status: onlineSaleStatus[3],
  ownerEmail: "hola@fe.com",
  saleType: "pick-up",
  adress : "Av. 1 con calle 2",
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
