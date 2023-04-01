import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReservationCheckOut } from "./ReservationCheckOut";
import AmenityObject from "../../utils/objects/AmenityObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/ReservationCheckOut",
  component: ReservationCheckOut,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ReservationCheckOut>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReservationCheckOut> = (args: any) => {
  return <ReservationCheckOut {...args} />;
};

const amenities: AmenityObject[] = [
  { name: "Piscina al aire libre", icon: "pool" },
  { name: "Centro de spa", icon: "spa" },
  { name: "Bar/Salón", icon: "wine" },
];

const globalArgs = {
  getBranchData: () => {
    return {
      businessId: 1,
      name: "Sempre Dritto",
      score: 4.7,
      reviews: 4273,
      category: "Americana",
      pricePerson: 15.99,
      location: "Las Mercedes",
      price: 10,
      promotions: [],
      overview:"",
      images: [],
      mainImage:
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
      menu: new Array(10).fill({
        price: 14.25,
        title: "Pizza",
        description:
          "Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.",
        image:
          "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
        onClick: () => {},
      }),
      amenities,
      reviewsData: [],
      thumbnail: "",
    };
  },
  path: [
    {
      name: "Home",
      onClick: () => {},
    },
    {
      name: "Buscar restaurantes",
      onClick: () => {},
    },
  ],
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...globalArgs
};
