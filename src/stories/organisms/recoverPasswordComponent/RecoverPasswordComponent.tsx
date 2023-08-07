import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import useWindowResize from "../../hooks/useWindowResize";
import styles from "./recoverPasswordComponent.module.scss";
import useThemeProvider from "../../hooks/useThemeProvider";
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
  height,
  width,
  ...props
}: RecoverPasswordComponentProps) => {
  const window = useWindowResize();
  const { isDarkMode } = useThemeProvider();

  return (
    <Box
      className={styles["recover-password-component--container"]}
      style={{ width, height }}
    >
      <Box className={styles["recover-password-component--left-container"]}>
        <Box className={styles["recover-password-component--content"]}>
          <Box className={styles["recover-password-component--header"]}>
            <Box width="24px" />
            <Box className={styles["recover-password-component--logo"]}>
              <Icon
                icon="pa-ca"
                size="70px"
                color={isDarkMode ? "white" : undefined}
              />
            </Box>
            <Box
              className={styles["recover-password-component--back-to-login"]}
              onClick={onBackToLogin}
            >
              <Icon
                icon="left"
                className={styles["recover-password-component--back-icon"]}
                size={window.resolutionType === "desktop" ? "18px" : "24px"}
              />
              {window.resolutionType === "desktop" && (
                <>
                  <Box width="5px" />
                  <Text weight="400">Regresar</Text>
                </>
              )}
            </Box>
          </Box>

          {!completed ? (
            <Box className={styles["recover-password-component--form"]}>
              <Box className={styles["recover-password-component--title"]}>
                <Text
                  weight="700"
                  type={window.resolutionType === "desktop" ? "h3" : "h3"}
                >
                  ¿Olvidaste tu contraseña?
                </Text>
              </Box>
              <Box className={styles["recover-password-component--subtitle"]}>
                <Text weight="400" type="h6">
                  Ingresa tu correo abajo para recuperar tu contraseña.
                </Text>
              </Box>

              <RecoverPasswordForm
                height="100%"
                width="100%"
                error={error}
                onSubmit={onSubmit}
                onGoogleLogin={onGoogleLogin}
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
        <ImagesCarousel images={images} width="100%" height="100%" />
      </Box>
    </Box>
  );
};
