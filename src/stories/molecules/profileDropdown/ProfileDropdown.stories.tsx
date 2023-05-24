import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProfileDropdown } from "./ProfileDropdown";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ProfileDropdown",
  component: ProfileDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ProfileDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileDropdown> = (args: any) => {
  return <ProfileDropdown {...args} />;
};

const dropdownOptions: UserDropdownElement[] = [
  {
    name: "Edit Profile",
    func: () => {},
    icon: "pencil",
  },
  {
    name: "Logout",
    func: () => {},
    icon: "logout",
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
  size: "200px",
  border: "5px",
  color: "#EF7A08",
  dropdownOptions: dropdownOptions,
  userName: "Ricardo Milano",
};
