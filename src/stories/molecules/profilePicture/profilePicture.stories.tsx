import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfilePicture } from './profilePicture';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/ProfilePicture',
  component: ProfilePicture,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof ProfilePicture>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePicture> = (args: any) => {
  return <ProfilePicture {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
