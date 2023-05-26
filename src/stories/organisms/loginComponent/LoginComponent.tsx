import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./loginComponent.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
import { LoginForm } from "../../molecules/loginForm/LoginForm";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";

export interface LoginComponentProps {
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
export const LoginComponent = ({
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
}: LoginComponentProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className={styles["login-component--container"]}>
      <Box
        className={styles["login-component--left-container"]}
        width={`${observer.width + 2}px`}
      >
        <Icon icon="pa-ca" size="70px" />

        <Box className={styles["login-component--content"]}>
          <Box className={styles["login-component--title"]}>
            <Text weight="700" type="h2">
              Iniciar Sesión
            </Text>
          </Box>
          <Box className={styles["login-component--subtitle"]}>
            <Text color="#4D594D" weight="400">
              Este es un texto chido
            </Text>
          </Box>

          <LoginForm
            error={error}
            onLogin={onLogin}
            onForgotClick={onForgotClick}
            onSignUp={onSignUp}
            onGoogleSignUp={onGoogleSignUp}
            color={color}
            secondaryColor={secondaryColor}
            otherLoginsColor={otherLoginsColor}
          />
        </Box>
      </Box>

      <Box innerRef={observer.ref}>
        <ImagesCarousel
          images={images}
          width={`${observer.width + 2}px`}
          color={color}
        />
      </Box>
    </Box>
  );
};
