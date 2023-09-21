import React from "react";
import { OptionBar } from "./OptionBar";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/OptionBar",
  component: OptionBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof OptionBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof OptionBar> = (args: any) => {
  return <OptionBar {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  indexSelected: 0,
  items: [
    { name: "Delivery", description: "25 - 35 min" },
    { name: "Delivery", description: "25 - 35 min" },
    { name: "Delivery", description: "25 - 35 min" },
    { name: "Delivery", description: "25 - 35 min" },
    { name: "Delivery", description: "25 - 35 min" },
  ],
};
