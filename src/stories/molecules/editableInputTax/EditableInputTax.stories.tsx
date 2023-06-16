import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { EditableInputTax } from "./EditableInputTax";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Design System/Molecules/EditableInputTax",
  component: EditableInputTax,
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
} as Meta<typeof EditableInputTax>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof EditableInputTax> = (args: any) => {
  const nameInputHook = useInputForm("IVA");
  const valueInputHook = useInputForm("13");
  const typeInputHook = useInputForm("%");
  return (
    <EditableInputTax
      nameInputHook={nameInputHook}
      typeInputHook={typeInputHook}
      valueInputHook={valueInputHook}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: "100%",
  totalValue: 42,
  saveValueFunction: () => {},
};
