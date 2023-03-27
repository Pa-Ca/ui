import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddPromotionCard } from './AddPromotionCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/AddPromotionCard',
  component: AddPromotionCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof AddPromotionCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddPromotionCard> = (args: any) => {
  return <AddPromotionCard {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: 'Agregar Promoción',
  color: '#A5A5A5',
  secondaryColor: 'white'
};
