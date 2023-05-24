import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PromotionCard } from "./PromotionCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/PromotionCard",
  component: PromotionCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    onSave: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof PromotionCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PromotionCard> = (args: any) => {
  return <PromotionCard {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  promotion: "2X1 en Aperoles",
  date: new Date(),
  cost: 0,
  color: "#EF7A08",
  secondaryColor: "white",
};
