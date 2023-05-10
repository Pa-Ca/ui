import React from "react";
import "./signUpComponent.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { InputFormHook } from "../../hooks/useInputForm";
import { SignUpForm } from "../../molecules/signUpForm/SignUpForm";
import {
  ImagesCarousel,
  ImagesCarouselProps,
} from "../../molecules/imagesCarousel/ImagesCarousel";

interface SignUpComponentProps {
  /**
   * Client first name input hook
   */
  firstName: InputFormHook<string>;
  /**
   * Client last name input hook
   */
  lastName: InputFormHook<string>;
  /**
   * Business name input hook
   */
  businessName: InputFormHook<string>;
  /**
   * Email input hook
   */
  email: InputFormHook<string>;
  /**
   * Phone input hook
   */
  phone: InputFormHook<string>;
  /**
   * Password input hook
   */
  password: InputFormHook<string>;
  /**
   * Indicates if the user to register is a business. Otherwise, it will
   * be considered a client
   */
  business?: boolean;

  /**
   * Indicate if the client data is valid
   */
  validateClientData?: () => boolean;
  /**
   * On business sign up click
   */
  validateBusinessData?: () => boolean;
  /**
   * On login button click
   */
  onLogin: () => void;
  /**
   * On termas and conditions click
   */
  onTermsAndConditionsClick: () => void;
  /**
   * On client sign up click
   */
  onClientSignUp?: () => void;
  /**
   * On business sign up click
   */
  onBusinessSignUp?: () => void;
  /**
   * On sign up using Google click
   */
  onGoogleSignUp: () => void;

  /**
   * Images to show
   */
  images: string[];
  /**
   * Time interval for automatic scrolling. It is in ms, 0 indicates that
   * there is no automatic scroll
   */
  interval?: number;

  /**
   * height of the component
   */
  height?: string;
  /**
   * width of the component
   */
  width?: string;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
  /**
   * Other logins button border color
   */
  otherLoginsColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const SignUpComponent = ({
  firstName,
  lastName,
  businessName,
  email,
  phone,
  password,
  business,

  validateClientData,
  validateBusinessData,
  onLogin,
  onTermsAndConditionsClick,
  onClientSignUp,
  onBusinessSignUp,
  onGoogleSignUp,

  images,
  interval,

  color,
  secondaryColor,
  otherLoginsColor,
  height,
  width,
  ...props
}: SignUpComponentProps) => {
  return (
    <Box className="sign-up-component--container" style={{ height, width }}>
      <Box className="sign-up-component--caroussel">
        <ImagesCarousel
          height="100%"
          color={color}
          images={images}
          interval={interval}
        />
      </Box>
      <Box className="sign-up-component--login-form-container">
        <Box className="sign-up-component--icon">
          <Icon icon="pa-ca" size={"62px"} />
        </Box>
        <Text type="h2" weight="700" className="sign-up-component--title">
          Sign up
        </Text>
        <Text className="sign-up-component--sub-title" type="p">
          Let’s get you all st up so you can access your personal account.
        </Text>
        <SignUpForm
          firstName={firstName}
          lastName={lastName}
          businessName={businessName}
          email={email}
          phone={phone}
          password={password}
          business={business}

          validateClientData={validateClientData}
          validateBusinessData={validateBusinessData}
          onLogin={onLogin}
          onTermsAndConditionsClick={onTermsAndConditionsClick}
          onClientSignUp={onClientSignUp}
          onBusinessSignUp={onBusinessSignUp}
          onGoogleSignUp={onGoogleSignUp}

          color={color}
          secondaryColor={secondaryColor}
          otherLoginsColor={otherLoginsColor}
        />
      </Box>
    </Box>
  );
};
