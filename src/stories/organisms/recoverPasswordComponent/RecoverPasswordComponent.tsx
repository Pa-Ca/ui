import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./recoverPasswordComponent.module.scss";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";
import { RecoverPasswordForm } from "../../molecules/recoverPasswordForm/RecoverPasswordForm";

export interface RecoverPasswordComponentProps {
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
export const RecoverPasswordComponent = ({
  error = false,
  completed = false,
  images = [],
  onBackToLogin,
  onSubmit,
  onGoogleLogin,
  color,
  secondaryColor,
  otherLoginsColor,
  height,
  width,
  ...props
}: RecoverPasswordComponentProps) => {
  return (
    <Box
      className={styles["recover-password-component--container"]}
      style={{ width, height }}
    >
      <Box className={styles["recover-password-component--left-container"]}>
        <Box className={styles["recover-password-component--content"]}>
          <Box className={styles["recover-password-component--header"]}>
            <Box />
            <Icon icon="pa-ca" size="70px" />
            <Box
              className={styles["recover-password-component--back-to-login"]}
              onClick={onBackToLogin}
            >
              <Icon icon="left" size="18px" />
              <Box width="5px" />
              <Text weight="400">Regresar</Text>
            </Box>
          </Box>

          {!completed ? (
            <Box className={styles["recover-password-component--form"]}>
              <Box className={styles["recover-password-component--title"]}>
                <Text weight="700" type="h3">
                  ¿Olvidaste tu contraseña?
                </Text>
              </Box>
              <Box className={styles["recover-password-component--subtitle"]}>
                <Text color="#4D594D" weight="400" type="h6">
                  No te preocupes, nos pasa a todos. Ingresa tu correo abajo
                  para recuperar tu contraseña.
                </Text>
              </Box>

              <RecoverPasswordForm
                height="100%"
                width="100%"
                error={error}
                onSubmit={onSubmit}
                onGoogleLogin={onGoogleLogin}
                color={color}
                secondaryColor={secondaryColor}
                otherLoginsColor={otherLoginsColor}
              />
            </Box>
          ) : (
            <Box className={styles["recover-password-component--email-sent"]}>
              <Icon icon="email-sent" size="300px" />

              <Box height="50px" />

              <Text type="h6">
                Te hemos enviado un email de verificación
                <br />
                Revisa tu correo para continuar con el cambio de contraseña
              </Text>
            </Box>
          )}
        </Box>
      </Box>

      <Box className={styles["recover-password-component--caroussel"]}>
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
