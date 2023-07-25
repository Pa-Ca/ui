import React from "react";
import { ReservationFilters } from "./ReservationFilters";
import useInputForm from "../../hooks/useInputForm";
import { StoryFn, Meta } from "@storybook/react";
import OptionObject from "../../utils/objects/OptionObject";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Organisms/ReservationFilters",
  component: ReservationFilters,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    startDate: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ReservationFilters>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ReservationFilters> = (args: any) => {
  const startDate = useInputForm(new Date());
  const endDate = useInputForm(new Date());
  const fullName = useInputForm("");

  const status = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });
  const statusOptions: OptionObject<string>[] = [
    {label: "Cerrada", value: "6"},
    {label: "Retirada", value: "4"},
    {label: "Rechazada", value: "2"},
  ];

  const identityDocument = useInputForm("");
  const identityDocumentTypeOpt: OptionObject<string>[] = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ];
  const identityDocumentType = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });
  
  return (
    <ReservationFilters
      {...args}
      startDate={startDate}
      endDate={endDate}
      status={status}
      statusOptions={statusOptions}
      identityDocument={identityDocument}
      identityDocumentType={identityDocumentType}
      identityDocumentTypeOpt={identityDocumentTypeOpt}
      fullName={fullName}
      onGetReservationsFiltered={()=>{}}
    />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};