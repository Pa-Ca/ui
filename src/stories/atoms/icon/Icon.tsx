import React from 'react';
import { Icon as Iconify } from '@iconify/react';

import poolIcon from '@iconify/icons-mdi/pool';
import wineIcon from '@iconify/icons-ion/wine';
import heartIcon from '@iconify/icons-ph/heart';
import eyeFill from '@iconify/icons-bi/eye-fill';
import pencilIcon from '@iconify/icons-mdi/pencil';
import coffeeIcon from '@iconify/icons-mdi/coffee';
import fastFood from '@iconify/icons-ion/fast-food';
import heartFill from '@iconify/icons-ph/heart-fill';
import twitterIcon from '@iconify/icons-mdi/twitter';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import facebookIcon from '@iconify/icons-mdi/facebook';
import paperPlane from '@iconify/icons-ion/paper-plane';
import eyeSlashFill from '@iconify/icons-bi/eye-slash-fill';
import wifiHighBold from '@iconify/icons-ph/wifi-high-bold';
import fitnessCentre from '@iconify/icons-maki/fitness-centre';
import googleIcon from '@iconify/icons-flat-color-icons/google';
import personIcon from '@iconify/icons-material-symbols/person';
import cancelIcon from '@iconify/icons-material-symbols/cancel';
import spaRounded from '@iconify/icons-material-symbols/spa-rounded';
import instagramLogoFill from '@iconify/icons-ph/instagram-logo-fill';
import roomService from '@iconify/icons-material-symbols/room-service';
import checkCircle from '@iconify/icons-material-symbols/check-circle';
import restaurantIcon from '@iconify/icons-material-symbols/restaurant';
import baselineLocationOn from '@iconify/icons-ic/baseline-location-on';
import questionMark from '@iconify/icons-material-symbols/question-mark';
import roundKeyboardArrowUp from '@iconify/icons-ic/round-keyboard-arrow-up';
import roundKeyboardArrowDown from '@iconify/icons-ic/round-keyboard-arrow-down';
import currencyCircleDollarFill from '@iconify/icons-ph/currency-circle-dollar-fill';

interface IconProps {
  /**
   * Icon name
   */
  icon?: 'pa-ca' | 'facebook' | 'twitter' | 'youtube' | 'instagram' |
  'bell' | 'heart' | 'heart-fill' | 'paper-plane' | 'dollar' | 'location' |
  'eye' | 'eye-slash' | 'google' | 'person' | 'cancel' | 'check' | 'pencil' |
  'pool' | 'spa' | 'restaurant' | 'fitness' | 'wine' | 'wifi' | 'coffee' |
  'fast-food' | 'down' | 'up';
  /**
   * Icon size
   */
  size?: string;
  /**
   * Icon color
   */
  color?: string;
}


/**
 * Icon component
 */
export const Icon = ({
  icon = 'pa-ca',
  size = '1x',
  color = '#000',
  ...props
}: IconProps) => {
  switch (icon) {
    case 'pa-ca':
      return <img
        src='/images/pa-ca-icon.png'
        width={size}
        height={size}
        {...props}
      />
    case 'facebook': 
      return <Iconify
        icon={facebookIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'twitter': 
      return <Iconify
        icon={twitterIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'youtube': 
      return <Iconify
        icon={youtubeIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'instagram': 
      return <Iconify
        icon={instagramLogoFill}
        style={{ fontSize: size }}
        color={color}
      />
    case 'bell':
      return <Iconify
        icon={roomService}
        style={{ fontSize: size }}
        color={color}
      />
    case 'heart':
      return <Iconify
        icon={heartIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'heart-fill':
      return <Iconify
        icon={heartFill}
        style={{ fontSize: size }}
        color={color}
      />
    case 'paper-plane':
      return <Iconify
        icon={paperPlane}
        style={{ fontSize: size }}
        color={color}
      />
    case 'dollar':
      return <Iconify
        icon={currencyCircleDollarFill}
        style={{ fontSize: size }}
        color={color}
      />
    case 'location':
      return <Iconify
        icon={baselineLocationOn}
        style={{ fontSize: size }}
        color={color}
      />
    case 'eye':
      return <Iconify
        icon={eyeFill}
        style={{ fontSize: size }}
        color={color}
      />
    case 'eye-slash':
      return <Iconify
        icon={eyeSlashFill}
        style={{ fontSize: size }}
        color={color}
      />
    case 'google':
      return <Iconify
        icon={googleIcon}
        style={{ fontSize: size }}
      />
    case 'person':
      return <Iconify
        icon={personIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'cancel':
      return <Iconify
        icon={cancelIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'check':
      return <Iconify
        icon={checkCircle}
        style={{ fontSize: size }}
        color={color}
      />
    case 'pencil':
      return <Iconify
        icon={pencilIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'pool':
      return <Iconify
        icon={poolIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'spa':
      return <Iconify
        icon={spaRounded}
        style={{ fontSize: size }}
        color={color}
      />
    case 'restaurant':
      return <Iconify
        icon={restaurantIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'fitness':
      return <Iconify
        icon={fitnessCentre}
        style={{ fontSize: size }}
        color={color}
      />
    case 'wine':
      return <Iconify
        icon={wineIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'wifi':
      return <Iconify
        icon={wifiHighBold}
        style={{ fontSize: size }}
        color={color}
      />
    case 'coffee':
      return <Iconify
        icon={coffeeIcon}
        style={{ fontSize: size }}
        color={color}
      />
    case 'fast-food':
      return <Iconify
        icon={fastFood}
        style={{ fontSize: size }}
        color={color}
      />
    case 'down':
      return <Iconify
        icon={roundKeyboardArrowDown}
        style={{ fontSize: size }}
        color={color}
      />
    case 'up':
      return <Iconify
        icon={roundKeyboardArrowUp}
        style={{ fontSize: size }}
        color={color}
      />
    default:
      return <Iconify
        icon={questionMark}
        style={{ fontSize: size }}
        color={color}
      />
  }
};