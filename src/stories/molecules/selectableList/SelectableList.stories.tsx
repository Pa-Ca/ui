import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SelectableList } from "./SelectableList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/SelectableList",
  component: SelectableList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SelectableList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SelectableList> = (args: any) => {
  const [selected, setSelected] = React.useState(args.options[0]);

  return (
    <SelectableList {...args} selected={selected} onSelect={(option) => setSelected(option)} />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"],
};
