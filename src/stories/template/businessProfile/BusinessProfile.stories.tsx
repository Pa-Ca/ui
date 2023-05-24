import React from "react";
import { BusinessProfile } from "./BusinessProfile";
import useInputForm from "../../hooks/useInputForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BusinessProfile",
  component: BusinessProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    header: {
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
    onChangePassword: {
      table: {
        disable: true,
      },
    },
    onCreateBranch: {
      table: {
        disable: true,
      },
    },
    onPictureClick: {
      table: {
        disable: true,
      },
    },
    onForgotPassword: {
      table: {
        disable: true,
      },
    },
    branchName: {
      table: {
        disable: true,
      },
    },
    branchDescription: {
      table: {
        disable: true,
      },
    },
    branchLocation: {
      table: {
        disable: true,
      },
    },
    branchPhone: {
      table: {
        disable: true,
      },
    },
    branchCapacity: {
      table: {
        disable: true,
      },
    },
    branchAverageReserveTimeHours: {
      table: {
        disable: true,
      },
    },
    branchAverageReserveTimeMinutes: {
      table: {
        disable: true,
      },
    },
    branchPrice: {
      table: {
        disable: true,
      },
    },
    branchMapsLink: {
      table: {
        disable: true,
      },
    },
    branchType: {
      table: {
        disable: true,
      },
    },
    branchTypeOptions: {
      table: {
        disable: true,
      },
    },
    branchLocationOptions: {
      table: {
        disable: true,
      },
    },
    branchClosingTimeHour: {
      table: {
        disable: true,
      },
    },
    branchClosingTimeMinute: {
      table: {
        disable: true,
      },
    },
    branchOpeningTimeHour: {
      table: {
        disable: true,
      },
    },
    branchOpeningTimeMinute: {
      table: {
        disable: true,
      },
    },
    mapsApiKey: {
      table: {
        disable: true,
      },
    },
    onSaveBranchName: {
      table: {
        disable: true,
      },
    },
    onSaveBranchDescription: {
      table: {
        disable: true,
      },
    },
    onSaveBranchLocation: {
      table: {
        disable: true,
      },
    },
    onSaveBranchPhone: {
      table: {
        disable: true,
      },
    },
    onSaveBranchCapacity: {
      table: {
        disable: true,
      },
    },
    onSaveBranchAverageReserveTime: {
      table: {
        disable: true,
      },
    },
    onSaveBranchPrice: {
      table: {
        disable: true,
      },
    },
    onSaveBranchType: {
      table: {
        disable: true,
      },
    },
    onSaveBranchMapsLink: {
      table: {
        disable: true,
      },
    },
    onSaveBranchClosingTime: {
      table: {
        disable: true,
      },
    },
    onSaveBranchOpeningTime: {
      table: {
        disable: true,
      },
    },
    onDeleteBranch: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BusinessProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BusinessProfile> = (args: any) => {
  const name = useInputForm("Example Business");
  const email = useInputForm("example@example.com");
  const password = useInputForm("");
  const phoneNumber = useInputForm("");
  const newPassword = useInputForm("");
  const branchName = useInputForm("");
  const branchDescription = useInputForm("");
  const branchLocation = useInputForm("");
  const branchPhone = useInputForm("");
  const branchCapacity = useInputForm("");
  const branchAverageReserveTimeHours = useInputForm("");
  const branchAverageReserveTimeMinutes = useInputForm("");
  const branchPrice = useInputForm("");
  const branchMapsLink = useInputForm("");
  const branchType = useInputForm("");
  const branchTypeOptions = useInputForm("");
  const branchLocationOptions = useInputForm("");
  const branchOpeningTimeHour = useInputForm("9");
  const branchOpeningTimeMinute = useInputForm("0");
  const branchClosingTimeHour = useInputForm("21");
  const branchClosingTimeMinute = useInputForm("0");

  return (
    <BusinessProfile
      name={name}
      email={email}
      password={password}
      phoneNumber={phoneNumber}
      newPassword={newPassword}
      branchName={branchName}
      branchDescription={branchDescription}
      branchLocation={branchLocation}
      branchPhone={branchPhone}
      branchCapacity={branchCapacity}
      branchAverageReserveTimeHours={branchAverageReserveTimeHours}
      branchAverageReserveTimeMinutes={branchAverageReserveTimeMinutes}
      branchPrice={branchPrice}
      branchMapsLink={branchMapsLink}
      branchType={branchType}
      branchTypeOptions={branchTypeOptions}
      branchLocationOptions={branchLocationOptions}
      branchOpeningTimeHour={branchOpeningTimeHour}
      branchOpeningTimeMinute={branchOpeningTimeMinute}
      branchClosingTimeHour={branchClosingTimeHour}
      branchClosingTimeMinute={branchClosingTimeMinute}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    name: "Sempre Dritto",
    color: "#EF7A08",
  },
  mainImage:
    "https://i.pinimg.com/originals/55/00/d3/5500d308acf37ec5c31cc2e5c7785921.jpg",
  profilePicture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",

  branchTypeOptions: [
    {
      label: "Americano",
      value: "americano",
    },
    {
      label: "Italiano",
      value: "italiano",
    },
    {
      label: "Japones",
      value: "japones",
    },
  ],
  branchLocationOptions: [
    {
      label: "El Hatillo",
      value: "el hatillo",
    },
    {
      label: "Las Mercedes",
      value: "las mercedes",
    },
    {
      label: "Chacao",
      value: "chacao",
    },
  ],
  mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  color: "#EF7A08",
  secondaryColor: "#FF8682",
};
