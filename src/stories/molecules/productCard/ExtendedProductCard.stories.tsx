import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ExtendedProductCard } from "./ProductCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ExtendedProductCard",
  component: ExtendedProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ExtendedProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ExtendedProductCard> = (args: any) => {
  return <ExtendedProductCard {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Pasta Francesa",
  cost: 104,
  category: "Categoria",
  subCategory: "Subcategoria",
  available: true,
  productImage:
    "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
  width: "0px",
  height: "0px",
};
