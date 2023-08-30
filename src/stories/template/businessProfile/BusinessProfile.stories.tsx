import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BusinessProfile } from "./BusinessProfile";
import useInputForm from "../../hooks/useInputForm";
import ProductObject from "../../utils/objects/ProductObject";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";
import BranchDropdownElement from "../../utils/objects/BranchDropdownElement";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BusinessProfile",
  component: BusinessProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    header: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    email: {
      table: {
        disable: true,
      },
    },
    phoneNumber: {
      table: {
        disable: true,
      },
    },
    password: {
      table: {
        disable: true,
      },
    },
    newPassword: {
      table: {
        disable: true,
      },
    },
    onSaveName: {
      table: {
        disable: true,
      },
    },
    onSavePhoneNumber: {
      table: {
        disable: true,
      },
    },
    onChangePassword: {
      table: {
        disable: true,
      },
    },
    onCreateBranch: {
      table: {
        disable: true,
      },
    },
    onPictureClick: {
      table: {
        disable: true,
      },
    },
    onForgotPassword: {
      table: {
        disable: true,
      },
    },
    branchName: {
      table: {
        disable: true,
      },
    },
    branchDescription: {
      table: {
        disable: true,
      },
    },
    branchLocation: {
      table: {
        disable: true,
      },
    },
    branchPhone: {
      table: {
        disable: true,
      },
    },
    branchCapacity: {
      table: {
        disable: true,
      },
    },
    branchAverageReserveTimeHours: {
      table: {
        disable: true,
      },
    },
    branchAverageReserveTimeMinutes: {
      table: {
        disable: true,
      },
    },
    branchPrice: {
      table: {
        disable: true,
      },
    },
    branchMapsLink: {
      table: {
        disable: true,
      },
    },
    branchType: {
      table: {
        disable: true,
      },
    },
    branchTypeOptions: {
      table: {
        disable: true,
      },
    },
    branchLocationOptions: {
      table: {
        disable: true,
      },
    },
    branchClosingTimeHour: {
      table: {
        disable: true,
      },
    },
    branchClosingTimeMinute: {
      table: {
        disable: true,
      },
    },
    branchOpeningTimeHour: {
      table: {
        disable: true,
      },
    },
    branchOpeningTimeMinute: {
      table: {
        disable: true,
      },
    },
    mapsApiKey: {
      table: {
        disable: true,
      },
    },
    onSaveBranchName: {
      table: {
        disable: true,
      },
    },
    onSaveBranchDescription: {
      table: {
        disable: true,
      },
    },
    onSaveBranchLocation: {
      table: {
        disable: true,
      },
    },
    onSaveBranchPhone: {
      table: {
        disable: true,
      },
    },
    onSaveBranchCapacity: {
      table: {
        disable: true,
      },
    },
    onSaveBranchAverageReserveTime: {
      table: {
        disable: true,
      },
    },
    onSaveBranchPrice: {
      table: {
        disable: true,
      },
    },
    onSaveBranchType: {
      table: {
        disable: true,
      },
    },
    onSaveBranchMapsLink: {
      table: {
        disable: true,
      },
    },
    onSaveBranchClosingTime: {
      table: {
        disable: true,
      },
    },
    onSaveBranchOpeningTime: {
      table: {
        disable: true,
      },
    },
    onDeleteBranch: {
      table: {
        disable: true,
      },
    },
    setShowErrorModal: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BusinessProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BusinessProfile> = (args: any) => {
  const name = useInputForm("Example Businessssssssssssssssssssssss");
  const email = useInputForm("example@example.com");
  const password = useInputForm("");
  const phoneNumber = useInputForm("");
  const newPassword = useInputForm("");
  const branchName = useInputForm("");
  const branchDescription = useInputForm("");
  const branchLocation = useInputForm("");
  const branchPhone = useInputForm("");
  const branchCapacity = useInputForm("");
  const branchAverageReserveTimeHours = useInputForm("00");
  const branchAverageReserveTimeMinutes = useInputForm("00");
  const branchPrice = useInputForm("");
  const branchMapsLink = useInputForm("");
  const branchType = useInputForm("");
  const branchTypeOptions = useInputForm("");
  const branchLocationOptions = useInputForm("");
  const branchOpeningTimeHour = useInputForm("09");
  const branchOpeningTimeMinute = useInputForm("00");
  const branchClosingTimeHour = useInputForm("21");
  const branchClosingTimeMinute = useInputForm("00");

  return (
    <BusinessProfile
      name={name}
      email={email}
      password={password}
      phoneNumber={phoneNumber}
      newPassword={newPassword}
      branchName={branchName}
      branchDescription={branchDescription}
      branchLocation={branchLocation}
      branchPhone={branchPhone}
      branchCapacity={branchCapacity}
      branchAverageReserveTimeHours={branchAverageReserveTimeHours}
      branchAverageReserveTimeMinutes={branchAverageReserveTimeMinutes}
      branchPrice={branchPrice}
      branchMapsLink={branchMapsLink}
      branchType={branchType}
      branchTypeOptions={branchTypeOptions}
      branchLocationOptions={branchLocationOptions}
      branchOpeningTimeHour={branchOpeningTimeHour}
      branchOpeningTimeMinute={branchOpeningTimeMinute}
      branchClosingTimeHour={branchClosingTimeHour}
      branchClosingTimeMinute={branchClosingTimeMinute}
      {...args}
    />
  );
};

const BranchOptions : BranchDropdownElement[] = [
  {
    name: 'Sucursal 1',
    func: () => {},
  },
  {
    name: 'Sucursal 2',
    func: () => {},
  },
  {
    name: 'Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador, Mi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvadorMi cocinita, los pollitos cachaperos de tijuana jesucristo esta muert, satanas es nuestro seños y salvador',
    func: () => {},
  },
  {
    name: 'Sucursal 2',
    func: () => {},
  },
  {
    name: 'Sucursal 1',
    func: () => {},
  },
  {
    name: 'Sucursal 2',
    func: () => {},
  },
  {
    name: 'Sucursal 1',
    func: () => {},
  },
  {
    name: 'Sucursal 2',
    func: () => {},
  },
]

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
  mainImage:
    "https://i.pinimg.com/originals/55/00/d3/5500d308acf37ec5c31cc2e5c7785921.jpg",
  profilePicture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",

  branchTypeOptions: [
    {
      label: "Americano",
      value: "americano",
    },
    {
      label: "Italiano",
      value: "italiano",
    },
    {
      label: "Japones",
      value: "japones",
    },
  ],
  branchLocationOptions: [
    {
      label: "El Hatillo",
      value: "el hatillo",
    },
    {
      label: "Las Mercedes",
      value: "las mercedes",
    },
    {
      label: "Chacao",
      value: "chacao",
    },
  ],
  taxes: [
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
  ],

  tables,
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
  onCreateTable: async () => true,
};
