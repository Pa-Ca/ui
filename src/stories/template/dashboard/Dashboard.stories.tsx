import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Dashboard } from "./Dashboard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/Dashboard",
  component: Dashboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Dashboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dashboard> = (args: any) => {
  return <Dashboard {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
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
  userName: "Daniel Rodríguez",
  localFilled: 42,
  reservations: 24,
  reservationsToApprove: 3,
  monthlyProfit: [
    {
      date: "2021-01-01",
      profit: 100,
    },
    {
      date: "2021-01-02",
      profit: 34,
    },
    {
      date: "2021-01-03",
      profit: 42,
    },
    {
      date: "2021-01-04",
      profit: 78,
    },
    {
      date: "2021-01-05",
      profit: 128,
    },
    {
      date: "2021-01-06",
      profit: 136,
    },
    {
      date: "2021-01-07",
      profit: 44,
    },
    {
      date: "2021-01-08",
      profit: 89,
    },
    {
      date: "2021-01-09",
      profit: 30,
    },
  ],
  bestProducts: [
    { name: "Pizza triple queso", quantity: 24 },
    { name: "Hamburguesa", quantity: 16 },
    { name: "Ensalada César", quantity: 13 },
  ],
};
