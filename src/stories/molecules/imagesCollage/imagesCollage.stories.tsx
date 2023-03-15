import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImagesCollage } from './imagesCollage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/ImagesCollage',
  component: ImagesCollage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onClick: {
      table: {
        disable: true
      }
    },
    onFirstReserveClick: {
      table: {
        disable: true
      }
    },
    onSecondReserveClick: {
      table: {
        disable: true
      }
    },
  },
} as ComponentMeta<typeof ImagesCollage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImagesCollage> = (args: any) => {
  return <ImagesCollage {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: '550px',
  images: [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flegendsofthemultiuniverse%2Fimages%2F4%2F44%2FRed_Wild_Force_Ranger.jpg%2Frevision%2Flatest%3Fcb%3D20160315184140&f=1&nofb=1&ipt=45b2b2dfce8dbb6bca8717747be1a5bb0d360df53092749977291a0614eee6d7&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F79%2Fe4%2F92%2F79e4921d008b2515901beb234e085c76.jpg&f=1&nofb=1&ipt=b0d458903ca425eb7c7241386ff1b106dbc05f9006d7a73ea1975faef6c04cc9&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fec%2Ffd%2Ffd%2Fecfdfdc0cb586b2784096f8699feb630.jpg&f=1&nofb=1&ipt=88101753df94303d53ce736c2496cce71432bc61eb8188b03952520b74e4305c&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filarge.lisimg.com%2Fimage%2F1977280%2F740full-power-rangers-wild-force-screenshot.jpg&f=1&nofb=1&ipt=6cbd6c1686873cbf93fb958595b6543b2a9e5cd94f7473606b563d2bfb11d627&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3d%2F0c%2F69%2F3d0c69166d95829c0ca2996eb6f08426.jpg&f=1&nofb=1&ipt=cb0ac0af3b16eebcb4d07024b0d6592e1b7ea80d603e539ce908e694d141d129&ipo=images'
  ],
  buttonTitle: 'Ver Fotos',
  buttonColor: 'primary',
  buttonSize: 'medium',
  onButtonClick: () => {}
};
