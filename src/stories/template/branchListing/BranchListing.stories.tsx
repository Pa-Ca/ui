import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BranchListing } from "./BranchListing";
import { exampleLongBranchList } from "../../organisms/branchItem/BranchItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchListing",
  component: BranchListing,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onButtonClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BranchListing>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchListing> = (args: any) => {
  return <BranchListing {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branches: exampleLongBranchList,
};
