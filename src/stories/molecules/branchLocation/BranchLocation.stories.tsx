import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchLocation } from "./BranchLocation";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/BranchLocation",
  component: BranchLocation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchLocation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchLocation> = (args: any) => {
  return <BranchLocation {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  lat: 10.4302,
  lng: -66.8771,
  location: "El Hatillo, Caracas, Venezuela",
  apiKey: process.env.VITE_GOOGLE_MAPS_API_KEY,
};
