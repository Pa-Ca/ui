import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onLeftSectionClick: {
      table: {
        disable: true
      }
    },
    onPacaClick: {
      table: {
        disable: true
      }
    },
    onProfileClick: {
      table: {
        disable: true
      }
    },
    onRightSectionClick: {
      table: {
        disable: true
      }
    },
    onLoginClick: {
      table: {
        disable: true
      }
    },
    onRegisterClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args: any) => {
  return (
    <Header {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  picture: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg',
  name: 'Jonh D.',
  color: '#EF7A08'
};
