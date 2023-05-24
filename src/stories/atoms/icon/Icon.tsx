import React from "react";
import { Icon as Iconify } from "@iconify/react";
import poolIcon from "@iconify/icons-mdi/pool";
import wineIcon from "@iconify/icons-ion/wine";
import heartIcon from "@iconify/icons-ph/heart";
import ccVisa from "@iconify/icons-cib/cc-visa";
import eyeFill from "@iconify/icons-bi/eye-fill";
import pencilIcon from "@iconify/icons-mdi/pencil";
import coffeeIcon from "@iconify/icons-mdi/coffee";
import fastFood from "@iconify/icons-ion/fast-food";
import heartFill from "@iconify/icons-ph/heart-fill";
import twitterIcon from "@iconify/icons-mdi/twitter";
import youtubeIcon from "@iconify/icons-mdi/youtube";
import warningIcon from '@iconify/icons-uiw/warning';
import facebookIcon from "@iconify/icons-mdi/facebook";
import paperPlane from "@iconify/icons-ion/paper-plane";
import alertCircle from "@iconify/icons-mdi/alert-circle";
import zelleIcon from "@iconify/icons-simple-icons/zelle";
import flagFilled from "@iconify/icons-tabler/flag-filled";
import eyeSlashFill from "@iconify/icons-bi/eye-slash-fill";
import wifiHighBold from "@iconify/icons-ph/wifi-high-bold";
import circleSlice8 from "@iconify/icons-mdi/circle-slice-8";
import shareIcon from "@iconify/icons-material-symbols/share";
import fitnessCentre from "@iconify/icons-maki/fitness-centre";
import logoutIcon from "@iconify/icons-material-symbols/logout";
import googleIcon from "@iconify/icons-flat-color-icons/google";
import personIcon from "@iconify/icons-material-symbols/person";
import cancelIcon from "@iconify/icons-material-symbols/cancel";
import plusCircle24 from "@iconify/icons-octicon/plus-circle-24";
import checkBox from "@iconify/icons-material-symbols/check-box";
import spaRounded from "@iconify/icons-material-symbols/spa-rounded";
import instagramLogoFill from "@iconify/icons-ph/instagram-logo-fill";
import cloudUpload from "@iconify/icons-material-symbols/cloud-upload";
import lensOutline from "@iconify/icons-material-symbols/lens-outline";
import roomService from "@iconify/icons-material-symbols/room-service";
import checkCircle from "@iconify/icons-material-symbols/check-circle";
import emailCheckOutline from "@iconify/icons-mdi/email-check-outline";
import restaurantIcon from "@iconify/icons-material-symbols/restaurant";
import baselineLocationOn from "@iconify/icons-ic/baseline-location-on";
import questionMark from "@iconify/icons-material-symbols/question-mark";
import phoneAndroid from "@iconify/icons-material-symbols/phone-android";
import localParking from "@iconify/icons-material-symbols/local-parking";
import roundKeyboardArrowUp from "@iconify/icons-ic/round-keyboard-arrow-up";
import tableRestaurant from "@iconify/icons-material-symbols/table-restaurant";
import roundKeyboardArrowDown from "@iconify/icons-ic/round-keyboard-arrow-down";
import iosArrowLeft24Filled from "@iconify/icons-fluent/ios-arrow-left-24-filled";
import iosArrowRight24Filled from "@iconify/icons-fluent/ios-arrow-right-24-filled";
import currencyCircleDollarFill from "@iconify/icons-ph/currency-circle-dollar-fill";
import checkCircleOutline from "@iconify/icons-material-symbols/check-circle-outline";
import checkBoxOutlineBlank from "@iconify/icons-material-symbols/check-box-outline-blank";
import Color from 'color';

export type IconType =
  | "pa-ca"
  | "facebook"
  | "twitter"
  | "youtube"
  | "instagram"
  | "bell"
  | "heart"
  | "heart-fill"
  | "paper-plane"
  | "dollar"
  | "location"
  | "eye"
  | "eye-slash"
  | "google"
  | "person"
  | "cancel"
  | "check"
  | "check-outline"
  | "pencil"
  | "pool"
  | "spa"
  | "restaurant"
  | "fitness"
  | "wine"
  | "wifi"
  | "coffee"
  | "fast-food"
  | "down"
  | "up"
  | "left"
  | "right"
  | "table"
  | "checkbox"
  | "uncheckbox"
  | "share"
  | "plus-circle"
  | "flag"
  | "zelle"
  | "visa"
  | "smartPhone"
  | "circle"
  | "double-circle"
  | "parking"
  | "alert"
  | "logout"
  | "email-sent"
  | "upload"
  | "warning";

interface IconProps {
  /**
   * Icon name
   */
  icon?: IconType;
  /**
   * Icon size
   */
  size?: string;
  /**
   * Icon color
   */
  color?: string;
  /**
   * Other icon style
   */
  style?: React.CSSProperties;
}

/**
 * Icon component
 */
export const Icon = ({
  icon = "pa-ca",
  size = "1x",
  color = "#000000",
  style,
  ...props
}: IconProps) => {
  switch (icon) {
    case "pa-ca":
      const paca_color =
        Color(color).hex() === Color("white").hex()
          ? "/images/pa-ca-icon-white.png"
          : "/images/pa-ca-icon.png";

      return <img src={paca_color} width={size} height={size} {...props} />;
    case "facebook":
      return (
        <Iconify
          icon={facebookIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "twitter":
      return (
        <Iconify
          icon={twitterIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "youtube":
      return (
        <Iconify
          icon={youtubeIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "instagram":
      return (
        <Iconify
          icon={instagramLogoFill}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "bell":
      return (
        <Iconify
          icon={roomService}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "heart":
      return (
        <Iconify
          icon={heartIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "heart-fill":
      return (
        <Iconify
          icon={heartFill}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "paper-plane":
      return (
        <Iconify
          icon={paperPlane}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "dollar":
      return (
        <Iconify
          icon={currencyCircleDollarFill}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "location":
      return (
        <Iconify
          icon={baselineLocationOn}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "eye":
      return (
        <Iconify
          icon={eyeFill}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "eye-slash":
      return (
        <Iconify
          icon={eyeSlashFill}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "google":
      return <Iconify icon={googleIcon} style={{ fontSize: size }} />;
    case "person":
      return (
        <Iconify
          icon={personIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "cancel":
      return (
        <Iconify
          icon={cancelIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "check":
      return (
        <Iconify
          icon={checkCircle}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "check-outline":
      return (
        <Iconify
          icon={checkCircleOutline}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "pencil":
      return (
        <Iconify
          icon={pencilIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "pool":
      return (
        <Iconify
          icon={poolIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "spa":
      return (
        <Iconify
          icon={spaRounded}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "restaurant":
      return (
        <Iconify
          icon={restaurantIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "fitness":
      return (
        <Iconify
          icon={fitnessCentre}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "wine":
      return (
        <Iconify
          icon={wineIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "wifi":
      return (
        <Iconify
          icon={wifiHighBold}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "coffee":
      return (
        <Iconify
          icon={coffeeIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "fast-food":
      return (
        <Iconify
          icon={fastFood}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "down":
      return (
        <Iconify
          icon={roundKeyboardArrowDown}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "up":
      return (
        <Iconify
          icon={roundKeyboardArrowUp}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "left":
      return (
        <Iconify
          icon={iosArrowLeft24Filled}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "right":
      return (
        <Iconify
          icon={iosArrowRight24Filled}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "table":
      return (
        <Iconify
          icon={tableRestaurant}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "checkbox":
      return (
        <Iconify
          icon={checkBox}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "uncheckbox":
      return (
        <Iconify
          icon={checkBoxOutlineBlank}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "share":
      return (
        <Iconify
          icon={shareIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "flag":
      return (
        <Iconify
          icon={flagFilled}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "zelle":
      return (
        <Iconify
          icon={zelleIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "visa":
      return (
        <Iconify
          icon={ccVisa}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "smartPhone":
      return (
        <Iconify
          icon={phoneAndroid}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "plus-circle":
      return (
        <Iconify
          icon={plusCircle24}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "circle":
      return (
        <Iconify
          icon={lensOutline}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "double-circle":
      return (
        <Iconify
          icon={circleSlice8}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "parking":
      return (
        <Iconify
          icon={localParking}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "alert":
      return (
        <Iconify
          icon={alertCircle}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "logout":
      return (
        <Iconify
          icon={logoutIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "email-sent":
      return (
        <Iconify
          icon={emailCheckOutline}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "upload":
      return (
        <Iconify
          icon={cloudUpload}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    case "warning":
      return (
        <Iconify
          icon={warningIcon}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
    default:
      return (
        <Iconify
          icon={questionMark}
          style={{ fontSize: size, ...style }}
          color={color}
        />
      );
  }
};
