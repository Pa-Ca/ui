import React from "react";
import credentials from "../../../../credentials";
import { BusinessProfile } from "./BusinessProfile";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BusinessProfile",
  component: BusinessProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    getUserData: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BusinessProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BusinessProfile> = (args: any) => {
  return <BusinessProfile {...args} />;
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
  name: "Empresa Fresa",
  email: "john.doe@gmail.com",

  branchName: "Ni un brillo pelao",
  branchDescription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  branchLocation: "chacao",
  branchPhone: "+32 14521452",
  branchCapacity: "5",
  branchAverageReserveTime: "5",
  branchPrice: "5",
  branchType: "americano",
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
  MapsApiKey: credentials.maps_key,
  branchMapsLink:
    "https://www.google.com/maps/place/El+Charrito/@35.5174476,-108.794712,14z/data=!4m10!1m2!2m1!1sRestaurantes!3m6!1s0x8725209d38b2af65:0x61914de8cdc7c448!8m2!3d35.5174099!4d-108.7747707!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F1tj1sk5w?hl=es",

  color: "#EF7A08",
  secondaryColor: "#FF8682",
};
