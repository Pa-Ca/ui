import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./loginComponent.module.scss";
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
   * height of the component
   */
  height?: string;
  /**
   * width of the component
   */
  width?: string;
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
  height,
  width,
  ...props
}: LoginComponentProps) => {
  return (
    <Box
      className={styles["login-component--container"]}
      style={{ height, width }}
    >
      <Box className={styles["login-component--left-container"]}>
        <Icon icon="pa-ca" size="70px" />

        <Box className={styles["login-component--title"]}>
          <Text weight="700" type="h2" primaryButtonStyle>
            Iniciar Sesión
          </Text>
        </Box>
        <Box className={styles["login-component--content"]}>
          <LoginForm
            height="100%"
            width="100%"
            error={error}
            onLogin={onLogin}
            onForgotClick={onForgotClick}
            onSignUp={onSignUp}
            onGoogleSignUp={onGoogleSignUp}
          />
        </Box>
      </Box>

      <Box className={styles["login-component--caroussel"]}>
        <ImagesCarousel
          images={images}
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};
