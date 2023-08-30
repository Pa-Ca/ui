import React from "react";
import { ProductObject } from "../../..";
import { BranchSales } from "./BranchSales";
import { StoryFn, Meta } from "@storybook/react";
import useInputForm from "../../hooks/useInputForm";
import { SaleProps } from "../../molecules/sale/Sale";
import OptionObject from "../../utils/objects/OptionObject";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";
import ReservationStatusObject from "../../utils/objects/ReservationStatus";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchSales",
  component: BranchSales,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onCreateTable: {
      table: {
        disable: true,
      },
    },
    onEditTable: {
      table: {
        disable: true,
      },
    },
    onAddProduct: {
      table: {
        disable: true,
      },
    },
    onClearProducts: {
      table: {
        disable: true,
      },
    },
    onCreateSale: {
      table: {
        disable: true,
      },
    },
    onCloseSale: {
      table: {
        disable: true,
      },
    },
    onDeleteTable: {
      table: {
        disable: true,
      },
    },
    onDeleteSale: {
      table: {
        disable: true,
      },
    },
    onNextPage: {
      table: {
        disable: true,
      },
    },
    onPreviousPage: {
      table: {
        disable: true,
      },
    },
    header: {
      table: {
        disable: true,
      },
    },
    table: {
      control: "number",
    },
    allTables: {
      table: {
        disable: true,
      },
    },
    products: {
      table: {
        disable: true,
      },
    },
    allProducts: {
      table: {
        disable: true,
      },
    },
    categories: {
      table: {
        disable: true,
      },
    },
    subCategories: {
      table: {
        disable: true,
      },
    },
    subCategoryDependency: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BranchSales>;

function generateRandomDate(): Date {
  const from = new Date();
  from.setDate(from.getDate() - 5);
  return new Date(from.getTime() + Math.random() * (new Date().getTime() - from.getTime()));
}

function getRandomSubarray(arr: any[]) {
  const size = Math.floor(1 + Math.random() * arr.length);
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - size,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function generatePastSale(): PastSaleProps {
  const taxes = [
    {
      id: 1,
      name: "IVA",
      value: 12,
      type: 0,
      saveValueFunction: async () => {},
      deleteValueFunction: async () => {},
    },
    {
      id: 2,
      name: "IGTF",
      value: 3,
      type: 0,
      saveValueFunction: async () => {},
      deleteValueFunction: async () => {},
    },
  ];
  if (Math.random() >= 0.5) {
    taxes.push({
      id: 3,
      name: "Propina",
      value: 10,
      type: 1,

      saveValueFunction: async () => {},
      deleteValueFunction: async () => {},
    });
  }

  return {
    sale: {
      id: Math.floor(1 + Math.random() * 9999999),
      startTime: generateRandomDate(),
      ownerName: "John Doe",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      note: "",
      clientQuantity: Math.floor(1 + Math.random() * 10),
      products: getRandomSubarray([
        {
          name: "Coca Cola",
          price: 1.5,
          amount: Math.floor(1 + Math.random() * 5),
        },
        {
          name: "Pepsi",
          price: 1.5,
          amount: Math.floor(1 + Math.random() * 5),
        },
        {
          name: "Pizza de peperoni",
          price: 10.99,
          amount: Math.floor(1 + Math.random() * 2),
        },
        {
          name: "Hamburguesa",
          price: 5.45,
          amount: Math.floor(1 + Math.random() * 5),
        },
        {
          name: "Papas fritas",
          price: 2.1,
          amount: Math.floor(1 + Math.random() * 5),
        },
      ]),
      taxes: taxes,
      tables: [],
      hasReservation: false,
    },
  };
}

function productObjectToProps(product: ProductObject): SaleProductProps {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    amount: Math.floor(1 + Math.random() * 5),
    onChangeAmount: () => {},
    onDelete: async () => {},
  };
}

const taxes = [
  {
    id: 1,
    name: "IVA",
    type: 0,
    value: 12.5,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 2,
    name: "IGTF",
    type: 0,
    value: 3,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 3,
    name: "Propina",
    type: 1,
    value: 10,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
  {
    id: 4,
    name: "Descuento",
    type: 0,
    value: -5,
    saveValueFunction: async () => {},
    deleteValueFunction: async () => {},
  },
];

const tables = [
  {
    id: 1,
    branchId: 1,
    name: "0001",
  },
  {
    id: 2,
    branchId: 1,
    name: "0002",
  },
  {
    id: 3,
    branchId: 1,
    name: "0003",
  },
  {
    id: 4,
    branchId: 1,
    name: "0004",
  },
  {
    id: 5,
    branchId: 1,
    name: "0005",
  },
  {
    id: 6,
    branchId: 1,
    name: "0006",
  },
  {
    id: 7,
    branchId: 1,
    name: "0007",
  },
  {
    id: 8,
    branchId: 1,
    name: "0008",
  },
  {
    id: 9,
    branchId: 1,
    name: "0009",
  },
  {
    id: 10,
    branchId: 1,
    name: "0010",
  },
  {
    id: 11,
    branchId: 1,
    name: "0011",
  },
  {
    id: 12,
    branchId: 1,
    name: "0012",
  },
  {
    id: 13,
    branchId: 1,
    name: "0013",
  },
  {
    id: 14,
    branchId: 1,
    name: "0014",
  },
  {
    id: 15,
    branchId: 1,
    name: "0015",
  },
];

const products = {
  1000: {
    id: 1000,
    name: "Coca-cola",
    subCategoryId: 1000,
    description: "Bebida gaseosa de 500ml.",
    price: 4.99,
    disabled: false,
  },
  1001: {
    id: 1001,
    name: "Hamburguesa",
    subCategoryId: 1001,
    description: "Pan con carne, queso, lechuga y tomate.",
    price: 12.99,
    disabled: false,
  },
  1002: {
    id: 1002,
    name: "Ensalada César",
    subCategoryId: 1002,
    description: "Lechuga, croutons, queso parmesano y salsa césar.",
    price: 8.99,
    disabled: false,
  },
  1003: {
    id: 1003,
    name: "Agua mineral",
    subCategoryId: 1003,
    description: "Agua natural sin gas de 500ml.",
    price: 2.99,
    disabled: false,
  },
  1004: {
    id: 1004,
    name: "Helado de vainilla",
    subCategoryId: 1004,
    description: "Crema helada de sabor vainilla con salsa de chocolate.",
    price: 6.99,
    disabled: false,
  },
  1005: {
    id: 1005,
    name: "Pizza de pepperoni",
    subCategoryId: 1004,
    description: "Masa con salsa de tomate, queso mozzarella y pepperoni.",
    price: 14.99,
    disabled: false,
  },
  1006: {
    id: 1006,
    name: "Jugo de naranja",
    subCategoryId: 1001,
    description: "Jugo natural de naranja exprimida de 300ml.",
    price: 3.99,
    disabled: false,
  },
  1007: {
    id: 1007,
    name: "Brownie de chocolate",
    subCategoryId: 1005,
    description: "Bizcocho húmedo de chocolate con nueces y crema batida.",
    price: 7.99,
    disabled: false,
  },
};

const reservationsStatus: ReservationStatusObject[] = [
  { number: 1, name: "pending", nameShow: "Pendiente", icon: "pending-status" },
  {
    number: 2,
    name: "rejected",
    nameShow: "Rechazada",
    icon: "rejected-status",
  },
  {
    number: 3,
    name: "accepted",
    nameShow: "Aceptada",
    icon: "accepted-status",
  },
  { number: 4, name: "retired", nameShow: "Retirada", icon: "retired-status" },
  { number: 5, name: "started", nameShow: "En curso", icon: "started-status" },
  { number: 6, name: "closed", nameShow: "Finalizada", icon: "closed-status" },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BranchSales> = (args: any) => {
  const tableSelected = useInputForm("");
  const saleSelected = useInputForm<SaleProps | null>(null);

  const nullObject = { label: "", value: null };
  const filterFullName = useInputForm("");
  const filterIdentityDocument = useInputForm("");
  const filterEndDate = useInputForm<Date | null>(null);
  const filterStartDate = useInputForm<Date | null>(null);
  const filterStatus = useInputForm<OptionObject<string | null>>(nullObject);
  const filterIdentityDocumentType = useInputForm<OptionObject<string | null>>(nullObject);

  const guestEmail = useInputForm("");
  const guestPhone = useInputForm("");
  const guestLastName = useInputForm("");
  const guestFirstName = useInputForm("");
  const newReservationPersons = useInputForm("");

  return (
    <BranchSales
      {...args}
      tableSelected={tableSelected}
      saleSelected={saleSelected}
      guestEmail={guestEmail}
      guestPhone={guestPhone}
      guestLastName={guestLastName}
      guestFirstName={guestFirstName}
      newReservationPersons={newReservationPersons}
      filterFullName={filterFullName}
      filterIdentityDocument={filterIdentityDocument}
      filterEndDate={filterEndDate}
      filterStartDate={filterStartDate}
      filterStatus={filterStatus}
      filterIdentityDocumentType={filterIdentityDocumentType}
    />
  );
};

const BranchOptions = [
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador, Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
  {
    name: "Sucursal 1",
    func: () => {},
  },
  {
    name: "Sucursal 2",
    func: () => {},
  },
];

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  header: {
    logged: true,
    userRole: "business",
    onPacaClick: () => {},
    picture:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    name: "Sempre Dritto",
    color: "#EF7A08",
    branchOptions: BranchOptions,
    currentBranch: BranchOptions[0].name,
  },
  haveBranch: true,

  sales: [
    {
      id: 1,
      ownerName: "Iván Tortolero",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 3,
      tables: [tables[0]],
      note: "Venta 1",
      taxes: [taxes[0], taxes[2]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 2,
      ownerName: "Elio Ortega",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 8,
      tables: [tables[1], tables[2]],
      note: "Venta 2",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 3,
      ownerName: "José Barrera",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 25,
      tables: [
        tables[1],
        tables[2],
        tables[5],
        tables[6],
        tables[7],
        tables[8],
        tables[11],
        tables[12],
        tables[13],
        tables[14],
      ],
      note: "Venta 3",
      taxes: [taxes[0], taxes[1]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 4,
      ownerName: "Eduardo López",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 15,
      tables: [tables[8], tables[9], tables[10], tables[0], tables[1], tables[2]],
      note: "Venta 4",
      taxes: [taxes[0], taxes[1]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 5,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 5",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 6,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 6",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 7,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 7",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 8,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 8",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 9,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 9",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
    {
      id: 10,
      ownerName: "Amin Arriaga",
      ownerPhone: "+584240000000",
      ownerEmail: "example@example.com",
      startTime: generateRandomDate(),
      clientQuantity: 10,
      tables: [tables[1], tables[7], tables[14]],
      note: "Venta 10",
      taxes: [taxes[0], taxes[1], taxes[3]],
      products: getRandomSubarray(Object.values(products)).map(productObjectToProps),
      hasReservation: false,
    },
  ],
  tables,
  products,
  categories: {
    1000: {
      id: 1000,
      name: "Bebidas",
    },
    1001: {
      id: 1001,
      name: "Comidas",
    },
    1002: {
      id: 1002,
      name: "Postres",
    },
  },
  subCategories: {
    1000: {
      id: 1000,
      name: "Gaseosas",
      categoryId: 1000,
    },
    1001: {
      id: 1001,
      name: "Carnes",
      categoryId: 1001,
    },
    1002: {
      id: 1002,
      name: "Vegetales",
      categoryId: 1001,
    },
    1003: {
      id: 1003,
      name: "Agua",
      categoryId: 1000,
    },
    1004: {
      id: 1004,
      name: "Helados",
      categoryId: 1002,
    },
    1005: {
      id: 1005,
      name: "Tortas",
      categoryId: 1002,
    },
    1006: {
      id: 1006,
      name: "Pizzas",
      categoryId: 1001,
    },
    1007: {
      id: 1007,
      name: "Jugos",
      categoryId: 1000,
    },
  },
  onAddTax: () => {},
  onAddProduct: async () => true,
  onClearProducts: () => {},
  onCreateSale: async () => true,
  onCloseSale: () => {},
  onSaveSaleNote: () => {},
  onDeleteSale: () => {},
  onGetGuest: async () => {},

  salePage: 5,
  saleTotalPages: 10,
  pastSales: new Array(15)
    .fill(null)
    .map(generatePastSale)
    .sort((a, b) => {
      return b.sale.startTime.getTime() - a.sale.startTime.getTime();
    }),
  onSaleNextPage: () => {},
  onSalePreviousPage: () => {},

  durationHour: 1,
  durationMin: 30,
  onCreateReservation: async () => true,

  // Reservations
  pendingReservations: [
    ...new Array(35).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-11",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 1,
      tables: 1,
      status: reservationsStatus[0],
      onCloseReservation: () => {
        console.log("close");
      },
      onReject: () => {
        console.log("reject");
      },
      onAccept: () => {
        console.log("accept");
      },
      onRetire: () => {
        console.log("retire");
      },
      onStart: () => {
        console.log("start");
      },
    }),
  ],
  acceptedReservations: [
    ...new Array(25).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 3",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 3,
      tables: 3,
      status: reservationsStatus[2],
      onCloseReservation: () => {
        console.log("close");
      },
      onReject: () => {
        console.log("reject");
      },
      onAccept: () => {
        console.log("accept");
      },
      onRetire: () => {
        console.log("retire");
      },
      onStart: () => {
        console.log("start");
      },
    }),
  ],
  pastReservations: [
    ...new Array(8).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-12",
      owner: "Ivan Tortolero 1",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 2,
      tables: 2,
      status: reservationsStatus[1],
      onCloseReservation: () => {
        console.log("close");
      },
      onReject: () => {
        console.log("reject");
      },
      onAccept: () => {
        console.log("accept");
      },
      onRetire: () => {
        console.log("retire");
      },
      onStart: () => {
        console.log("start");
      },
    }),
    ...new Array(13).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-10",
      owner: "Ivan Tortolero 4",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 4,
      tables: 4,
      status: reservationsStatus[3],
      onCloseReservation: () => {
        console.log("close");
      },
      onReject: () => {
        console.log("reject");
      },
      onAccept: () => {
        console.log("accept");
      },
      onRetire: () => {
        console.log("retire");
      },
      onStart: () => {
        console.log("start");
      },
    }),
    ...new Array(7).fill({
      start: "6:00 PM",
      end: "7:00 PM",
      requestDate: "24/10/2023 7:45 PM",
      date: "2021-10-13",
      owner: "Ivan Tortolero 6",
      ownerPhone: "0414-8732414",
      ownerEmail: "Sisepuede@fe.com",
      ownerOccasion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      identityDocument: "V69420616",
      persons: 6,
      tables: 6,
      status: reservationsStatus[5],
      onCloseReservation: () => {
        console.log("close");
      },
      onReject: () => {
        console.log("reject");
      },
      onAccept: () => {
        console.log("accept");
      },
      onRetire: () => {
        console.log("retire");
      },
      onStart: () => {
        console.log("start");
      },
    }),
  ],
  reservationPage: 5,
  reservationTotalPages: 10,
  onReservationNextPage: () => {},
  onReservationPreviousPage: () => {},

  contentHeight: "1000px",
};
