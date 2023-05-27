import React from "react";
import { AuthPage } from "../../organisms/authPage/AuthPage";
import { LoginComponent } from "../../organisms/loginComponent/LoginComponent";

interface LoginProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * Images to be displayed in the carousel
   */
  images: string[];
  /**
   * On login button click
   */
  onLogin: (email: string, password: string) => void;
  /**
   * On forgot password click
   */
  onForgotClick: () => void;
  /**
   * On sign up click
   */
  onSignUp: () => void;
  /**
   * On sign up using Google click
   */
  onGoogleSignUp: () => void;
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
export const Login = ({
  error = false,
  images = [],
  onLogin,
  onForgotClick,
  onSignUp,
  onGoogleSignUp,
  color,
  secondaryColor,
  otherLoginsColor,
  ...props
}: LoginProps) => {
  return (
    <AuthPage>
      <LoginComponent
        error={error}
        images={images}
        onLogin={onLogin}
        onForgotClick={onForgotClick}
        onSignUp={onSignUp}
        onGoogleSignUp={onGoogleSignUp}
        color={color}
        secondaryColor={secondaryColor}
        otherLoginsColor={otherLoginsColor}
      />
    </AuthPage>
  );
};
