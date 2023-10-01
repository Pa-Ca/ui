import React from "react";
import { ExtraOption } from "./ExtraOption";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Design System/Molecules/ExtraOption",
  component: ExtraOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ExtraOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ExtraOption> = (args: any) => {
  return <ExtraOption {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Product name",
  description: "Product description",
  onClick: () => {},
};
