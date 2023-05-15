import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";
import { Text } from "../../atoms/text/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    setOpen: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args: any) => {
  const [value, setValue] = useState("");
  return <Modal value={value} setValue={setValue} {...args} >
    <Text> Este es un modal </Text>
  </Modal>;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
