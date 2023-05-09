
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BranchEdit } from "./BranchEditForm";
import credentials from '../../../../credentials';

export default {
  title: 'Design System/organisms/BranchEditForm',
  component: BranchEdit,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    saveBranchMapsLink: {
      table: {
        disable: true
      }
    },
    saveBranchType: {
      table: {
        disable: true
      }
    },
    saveBranchPrice: {
      table: {
        disable: true
      }
    },
    saveBranchAverageReserveTime: {
      table: {
        disable: true
      }
    },
    saveBranchCapacity: {
      table: {
        disable: true
      }
    },
    saveBranchPhone: {
      table: {
        disable: true
      }
    },
    saveBranchLocation: {
      table: {
        disable: true
      }
    },
    saveBranchDescription: {
      table: {
        disable: true
      }
    },
    saveBranchName: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof BranchEdit>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchEdit> = (args: any) => {
  return (
    <BranchEdit {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branchName: "Ni un brillo pelao",
  branchDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  branchLocation: "chacao",
  branchPhone: "+32 14521452",
  branchCapacity: "5",
  branchAverageReserveTime: "5",
  branchPrice: "5",
  branchType: "americano",
  branchTypeOptions: [
    {
      label: "Americano",
      value: "americano"
    },
    {
      label: "Italiano",
      value: "italiano"
    },
    {
      label: "Japones",
      value: "japones"
    }],
  branchLocationOptions: [
    {
      label: "El Hatillo",
      value: "el hatillo"
    },
    {
      label: "Las Mercedes",
      value: "las mercedes"
    },
    {
      label: "Chacao",
      value: "chacao"
    }],
  MapsApiKey: credentials.maps_key,
  branchMapsLink: "https://www.google.com/maps/place/El+Charrito/@35.5174476,-108.794712,14z/data=!4m10!1m2!2m1!1sRestaurantes!3m6!1s0x8725209d38b2af65:0x61914de8cdc7c448!8m2!3d35.5174099!4d-108.7747707!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F1tj1sk5w?hl=es"

};