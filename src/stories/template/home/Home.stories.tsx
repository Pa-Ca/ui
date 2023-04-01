import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args: any) => {
  return <Home {...args} />;
};


const ParrillaBranches = [
  {
    name: "Don Juan",
    backgroundImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/02/ff/82/8d/patio-view.jpg",
    score: 3.7,
    reviews: 33,
    discount: false,
    amenity: "Carnes",
    location: "Las Mercedes",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
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
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
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
    reviews: 100,
    discount: true,
    category: "Carnes",
    location: "Baruta",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
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
    reviews: 100,
    discount: false,
    category: "Carnes",
    location: "Baruta",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  }
]

const ItalianBranches = [
  {
    name: "Il Ristorante",
    backgroundImage:
      "https://i.insider.com/55bf8f242acae70f008bc7fd?width=1200&format=jpeg",
    score: 4.3,
    reviews: 42,
    discount: false,
    category: "Italiano",
    location: "Las Mercedes",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 2,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "Sempre Dritto",
    backgroundImage:
      "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    score: 3.7,
    reviews: 42,
    discount: true,
    category: "Italiano",
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
    reviews: 42,
    discount: true,
    category: "Italiano",
    location: "Las Mercedes",
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
    reviews: 42,
    discount: false,
    category: "Italiano",
    location: "Las Mercedes",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
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
    reviews: 42,
    discount: false,
    category: "Italiano",
    location: "Las Mercedes",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
  {
    name: "La Forchetta",
    backgroundImage:
      "https://static.stacker.com/s3fs-public/croppedshutterstock1054754711D6WYjpg_182.JPEG",
    score: 3.7,
    reviews: 42,
    discount: false,
    category: "Italiano",
    location: "Las Mercedes",
    firstReserve: "8:00 pm",
    secondReserve: "9:00 pm",
    priceScore: 3,
    onClick: () => {},
    onFirstReserveClick: () => {},
    onSecondReserveClick: () => {},
  },
]

const categoryCards = [
  {
    title: "Japonés",
    description: "Deleitate con el verdadero sabor de la comida japonesa",
    backgroundImage:
      "https://s1.eestatic.com/2021/05/27/como/584453709_186431572_1706x960.jpg",
  },
  {
    title: "Árabe",
    description: "Descubre la gastronomía del medio oriente",
    backgroundImage:
      "https://kaleela.com/Content/BlogImages/middle-eastern-food-what-are-the-best-arabic-recipes.png",
  },
  {
    title: "Mexicano",
    description: "Disfruta de la auténtica comida mexicana",
    backgroundImage:
      "https://conteudo.imguol.com.br/c/entretenimento/10/2022/09/28/comida-mexicana-1664393072089_v2_4x3.jpg",
  }
]

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
    //authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://www.fefoc.org/wp-content/uploads/2017/02/Carnes-Contraindicado-Cancer.jpg",
    viewMore: () => {},
  },
  {
    title: "Una experiencia gastronómica italiana auténtica en Sempre Dritto",
    review:
      "Sempre Dritto es un restaurante italiano muy popular en la ciudad. La comida es deliciosa y \
      el ambiente es acogedor. El servicio es excelente y el personal es muy amable y servicial. \
      ¡Definitivamente recomendaría este lugar a cualquiera que busque una experiencia gastronómica italiana auténtica! 😊",
    score: 5,
    author: "Olga",
    //authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxvysh4Zzn6C8Xz3bdS4APDoioyEW9-3MrbaNs0QXXl0eNZ0lx0cezqbWr2jY5iWf5Lc&usqp=CAU",
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
    //authorDescription: "Weave Studios – Kai Tak",
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
    //authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://media.timeout.com/images/103794388/image.jpg",
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
    //authorDescription: "Weave Studios – Kai Tak",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/cb/c6/90/udvalg-af-sushi.jpg",
    viewMore: () => {},
  },
  
]


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
        name: "Jonh",
        surname: "Dane",
        picture: "https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg",
      },
    };
  },
  ...globalArgs,
};
