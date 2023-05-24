import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { HeaderBranchDropdown } from "./HeaderBranchDropdown";
import BranchDropdownElement from "../../utils/objects/BranchDropdownElement";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/HeaderBranchDropdown",
  component: HeaderBranchDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof HeaderBranchDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof HeaderBranchDropdown> = (args: any) => {
  return <HeaderBranchDropdown {...args} />;
};

const dropdownOptions: BranchDropdownElement[] = [
  {
    name: "Sucursal 1",
    func: () => {}
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {}
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  border: "5px",
  color: "#EF7A08",
  dropdownOptions: dropdownOptions,
};
