import React from "react";
import { BranchTables } from "./BranchTables";
import { StoryFn, Meta } from "@storybook/react";
import ProductObject from "../../utils/objects/ProductObject";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/BranchTables",
  component: BranchTables,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchTables>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchTables> = (args: any) => {
  return <BranchTables {...args} />;
};

const taxes = [
  {
    id: 1,
    name: "IVA",
    type: 0,
    value: 12.5,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 2,
    name: "IGTF",
    type: 0,
    value: 3,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 3,
    name: "Propina",
    type: 1,
    value: 10,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 4,
    name: "Descuento",
    type: 0,
    value: -5,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
];

const tables = [
  {
    id: 1,
    branchId: 1,
    name: "0001",
  },
  {
    id: 2,
    branchId: 1,
    name: "0002",
  },
  {
    id: 3,
    branchId: 1,
    name: "0003",
  },
  {
    id: 4,
    branchId: 1,
    name: "0004",
  },
  {
    id: 5,
    branchId: 1,
    name: "0005",
  },
  {
    id: 6,
    branchId: 1,
    name: "0006",
  },
  {
    id: 7,
    branchId: 1,
    name: "0007",
  },
  {
    id: 8,
    branchId: 1,
    name: "0008",
  },
  {
    id: 9,
    branchId: 1,
    name: "0009",
  },
  {
    id: 10,
    branchId: 1,
    name: "0010",
  },
  {
    id: 11,
    branchId: 1,
    name: "0011",
  },
  {
    id: 12,
    branchId: 1,
    name: "0012",
  },
  {
    id: 13,
    branchId: 1,
    name: "0013",
  },
  {
    id: 14,
    branchId: 1,
    name: "0014",
  },
  {
    id: 15,
    branchId: 1,
    name: "0015",
  },
];

const products = {
  1000: {
    id: 1000,
    name: "Coca-cola",
    subCategoryId: 1000,
    description: "Bebida gaseosa de 500ml.",
    price: 4.99,
    disabled: false,
  },
  1001: {
    id: 1001,
    name: "Hamburguesa",
    subCategoryId: 1001,
    description: "Pan con carne, queso, lechuga y tomate.",
    price: 12.99,
    disabled: false,
  },
  1002: {
    id: 1002,
    name: "Ensalada César",
    subCategoryId: 1002,
    description: "Lechuga, croutons, queso parmesano y salsa césar.",
    price: 8.99,
    disabled: false,
  },
  1003: {
    id: 1003,
    name: "Agua mineral",
    subCategoryId: 1003,
    description: "Agua natural sin gas de 500ml.",
    price: 2.99,
    disabled: false,
  },
  1004: {
    id: 1004,
    name: "Helado de vainilla",
    subCategoryId: 1004,
    description: "Crema helada de sabor vainilla con salsa de chocolate.",
    price: 6.99,
    disabled: false,
  },
  1005: {
    id: 1005,
    name: "Pizza de pepperoni",
    subCategoryId: 1004,
    description: "Masa con salsa de tomate, queso mozzarella y pepperoni.",
    price: 14.99,
    disabled: false,
  },
  1006: {
    id: 1006,
    name: "Jugo de naranja",
    subCategoryId: 1001,
    description: "Jugo natural de naranja exprimida de 300ml.",
    price: 3.99,
    disabled: false,
  },
  1007: {
    id: 1007,
    name: "Brownie de chocolate",
    subCategoryId: 1005,
    description: "Bizcocho húmedo de chocolate con nueces y crema batida.",
    price: 7.99,
    disabled: false,
  },
};

function generateRandomDate(): Date {
  const from = new Date();
  from.setDate(from.getDate() - 5);
  return new Date(from.getTime() + Math.random() * (new Date().getTime() - from.getTime()));
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

function productObjectToProps(product: ProductObject): SaleProductProps {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    amount: Math.floor(1 + Math.random() * 5),
    onChangeAmount: () => {},
    onDelete: async () => {},
  };
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tables,
  sales: [
    {
      id: 1,
      ownerName: "Iván Tortolero",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 3,
      tables: [tables[0]],
      note: "Venta 1",
      taxes: [taxes[0], taxes[2]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 2,
      ownerName: "Elio Ortega",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 8,
      tables: [tables[1], tables[2]],
      note: "Venta 2",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 3,
      ownerName: "José Barrera",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 25,
      tables: [
        tables[1],
        tables[2],
        tables[5],
        tables[6],
        tables[7],
        tables[8],
        tables[11],
        tables[12],
        tables[13],
        tables[14],
      ],
      note: "Venta 3",
      taxes: [taxes[0], taxes[1]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 4,
      ownerName: "Eduardo López",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 15,
      tables: [tables[8], tables[9], tables[10], tables[0], tables[1], tables[2]],
      note: "Venta 4",
      taxes: [taxes[0], taxes[1]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 5,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 5",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 6,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 6",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 7,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 7",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 8,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 8",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 9,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 9",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 10,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 10",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
  ],
  onCreateTable: async () => true,
  onUpdateSearch: () => {},
};
