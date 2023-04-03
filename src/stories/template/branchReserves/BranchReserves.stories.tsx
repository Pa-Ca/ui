import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BranchReserves } from "./BranchReserves";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchReserves",
  component: BranchReserves,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BranchReserves>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchReserves> = (args: any) => {
  return <BranchReserves {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
    name: "Sempre Dritto Ristorante",
    color: "#EF7A08",
  },
  reservations: [
    {
      date: "12 de Febrero",
      reservations: [
        {
          start: "6:00 PM",
          owner: "Bernardo López",
          ownerPhone: "0416-4813706",
          persons: 4,
          tables: 1,
          state: 1,
        },
        {
          start: "6:00 PM",
          owner: "Juan Escudero",
          ownerPhone: "0414-387911",
          persons: 8,
          tables: 2,
          state: 1,
        },
        {
          start: "7:00 PM",
          owner: "Carlos Ribero",
          ownerPhone: "0424-3050325",
          persons: 10,
          tables: 1,
          state: 1,
        },
        {
          start: "7:30 PM",
          owner: "Daniel Sotillo",
          ownerPhone: "0426-4897739",
          persons: 12,
          tables: 2,
          state: 1,
        },
        {
          start: "8:30 PM",
          owner: "Domingo Rastelli",
          ownerPhone: "0412-5723079",
          persons: 12,
          tables: 3,
          state: 1,
        },
      ],
    },
    {
      date: "13 de Febrero",
      reservations: [
        {
          start: "8:00 PM",
          owner: "Emilio Duque",
          ownerPhone: "0416-8352614",
          persons: 2,
          tables: 1,
          state: 0,
        },
        {
          start: "8:30 PM",
          owner: "Juliana Leon",
          ownerPhone: "0426-8352314",
          persons: 2,
          tables: 1,
          state: 0,
        },
        {
          start: "8:30 PM",
          owner: "Rafael Rodriguez",
          ownerPhone: "0412-9357317",
          persons: 4,
          tables: 1,
          state: 0,
        },
        {
          start: "9:00 PM",
          owner: "Elena Rodrigo",
          ownerPhone: "0412-3357447",
          persons: 6,
          tables: 1,
          state: 0,
        },
        {
          start: "9:30 PM",
          owner: "Magdalena Alfaro",
          ownerPhone: "0414-9357147",
          persons: 2,
          tables: 1,
          state: 0,
        },
      ],
    },
    {
      date: "14 de Febrero",
      reservations: [
        {
          start: "7:00 PM",
          owner: "Alejandro Moreno",
          ownerPhone: "0426-9462614",
          persons: 4,
          tables: 1,
          state: 0,
        },
        {
          start: "7:00 PM",
          owner: "Fernando Zapatero",
          ownerPhone: "0416-8352457",
          persons: 2,
          tables: 1,
          state: 0,
        },
        {
          start: "8:00 PM",
          owner: "Elio Andrade",
          ownerPhone: "0426-7351318",
          persons: 7,
          tables: 2,
          state: 0,
        },
        {
          start: "8:00 PM",
          owner: "Oracio Duran",
          ownerPhone: "0416-4354347",
          persons: 2,
          tables: 1,
          state: 0,
        },
        {
          start: "8:30 PM",
          owner: "Ligia Cabeza",
          ownerPhone: "0412-5357187",
          persons: 2,
          tables: 1,
          state: 0,
        },
      ],
    },
    {
      date: "15 de Febrero",
      reservations: [
        {
          start: "7:30 PM",
          owner: "Ernesto Sivira",
          ownerPhone: "0416-2432614",
          persons: 4,
          tables: 1,
          state: 0,
        },
        {
          start: "7:30 PM",
          owner: "Ignacio Cuadrado",
          ownerPhone: "0426-5352457",
          persons: 2,
          tables: 1,
          state: 0,
        },
        {
          start: "8:00 PM",
          owner: "Cristopher Bermudez",
          ownerPhone: "0412-8351318",
          persons: 7,
          tables: 2,
          state: 0,
        },
        {
          start: "8:30 PM",
          owner: "Manuel Sucre",
          ownerPhone: "0416-7354341",
          persons: 4,
          tables: 1,
          state: 0,
        },
        {
          start: "8:30 PM",
          owner: "Andrea Dominguez",
          ownerPhone: "0416-6357187",
          persons: 2,
          tables: 1,
          state: 0,
        },
      ],
    },
  ],
};
