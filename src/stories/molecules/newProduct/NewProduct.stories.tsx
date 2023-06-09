import React from "react";
import { NewProduct } from "./NewProduct";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/NewProduct",
  component: NewProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    category: {
      table: {
        disable: true,
      },
    },
    subCategory: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      },
    },
    price: {
      table: {
        disable: true,
      },
    },
    available: {
      table: {
        disable: true,
      },
    },
    onSaveName: {
      table: {
        disable: true,
      },
    },
    onSaveCategory: {
      table: {
        disable: true,
      },
    },
    onSaveSubCategory: {
      table: {
        disable: true,
      },
    },
    onSaveDescription: {
      table: {
        disable: true,
      },
    },
    onSavePrice: {
      table: {
        disable: true,
      },
    },
    onSaveAvailable: {
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
} as Meta<typeof NewProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NewProduct> = (args: any) => {
  const name = useInputForm<string>("Coca-Cola");
  const price = useInputForm<string>("4.99");

  return <NewProduct name={name} price={price} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  category: "Bebidas",
  subCategory: "Gaseosas",
};
