import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchProductsResume } from "./BranchProductsResume";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchProductsResume",
  component: BranchProductsResume,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchProductsResume>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchProductsResume> = (args: any) => {
  const name = useInputForm<string>("");
  const price = useInputForm<string>("");

  return <BranchProductsResume newName={name} newPrice={price} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  productsCount: 42,
  categoriesCount: 7,
  productsAvailableOnlineCount: 33,
  highlightProducts: [
    {
      name: "Pasta Francesa",
      cost: 104,
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onDelete: () => {},
    },
    {
      name: "Pasta Francesa",
      cost: 104,
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onDelete: () => {},
    },
  ],
  cupons: [
    {
      name: "Pasta Francesa",
      cost: 95.99,
      productImage:
        "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      onDelete: () => {},
    },
  ],
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
