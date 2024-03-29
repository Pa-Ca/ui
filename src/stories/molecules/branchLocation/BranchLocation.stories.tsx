import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BranchLocation } from "./BranchLocation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/BranchLocation",
  component: BranchLocation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BranchLocation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchLocation> = (args: any) => {
  return <BranchLocation {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  location: "El Hatillo, Caracas, Venezuela",
  image:
    "https://www.c2dh.uni.lu/sites/default/files/styles/full_width/public/field/image/capture.png?itok=REb8jh_H",
};
