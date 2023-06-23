import React from "react";
import { InputFormHook } from "../../hooks/useInputForm";
import { AuthPage } from "../../organisms/authPage/AuthPage";
import useThemeProvider from "../../hooks/useThemeProvider";
import { SignUpComponent } from "../../organisms/signUpComponent/SignUpComponent";

interface SignUpProps {
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
}

/**
 * Primary UI component for user interaction
 */
export const SignUp = ({
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
  ...props
}: SignUpProps) => {
  const { isDarkMode } = useThemeProvider();

  return (
    <AuthPage>
      <SignUpComponent
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
        images={images}
        interval={interval}
        {...props}
      />
    </AuthPage>
  );
};
