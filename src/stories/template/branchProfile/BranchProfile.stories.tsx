import React from "react";
import { BranchProfile } from "./BranchProfile";
import AmenityObject from "../../utils/objects/AmenityObject";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/BranchProfile",
  component: BranchProfile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    getUserData: {
      table: {
        disable: true,
      },
    },
    onHeaderReserveClick: {
      table: {
        disable: true,
      },
    },
    onPacaClick: {
      table: {
        disable: true,
      },
    },
    onFavoritesClick: {
      table: {
        disable: true,
      },
    },
    onProfileClick: {
      table: {
        disable: true,
      },
    },
    onLoginClick: {
      table: {
        disable: true,
      },
    },
    onRegisterClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BranchProfile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BranchProfile> = (args: any) => {
  return <BranchProfile {...args} />;
};

const amenities: AmenityObject[] = [
  { name: "Piscina al aire libre", icon: "pool" },
  { name: "Piscina interior", icon: "pool" },
  { name: "Centro de spa", icon: "spa" },
  { name: "Bar/Salón", icon: "wine" },
  { name: "Wifi libre", icon: "wifi" },
  { name: "Wifi libre2", icon: "wifi" },
  { name: "Wifi libre3", icon: "wifi" },
  { name: "Wifi libre4", icon: "wifi" },
  { name: "Wifi libre8", icon: "wifi" },
  { name: "Wifi libre9", icon: "wifi" },
  { name: "Wifi libre10", icon: "wifi" },
  { name: "Wifi libre11", icon: "wifi" },
  { name: "Wifi libre12", icon: "wifi" },
  { name: "Wifi libre13", icon: "wifi" },
  { name: "Wifi libre20", icon: "wifi" },
  { name: "Wifi libre21", icon: "wifi" },
  { name: "Wifi libre22", icon: "wifi" },
  { name: "Wifi libre23", icon: "wifi" },
  { name: "Wifi libre24", icon: "wifi" },
  { name: "Wifi libre25", icon: "wifi" },
  { name: "Wifi libre26", icon: "wifi" },
  { name: "Wifi libre27", icon: "wifi" },
];

const globalArgs = {
  color: "#EF7A08",
  locationImage:
    "https://www.c2dh.uni.lu/sites/default/files/styles/full_width/public/field/image/capture.png?itok=REb8jh_H",
  getBranchData: () => {
    return {
      businessId: 1,
      name: "Nombre Rest",
      score: 3.7,
      reviews: 4273,
      category: "Americana",
      pricePerson: 15.99,
      location: "Las Marcedes",
      price: 10,
      promotions: [
        {
          promotion: "Margaritas 2X1",
          date: new Date(),
          cost: 0,
          onClick: () => {},
          onSave: () => {},
        },
        {
          promotion: "Margaritas 2X1",
          date: new Date(),
          cost: 5,
          onClick: () => {},
          onSave: () => {},
        },
        {
          promotion: "Margaritas 2X1",
          date: new Date(),
          cost: 4.99,
          onClick: () => {},
          onSave: () => {},
        },
        {
          promotion: "Margaritas 2X1",
          date: new Date(),
          cost: 12,
          onClick: () => {},
          onSave: () => {},
        },
      ],
      overview:
        "Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.",
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2018%2F10%2FTerrasse-Suite-Carre-dOr-Hotel-Metropole-balcony-view.jpeg&f=1&nofb=1&ipt=9736c4b3ccbe4f89b8bfc453ff92138e9e1d5e527324123d5ff783268be37bdc&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F52da9677e4b03d314575985a%2F1576342982271-R07XT8R39LD93NT1XOZ1%2Fke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_%2F%2540dulce_at_hilton%2B-%2BConrad%2BAlgarve.jpg&f=1&nofb=1&ipt=2100054268d5c351126e8ffc690b40f9f3ec13426903564f4d9a8f0f53995947&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravel.home.sndimg.com%2Fcontent%2Fdam%2Fimages%2Ftravel%2Ffullset%2F2013%2F03%2F28%2F2d%2Fbest-hotel-views_ss_002.rend.hgtvcom.966.725.suffix%2F1491592688614.jpeg&f=1&nofb=1&ipt=2671a97930ff670904bb2fa1656a38e1d47df42213bb1cfdda4cfe320f4d4b97&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstunningplaces.net%2Fwp-content%2Fuploads%2F2014%2F07%2FKatikies-Hotels-01.jpg&f=1&nofb=1&ipt=9570d35132416bf109084e37afe4f8ae960f0654b7b603e0f9f93ef22e1d64d1&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thecoolector.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshagri-la-london.jpg&f=1&nofb=1&ipt=9827fe4148a7e3496d918d2e3300cb17b052923e2e19b1d36acd5a445f3e3584&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thestar.com%2Fcontent%2Fdam%2Fthestar%2Flife%2Ftravel%2F2012%2F03%2F16%2Fbest_hotel_views_a_look_at_our_favourite_rooms_with_a_view_around_the_globe%2Fmarriott_fallsviewniagara.jpeg&f=1&nofb=1&ipt=aaf5e9af11832f67d8af152f1cf5702570a79d358ab2b564789d67d5a28f25a3&ipo=images",
      ],
      mainImage:
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
      menu: new Array(10).fill({
        price: 14.25,
        title: "Pizza",
        description:
          "Descripción de una pizza ¿Que más necesitas? Pan, salsa de tomate, queso y cualquier ingrediente que quieras colocarle encima.",
        image:
          "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
        onClick: () => {},
      }),
      amenities,
      reviewsData: [
        {
          score: 4.5,
          author: "1Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "2Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "3Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "4Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "5Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "6Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "7Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "8Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "10Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "11Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "12Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "13Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "14Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "15Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "16Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "17Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "18Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "19Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "20Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "21Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "22Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "23Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "24Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "25Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "26Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "27Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "28Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "29Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "30Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "31Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "32Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "33Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "34Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "35Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
        {
          score: 4.5,
          author: "Giovanni Giorgio",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        },
      ],
    };
  },
};

export const Guest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Guest.args = {
  getUserData: () => {
    return { logged: false };
  },
  ...globalArgs,
};

export const Client = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Client.args = {
  getUserData: () => {
    return {
      logged: true,
      role: "client",
      client: {
        id: 1,
        name: "Jonh",
        surname: "Dane",
        picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
      },
    };
  },
  ...globalArgs,
};

export const Business = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Business.args = {
  getUserData: () => {
    return {
      logged: true,
      role: "business",
      business: {
        id: 1,
        name: "Restaurant",
        picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
        verified: true,
        tier: 1,
      },
    };
  },
  ...globalArgs,
};
