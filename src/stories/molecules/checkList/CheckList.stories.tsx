import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckList } from './CheckList';
import CheckObject from '../../utils/objects/CheckObject';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/CheckList',
  component: CheckList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    textClassName: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof CheckList>;

const items_: CheckObject[] = [
  {
    value: 'option1',
    name: 'Option 1',
    selected: false
  },
  {
    value: 'option2',
    name: 'Option 2',
    selected: false
  },
  {
    value: 'option3',
    name: 'Option 3',
    selected: false
  },
  {
    value: 'option4',
    name: 'Option 4',
    selected: false
  },
  {
    value: 'option5',
    name: 'Option 5',
    selected: false
  },
];


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckList> = (args: any) => {
  const [items, setItems] = useState(items_);
  return (
    <CheckList
      items={items}
      setItems={setItems}
      {...args}
    />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
