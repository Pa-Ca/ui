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
    //'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2018%2F10%2FTerrasse-Suite-Carre-dOr-Hotel-Metropole-balcony-view.jpeg&f=1&nofb=1&ipt=9736c4b3ccbe4f89b8bfc453ff92138e9e1d5e527324123d5ff783268be37bdc&ipo=images',
    //'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F52da9677e4b03d314575985a%2F1576342982271-R07XT8R39LD93NT1XOZ1%2Fke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_%2F%2540dulce_at_hilton%2B-%2BConrad%2BAlgarve.jpg&f=1&nofb=1&ipt=2100054268d5c351126e8ffc690b40f9f3ec13426903564f4d9a8f0f53995947&ipo=images',
    //'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravel.home.sndimg.com%2Fcontent%2Fdam%2Fimages%2Ftravel%2Ffullset%2F2013%2F03%2F28%2F2d%2Fbest-hotel-views_ss_002.rend.hgtvcom.966.725.suffix%2F1491592688614.jpeg&f=1&nofb=1&ipt=2671a97930ff670904bb2fa1656a38e1d47df42213bb1cfdda4cfe320f4d4b97&ipo=images',
    //'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstunningplaces.net%2Fwp-content%2Fuploads%2F2014%2F07%2FKatikies-Hotels-01.jpg&f=1&nofb=1&ipt=9570d35132416bf109084e37afe4f8ae960f0654b7b603e0f9f93ef22e1d64d1&ipo=images',
    //'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thecoolector.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshagri-la-london.jpg&f=1&nofb=1&ipt=9827fe4148a7e3496d918d2e3300cb17b052923e2e19b1d36acd5a445f3e3584&ipo=images',
    //'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thestar.com%2Fcontent%2Fdam%2Fthestar%2Flife%2Ftravel%2F2012%2F03%2F16%2Fbest_hotel_views_a_look_at_our_favourite_rooms_with_a_view_around_the_globe%2Fmarriott_fallsviewniagara.jpeg&f=1&nofb=1&ipt=aaf5e9af11832f67d8af152f1cf5702570a79d358ab2b564789d67d5a28f25a3&ipo=images'
  ],
  buttonTitle: 'Ver Fotos',
  buttonColor: 'primary',
  buttonSize: 'medium',
  onButtonClick: () => {}
};
