import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchHighlightProducts } from "./BranchProducts";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchHighlightProducts",
  component: BranchHighlightProducts,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchHighlightProducts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchHighlightProducts> = (args: any) => {
  const name = useInputForm<string>("");
  const price = useInputForm<string>("");

  return <BranchHighlightProducts newName={name} newPrice={price} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  haveBranch: true,
  products: {
    1000: {
      name: "Coca-cola",
      category: "Bebidas",
      subCategory: "Gaseosas",
      cost: 4.99,
      available: true,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1001: {
      name: "Hamburguesa",
      category: "Comidas",
      subCategory: "Carnes",
      cost: 12.99,
      available: true,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1002: {
      name: "Ensalada César",
      category: "Comidas",
      subCategory: "Vegetales",
      cost: 8.99,
      available: true,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1003: {
      name: "Agua mineral",
      category: "Bebidas",
      subCategory: "Aguas",
      cost: 2.99,
      available: false,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1004: {
      name: "Helado de vainilla",
      category: "Postres",
      subCategory: "Helados",
      cost: 6.99,
      available: false,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1005: {
      name: "Pizza de pepperoni",
      category: "Comidas",
      subCategory: "Pizzas",
      cost: 14.99,
      available: false,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1006: {
      name: "Jugo de naranja",
      category: "Bebidas",
      subCategory: "Jugos",
      cost: 3.99,
      available: false,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
    1007: {
      name: "Brownie de chocolate",
      category: "Postres",
      subCategory: "Tortas",
      cost: 7.99,
      available: false,
      disabled: false,
      onAvailabilityClick: () => {},
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    },
  },
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
    },
  },
  header: {
    logged: true,
    userRole: "client",
    onPacaClick: () => {},
    name: "Daniel Rodríguez",
    picture:
      "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",
    color: "#EF7A08",
    branchOptions: [],
  },
};
