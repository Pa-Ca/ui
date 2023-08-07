import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./signUpComponent.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import useThemeProvider from "../../hooks/useThemeProvider";
import { SignUpForm } from "../../molecules/signUpForm/SignUpForm";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";

interface SignUpComponentProps {
  /**
   * Client first name input hook
   */
  firstName?: InputFormHook<string>;
  /**
   * Client last name input hook
   */
  lastName?: InputFormHook<string>;
  /**
   * Business name input hook
   */
  businessName?: InputFormHook<string>;
  /**
   * Email input hook
   */
  email?: InputFormHook<string>;
  /**
   * Phone input hook
   */
  phone?: InputFormHook<string>;
  /**
   * Password input hook
   */
  password?: InputFormHook<string>;
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
   * Dark mode
   */
  darkMode?: boolean;
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

  darkMode,

  height,
  width,
  ...props
}: SignUpComponentProps) => {
  const window = useWindowResize();
  const { isDarkMode } = useThemeProvider();

  return (
    <Box
      className={styles["sign-up-component--container"]}
      style={{ height, width }}
    >
      <Box className={styles["sign-up-component--caroussel"]}>
        <ImagesCarousel
          width="100%"
          height="100%"
          images={images}
          interval={interval}
        />
      </Box>
      <Box className={styles["sign-up-component--form-container"]}>
        <Box className={styles["sign-up-component--header"]}>
          <Box className={styles["sign-up-component--icon"]}>
            <Icon
              icon="pa-ca"
              color={isDarkMode ? "white" : undefined}
              size={window.resolutionType === "desktop" ? "62px" : "62px"}
            />
          </Box>
          <Text
            weight="700"
            className={styles["sign-up-component--title"]}
            type={window.resolutionType === "desktop" ? "h2" : "h3"}
          >
            Regístrate
          </Text>
        </Box>

        <SignUpForm
          height="100%"
          business={business}
          email={email}
          phone={phone}
          lastName={lastName}
          password={password}
          firstName={firstName}
          businessName={businessName}
          validateClientData={validateClientData}
          validateBusinessData={validateBusinessData}
          onLogin={onLogin}
          onTermsAndConditionsClick={onTermsAndConditionsClick}
          onClientSignUp={onClientSignUp}
          onBusinessSignUp={onBusinessSignUp}
          onGoogleSignUp={onGoogleSignUp}
        />
      </Box>
    </Box>
  );
};
