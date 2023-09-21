import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PromotionApplied } from "./PromotionApplied";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Atoms/PromotionApplied",
  component: PromotionApplied,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PromotionApplied>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PromotionApplied> = (args: any) => {
  return <PromotionApplied {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "",
  height: "",
};
