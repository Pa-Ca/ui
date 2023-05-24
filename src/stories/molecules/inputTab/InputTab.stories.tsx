import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { InputTab } from "./InputTab";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/InputTab",
  component: InputTab,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: {
      table: {
        disable: true,
      },
    },
    setIndex: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof InputTab>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof InputTab> = (args: any) => {
  const [index, setIndex] = useState(0);

  return <InputTab index={index} setIndex={setIndex} tabs={args.tabs} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  tabs: ["Cuenta", "Reservas Pendientes", "Métodos de Pago"],
};
