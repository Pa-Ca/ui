
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableInputLongText } from "./EditableInputLongText";

export default {
    title: 'Design System/molecules/EditableInputLongText',
    component: EditableInputLongText,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}

  } as ComponentMeta<typeof EditableInputLongText>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template: ComponentStory<typeof EditableInputLongText> = (args: any) => {
    return (
      <EditableInputLongText {...args} />
    );
  }
  
  export const Default = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Default.args = {
      minRows : 6,
      maxRows : 6,
      width : "100%",
      height : "100%",
      maxLength : 480,  
      saveValueFunction: (value: string) => {},
  };