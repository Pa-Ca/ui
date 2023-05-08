import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BusinessAccountInfo } from "./BusinessAccountInfo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/BusinessAccountInfo",
  component: BusinessAccountInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    validateCurrentPassword: {
      table: {
        disable: true,
      },
    },
    onChangePassword: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BusinessAccountInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BusinessAccountInfo> = (args: any) => {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(undefined);
  const [persons, setPersons] = useState("");
  const [search, setSearch] = useState("");

  return (
    <BusinessAccountInfo
      date={date}
      setDate={setDate}
      hour={hour}
      setHour={setHour}
      persons={persons}
      setPersons={setPersons}
      search={search}
      setSearch={setSearch}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
