import React from "react";
import { SaleProductList } from "./SaleProductList";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputTaxProps } from "../../molecules/editableInputTax/EditableInputTax";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/SaleProductList",
  component: SaleProductList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    reservations: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof SaleProductList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SaleProductList> = (args: any) => {
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

  return (
    <SaleProductList
      products={products}
      taxes={taxes}
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
  }
};
