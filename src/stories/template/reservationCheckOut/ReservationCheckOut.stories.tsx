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
  color: "#EF7A08",
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
      thumbnail: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
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
  validHoursIn : [
    { value: '1', name: '9:00 am' },
    { value: '2', name: '9:30 am' },
    { value: '3', name: '10:00 am' },
    { value: '4', name: '10:30 am' },
    { value: '5', name: '11:00 am' },
    { value: '6', name: '11:30 am' },
    { value: '7', name: '12:00 pm' },
    { value: '8', name: '12:30 pm' },
    { value: '9', name: '1:00 pm' },
    { value: '10', name: '1:30 pm' },
    { value: '11', name: '2:00 am' },
    { value: '12', name: '2:30 pm' },
    { value: '13', name: '3:00 pm' },
    { value: '14', name: '3:30 pm' },
    { value: '15', name: '4:00 pm' },
    { value: '16', name: '4:30 pm' },
    { value: '17', name: '5:00 pm' },
  ],

  validHoursOut : [
    { value: '1', name: '9:00 am' },
    { value: '2', name: '9:30 am' },
    { value: '3', name: '10:00 am' },
    { value: '4', name: '10:30 am' },
    { value: '5', name: '11:00 am' },
    { value: '6', name: '11:30 am' },
    { value: '7', name: '12:00 pm' },
    { value: '8', name: '12:30 pm' },
    { value: '9', name: '1:00 pm' },
    { value: '10', name: '1:30 pm' },
    { value: '11', name: '2:00 am' },
    { value: '12', name: '2:30 pm' },
    { value: '13', name: '3:00 pm' },
    { value: '14', name: '3:30 pm' },
    { value: '15', name: '4:00 pm' },
    { value: '16', name: '4:30 pm' },
    { value: '17', name: '5:00 pm' },
  ],
  getReservationPrice: () => {
    return [{name: "tarifa", price: 14.3},{name: "comision", price: 0.7}];
  },


};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headerArgs: {
    logged: true,
    userRole: 'client',
    onPacaClick: () => {},
    icon: "down",
    name: "Daniel Rodríguez",
    picture: "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",  
    color: "#EF7A08",
  },
  ...globalArgs,
};