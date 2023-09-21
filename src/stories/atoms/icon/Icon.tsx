import React from "react";
import { Icon as Iconify } from "@iconify/react";
import Color from "color";
import { Bolivar } from "./Bolivar";
import classnames from "classnames";
import styles from "./icon.module.scss";
import poolIcon from "@iconify/icons-mdi/pool";
import wineIcon from "@iconify/icons-ion/wine";
import menuIcon from "@iconify/icons-ion/menu";
import heartIcon from "@iconify/icons-ph/heart";
import ccVisa from "@iconify/icons-cib/cc-visa";
import clockIcon from "@iconify/icons-mdi/clock";
import eyeFill from "@iconify/icons-bi/eye-fill";
import pencilIcon from "@iconify/icons-mdi/pencil";
import coffeeIcon from "@iconify/icons-mdi/coffee";
import dollarIcon from "@iconify/icons-mdi/dollar";
import searchIcon from "@iconify/icons-ion/search";
import fastFood from "@iconify/icons-ion/fast-food";
import heartFill from "@iconify/icons-ph/heart-fill";
import twitterIcon from "@iconify/icons-mdi/twitter";
import youtubeIcon from "@iconify/icons-mdi/youtube";
import warningIcon from "@iconify/icons-uiw/warning";
import facebookIcon from "@iconify/icons-mdi/facebook";
import calendarIcon from "@iconify/icons-mdi/calendar";
import clockCheck from "@iconify/icons-mdi/clock-check";
import paperPlane from "@iconify/icons-ion/paper-plane";
import alertCircle from "@iconify/icons-mdi/alert-circle";
import clockRemove from "@iconify/icons-mdi/clock-remove";
import zelleIcon from "@iconify/icons-simple-icons/zelle";
import flagFilled from "@iconify/icons-tabler/flag-filled";
import invoiceIcon from "@iconify/icons-iconamoon/invoice";
import baselinePlus from "@iconify/icons-ic/baseline-plus";
import eyeSlashFill from "@iconify/icons-bi/eye-slash-fill";
import wifiHighBold from "@iconify/icons-ph/wifi-high-bold";
import circleSlice8 from "@iconify/icons-mdi/circle-slice-8";
import baselineEmail from "@iconify/icons-ic/baseline-email";
import baselinePhone from "@iconify/icons-ic/baseline-phone";
import baselineMinus from "@iconify/icons-ic/baseline-minus";
import shareIcon from "@iconify/icons-material-symbols/share";
import fitnessCentre from "@iconify/icons-maki/fitness-centre";
import deleteIcon from "@iconify/icons-material-symbols/delete";
import logoutIcon from "@iconify/icons-material-symbols/logout";
import googleIcon from "@iconify/icons-flat-color-icons/google";
import personIcon from "@iconify/icons-material-symbols/person";
import cancelIcon from "@iconify/icons-material-symbols/cancel";
import plusCircle24 from "@iconify/icons-octicon/plus-circle-24";
import checkBox from "@iconify/icons-material-symbols/check-box";
import arrowsExchange from "@iconify/icons-tabler/arrows-exchange";
import spaRounded from "@iconify/icons-material-symbols/spa-rounded";
import instagramLogoFill from "@iconify/icons-ph/instagram-logo-fill";
import infoOutline from "@iconify/icons-material-symbols/info-outline";
import cloudUpload from "@iconify/icons-material-symbols/cloud-upload";
import taskRounded from "@iconify/icons-material-symbols/task-rounded";
import lensOutline from "@iconify/icons-material-symbols/lens-outline";
import roomService from "@iconify/icons-material-symbols/room-service";
import checkCircle from "@iconify/icons-material-symbols/check-circle";
import emailCheckOutline from "@iconify/icons-mdi/email-check-outline";
import identificationCard from "@iconify/icons-mdi/identification-card";
import restaurantIcon from "@iconify/icons-material-symbols/restaurant";
import baselineLocationOn from "@iconify/icons-ic/baseline-location-on";
import questionMark from "@iconify/icons-material-symbols/question-mark";
import phoneAndroid from "@iconify/icons-material-symbols/phone-android";
import localParking from "@iconify/icons-material-symbols/local-parking";
import deleteOutline from "@iconify/icons-material-symbols/delete-outline";
import roundKeyboardArrowUp from "@iconify/icons-ic/round-keyboard-arrow-up";
import tableRestaurant from "@iconify/icons-material-symbols/table-restaurant";
import roundKeyboardArrowDown from "@iconify/icons-ic/round-keyboard-arrow-down";
import iosArrowLeft24Filled from "@iconify/icons-fluent/ios-arrow-left-24-filled";
import iosArrowRight24Filled from "@iconify/icons-fluent/ios-arrow-right-24-filled";
import checkCircleOutline from "@iconify/icons-material-symbols/check-circle-outline";
import checkBoxOutlineBlank from "@iconify/icons-material-symbols/check-box-outline-blank";
import pendingActionsRounded from "@iconify/icons-material-symbols/pending-actions-rounded";
import baselineDeliveryDining from "@iconify/icons-ic/baseline-delivery-dining";
import paperBag from '@iconify/icons-tabler/paper-bag';
import handCoin from '@iconify/icons-mdi/hand-coin';

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
  | "warning"
  | "menu"
  | "clock"
  | "phone"
  | "mail-envelope"
  | "calendar"
  | "delete"
  | "delete-outline"
  | "bolivar"
  | "unset-status"
  | "pending-status"
  | "rejected-status"
  | "accepted-status"
  | "retired-status"
  | "started-status"
  | "closed-status"
  | "identity-document"
  | "info"
  | "delivery"
  | "pick-up"
  | "reciving-package"
  | "search"
  | "exchange"
  | "invoice"
  | "minus"
  | "plus";

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
  /**
   * Icon Class name
   */
  className?: string;
  /**
   * Check icon color
   */
  checkStyle?: boolean;
  /**
   * Warning icon color
   */
  warningStyle?: boolean;
  /**
   * Error icon color
   */
  errorStyle?: boolean;
}

/**
 * Icon component
 */
export const Icon = ({
  icon = "pa-ca",
  size = "1x",
  color = "#000000",
  checkStyle = false,
  warningStyle = false,
  errorStyle = false,
  style,
  className,
  ...props
}: IconProps) => {
  const finalClassName = classnames(
    styles.icon,
    checkStyle
      ? styles["icon--check"]
      : warningStyle
      ? styles["icon--warning"]
      : errorStyle
      ? styles["icon--error"]
      : "",
    className
  );

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
          className={finalClassName}
          icon={facebookIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "twitter":
      return (
        <Iconify
          className={finalClassName}
          icon={twitterIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "youtube":
      return (
        <Iconify
          className={finalClassName}
          icon={youtubeIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "instagram":
      return (
        <Iconify
          className={finalClassName}
          icon={instagramLogoFill}
          style={{ fontSize: size, ...style }}
        />
      );
    case "bell":
      return (
        <Iconify
          className={finalClassName}
          icon={roomService}
          style={{ fontSize: size, ...style }}
        />
      );
    case "heart":
      return (
        <Iconify className={finalClassName} icon={heartIcon} style={{ fontSize: size, ...style }} />
      );
    case "heart-fill":
      return (
        <Iconify className={finalClassName} icon={heartFill} style={{ fontSize: size, ...style }} />
      );
    case "paper-plane":
      return (
        <Iconify
          className={finalClassName}
          icon={paperPlane}
          style={{ fontSize: size, ...style }}
        />
      );
    case "dollar":
      return (
        <Iconify
          className={finalClassName}
          icon={dollarIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "location":
      return (
        <Iconify
          className={finalClassName}
          icon={baselineLocationOn}
          style={{ fontSize: size, ...style }}
        />
      );
    case "eye":
      return (
        <Iconify className={finalClassName} icon={eyeFill} style={{ fontSize: size, ...style }} />
      );
    case "eye-slash":
      return (
        <Iconify
          className={finalClassName}
          icon={eyeSlashFill}
          style={{ fontSize: size, ...style }}
        />
      );
    case "google":
      return <Iconify className={finalClassName} icon={googleIcon} style={{ fontSize: size }} />;
    case "person":
      return (
        <Iconify
          className={finalClassName}
          icon={personIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "check":
      return (
        <Iconify
          className={finalClassName}
          icon={checkCircle}
          style={{ fontSize: size, ...style }}
        />
      );
    case "check-outline":
      return (
        <Iconify
          className={finalClassName}
          icon={checkCircleOutline}
          style={{ fontSize: size, ...style }}
        />
      );
    case "warning":
      return (
        <Iconify
          className={finalClassName}
          icon={warningIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "cancel":
      return (
        <Iconify
          className={finalClassName}
          icon={cancelIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "pencil":
      return (
        <Iconify
          className={finalClassName}
          icon={pencilIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "pool":
      return (
        <Iconify className={finalClassName} icon={poolIcon} style={{ fontSize: size, ...style }} />
      );
    case "spa":
      return (
        <Iconify
          className={finalClassName}
          icon={spaRounded}
          style={{ fontSize: size, ...style }}
        />
      );
    case "restaurant":
      return (
        <Iconify
          className={finalClassName}
          icon={restaurantIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "fitness":
      return (
        <Iconify
          className={finalClassName}
          icon={fitnessCentre}
          style={{ fontSize: size, ...style }}
        />
      );
    case "wine":
      return (
        <Iconify className={finalClassName} icon={wineIcon} style={{ fontSize: size, ...style }} />
      );
    case "wifi":
      return (
        <Iconify
          className={finalClassName}
          icon={wifiHighBold}
          style={{ fontSize: size, ...style }}
        />
      );
    case "coffee":
      return (
        <Iconify
          className={finalClassName}
          icon={coffeeIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "fast-food":
      return (
        <Iconify className={finalClassName} icon={fastFood} style={{ fontSize: size, ...style }} />
      );
    case "down":
      return (
        <Iconify
          className={finalClassName}
          icon={roundKeyboardArrowDown}
          style={{ fontSize: size, ...style }}
        />
      );
    case "up":
      return (
        <Iconify
          className={finalClassName}
          icon={roundKeyboardArrowUp}
          style={{ fontSize: size, ...style }}
        />
      );
    case "left":
      return (
        <Iconify
          className={finalClassName}
          icon={iosArrowLeft24Filled}
          style={{ fontSize: size, ...style }}
        />
      );
    case "right":
      return (
        <Iconify
          className={finalClassName}
          icon={iosArrowRight24Filled}
          style={{ fontSize: size, ...style }}
        />
      );
    case "table":
      return (
        <Iconify
          className={finalClassName}
          icon={tableRestaurant}
          style={{ fontSize: size, ...style }}
        />
      );
    case "checkbox":
      return (
        <Iconify className={finalClassName} icon={checkBox} style={{ fontSize: size, ...style }} />
      );
    case "uncheckbox":
      return (
        <Iconify
          className={finalClassName}
          icon={checkBoxOutlineBlank}
          style={{ fontSize: size, ...style }}
        />
      );
    case "share":
      return (
        <Iconify className={finalClassName} icon={shareIcon} style={{ fontSize: size, ...style }} />
      );
    case "flag":
      return (
        <Iconify
          className={finalClassName}
          icon={flagFilled}
          style={{ fontSize: size, ...style }}
        />
      );
    case "zelle":
      return (
        <Iconify className={finalClassName} icon={zelleIcon} style={{ fontSize: size, ...style }} />
      );
    case "visa":
      return (
        <Iconify className={finalClassName} icon={ccVisa} style={{ fontSize: size, ...style }} />
      );
    case "smartPhone":
      return (
        <Iconify
          className={finalClassName}
          icon={phoneAndroid}
          style={{ fontSize: size, ...style }}
        />
      );
    case "plus-circle":
      return (
        <Iconify
          className={finalClassName}
          icon={plusCircle24}
          style={{ fontSize: size, ...style }}
        />
      );
    case "circle":
      return (
        <Iconify
          className={finalClassName}
          icon={lensOutline}
          style={{ fontSize: size, ...style }}
        />
      );
    case "double-circle":
      return (
        <Iconify
          className={finalClassName}
          icon={circleSlice8}
          style={{ fontSize: size, ...style }}
        />
      );
    case "parking":
      return (
        <Iconify
          className={finalClassName}
          icon={localParking}
          style={{ fontSize: size, ...style }}
        />
      );
    case "alert":
      return (
        <Iconify
          className={finalClassName}
          icon={alertCircle}
          style={{ fontSize: size, ...style }}
        />
      );
    case "logout":
      return (
        <Iconify
          className={finalClassName}
          icon={logoutIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "email-sent":
      return (
        <Iconify
          className={finalClassName}
          icon={emailCheckOutline}
          style={{ fontSize: size, ...style }}
        />
      );
    case "upload":
      return (
        <Iconify
          className={finalClassName}
          icon={cloudUpload}
          style={{ fontSize: size, ...style }}
        />
      );
    case "menu":
      return (
        <Iconify className={finalClassName} icon={menuIcon} style={{ fontSize: size, ...style }} />
      );
    case "clock":
      return (
        <Iconify className={finalClassName} icon={clockIcon} style={{ fontSize: size, ...style }} />
      );
    case "phone":
      return (
        <Iconify
          className={finalClassName}
          icon={baselinePhone}
          style={{ fontSize: size, ...style }}
        />
      );
    case "mail-envelope":
      return (
        <Iconify
          className={finalClassName}
          icon={baselineEmail}
          style={{ fontSize: size, ...style }}
        />
      );
    case "calendar":
      return (
        <Iconify
          className={finalClassName}
          icon={calendarIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "delete":
      return (
        <Iconify
          className={finalClassName}
          icon={deleteIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "delete-outline":
      return (
        <Iconify
          className={finalClassName}
          icon={deleteOutline}
          style={{ fontSize: size, ...style }}
        />
      );
    case "unset-status":
      return (
        <Iconify
          className={finalClassName}
          icon={questionMark}
          style={{ fontSize: size, ...style }}
        />
      );
    case "pending-status":
      return (
        <Iconify
          className={finalClassName}
          icon={pendingActionsRounded}
          style={{ fontSize: size, ...style }}
        />
      );
    case "rejected-status":
      return (
        <Iconify
          className={finalClassName}
          icon={cancelIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "accepted-status":
      return (
        <Iconify
          className={finalClassName}
          icon={checkCircle}
          style={{ fontSize: size, ...style }}
        />
      );
    case "retired-status":
      return (
        <Iconify
          className={finalClassName}
          icon={clockRemove}
          style={{ fontSize: size, ...style }}
        />
      );
    case "started-status":
      return (
        <Iconify
          className={finalClassName}
          icon={clockCheck}
          style={{ fontSize: size, ...style }}
        />
      );
    case "closed-status":
      return (
        <Iconify
          className={finalClassName}
          icon={taskRounded}
          style={{ fontSize: size, ...style }}
        />
      );
    case "identity-document":
      return (
        <Iconify
          className={finalClassName}
          icon={identificationCard}
          style={{ fontSize: size, ...style }}
        />
      );
    case "bolivar":
      return <Bolivar className={finalClassName} width={size} height={size} />;
    case "info":
      return (
        <Iconify
          className={finalClassName}
          icon={infoOutline}
          style={{ fontSize: size, ...style }}
        />
      );
    case "delivery":
      return (
        <Iconify
          className={finalClassName}
          icon={baselineDeliveryDining}
          style={{ fontSize: size, ...style }}
        />
      );
    case "pick-up":
      return (
        <Iconify
          className={finalClassName}
          icon={paperBag}
          style={{ fontSize: size, ...style }}
        />
      );
    case "reciving-package":
      return (
        <Iconify
          className={finalClassName}
          icon={handCoin}
          style={{ fontSize: size, ...style }}
        />
      );
    case "search":
      return (
        <Iconify
          className={finalClassName}
          icon={searchIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "exchange":
      return (
        <Iconify
          className={finalClassName}
          icon={arrowsExchange}
          style={{ fontSize: size, ...style }}
        />
      );
    case "invoice":
      return (
        <Iconify
          className={finalClassName}
          icon={invoiceIcon}
          style={{ fontSize: size, ...style }}
        />
      );
    case "minus":
      return (
        <Iconify
          className={finalClassName}
          icon={baselineMinus}
          style={{ fontSize: size, ...style }}
        />
      );
    case "plus":
      return (
        <Iconify
          className={finalClassName}
          icon={baselinePlus}
          style={{ fontSize: size, ...style }}
        />
      );
    default:
      return (
        <Iconify
          className={finalClassName}
          icon={questionMark}
          style={{ fontSize: size, ...style }}
        />
      );
  }
};
