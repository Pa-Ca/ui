import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BranchEditForm } from "./BranchEditForm";
import credentials from "../../../../credentials";
import useInputForm from "../../hooks/useInputForm";

export default {
  title: "Design System/organisms/BranchEditForm",
  component: BranchEditForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      },
    },
    location: {
      table: {
        disable: true,
      },
    },
    phone: {
      table: {
        disable: true,
      },
    },
    capacity: {
      table: {
        disable: true,
      },
    },
    averageReserveTime: {
      table: {
        disable: true,
      },
    },
    price: {
      table: {
        disable: true,
      },
    },
    mapsLink: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    onSaveName: {
      table: {
        disable: true,
      },
    },
    onSaveDescription: {
      table: {
        disable: true,
      },
    },
    onSaveLocation: {
      table: {
        disable: true,
      },
    },
    onSavePhone: {
      table: {
        disable: true,
      },
    },
    onSaveCapacity: {
      table: {
        disable: true,
      },
    },
    onSaveAverageReserveTime: {
      table: {
        disable: true,
      },
    },
    onSavePrice: {
      table: {
        disable: true,
      },
    },
    onSaveType: {
      table: {
        disable: true,
      },
    },
    onSaveMapsLink: {
      table: {
        disable: true,
      },
    },
    typeOptions: {
      table: {
        disable: true,
      },
    },
    locationOptions: {
      table: {
        disable: true,
      },
    },
    mapsApiKey: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BranchEditForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchEditForm> = (args: any) => {
  const name = useInputForm("Ni un brillo pelao");
  const description = useInputForm(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500"
  );
  const location = useInputForm("chacao");
  const phone = useInputForm("+32 14521452");
  const capacity = useInputForm("5");
  const averageReserveTime = useInputForm("5");
  const price = useInputForm("5");
  const mapsLink = useInputForm(
    "https://www.google.com/maps/place/El+Charrito/@35.5174476,-108.794712,14z/data=!4m10!1m2!2m1!1sRestaurantes!3m6!1s0x8725209d38b2af65:0x61914de8cdc7c448!8m2!3d35.5174099!4d-108.7747707!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgESbWV4aWNhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F1tj1sk5w?hl=es"
  );
  const type = useInputForm("americano");

  return (
    <BranchEditForm
      name={name}
      description={description}
      location={location}
      phone={phone}
      capacity={capacity}
      averageReserveTime={averageReserveTime}
      price={price}
      mapsLink={mapsLink}
      type={type}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  typeOptions: [
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
  locationOptions: [
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
  mapsApiKey: credentials.maps_key,
};
