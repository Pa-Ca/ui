import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { InputFormHook } from "../../hooks/useInputForm";
import styles from "./resetPasswordComponent.module.scss";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";
import { ResetPasswordForm } from "../../molecules/resetPasswordForm/ResetPasswordForm";

export interface ResetPasswordComponentProps {
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
export const ResetPasswordComponent = ({
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
}: ResetPasswordComponentProps) => {
  return (
    <Box className={styles["reset-password-component--container"]}>
      <Box className={styles["reset-password-component--left-container"]}>
        <Icon icon="pa-ca" size="70px" />

        <Box
          className={styles["reset-password-component--content"]}
        >
          <Box
            className={styles["reset-password-component--back-to-login"]}
            onClick={onBackToLogin}
          >
            <Icon icon="left" size="18px" />
            <Box width="5px" />
            <Text weight="400">Iniciar sesión</Text>
          </Box>

          {!completed ? (
            <Box className={styles["reset-password-component--form"]}>
              <Box className={styles["reset-password-component--title"]}>
                <Text weight="700" type="h3">
                  Cambiar contraseña
                </Text>
              </Box>
              <Box className={styles["reset-password-component--subtitle"]}>
                <Text color="#4D594D" weight="400"></Text>
              </Box>

              <ResetPasswordForm
                height="100%"
                width="100%"
                password={password}
                error={error}
                onSubmit={onSubmit}
                color={color}
                secondaryColor={secondaryColor}
              />
            </Box>
          ) : (
            <Box
              className={styles["reset-password-component--password-changed"]}
            >
              <Icon icon="check-outline" size="300px" />

              <Box height="50px" />

              <Text type="h6">
                Tu contraseña se ha restablecido <br />
                Vuelve a Iniciar Sesión para poder acceder a tu cuenta
              </Text>
            </Box>
          )}
        </Box>
      </Box>

      <Box className={styles["reset-password-component--caroussel"]}>
        <ImagesCarousel
          images={images}
          color={color}
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};
