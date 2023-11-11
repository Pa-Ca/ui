import React from "react";
import { PastOnlineSaleList } from "./PastOnlineSaleList";
import { StoryFn, Meta } from "@storybook/react";
import { ReservationProps } from "../../molecules/reservation/Reservation";

import { OnlineSaleProps } from "../../molecules/onlineSale/OnlineSale";
import { onlineSaleStatusList } from "../../utils/objects/OnlineSaleStatus";

import randomIntFromInterval from "../../utils/randomIntFromInterval";
import generateRandomDate from "../../utils/generateRandomDate";
import formatAMPM from "../../utils/formatAMPM";
import formatDate from "../../utils/formatDate";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/PastOnlineSaleList",
  component: PastOnlineSaleList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof PastOnlineSaleList>;


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
    type: "%" as "%" | "$",
  },
  {
    name: "IGTF",
    value: 3,
    type: "%" as "%" | "$",
  },
]


function generatePastOnlineSales(): OnlineSaleProps {
  return {
    id: randomIntFromInterval(0, 1000),
    requestTime: formatAMPM(generateRandomDate()),
    requestDate: formatDate(generateRandomDate()) + " " + formatAMPM(generateRandomDate()),
    date: new Date(generateRandomDate().toISOString().split("T")[0]).toLocaleDateString(),
    owner: "Ivan Tortolero",
    ownerPhone: "0414-8732414",
    identityDocument: "V27722357",
    ownerEmail: "hola@fe.com",
    saleType: "pick-up",
    adress : "Av. 1 con calle 2",
    adressLink : "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
    note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
    status: onlineSaleStatusList[randomIntFromInterval(0, onlineSaleStatusList.length-1)],
    products : products,
    taxes : taxes,
    onAccept: () => {},
    onReject: () => {},
    onOnTheWay: () => {},
    onDelivered: () => {},
    onReadyToTakeOut: () => {},
    onCancel: () => {},
    onClose: () => {},
    onStart: () => {},
  };
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PastOnlineSaleList> = (args: any) => {
  return <PastOnlineSaleList {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  page: 5,
  totalPages: 10,
  // Sort by date
  pastOnlineSales: new Array(15)
    .fill(null)
    .map(generatePastOnlineSales)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    }),
};
