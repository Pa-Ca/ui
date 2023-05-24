import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputTime } from "./EditableInputTime";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/molecules/EditableInputTime",
  component: EditableInputTime,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    hoursInputHook: {
      table: {
        disable: true,
      }
    },
    minutesInputHook: {
      table: {
        disable: true,
      }
    },
    saveValueFunction: {
      table: {
        disable: true,
      }
    },
    className: {
      table: {
        disable: true,
      }
    },
    containerClassName: {
      table: {
        disable: true,
      }
    },
    style: {
      table: {
        disable: true,
      }
    },
  },
} as ComponentMeta<typeof EditableInputTime>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableInputTime> = (args: any) => {
  const hoursInputHook = useInputForm("");
  const minutesInputHook = useInputForm("");
  return (
    <EditableInputTime
      hoursInputHook={hoursInputHook}
      minutesInputHook={minutesInputHook}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  saveValueFunction: (value: string) => {},
};
