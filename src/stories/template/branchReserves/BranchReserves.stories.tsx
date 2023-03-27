import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BranchReserves } from "./BranchReserves";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchReserves",
  component: BranchReserves,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BranchReserves>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchReserves> = (args: any) => {
  return <BranchReserves {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
    name: "Jonh D.",
    color: "#EF7A08",
  },
  reservations: [
    {
      date: "12 de Febrero",
      reservations: new Array(5).fill({
        start: "6:00 PM",
        owner: "Ivan Tortolero",
        ownerPhone: "0414-8732414",
        persons: 6,
        tables: 6,
        state: 1,
      }),
    },
    {
      date: "13 de Febrero",
      reservations: new Array(5).fill({
        start: "6:00 PM",
        owner: "Ivan Tortolero",
        ownerPhone: "0414-8732414",
        persons: 6,
        tables: 6,
        state: 0,
      }),
    },
    {
      date: "14 de Febrero",
      reservations: new Array(5).fill({
        start: "6:00 PM",
        owner: "Ivan Tortolero",
        ownerPhone: "0414-8732414",
        persons: 6,
        tables: 6,
        state: 0,
      }),
    },
    {
      date: "15 de Febrero",
      reservations: new Array(5).fill({
        start: "6:00 PM",
        owner: "Ivan Tortolero",
        ownerPhone: "0414-8732414",
        persons: 6,
        tables: 6,
        state: 0,
      }),
    },
  ],
};
