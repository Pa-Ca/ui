import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AmenityList, AmenityObject } from './AmenityList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/AmenityList',
  component: AmenityList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    amenityList: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof AmenityList>;

const list: AmenityObject[] = [
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
  { name: 'Spa and wellness center', icon: 'spa' },
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AmenityList> = (args: any) => {
  return <AmenityList amenityList={list} {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: '#EF7A08'
};
