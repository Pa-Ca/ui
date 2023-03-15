import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryCard } from './categoryCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Design System/Molecules/CategoryCard',
    component: CategoryCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: { 
      onClick: {
        table: {
          disable: true
        }
      },
    },
  } as ComponentMeta<typeof CategoryCard>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof CategoryCard> = (args: any) => {
    return <CategoryCard {...args} />;
  }
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
    title : 'Lorem ipsum dolor sit amet',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    width  : '500px',
    height : '700px',
    textColor : '#FFFFFF',
    buttonColor : '#EF7A08',
    backgroundImage: 'https://travellersworldwide.com/wp-content/uploads/2022/04/Psatha-one-of-Santorinis-best-restaurants-pictured-on-the-patio.jpeg',
  };
  