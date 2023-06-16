import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { AddFriends } from "./AddFriends";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/AddFriends",
  component: AddFriends,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    invitedFriends: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof AddFriends>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AddFriends> = (args: any) => {
  return <AddFriends {...args} />;
};

const friends = [
  {
    name: "John Doe",
    profilePic: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
  },
  {
    name: "Jane Doe",
    profilePic: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
  },
  {
    name: "Jane Doe",
    profilePic: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  invitedFriends: friends,
};
