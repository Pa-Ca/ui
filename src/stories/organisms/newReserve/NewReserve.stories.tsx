import React, { useState } from "react";
import { NewReserve } from "./NewReserve";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/NewReserve",
  component: NewReserve,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    date: {
      table: {
        disable: true,
      },
    },
    hourIn: {
      table: {
        disable: true,
      },
    },
    validHoursIn: {
      table: {
        disable: true,
      },
    },
    hourOut: {
      table: {
        disable: true,
      },
    },
    validHoursOut: {
      table: {
        disable: true,
      },
    },
    persons: {
      table: {
        disable: true,
      },
    },
    occasion: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof NewReserve>;

const validHours = [
  { value: "1", name: "9:00 am" },
  { value: "2", name: "9:30 am" },
  { value: "3", name: "10:00 am" },
  { value: "4", name: "10:30 am" },
  { value: "5", name: "11:00 am" },
  { value: "6", name: "11:30 am" },
  { value: "7", name: "12:00 pm" },
  { value: "8", name: "12:30 pm" },
  { value: "9", name: "1:00 pm" },
  { value: "10", name: "1:30 pm" },
  { value: "11", name: "2:00 am" },
  { value: "12", name: "2:30 pm" },
  { value: "13", name: "3:00 pm" },
  { value: "14", name: "3:30 pm" },
  { value: "15", name: "4:00 pm" },
  { value: "16", name: "4:30 pm" },
  { value: "17", name: "5:00 pm" },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NewReserve> = (args: any) => {
  const date = useInputForm(new Date());
  const hourIn = useInputForm({ name: "", value: "" });
  const hourOut = useInputForm({ name: "", value: "" });
  const persons = useInputForm("");
  const occasion = useInputForm("");

  return (
    <NewReserve
      {...args}
      date={date}
      hourIn={hourIn}
      validHoursIn={validHours}
      hourOut={hourOut}
      validHoursOut={validHours}
      persons={persons}
      occasion={occasion}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "Nombre Rest",
  score: 3.7,
  reviews: 4273,
  category: "Americano",
  pricePerson: 15.99,
  location: "Las Mercedes",
  price: 10,
  color: "#EF7A08",
  overview:
    "Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg",
};
