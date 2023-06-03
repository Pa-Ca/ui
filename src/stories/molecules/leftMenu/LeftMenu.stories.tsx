import React from "react";
import { LeftMenu } from "./LeftMenu";
import { StoryFn, Meta } from "@storybook/react";
import { Box } from "../../atoms/box/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Molecules/LeftMenu",
  component: LeftMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
    onEditProfile: {
      table: {
        disable: true,
      },
    },
    onReserveClick: {
      table: {
        disable: true,
      },
    },
    onReservationsClick: {
      table: {
        disable: true,
      },
    },
    onFavoritesClick: {
      table: {
        disable: true,
      },
    },
    onLogoutClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof LeftMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof LeftMenu> = (args: any) => {
  return (
    <Box style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}>
      <LeftMenu {...args} />
    </Box>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
  username: "Sempre Ditto",
  currentBranch: "Sucursal 1",
  branchOptions: [
    {
      name: "Sucursal 1",
      func: () => {},
    },
    {
      name: "Sucursal 2",
      func: () => {},
    },
    {
      name: "Sucursal 3",
      func: () => {},
    },
    {
      name: "Sucursal 4 with loooooooooooong name",
      func: () => {},
    },
    {
      name: "Sucursal 5",
      func: () => {},
    },
    {
      name: "Sucursal 6",
      func: () => {},
    },
    {
      name: "Sucursal 7",
      func: () => {},
    },
  ],
};
