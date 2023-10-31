import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ProductDetailsSelection } from "./ProductDetailsSelection";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/ProductDetailsSelection",
  component: ProductDetailsSelection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ProductDetailsSelection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ProductDetailsSelection> = (args: any) => {
  return (
    <Box style={{ marginTop: "20px" }}>
      <ProductDetailsSelection {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  productName: "Lanespan Pizza & Pub (Emeryville)",
  productPrice: 21,
  productDescription:
    "Garlic, olive oil base, mozarella, cremini mushrooms, ricotta,  thyme, white truffle oil. Add arugula for an extra charge.",
  discountedPrice: 16.99,
  selections: [
    {
      title: "Choose your sauce",
      required: true,
      multiple: false,
      count: undefined,
      selected: "Sauce 2",
      options: ["Sauce 1", "Sauce 2", "Sauce 3", "Sauce 4", "Sauce 5"],
      onSelect: () => {},
    },
    {
      title: "Choose your sauce",
      required: false,
      multiple: true,
      count: 3,
      selected: new Set(["Sauce 1", "Sauce 4"]),
      options: ["Sauce 1", "Sauce 2", "Sauce 3", "Sauce 4", "Sauce 5"],
      onSelect: () => {},
    },
  ],
};
