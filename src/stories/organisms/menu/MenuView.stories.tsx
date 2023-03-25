import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuView } from "./MenuView";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/MenuView',
  component: MenuView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof MenuView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuView> = (args: any) => {
  return (
    <MenuView {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    width: "700px",
    height : "100px"
};