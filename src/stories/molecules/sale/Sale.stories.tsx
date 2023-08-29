import React from "react";
import { Sale } from "./Sale";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";
import TableObject from "../../utils/objects/TableObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Sale",
  component: Sale,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Sale>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Sale> = (args: any) => {
  const tableSelected = useInputForm<TableObject | null>(null);
  
  return <Sale tableSelected={tableSelected} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sale: {
    id: 1,
    ownerName: "Ivan Tortolero",
    ownerEmail: "example@example.com",
    ownerPhone: "+58424000000",
    startTime: new Date(),
    clientQuantity: 3,
    note: "",
    tables: [
      {
        id: 1,
        branchId: 1,
        name: "0001",
      },
      {
        id: 2,
        branchId: 1,
        name: "0002",
      },
      {
        id: 3,
        branchId: 1,
        name: "0003",
      },
      {
        id: 4,
        branchId: 1,
        name: "0004",
      },
      {
        id: 5,
        branchId: 1,
        name: "0005",
      },
      {
        id: 6,
        branchId: 1,
        name: "0006",
      },
      {
        id: 7,
        branchId: 1,
        name: "0007",
      },
      {
        id: 8,
        branchId: 1,
        name: "0008",
      },
      {
        id: 9,
        branchId: 1,
        name: "0009",
      },
      {
        id: 10,
        branchId: 1,
        name: "0010",
      },
    ],
    taxes: [],
    products: [],
    hasReservation: false,
  },
  selected: false,
  width: "",
};
