import React from "react";
import { InputFormHook } from "../../hooks/useInputForm";
import { AuthPage } from "../../organisms/authPage/AuthPage";
import { ResetPasswordComponent } from "../../organisms/resetPasswordComponent/ResetPasswordComponent";

interface ResetPasswordProps {
  /**
   * Password input hook
   */
  password: InputFormHook<string>;
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * Indicates if the password was changed successfully
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
  onSubmit: () => void;
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
export const ResetPassword = ({
  password,
  error = false,
  completed = false,
  images = [],
  onBackToLogin,
  onSubmit,
  color,
  secondaryColor,
  otherLoginsColor,
  ...props
}: ResetPasswordProps) => {
  return (
    <AuthPage>
      <ResetPasswordComponent
        password={password}
        error={error}
        completed={completed}
        images={images}
        onBackToLogin={onBackToLogin}
        onSubmit={onSubmit}
        color={color}
        secondaryColor={secondaryColor}
        otherLoginsColor={otherLoginsColor}
        {...props}
      />
    </AuthPage>
  );
};
