import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchProducts } from "./BranchProducts";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchProducts",
  component: BranchProducts,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchProducts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchProducts> = (args: any) => {
  const products = [
    {
      id: 1000,
      name: useInputForm("Coca-cola"),
      category: useInputForm("Bebidas"),
      subCategory: useInputForm("Gaseosas"),
      description: useInputForm("Bebida gaseosa de 500ml."),
      price: useInputForm("4.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1001,
      name: useInputForm("Hamburguesa"),
      category: useInputForm("Comidas"),
      subCategory: useInputForm("Carnes"),
      description: useInputForm("Pan con carne, queso, lechuga y tomate."),
      price: useInputForm("12.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1002,
      name: useInputForm("Ensalada César"),
      category: useInputForm("Comidas"),
      subCategory: useInputForm("Vegetales"),
      description: useInputForm(
        "Lechuga, croutons, queso parmesano y salsa césar."
      ),
      price: useInputForm("8.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1003,
      name: useInputForm("Agua mineral"),
      category: useInputForm("Bebidas"),
      subCategory: useInputForm("Agua"),
      description: useInputForm("Agua natural sin gas de 500ml."),
      price: useInputForm("2.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1004,
      name: useInputForm("Helado de vainilla"),
      category: useInputForm("Postres"),
      subCategory: useInputForm("Helados"),
      description: useInputForm(
        "Crema helada de sabor vainilla con salsa de chocolate."
      ),
      price: useInputForm("6.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1005,
      name: useInputForm("Pizza de pepperoni"),
      category: useInputForm("Comidas"),
      subCategory: useInputForm("Pizzas"),
      description: useInputForm(
        "Masa con salsa de tomate, queso mozzarella y pepperoni."
      ),
      price: useInputForm("14.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1006,
      name: useInputForm("Jugo de naranja"),
      category: useInputForm("Bebidas"),
      subCategory: useInputForm("Jugos"),
      description: useInputForm("Jugo natural de naranja exprimida de 300ml."),
      price: useInputForm("3.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
    {
      id: 1007,
      name: useInputForm("Brownie de chocolate"),
      category: useInputForm("Postres"),
      subCategory: useInputForm("Tortas"),
      description: useInputForm(
        "Bizcocho húmedo de chocolate con nueces y crema batida."
      ),
      price: useInputForm("7.99"),
      available: useInputForm(true),
      onSaveName: () => {},
      onSaveCategory: () => {},
      onSaveSubCategory: () => {},
      onSaveDescription: () => {},
      onSavePrice: () => {},
      onSaveAvailable: () => {},
      onDelete: () => {},
    },
  ];
  const name = useInputForm<string>("");
  const price = useInputForm<string>("");

  return (
    <BranchProducts
      products={products}
      newName={name}
      newPrice={price}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  categories: [
    { label: "Bebidas", text: "Bebidas", number: 1000 },
    { label: "Comidas", text: "Comidas", number: 1001 },
    { label: "Postres", text: "Postres", number: 1002 },
  ],
  subCategories: [
    { label: "Gaseosas", text: "Gaseosas", number: 1001 },
    { label: "Carnes", text: "Carnes", number: 1002 },
    { label: "Vegetales", text: "Vegetales", number: 1003 },
    { label: "Agua", text: "Agua", number: 1004 },
    { label: "Helados", text: "Helados", number: 1005 },
    { label: "Pizzas", text: "Pizzas", number: 1006 },
    { label: "Jugos", text: "Jugos", number: 1007 },
    { label: "Tortas", text: "Tortas", number: 1008 },
    { label: "Brownies", text: "Brownies", number: 1009 },
  ],
  subCategoryDependency: {
    Gaseosas: "Bebidas",
    Carnes: "Comidas",
    Vegetales: "Comidas",
    Agua: "Bebidas",
    Helados: "Postres",
    Pizzas: "Comidas",
    Jugos: "Bebidas",
    Tortas: "Postres",
    Brownies: "Postres",
  },
  onEditSubCategory: () => true,
  onCreateProduct: () => {},
  onCreateSubCategory: () => true,
};
