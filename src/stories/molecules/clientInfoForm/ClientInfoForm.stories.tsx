import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClientInfoForm } from "./ClientInfoForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ClientInfoForm",
  component: ClientInfoForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ClientInfoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClientInfoForm> = (args: any) => {
  return <ClientInfoForm {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};