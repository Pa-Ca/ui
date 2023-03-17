import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuPreview } from './MenuPreview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/MenuPreview',
  component: MenuPreview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
  },
} as ComponentMeta<typeof MenuPreview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuPreview> = (args: any) => {
  return (
    <MenuPreview {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: '#EF7A08',
  plates: [
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
    {
      price: 14.25,
      title: 'Pizza',
      description: 'Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.',
      image: 'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
      onClick: () => {}
    },
  ]
};
