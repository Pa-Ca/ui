import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/Header',
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
  name: "Daniel Rodríguez",
  picture: "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",
  color: '#EF7A08'
};
