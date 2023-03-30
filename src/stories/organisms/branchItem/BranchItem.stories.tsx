import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchItem } from './BranchItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/BranchItem',
  component: BranchItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onViewMoreClick: {
      table: {
        disable: true
      }
    },
    onLikeClick: {
      table: {
        disable: true
      }
    },
    onFirstReserveClick: {
      table: {
        disable: true
      }
    },
    onSecondReserveClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof BranchItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchItem> = (args: any) => {
  return (
    <BranchItem {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'Restaurante Promedio',
  image: 'https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-restaurante_79169-56.jpg?w=2000',
  score: 3.7,
  reviews: 4273,
  category: 'Italiana',
  location: 'Las Mercedes',
  firstReserve: '8:00 pm',
  secondReserve: '10:00 pm',
  priceScore: 3,
  color: '#EF7A08',
  priceColor: '#FF8682'
};
