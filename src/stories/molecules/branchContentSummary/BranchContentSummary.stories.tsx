import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchContentSummary } from './BranchContentSummary';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/BranchContentSummary',
  component: BranchContentSummary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof BranchContentSummary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchContentSummary> = (args: any) => {
  return <BranchContentSummary {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Nombre Rest',
  score: 3.7,
  reviews: 4273,
  category: 'Americana',
  pricePerson: 15.99,
  location: 'Las Mercedes',
  price: 10,
  color: '#EF7A08'
};
