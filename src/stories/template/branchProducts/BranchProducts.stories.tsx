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
  const products = {
    1000: {
      id: 1000,
      name: useInputForm("Coca-cola"),
      category: useInputForm({
        label: "Bebidas",
        value: { id: 1000, name: "Bebidas" },
      }),
      subCategory: useInputForm({
        label: "Gaseosas",
        value: { id: 1000, name: "Gaseosas", categoryId: 1000 },
      }),
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
    1001: {
      id: 1001,
      name: useInputForm("Hamburguesa"),
      category: useInputForm({
        label: "Comidas",
        value: { id: 1001, name: "Comidas" },
      }),
      subCategory: useInputForm({
        label: "Carnes",
        value: { id: 1001, name: "Carnes", categoryId: 1001 },
      }),
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
    1002: {
      id: 1002,
      name: useInputForm("Ensalada César"),
      category: useInputForm({
        label: "Comidas",
        value: { id: 1001, name: "Comidas" },
      }),
      subCategory: useInputForm({
        label: "Vegetales",
        value: { id: 1002, name: "Vegetales", categoryId: 1001 },
      }),
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
    1003: {
      id: 1003,
      name: useInputForm("Agua mineral"),
      category: useInputForm({
        label: "Bebidas",
        value: { id: 1000, name: "Bebidas" },
      }),
      subCategory: useInputForm({
        label: "Aguas",
        value: { id: 1003, name: "Aguas", categoryId: 1000 },
      }),
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
    1004: {
      id: 1004,
      name: useInputForm("Helado de vainilla"),
      category: useInputForm({
        label: "Postres",
        value: { id: 1002, name: "Postres" },
      }),
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
    1005: {
      id: 1005,
      name: useInputForm("Pizza de pepperoni"),
      category: useInputForm({
        label: "Comidas",
        value: { id: 1001, name: "Comidas" },
      }),
      subCategory: useInputForm({
        label: "Pizzas",
        value: { id: 1004, name: "Pizzas", categoryId: 1001 },
      }),
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
    1006: {
      id: 1006,
      name: useInputForm("Jugo de naranja"),
      category: useInputForm({
        label: "Bebidas",
        value: { id: 1000, name: "Bebidas" },
      }),
      subCategory: useInputForm({
        label: "Jugos",
        value: { id: 1001, name: "Jugos", categoryId: 1000 },
      }),
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
    1007: {
      id: 1007,
      name: useInputForm("Brownie de chocolate"),
      category: useInputForm({
        label: "Postres",
        value: { id: 1002, name: "Postres" },
      }),
      subCategory: useInputForm({
        label: "Tortas",
        value: { id: 1005, name: "Tortas", categoryId: 1002 },
      }),
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
  };
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
  onEditSubCategory: () => true,
  onCreateProduct: () => {},
  onCreateSubCategory: () => true,
};
