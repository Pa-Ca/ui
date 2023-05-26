import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./recoverPasswordComponent.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
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
  ...props
}: RecoverPasswordComponentProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className={styles["recover-password-component--container"]}>
      <Box
        className={styles["recover-password-component--left-container"]}
        width={`${observer.width + 2}px`}
      >
        <Icon icon="pa-ca" size="70px" />

        <Box
          className={styles["recover-password-component--content"]}
          style={{ paddingRight: completed ? "0" : "100px" }}
        >
          <Box
            className={styles["recover-password-component--back-to-login"]}
            onClick={onBackToLogin}
          >
            <Icon icon="left" size="18px" />
            <Box width="5px" />
            <Text weight="400">Iniciar sesión</Text>
          </Box>

          {!completed ? (
            <Box className={styles["recover-password-component--form"]}>
              <Box className={styles["recover-password-component--title"]}>
                <Text weight="700" type="h2">
                  ¿Olvidaste tu contraseña?
                </Text>
              </Box>
              <Box className={styles["recover-password-component--subtitle"]}>
                <Text color="#4D594D" weight="400">
                  No te preocupes, nos pasa a todos. Ingresa tu correo abajo
                  para recuperar tu contraseña.
                </Text>
              </Box>

              <RecoverPasswordForm
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
