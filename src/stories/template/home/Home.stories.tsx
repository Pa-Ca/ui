import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Templates/Home',
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    getClientData: {
      table: {
        disable: true
      }
    },
    onHeaderReserveClick: {
      table: {
        disable: true
      }
    },
    onPacaClick: {
      table: {
        disable: true
      }
    },
    onFavoritesClick: {
      table: {
        disable: true
      }
    },
    onProfileClick: {
      table: {
        disable: true
      }
    },
    onLoginClick: {
      table: {
        disable: true
      }
    },
    onRegisterClick: {
      table: {
        disable: true
      }
    },
    onSearch: {
      table: {
        disable: true
      }
    },
    getCategoryReviews: {
      table: {
        disable: true
      }
    },
    getCategoryCards: {
      table: {
        disable: true
      }
    },
    getHihgLightReviews: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args: any) => {
  return (
    <Home {...args} />
  );
}

const globalArgs = {
  color: '#EF7A08',
  headerPicture: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg',
  getCategoryPreviews: () => [
    {
      title: 'Perfectos en pareja',
      description: 'Diviertete en una salida perfecta en pareja',
      branches: new Array(10).fill({
        name: 'Restaurant Name',
        backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
        score: 3.7,
        reviews: 42,
        discount: true,
        amenity: 'Italian',
        location: 'Las Mercedes',
        firstReserve: '8:00 pm',
        secondReserve: '9:00 pm',
        priceScore: 3,
        onClick: () => {},
        onFirstReserveClick: () => {},
        onSecondReserveClick: () => {}
      }),
      onButtonClick: () => {}
    },
    {
      title: 'Italiano',
      description: 'Los mejores restaurantes del viejo continente',
      branches: new Array(10).fill({
        name: 'Restaurant Name',
        backgroundImage: 'https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg',
        score: 3.7,
        reviews: 42,
        discount: true,
        amenity: 'Italian',
        location: 'Las Mercedes',
        firstReserve: '8:00 pm',
        secondReserve: '9:00 pm',
        priceScore: 3,
        onClick: () => {},
        onFirstReserveClick: () => {},
        onSecondReserveClick: () => {}
      }),
      onButtonClick: () => {}
    },
  ],
  getCategoryCards: () => new Array(5).fill({
    title: 'Viejo continente',
    description: 'Disfruta de la vida culinaria de nuestros orígenes',
    backgroundImage: 'https://img.chilango.com/2018/06/chimenea-sir-winston.jpg'
  }),
  getHihgLightReviews: () => new Array(5).fill({
    title: 'A real sense of community, nurtured',
    review: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
    score: 5,
    author: 'Olga',
    authorDescription: 'Weave Studios – Kai Tak',
    image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/7%20AdobeStock_335413355?$png$&jpegSize=200&wid=960',
    viewMore: () => { },
  })
}

export const Guest = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Guest.args = {
  getClientData: () => { return { logged: false } },
  ...globalArgs
};

export const Logged = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Logged.args = {
  getClientData: () => {
    return {
      logged: true,
      id: 1, 
      name: 'Jonh',
      surname: 'Dane',
      picture: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg',
    }
  },
  ...globalArgs
};
