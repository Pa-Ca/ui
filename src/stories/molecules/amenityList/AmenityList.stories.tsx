import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { AmenityList } from "./AmenityList";
import AmenityObject from "../../utils/objects/AmenityObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/AmenityList",
  component: AmenityList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    amenityList: {
      table: {
        disable: true,
      },
    },
    onSave: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof AmenityList>;

const list: AmenityObject[] = [
  { name: "Piscina al aire libre", icon: "pool" },
  { name: "Piscina interior", icon: "pool" },
  { name: "Centro de spa", icon: "spa" },
  { name: "Bar/Salón", icon: "wine" },
  { name: "Wifi libre", icon: "wifi" },
  { name: "Wifi libre2", icon: "wifi" },
  { name: "Wifi libre3", icon: "wifi" },
  { name: "Wifi libre4", icon: "wifi" },
  { name: "Wifi libre8", icon: "wifi" },
  { name: "Wifi libre9", icon: "wifi" },
  { name: "Wifi libre10", icon: "wifi" },
  { name: "Wifi libre11", icon: "wifi" },
  { name: "Wifi libre12", icon: "wifi" },
  { name: "Wifi libre13", icon: "wifi" },
  { name: "Wifi libre20", icon: "wifi" },
  { name: "Wifi libre21", icon: "wifi" },
  { name: "Wifi libre22", icon: "wifi" },
  { name: "Wifi libre23", icon: "wifi" },
  { name: "Wifi libre24", icon: "wifi" },
  { name: "Wifi libre25", icon: "wifi" },
  { name: "Wifi libre26", icon: "wifi" },
  { name: "Wifi libre27", icon: "wifi" },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AmenityList> = (args: any) => {
  return <AmenityList amenityList={list} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  onSave: (amenities) => console.log(amenities),
};
