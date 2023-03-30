import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Path } from "./Path";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Path",
  component: Path,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Path>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Path> = (args: any) => {
  return <Path {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "FF8682",
  path: [
    {
      name: "Home",
      onClick: () => {},
    },
    {
      name: "Restaurant",
      onClick: () => {},
    },
    {
      name: "Reservar",
      onClick: () => {},
    },
  ],
};
