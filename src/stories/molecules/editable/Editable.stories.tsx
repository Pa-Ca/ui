import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Editable } from "./Editable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Editable",
  component: Editable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onPencilClick: {
      table: {
        disable: true,
      },
    },
    onSaveClick: {
      table: {
        disable: true,
      },
    },
    onCancelClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Editable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Editable> = (args: any) => {
  return <Editable {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
