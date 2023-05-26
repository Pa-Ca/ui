import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { UploadProfilePictureForm } from "./UploadProfilePictureForm";

export default {
    title: "Design System/Organisms/UploadProfilePictureForm",
    component: UploadProfilePictureForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      onButtonClick: {
        table: {
          disable: true,
        },
      },
    },
  } as Meta<typeof UploadProfilePictureForm>;


const Template: StoryFn<typeof UploadProfilePictureForm> = (args: any) => {
    return (
        <UploadProfilePictureForm
        {...args}
        />
    );
};

export const Default = Template.bind({});