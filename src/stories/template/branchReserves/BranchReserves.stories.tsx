import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchReserves } from "./BranchReserves";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchReserves",
  component: BranchReserves,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchReserves>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchReserves> = (args: any) => {
  // Reservation data
  const date = useInputForm<Date >(new Date());
  const hourIn = useInputForm<OptionObject >({ text: "", label: "" });
  const hourOut = useInputForm<OptionObject >({ text: "", label: "" });
  const persons = useInputForm<string >("");
  const occasion = useInputForm<string >("");
  
  // Client data
  const firstName = useInputForm("");
  const lastName = useInputForm("");
  const phone = useInputForm("");
  const email = useInputForm("");
  const [showModal, setshowModal] = useState(false);

  return <BranchReserves
    date={date}
    hourIn={hourIn}
    hourOut={hourOut}
    persons={persons}
    occasion={occasion}
    firstName={firstName}
    lastName={lastName}
    phone={phone}
    email={email}
    showModal={showModal}
    setShowModal={setshowModal}
    {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    name: "Sempre Dritto",
    color: "#EF7A08",
  },
  durationHour: 1,
  durationMin: 30,
  reservations: [],
};
