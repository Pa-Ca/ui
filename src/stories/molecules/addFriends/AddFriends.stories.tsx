import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddFriends } from "./AddFriends";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/molecules/AddFriends",
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
} as ComponentMeta<typeof AddFriends>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddFriends> = (args: any) => {
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
