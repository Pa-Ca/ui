import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchSales } from "./BranchSales";
import useInputForm from "../../hooks/useInputForm";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";
import { EditableInputTaxProps } from "../../molecules/editableInputTax/EditableInputTax";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchSales",
  component: BranchSales,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onCreateTable: {
      table: {
        disable: true,
      },
    },
    onEditTable: {
      table: {
        disable: true,
      },
    },
    onAddProduct: {
      table: {
        disable: true,
      },
    },
    onClearProducts: {
      table: {
        disable: true,
      },
    },
    onCreateSale: {
      table: {
        disable: true,
      },
    },
    onCloseSale: {
      table: {
        disable: true,
      },
    },
    onDeleteTable: {
      table: {
        disable: true,
      },
    },
    onDeleteSale: {
      table: {
        disable: true,
      },
    },
    pastSales: {
      table: {
        disable: true,
      },
    },
    onNextPage: {
      table: {
        disable: true,
      },
    },
    onPreviousPage: {
      table: {
        disable: true,
      },
    },
    header: {
      table: {
        disable: true,
      },
    },
    table: {
      table: {
        disable: true,
      },
    },
    allTables: {
      table: {
        disable: true,
      },
    },
    products: {
      table: {
        disable: true,
      },
    },
    allProducts: {
      table: {
        disable: true,
      },
    },
    categories: {
      table: {
        disable: true,
      },
    },
    subCategories: {
      table: {
        disable: true,
      },
    },
    subCategoryDependency: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BranchSales>;

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
    startDate: generateRandomDate(),
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
        quantity: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Pepsi",
        price: 1.5,
        quantity: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Pizza de peperoni",
        price: 10.99,
        quantity: Math.floor(1 + Math.random() * 2),
      },
      {
        name: "Hamburguesa",
        price: 5.45,
        quantity: Math.floor(1 + Math.random() * 5),
      },
      {
        name: "Papas fritas",
        price: 2.1,
        quantity: Math.floor(1 + Math.random() * 5),
      },
    ]),
    taxes,
  };
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchSales> = (args: any) => {
  const products = [
    {
      name: "Coca-cola",
      price: 10,
      quantity: useInputForm("5"),
      onChangeQuantity: () => {},
      onDelete: () => {},
    },
    {
      name: "Pizza de peperoni",
      price: 22.99,
      quantity: useInputForm("1"),
      onChangeQuantity: () => {},
      onDelete: () => {},
    },
    {
      name: "Hamburguesa",
      price: 15.99,
      quantity: useInputForm("2"),
      onChangeQuantity: () => {},
      onDelete: () => {},
    },
    {
      name: "Papas fritas",
      price: 5.99,
      quantity: useInputForm("1"),
      onChangeQuantity: () => {},
      onDelete: () => {},
    },
  ];
  const taxes: EditableInputTaxProps[] = [
    {
      nameInputHook: useInputForm("IVA"),
      valueInputHook: useInputForm("12"),
      typeInputHook: useInputForm("%"),
      saveValueFunction: () => {},
      deleteValueFunction: () => {},
    },
    {
      nameInputHook: useInputForm("IGTF"),
      valueInputHook: useInputForm("3"),
      typeInputHook: useInputForm("%"),
      saveValueFunction: () => {},
      deleteValueFunction: () => {},
    },
  ];
  const allTables = [
    {
      number: 1000,
      text: "Mesa 1",
      label: "Mesa 1",
    },
    {
      number: 1001,
      text: "Mesa 2",
      label: "Mesa 2",
    },
    {
      number: 1002,
      text: "Mesa 3",
      label: "Mesa 3",
    },
    {
      number: 1003,
      text: "Mesa 4",
      label: "Mesa 4",
    },
    {
      number: 1004,
      text: "Mesa 5",
      label: "Mesa 5",
    },
    {
      number: 1005,
      text: "Mesa 6",
      label: "Mesa 6",
    },
    {
      number: 1006,
      text: "Mesa 7",
      label: "Mesa 7",
    },
    {
      number: 1007,
      text: "Mesa 8",
      label: "Mesa 8",
    },
    {
      number: 1008,
      text: "Mesa 9",
      label: "Mesa 9",
    },
    {
      number: 1009,
      text: "Mesa 10",
      label: "Mesa 10",
    },
  ];
  const table = useInputForm(allTables[0]);

  return (
    <BranchSales
      taxes={taxes}
      table={table}
      allTables={allTables}
      products={products}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  categories: {
    1000: {
      id: 1000,
      name: "Bebidas",
    },
    1001: {
      id: 1001,
      name: "Comidas",
    },
    1002: {
      id: 1002,
      name: "Postres",
    },
  },
  subCategories: {
    1000: {
      id: 1000,
      name: "Gaseosas",
      categoryId: 1000,
    },
    1001: {
      id: 1001,
      name: "Carnes",
      categoryId: 1001,
    },
    1002: {
      id: 1002,
      name: "Vegetales",
      categoryId: 1001,
    },
    1003: {
      id: 1003,
      name: "Agua",
      categoryId: 1000,
    },
    1004: {
      id: 1004,
      name: "Helados",
      categoryId: 1002,
    },
    1005: {
      id: 1005,
      name: "Tortas",
      categoryId: 1002,
    },
    1006: {
      id: 1006,
      name: "Pizzas",
      categoryId: 1001,
    },
    1007: {
      id: 1007,
      name: "Jugos",
      categoryId: 1000,
    }
  },
  allProducts: {
    1000: {
      id: 1000,
      name: "Coca-cola",
      subCategoryId: 1000,
      description: "Bebida gaseosa de 500ml.",
      price: 4.99,
      available: true,
    },
    1001: {
      id: 1001,
      name: "Hamburguesa",
      subCategoryId: 1001,
      description: "Pan con carne, queso, lechuga y tomate.",
      price: 12.99,
      available: true,
    },
    1002: {
      id: 1002,
      name: "Ensalada César",
      subCategoryId: 1002, 
      description: "Lechuga, croutons, queso parmesano y salsa césar.",
      price: 8.99,
      available: true,
    },
    1003: {
      id: 1003,
      name: "Agua mineral",
      subCategoryId: 1003,
      description: "Agua natural sin gas de 500ml.",
      price: 2.99,
      available: true,
    },
    1004: {
      id: 1004,
      name: "Helado de vainilla",
      subCategoryId: 1004,
      description: "Crema helada de sabor vainilla con salsa de chocolate.",
      price: 6.99,
      available: true,
    },
    1005: {
      id: 1005,
      name: "Pizza de pepperoni",
      subCategoryId: 1004,
      description: "Masa con salsa de tomate, queso mozzarella y pepperoni.",
      price: 14.99,
      available: true,
    },
    1006: {
      id: 1006,
      name: "Jugo de naranja",
      subCategoryId: 1001,
      description: "Jugo natural de naranja exprimida de 300ml.",
      price: 3.99,
      available: true,
    },
    1007: {
      id: 1007,
      name: "Brownie de chocolate",
      subCategoryId: 1005,
      description: "Bizcocho húmedo de chocolate con nueces y crema batida.",
      price: 7.99,
      available: true,
    },
  },
  page: 5,
  totalPages: 10,
  // Sort by date
  pastSales: new Array(15)
    .fill(null)
    .map(generatePastSale)
    .sort((a, b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    }),
};
