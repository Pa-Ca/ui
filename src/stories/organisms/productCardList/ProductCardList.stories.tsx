import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ProductCardList } from "./ProductCardList";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/ProductCardList",
  component: ProductCardList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ProductCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ProductCardList> = (args: any) => {
  return (
    <Box style={{ marginTop: "20px" }}>
      <ProductCardList {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  products: {
    1000: {
      product: {
        id: 1000,
        name: "Coca-cola",
        category: {
          label: "Bebidas",
          value: { id: 1000, name: "Bebidas" },
        },
        subCategory: {
          label: "Gaseosas",
          value: { id: 1000, name: "Gaseosas", categoryId: 1000 },
        },
        description: "Bebida gaseosa de 500ml.",
        price: "4.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1001: {
      product: {
        id: 1001,
        name: "Hamburguesa",
        category: {
          label: "Comidas",
          value: { id: 1001, name: "Comidas" },
        },
        subCategory: {
          label: "Carnes",
          value: { id: 1001, name: "Carnes", categoryId: 1001 },
        },
        description: "Pan con carne, queso, lechuga y tomate.",
        price: "12.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1002: {
      product: {
        id: 1002,
        name: "Ensalada César",
        category: {
          label: "Comidas",
          value: { id: 1001, name: "Comidas" },
        },
        subCategory: {
          label: "Vegetales",
          value: { id: 1002, name: "Vegetales", categoryId: 1001 },
        },
        description: "Lechuga, croutons, queso parmesano y salsa césar.",
        price: "8.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1003: {
      product: {
        id: 1003,
        name: "Agua mineral",
        category: {
          label: "Bebidas",
          value: { id: 1000, name: "Bebidas" },
        },
        subCategory: {
          label: "Aguas",
          value: { id: 1003, name: "Aguas", categoryId: 1000 },
        },
        description: "Agua natural sin gas de 500ml.",
        price: "2.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1004: {
      product: {
        id: 1004,
        name: "Helado de vainilla",
        category: {
          label: "Postres",
          value: { id: 1002, name: "Postres" },
        },
        subCategory: {
          label: "Helados",
          value: { id: 1004, name: "Helados", categoryId: 1002 },
        },
        description: "Crema helada de sabor vainilla con salsa de chocolate.",
        price: "6.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1005: {
      product: {
        id: 1005,
        name: "Pizza de pepperoni",
        category: {
          label: "Comidas",
          value: { id: 1001, name: "Comidas" },
        },
        subCategory: {
          label: "Pizzas",
          value: { id: 1006, name: "Pizzas", categoryId: 1001 },
        },
        description: "Masa con salsa de tomate, queso mozzarella y pepperoni.",
        price: "14.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1006: {
      product: {
        id: 1006,
        name: "Jugo de naranja",
        category: {
          label: "Bebidas",
          value: { id: 1000, name: "Bebidas" },
        },
        subCategory: {
          label: "Jugos",
          value: { id: 1001, name: "Jugos", categoryId: 1000 },
        },
        description: "Jugo natural de naranja exprimida de 300ml.",
        price: "3.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
    },
    1007: {
      product: {
        id: 1007,
        name: "Brownie de chocolate",
        category: {
          label: "Postres",
          value: { id: 1002, name: "Postres" },
        },
        subCategory: {
          label: "Tortas",
          value: { id: 1005, name: "Tortas", categoryId: 1002 },
        },
        description: "Bizcocho húmedo de chocolate con nueces y crema batida.",
        price: "7.99",
        disabled: false,
        onSaveName: () => {},
        onSaveSubCategory: () => {},
        onSaveDescription: () => {},
        onSavePrice: () => {},
        onSaveDisabled: () => {},
        onDelete: () => {},
      },
      like: Math.random() > 0.5,
      image:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onLike: () => {},
      onAddToCart: () => Promise.resolve(true),
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
};