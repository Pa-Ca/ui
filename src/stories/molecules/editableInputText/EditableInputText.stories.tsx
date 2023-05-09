import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EditableInputText } from "./EditableInputText";

export default {
  title: "Design System/molecules/EditableInputText",
  component: EditableInputText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EditableInputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableInputText> = (args: any) => {
  return <EditableInputText {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  saveValueFunction: (value: string) => {},
};
