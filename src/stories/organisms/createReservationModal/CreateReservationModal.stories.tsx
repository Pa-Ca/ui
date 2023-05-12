import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CreateReservationModal } from "./CreateReservationModal";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/CreateReservationModal",
  component: CreateReservationModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof CreateReservationModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreateReservationModal> = (args: any) => {

    // Reservation data
    const date = useInputForm<Date >(new Date());
    const hourIn = useInputForm<OptionObject >({ value: "", name: "" });
    const hourOut = useInputForm<OptionObject >({ value: "", name: "" });
    const persons = useInputForm<string >("");
    const occasion = useInputForm<string >("");
    
    // Client data
    const firstName = useInputForm("");
    const lastName = useInputForm("");
    const phone = useInputForm("");
    const email = useInputForm("");
    return <CreateReservationModal
        date={date}
        hourIn={hourIn}
        hourOut={hourOut}
        persons={persons}
        occasion={occasion}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
    {...args} />;
};

const globalArgs = {

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

    submitButtonColor: "#EF7A08",
    createReservation: true,
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {

  ...globalArgs,
};