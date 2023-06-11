import React from "react";
import { SaleProduct } from "./SaleProduct";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/SaleProduct",
  component: SaleProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    quantity: {
      table: {
        disable: true,
      },
    },
    onDelete: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof SaleProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SaleProduct> = (args: any) => {
  const quantity = useInputForm<string>("1");

  return <SaleProduct quantity={quantity} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Coca-cola",
  price: 4.99,
};