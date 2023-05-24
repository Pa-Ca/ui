import React, { useState } from "react";
import { BranchListing } from "./BranchListing";
import useInputForm from "../../hooks/useInputForm";
import CheckObject from "../../utils/objects/CheckObject";
import { StoryFn, Meta } from "@storybook/react";
import { exampleLongBranchList } from "../../organisms/branchItem/BranchItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchListing",
  component: BranchListing,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onButtonClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BranchListing>;

const cousines_: CheckObject[] = [
  {
    value: "cousine1",
    name: "Cousine 1",
    selected: false,
  },
  {
    value: "cousine2",
    name: "Cousine 2",
    selected: false,
  },
];

const zones_: CheckObject[] = [
  {
    value: "zone1",
    name: "Zone 1",
    selected: false,
  },
  {
    value: "zone2",
    name: "Zone 2",
    selected: false,
  },
  {
    value: "zone3",
    name: "Zone 3",
    selected: false,
  },
  {
    value: "zone4",
    name: "Zone 4",
    selected: false,
  },
  {
    value: "zone5",
    name: "Zone 5",
    selected: false,
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchListing> = (args: any) => {
  const search = useInputForm("");
  const persons = useInputForm("");
  const date = useInputForm(new Date());
  const hour = useInputForm({ value: "", name: "" });

  const min = 0;
  const max = 200;
  const [prices, setPrices] = useState([min, max]);
  const startHour = useInputForm({ value: "", name: "" });
  const endHour = useInputForm({ value: "", name: "" });
  const [rating, setRating] = useState(0);
  const [cousines, setCousines] = useState(cousines_);
  const [zones, setZones] = useState(zones_);

  return (
    <BranchListing
      date={date}
      hour={hour}
      persons={persons}
      search={search}
      min={min}
      max={max}
      prices={prices}
      setPrices={setPrices}
      startHour={startHour}
      endHour={endHour}
      rating={rating}
      setRating={setRating}
      cousines={cousines}
      setCousines={setCousines}
      zones={zones}
      setZones={setZones}
      {...args}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  branches: exampleLongBranchList,
  headerArgs: {
    logged: true,
    userRole: "client",
    onPacaClick: () => {},
    name: "Daniel Rodríguez",
    picture:
      "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",
    color: "#EF7A08",
  },
};
