import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfilePicture } from './ProfilePicture';
import UserDropdownElement from "../../utils/objects/UserDropdownElement";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/ProfilePicture',
  component: ProfilePicture,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof ProfilePicture>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePicture> = (args: any) => {
  return <ProfilePicture {...args} />;
}

const dropdownOptions: UserDropdownElement[] = [
  {
    name: 'Edit Profile',
    func: () => {},
    icon: "pencil",
  },
  {
    name: 'Logout',
    func: () => {},
    icon: "logout",
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  picture: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg',
  size: '200px',
  border: '5px',
  icon: 'down',
  color: '#EF7A08',
  dropdownOptions: dropdownOptions,
  userName: "Ricardo Milano"
};
