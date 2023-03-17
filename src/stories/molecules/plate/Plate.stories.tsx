import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Plate } from './Plate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/Plate',
  component: Plate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
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
} as ComponentMeta<typeof Plate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Plate> = (args: any) => {
  return <Plate {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  price: 14.25,
  title: 'Pizza',
  description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
  image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
  color: '#EF7A08',
};
