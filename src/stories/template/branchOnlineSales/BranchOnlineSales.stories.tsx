import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BranchOnlineSales } from "./BranchOnlineSales";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
//import ReservationStatusObject from "../../utils/objects/ReservationStatus";

//import { OnlineSaleList } from "../../utils/objects/OnlineSaleList";
import { OnlineSaleStatuses } from "../../utils/objects/OnlineSaleStatus";
import { onlineSaleStatusList } from "../../utils/objects/OnlineSaleStatus";
import { start } from "repl";

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
    { label: "Cerrada", value: "6" },
    { label: "Retirada", value: "4" },
    { label: "Rechazada", value: "2" },
  ];

  const filterIdentityDocument = useInputForm("");
  const filterIdentityDocumentTypeOpt: OptionObject<string>[] = [
    { label: "V", value: "V" },
    { label: "E", value: "E" },
    { label: "J", value: "J" },
    { label: "G", value: "G" },
    { label: "P", value: "P" },
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
    { label: "V", value: "V" },
    { label: "E", value: "E" },
    { label: "J", value: "J" },
    { label: "G", value: "G" },
    { label: "P", value: "P" },
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


  const products = [
    {
      name: "Coca Cola",
      price: 1.5,
      amount: 4,
    },
    {
      name: "Pepsi",
      price: 1.5,
      amount: 3,
    },
    {
      name: "Pizza de peperoni",
      price: 10.99,
      amount: 1,
    },
    {
      name: "Hamburguesa",
      price: 5.45,
      amount: 3,
    },
    {
      name: "Papas fritas",
      price: 2.1,
      amount: 3,
    }
  ]

  const taxes = [
    {
      name: "IVA",
      value: 12,
      type: "%",
    },
    {
      name: "IGTF",
      value: 3,
      type: "%",
    },
  ]

  const pendingOnlineSalesList = [
    ...new Array(35).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.PENDING],
      products: products,
      taxes: taxes
    }),
  ];
  const acceptedOnlineSalesList = [
    ...new Array(25).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Juanito Juan",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.ACCEPTED],
      products: products,
      taxes: taxes
    }),
  ];
  const startedOnlineSaleList = [
    ...new Array(18).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Sivira Del Siviroski",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.STARTED],
      products: products,
      taxes: taxes
    }),
  ];

  const onTheWayOnlineSaleList = [
    ...new Array(18).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Amin Aminchoski",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "delivery",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.ON_THE_WAY],
      products: products,
      taxes: taxes
    }),
  ];

  const readyToTakeOutOnlineSaleList = [
    ...new Array(5).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Josesph El Barroski",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.READY_TO_TAKE_OUT],
      products: products,
      taxes: taxes
    }),];

  const deliveredOnlineSaleList = [
    ...new Array(5).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Elio Di Michelis",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "delivery",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.DELIVERED],
      products: products,
      taxes: taxes
    }),];

  const historicOnlineSaleList = [
    ...new Array(8).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Pedro Pedraza",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.CANCELLED],
      products: products,
      taxes: taxes

    }),
    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Ivanovich",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.REJECTED],
      products: products,
      taxes: taxes
    }),

    ...new Array(13).fill({
      requestTime: "6:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero Dos",
      ownerPhone: "0414-8732414",
      identityDocument: "V27722357",
      ownerEmail: "hola@fe.com",
      saleType: "pick-up",
      adress: "Av. 1 con calle 2",
      adressLink: "https://www.google.com/maps/@37.109773,-104.4097534,10.08z?hl=es&entry=ttu",
      note: "Me voy a proponer a mi novia en su restaurante ayuda por favor",
      status: onlineSaleStatusList[OnlineSaleStatuses.CLOSED],
      products: products,
      taxes: taxes
    }),

  ];

  const historicCurrentPage = 1;
  const historicReservationListTotalLenght = 28;

  console.log({ args })
  return (
    <BranchOnlineSales
      {...args}
      pendingSalesList={pendingOnlineSalesList}
      acceptedSalesList={acceptedOnlineSalesList}
      startedSalesList={startedOnlineSaleList}
      readyToTakeOutSalesList={readyToTakeOutOnlineSaleList}
      onTheWaySalesList={onTheWayOnlineSaleList}
      deliveredSalesList={deliveredOnlineSaleList}
      historicSalesList={historicOnlineSaleList}

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
      onGetReservationsFiltered={() => { }}

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

    />
  );
};



export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    onPacaClick: () => { },
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
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
  ],
  validHoursOut: [
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
    { value: "9:00", label: "9:00" },
  ],
};
