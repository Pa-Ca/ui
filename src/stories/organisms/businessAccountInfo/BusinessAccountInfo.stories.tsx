import React from "react";
import useInputForm from "../../hooks/useInputForm";
import { BusinessAccountInfo } from "./BusinessAccountInfo";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/BusinessAccountInfo",
  component: BusinessAccountInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    validateCurrentPassword: {
      table: {
        disable: true,
      },
    },
    onChangePassword: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    email: {
      table: {
        disable: true,
      },
    },
    phoneNumber: {
      table: {
        disable: true,
      },
    },
    password: {
      table: {
        disable: true,
      },
    },
    newPassword: {
      table: {
        disable: true,
      },
    },
    setChangePassword: {
      table: {
        disable: true,
      },
    },
    onForgotPassword: {
      table: {
        disable: true,
      },
    },
    onSaveName: {
      table: {
        disable: true,
      },
    },
    onSavePhoneNumber: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BusinessAccountInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BusinessAccountInfo> = (args: any) => {
  const name = useInputForm("");
  const email = useInputForm("");
  const phoneNumber = useInputForm("");
  const password = useInputForm("");
  const newPassword = useInputForm("");

  return (
    <BusinessAccountInfo
      name={name}
      email={email}
      phoneNumber={phoneNumber}
      password={password}
      newPassword={newPassword}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
