import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PromotionBanner } from "./PromotionBanner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/PromotionBanner",
  component: PromotionBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PromotionBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PromotionBanner> = (args: any) => {
  return <PromotionBanner {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  price: "US$25 DCTO",
  description: "Solo para productos en especificos",
  date: new Date(),
  width: "",
  height: "",
};
