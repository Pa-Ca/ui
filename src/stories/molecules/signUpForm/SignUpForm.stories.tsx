import React from "react";
import { SignUpForm } from "./SignUpForm";
import useInputForm from "../../hooks/useInputForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/SignUpForm",
  component: SignUpForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    firstName: {
      table: {
        disable: true,
      },
    },
    lastName: {
      table: {
        disable: true,
      },
    },
    businessName: {
      table: {
        disable: true,
      },
    },
    email: {
      table: {
        disable: true,
      },
    },
    phone: {
      table: {
        disable: true,
      },
    },
    password: {
      table: {
        disable: true,
      },
    },
    validateClientData: {
      table: {
        disable: true,
      },
    },
    validateBusinessData: {
      table: {
        disable: true,
      },
    },
    onLogin: {
      table: {
        disable: true,
      },
    },
    onTermsAndConditionsClick: {
      table: {
        disable: true,
      },
    },
    onClientSignUp: {
      table: {
        disable: true,
      },
    },
    onBusinessSignUp: {
      table: {
        disable: true,
      },
    },
    onGoogleSignUp: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof SignUpForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUpForm> = (args: any) => {
  const firstName = useInputForm<string>("");
  const lastName = useInputForm<string>("");
  const businessName = useInputForm<string>("");
  const email = useInputForm<string>("");
  const phone = useInputForm<string>("");
  const password = useInputForm<string>("");

  return (
    <SignUpForm
      firstName={firstName}
      lastName={lastName}
      businessName={businessName}
      email={email}
      phone={phone}
      password={password}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  secondaryColor: "#FF8682",
  otherLoginsColor: "#8DD3BB",
};
