import React from "react";
import { SaleList } from "./SaleList";
import { Box } from "../../atoms/box/Box";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";
import { SaleProps } from "../../molecules/sale/Sale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/SaleList",
  component: SaleList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SaleList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SaleList> = (args: any) => {
  const searchHook = useInputForm("");
  const tableSelected = useInputForm("");
  const saleSelected = useInputForm<SaleProps | null>(null);

  return (
    <Box width="450px">
      <SaleList
        searchHook={searchHook}
        saleSelected={saleSelected}
        tableSelected={tableSelected}
        {...args}
      />
    </Box>
  );
};

const tables = [
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
  {
    id: 11,
    branchId: 1,
    name: "0011",
  },
  {
    id: 12,
    branchId: 1,
    name: "0012",
  },
  {
    id: 13,
    branchId: 1,
    name: "0013",
  },
  {
    id: 14,
    branchId: 1,
    name: "0014",
  },
  {
    id: 15,
    branchId: 1,
    name: "0015",
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  sales: [
    {
      id: 1,
      ownerName: "Iván Tortolero",
      startTime: "12:00 PM",
      clientQuantity: 3,
      tables: [tables[0]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 2,
      ownerName: "Elio Ortega",
      startTime: "01:00 PM",
      clientQuantity: 8,
      tables: [tables[1], tables[2]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 3,
      ownerName: "José Barrera",
      startTime: "06:00 PM",
      clientQuantity: 25,
      tables: [
        tables[1],
        tables[2],
        tables[5],
        tables[6],
        tables[7],
        tables[8],
        tables[11],
        tables[12],
        tables[13],
        tables[14],
      ],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 4,
      ownerName: "Eduardo López",
      startTime: "03:00 PM",
      clientQuantity: 15,
      tables: [
        tables[8],
        tables[9],
        tables[10],
        tables[0],
        tables[1],
        tables[2],
      ],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 5,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 6,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 7,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 8,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 9,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
    {
      id: 10,
      ownerName: "Amin Arriaga",
      startTime: "04:00 PM",
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "",
      taxes: [],
      products: [],
    },
  ],
  tables,
};
