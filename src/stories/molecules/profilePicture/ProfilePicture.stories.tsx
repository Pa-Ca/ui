import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ProfilePicture } from "./ProfilePicture";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ProfilePicture",
  component: ProfilePicture,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ProfilePicture>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ProfilePicture> = (args: any) => {
  return (
    <Box>
      <ProfilePicture {...args} />
    </Box>
  );
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
  icon: "down",
  dropdownOptions: dropdownOptions,
  userName: "Ricardo Milano",
};
