import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchOnlineSales } from "./BranchOnlineSales";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import ReservationStatusObject from "../../utils/objects/ReservationStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchOnlineSales",
  component: BranchOnlineSales,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BranchOnlineSales>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchOnlineSales> = (args: any) => {

  //Filters
  const filterStartDate = useInputForm(null);
  const filterEndDate = useInputForm(null);
  const filterFullName = useInputForm("");

  const filterStatus = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });
  const filterStatusOptions: OptionObject<string>[] = [
    {label: "Cerrada", value: "6"},
    {label: "Retirada", value: "4"},
    {label: "Rechazada", value: "2"},
  ];

  const filterIdentityDocument = useInputForm("");
  const filterIdentityDocumentTypeOpt: OptionObject<string>[] = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ];
  const filterIdentityDocumentType = useInputForm<OptionObject<string>>({
    label: "",
    value: "",
  });

  // Reservation data
  const date = useInputForm<Date>(new Date());
  const hourIn = useInputForm<OptionObject<string>>({ value: "", label: "" });
  const hourOut = useInputForm<OptionObject<string>>({ value: "", label: "" });
  const persons = useInputForm<string>("");
  const tables = useInputForm<string>("");
  const occasion = useInputForm<string>("");

  // Client data
  const identityDocument = useInputForm("");
  const identityDocumentTypeOpt: OptionObject<string>[] = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ];
  const identityDocumentType = useInputForm<OptionObject<string>>({
    label: "V",
    value: "V",
  });
  const firstName = useInputForm("");
  const lastName = useInputForm("");
  const phone = useInputForm("");
  const email = useInputForm("");
  const [showModal, setshowModal] = useState(false);

  const pendingReservationList = [
    ...new Array(35).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-11",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 1,
      tables: 1,
      status: reservationsStatus[0],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},      
    }),
  ];
  const acceptedReservationList = [
    ...new Array(25).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 3",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 3,
      tables: 3,
      status: reservationsStatus[2],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
  ];
  const startedReservationList = [
    ...new Array(18).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 5",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 5,
      tables: 5,
      status: reservationsStatus[4],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
  ];
  const historicReservationList = [
    ...new Array(8).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-12",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 2,
      tables: 2,
      status: reservationsStatus[1],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(13).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero 4",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 4,
      tables: 4,
      status: reservationsStatus[3],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
    ...new Array(7).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 6",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 6,
      tables: 6,
      status: reservationsStatus[5],
      onCloseReservation: () => {console.log("close")},
      onReject: () => {console.log("reject")},
      onAccept: () => {console.log("accept")},
      onRetire: () => {console.log("retire")},
      onStart: () => {console.log("start")},
    }),
  ];

  const historicCurrentPage = 1;
  const historicReservationListTotalLenght = 28;

  return (
    <BranchOnlineSales
      startedSalesList={startedReservationList}
      acceptedSalesList={acceptedReservationList}
      pendingSalesList={pendingReservationList}
      historicSalesList={historicReservationList}
      historicCurrentPage={historicCurrentPage}
      historicSalesListTotalLenght={historicReservationListTotalLenght}
      filterStartDate={filterStartDate}
      filterEndDate={filterEndDate}
      filterStatus={filterStatus}
      filterStatusOptions={filterStatusOptions}
      filterIdentityDocument={filterIdentityDocument}
      filterIdentityDocumentType={filterIdentityDocumentType}
      filterIdentityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
      filterFullName={filterFullName}
      onGetReservationsFiltered={()=>{}}
      date={date}
      hourIn={hourIn}
      hourOut={hourOut}
      persons={persons}
      tables={tables}
      occasion={occasion}
      identityDocument={identityDocument}
      identityDocumentType={identityDocumentType}
      identityDocumentTypeOpt={identityDocumentTypeOpt}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      email={email}
      showModal={showModal}
      setShowModal={setshowModal}
      {...args}
    />
  );
};

const reservationsStatus: ReservationStatusObject[] = [
  {number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status"},
  {number: 2, name: "rejected", nameShow: "Rechazada", icon: "rejected-status"},
  {number: 3, name: "accepted", nameShow: "Aceptada", icon: "accepted-status"},
  {number: 4, name: "retired", nameShow: "Retirada", icon: "retired-status"},
  {number: 5, name: "started", nameShow: "En curso", icon: "started-status"},
  {number: 6, name: "closed", nameShow: "Finalizada", icon: "closed-status"}
]

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => {},
    picture:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    name: "Sempre Dritto",
    color: "#EF7A08",
    branchOptions: []
  },
  icon_size: "450px",
  durationHour: 1,
  durationMin: 30,
  submitButtonColor: "#EF7A08",
  cancelButtonColor: "#EF7A08",
  validHoursIn: [
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
  ],
  validHoursOut:[
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
    {value: "9:00", label: "9:00"},
  ],
};
