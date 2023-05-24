import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paginable } from "./Paginable";
import { Text } from "../../atoms/text/Text";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/Paginable",
  component: Paginable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    list: {
      table: {
        disable: true,
      },
    },
    setCurrentList: {
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
} as ComponentMeta<typeof Paginable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paginable> = (args: any) => {
  const numberList = Array.from(Array(1000).keys());
  const [currentList, setCurrentList] = useState(numberList.slice(0, 5));

  return (
    <Paginable<number> list={numberList} setCurrentList={setCurrentList} {...args}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {currentList.map((number) => (
          <Text key={number}>{number}</Text>
        ))}
      </Box>
    </Paginable>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
