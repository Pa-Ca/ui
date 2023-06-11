import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ReviewBoard } from './ReviewBoard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Organisms/ReviewBoard',
  component: ReviewBoard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { 
    onButtonClick: {
      table: {
        disable: true
      }
    }
  },
} as Meta<typeof ReviewBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ReviewBoard> = (args: any) => {
  return (
    <ReviewBoard {...args} />
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  reviews: [
    { score: 4.5, author: '1Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '2Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '3Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '4Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '5Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '6Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '7Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '8Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '10Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '11Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '12Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '13Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '14Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '15Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '16Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '17Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '18Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '19Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '20Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg'},
    { score: 4.5, author: '21Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '22Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '23Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '24Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '25Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '26Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '27Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '28Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '29Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '30Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '31Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg'},
    { score: 4.5, author: '32Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '33Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '34Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg' },
    { score: 4.5, author: '35Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg'},
    { score: 4.5, author: 'Giovanni Giorgio', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg'},
  ]
};
