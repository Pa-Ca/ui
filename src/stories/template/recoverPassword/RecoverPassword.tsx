import React from "react";
import { AuthPage } from "../../organisms/authPage/AuthPage";
import { RecoverPasswordComponent } from "../../organisms/recoverPasswordComponent/RecoverPasswordComponent";

interface RecoverPasswordProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * Indicates if the recovery email has already been sent
   */
  completed?: boolean;
  /**
   * Images to be displayed in the carousel
   */
  images: string[];
  /**
   * On back to login clickl
   */
  onBackToLogin: () => void;
  /**
   * On submit button click
   */
  onSubmit: (email: string) => void;
  /**
   * On login using Google click
   */
  onGoogleLogin: () => void;
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
export const RecoverPassword = ({
  error = false,
  completed = false,
  images = [],
  onBackToLogin,
  onSubmit,
  onGoogleLogin,
  color,
  secondaryColor,
  otherLoginsColor,
  ...props
}: RecoverPasswordProps) => {
  return (
    <AuthPage>
      <RecoverPasswordComponent
        error={error}
        completed={completed}
        images={images}
        onBackToLogin={onBackToLogin}
        onSubmit={onSubmit}
        onGoogleLogin={onGoogleLogin}
        color={color}
        secondaryColor={secondaryColor}
        otherLoginsColor={otherLoginsColor}
        {...props}
      />
    </AuthPage>
  );
};
