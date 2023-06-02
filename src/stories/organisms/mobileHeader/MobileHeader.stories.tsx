import React from "react";
import { MobileHeader } from "./MobileHeader";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/MobileHeader",
  component: MobileHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onLeftSectionClick: {
      table: {
        disable: true,
      },
    },
    onPacaClick: {
      table: {
        disable: true,
      },
    },
    onProfileClick: {
      table: {
        disable: true,
      },
    },
    onRightSectionClick: {
      table: {
        disable: true,
      },
    },
    onLoginClick: {
      table: {
        disable: true,
      },
    },
    onRegisterClick: {
      table: {
        disable: true,
      },
    },
    onEditProfile: {
      table: {
        disable: true,
      },
    },
    onFavoritesClick: {
      table: {
        disable: true,
      },
    },
    onLogout: {
      table: {
        disable: true,
      },
    },
    onReservationsClick: {
      table: {
        disable: true,
      },
    },
    onReserveClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof MobileHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof MobileHeader> = (args: any) => {
  return <MobileHeader {...args} />;
};

const BranchOptions = [
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador, Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Daniel Rodríguez",
  picture:
    "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",
  color: "#EF7A08",
  currentBranch: "Los Pollo Hermanos",
  branchOptions: BranchOptions,
};
