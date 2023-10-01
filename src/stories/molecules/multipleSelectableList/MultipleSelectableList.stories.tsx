import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MultipleSelectableList } from "./MultipleSelectableList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/MultipleSelectableList",
  component: MultipleSelectableList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof MultipleSelectableList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MultipleSelectableList> = (args: any) => {
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  const onSelect = (option: string) => {
    setSelected((prev) => {
      const prevSelected = new Set(prev);

      if (prevSelected.has(option)) {
        prevSelected.delete(option);
      } else {
        prevSelected.add(option);
      }

      return prevSelected;
    });
  };

  return <MultipleSelectableList {...args} selected={selected} onSelect={onSelect} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"],
};
