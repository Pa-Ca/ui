import React from "react";
import { InputTextSelect } from "./InputTextSelect";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/InputTextSelect",
  component: InputTextSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputHook: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof InputTextSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputTextSelect> = (args: any) => {
  const inputHookText = useInputForm("");
  const inputHookSelectOptions: OptionObject<string>[] = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ];
  const inputHookSelect = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });
  return <InputTextSelect
          required
          inputHookText={inputHookText}
          inputHookSelect={inputHookSelect}
          inputHookSelectOptions={inputHookSelectOptions}
          label={"Documento de Identidad"}
          {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};