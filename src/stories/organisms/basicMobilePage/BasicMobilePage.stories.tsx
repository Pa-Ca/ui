import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BasicMobilePage } from "./BasicMobilePage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/BasicMobilePage",
  component: BasicMobilePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BasicMobilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BasicMobilePage> = (args: any) => {
  return <BasicMobilePage {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headerArgs: {
    logged: true,
    userRole: 'client',
    onPacaClick: () => {},
    name: "Daniel Rodríguez",
    picture: "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",  
    color: "#EF7A08",
    branchOptions: []
  },
};
