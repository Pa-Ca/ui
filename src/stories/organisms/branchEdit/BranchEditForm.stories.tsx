
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchEdit } from "./BranchEditForm";

export default {
    title: 'Design System/organisms/BranchEditForm',
    component: BranchEdit,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: { 
      onButtonClick: {
        table: {
          disable: true
        }
      }
    },
  } as ComponentMeta<typeof BranchEdit>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof BranchEdit> = (args: any) => {
    return (
      <BranchEdit {...args} />
    );
  }
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
      width: '1300px',  
  };