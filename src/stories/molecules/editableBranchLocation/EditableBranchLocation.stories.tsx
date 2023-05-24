import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EditableBranchLocation } from "./EditableBranchLocation";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/EditablebranchLocation",
  component: EditableBranchLocation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EditableBranchLocation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableBranchLocation> = (args: any) => {
  return <EditableBranchLocation {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  color: "#EF7A08",
  googleMapsLink: "https://www.google.com/maps/place/La+Muralla+Gourmet/@10.4293925,-66.8281682,17.52z/data=!4m6!3m5!1s0x8c2af7a82fbcf73f:0x900016adfdcd22c9!8m2!3d10.4281246!4d-66.8288651!16s%2Fg%2F11qg47gc8z", 
<<<<<<< HEAD
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
=======
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
>>>>>>> 0188cac3726ae34ff095296ada64f6143b7d6bcb
};
