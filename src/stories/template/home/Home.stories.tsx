import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Home } from "./Home";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Templates/Home",
  component: Home,
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
    onSearch: {
      table: {
        disable: true,
      },
    },
    getCategoryReviews: {
      table: {
        disable: true,
      },
    },
    getCategoryCards: {
      table: {
        disable: true,
      },
    },
    getHihgLightReviews: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Home> = (args: any) => {
  return <Home {...args} />;
};

const ParrillaBranches = [
  {
    name: "Don Juan",
    backgroundImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/02/ff/82/8d/patio-view.jpg",
    score: 3.7,
    reviews: 332,
    discount: false,
    category: "Carnes",
    location: "Las Mercedes",
    firstReserve: "2:00 pm",
    secondReserve: "4:00 pm",
    priceScore: 4,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },

  {
    name: "Bis Bisteck",
    backgroundImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/4a/ee/8f/restaurante-parrilla.jpg",
    score: 4.7,
    reviews: 74,
    discount: false,
    category: "Carnes",
    location: "Altamira",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "My Stakehouse",
    backgroundImage:
      "https://decoratrix.estaticos.com.es/img/fotos_post/128142/pzMcgFUnkunQjPmmYyCXNR5Q3YutIlLq6bLosLCp5nUKwTnrmcbSiezVtbdH.jpg",
    score: 4.5,
    reviews: 202,
    discount: true,
    category: "Carnes",
    location: "La Candelaria",
    firstReserve: "3:00 pm",
    secondReserve: "4:00 pm",
    priceScore: 1,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "Parrilla Roja",
    backgroundImage:
      "https://s2.ppllstatics.com/leonoticias/www/multimedia/201902/09/media/cortadas/PARRILLA-k5SE-U70587079612GrE-624x385@Leonoticias.jpg",
    score: 4.1,
    reviews: 162,
    discount: true,
    category: "Carnes",
    location: "Baruta",
    firstReserve: "7:00 pm",
    secondReserve: "8:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "El Asador",
    backgroundImage:
      "https://www.clubdelprogresorestaurante.com/wp-content/uploads/2021/08/club-del-progreso-restaurente-buenos-aires-arg.jpg",
    score: 3.5,
    reviews: 202,
    discount: false,
    category: "Carnes",
    location: "La Candelaria",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 4,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Cabrera",
    backgroundImage:
      "https://images.adsttc.com/media/images/5888/5361/e58e/ce61/eb00/0159/large_jpg/Imagen_3.jpg?1485329236",
    score: 4.1,
    reviews: 321,
    discount: false,
    category: "Carnes",
    location: "Baruta",
    firstReserve: "2:00 pm",
    secondReserve: "3:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
];

const ItalianBranches = [
  {
    name: "Il Ristorante",
    backgroundImage:
      "https://i.insider.com/55bf8f242acae70f008bc7fd?width=1200&format=jpeg",
    score: 4.3,
    reviews: 620,
    discount: false,
    category: "Italiana",
    location: "Las Mercedes",
    firstReserve: "1:00 pm",
    secondReserve: "3:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "Sempre Dritto Ristorant",
    backgroundImage:
      "https://i.postimg.cc/yWqhSk5Z/172584327-151671503537464-2923172395679395882-n.jpg",
    score: 4.5,
    reviews: 889,
    discount: true,
    category: "Italiana",
    location: "El Hatillo",
    firstReserve: "4:00 pm",
    secondReserve: "5:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Trattoria",
    backgroundImage:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/v/a/p41155-15589466525ceba35cc9758.jpg?tr=tr:n-medium",
    score: 3.7,
    reviews: 404,
    discount: true,
    category: "Italiana",
    location: "La Candelaria",
    firstReserve: "3:00 pm",
    secondReserve: "5:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Famiglia",
    backgroundImage:
      "https://i.pinimg.com/originals/16/86/5d/16865d1d9c631fcf1cd693ad105ef6b6.jpg",
    score: 4.2,
    reviews: 321,
    discount: false,
    category: "Italiana",
    location: "Los Palos Grandes",
    firstReserve: "6:00 pm",
    secondReserve: "7:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Cucina",
    backgroundImage:
      "https://taogroup.com/wp-content/uploads/2022/06/Interior9-scaled.jpg",
    score: 3.7,
    reviews: 362,
    discount: false,
    category: "Italiana",
    location: "La Trinidad",
    firstReserve: "2:00 pm",
    secondReserve: "3:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Forchetta",
    backgroundImage:
      "https://static.stacker.com/s3fs-public/croppedshutterstock1054754711D6WYjpg_182.JPEG",
    score: 3.9,
    reviews: 120,
    discount: false,
    category: "Italiana",
    location: "Los Dos Caminos",
    firstReserve: "4:00 pm",
    secondReserve: "6:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
];

const categoryCards = [
  {
    title: "Japonés",
    description: "Deleitate con el verdadero sabor de la comida japonesa",
    backgroundImage:
      "https://s1.eestatic.com/2021/05/27/como/584453709_186431572_1706x960.jpg",
    onClick: () => {},
  },
  {
    title: "Árabe",
    description: "Descubre la gastronomía del medio oriente",
    backgroundImage:
      "https://kaleela.com/Content/BlogImages/middle-eastern-food-what-are-the-best-arabic-recipes.png",
    onClick: () => {},
  },
  {
    title: "Mexicano",
    description: "Disfruta de la auténtica comida mexicana",
    backgroundImage:
      "https://conteudo.imguol.com.br/c/entretenimento/10/2022/09/28/comida-mexicana-1664393072089_v2_4x3.jpg",
    onClick: () => {},
  },
];

const criticas = [
  {
    title: "Carnes a la parrilla de primera calidad",
    review:
      " Si estás buscando una experiencia culinaria única, Bisbisteck es el lugar perfecto para ti.\
       Con su ambiente acogedor y su deliciosa comida, este restaurante es el lugar perfecto para \
       disfrutar de una cena con amigos o familiares. Desde sus jugosos filetes hasta sus deliciosos\
        acompañamientos, cada bocado es una explosión de sabor.",
    score: 5,
    author: "Sabrina",
    authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://www.fefoc.org/wp-content/uploads/2017/02/Carnes-Contraindicado-Cancer.jpg",
    viewMore: () => {},
  },
  {
    title: "Gastronomía italiana auténtica en Sempre Dritto",
    review:
      "Sempre Dritto es un restaurante italiano muy popular en la ciudad. La comida es deliciosa y \
      el ambiente es acogedor. El servicio es excelente y el personal es muy amable y servicial. \
      ¡Definitivamente recomendaría este lugar a cualquiera que busque una experiencia gastronómica italiana auténtica! 😊",
    score: 5,
    author: "Olga",
    authorDescription: "Weave Studios – Kai Tak",
    image:
      "data:image/jpeg;base64,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",
    viewMore: () => {},
  },
  {
    title: "Auténtica comida árabe",
    review:
      " Si eres un amante de la comida árabe, no puedes perderte Al Kebab. Este restaurante es \
      conocido por su auténtica comida árabe y su ambiente acogedor. Desde sus deliciosos kebabs \
       hasta sus sabrosos platos de arroz, cada bocado es una delicia.",
    score: 4,
    author: "Angela",
    authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/fc/73/20/plato-especial-miguel.jpg",
    viewMore: () => {},
  },
  {
    title: "Excelente servicio y sazón",
    review:
      "Si estás buscando auténtica comida mexicana en San Juan, Don Taco es el lugar perfecto para ti.\
       Con su ambiente acogedor y su deliciosa comida, este restaurante es el lugar perfecto para\
        disfrutar de una cena con amigos o familiares. Desde sus deliciosos tacos hasta sus sabrosas \
        enchiladas, cada bocado es una explosión de sabor.",
    score: 4.5,
    author: "Vicente",
    authorDescription: "Weave Studios – Kai Tak",
    image: "https://media.timeout.com/images/103794388/image.jpg",
    viewMore: () => {},
  },
  {
    title: "Cómida japonesa de primera calidad",
    review:
      "Si estás buscando auténtica comida japonesa en la ciudad, Sushi Bar es el lugar perfecto para \
       ti. Con su ambiente acogedor y su deliciosa comida, este restaurante es el lugar perfecto para \
       disfrutar de una cena con amigos o familiares. Desde sus deliciosos rollos de sushi hasta sus \
       sabrosos platos de arroz, cada bocado es una delicia.",
    score: 4.5,
    author: "Juan",
    authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/cb/c6/90/udvalg-af-sushi.jpg",
    viewMore: () => {},
  },
];

const globalArgs = {
  color: "#EF7A08",
  headerPicture:
    "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
  getCategoryPreviews: () => [
    {
      title: "Parrilla",
      description: "Experimenta el intenso sabor de la carne a la parrilla",
      branches: ParrillaBranches,
      onButtonClick: () => {},
    },
    {
      title: "Italiano",
      description: "Los mejores restaurantes del viejo continente",
      branches: ItalianBranches,
      onButtonClick: () => {},
    },
  ],
  getCategoryCards: () => categoryCards,
  getHihgLightReviews: () => criticas,
};

export const Guest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Guest.args = {
  getUserData: () => {
    return { logged: false };
  },
  ...globalArgs,
};

export const Logged = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Logged.args = {
  getUserData: () => {
    return {
      logged: true,
      role: "client",
      client: {
        id: 1,
        name: "Daniel",
        surname: "Rodríguez",
        picture:
          "https://images.generated.photos/V-Z7eZqXKjp1gPXxo6GXGNfjZK1bv2y3USxCOF3zS1w/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzYwMjMyLmpwZw.jpg",
      },
    };
  },
  ...globalArgs,
};
