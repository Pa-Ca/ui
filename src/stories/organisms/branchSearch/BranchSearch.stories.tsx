import React from "react";
import { BranchSearch } from "./BranchSearch";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/BranchSearch",
  component: BranchSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    date: {
      table: {
        disable: true,
      },
    },
    hour: {
      table: {
        disable: true,
      },
    },
    persons: {
      table: {
        disable: true,
      },
    },
    search: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BranchSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchSearch> = (args: any) => {
  const date = useInputForm(new Date());
  const hour = useInputForm({ name: "", value: "" });
  const persons = useInputForm("");
  const search = useInputForm("");

  return (
    <BranchSearch
      date={date}
      hour={hour}
      persons={persons}
      search={search}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
