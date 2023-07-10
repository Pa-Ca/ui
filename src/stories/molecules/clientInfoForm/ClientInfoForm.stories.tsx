import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ClientInfoForm } from "./ClientInfoForm";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/ClientInfoForm",
  component: ClientInfoForm,
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
  },
} as Meta<typeof ClientInfoForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ClientInfoForm> = (args: any) => {
  const firstName = useInputForm<string>("");
  const lastName = useInputForm<string>("");
  const email = useInputForm<string>("");
  const phone = useInputForm<string>("");

  const identityDocument = useInputForm("");
  const identityDocumentTypeOpt: OptionObject<string>[] = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ];
  const identityDocumentType = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });

  return (
    <ClientInfoForm
      identityDocument={identityDocument}
      identityDocumentType={identityDocumentType}
      identityDocumentTypeOpt={identityDocumentTypeOpt}
      firstName={firstName}
      lastName={lastName}
      email={email}
      phone={phone}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
