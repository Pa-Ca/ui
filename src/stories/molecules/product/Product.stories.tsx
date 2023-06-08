import React from "react";
import { Product } from "./Product";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Product",
  component: Product,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Product> = (args: any) => {
  const name = useInputForm<string>("Coca-Cola");
  const category = useInputForm<string>("Bebidas");
  const subCategory = useInputForm<string>("Gaseosas");
  const description = useInputForm<string>("Bebida gaseosa de cola de 500ml.");
  const price = useInputForm<string>("4.99");
  const available = useInputForm<boolean>(true);

  return (
    <Product
      name={name}
      category={category}
      subCategory={subCategory}
      description={description}
      price={price}
      available={available}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  categoryOptions: [
    { label: "Bebidas", text: "Bebidas" },
    { label: "Comida", text: "Comida" },
    { label: "Postres", text: "Postres" },
  ],
  subCategoryOptions: [
    { label: "Gaseosas", text: "Gaseosas" },
    { label: "Jugos", text: "Jugos" },
    { label: "Cervezas", text: "Cervezas" },
  ],
};
