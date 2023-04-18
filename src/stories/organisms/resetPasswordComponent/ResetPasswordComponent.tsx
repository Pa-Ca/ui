import React from "react";
import "./resetPasswordComponent.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import useResizeObserver from "../../hooks/useResizeObserver";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";
import { ResetPasswordForm } from "../../molecules/resetPasswordForm/ResetPasswordForm";

export interface ResetPasswordComponentProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
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
  otherLoginsColor?: string
}

/**
 * Primary UI component for user interaction
 */
export const ResetPasswordComponent = ({
  error = false,
  images = [],
  onBackToLogin,
  onSubmit,
  onGoogleLogin,
  color,
  secondaryColor,
  otherLoginsColor,
  ...props
}: ResetPasswordComponentProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className="reset-password-component--container">
      <Box
        className="reset-password-component--left-container"
        width={`${observer.width + 2}px`}
      >
        <Icon icon="pa-ca" size="70px" />

        <Box className="reset-password-component--content">
          <Box className="reset-password-component--back-to-login" onClick={onBackToLogin}>
            <Icon icon="left" size="18px" />
            <Box width="5px" />
            <Text weight="400">
              Iniciar sesión
            </Text>
          </Box>
          <Box className="reset-password-component--title">
            <Text weight="700" type="h2">
              ¿Olvidaste tu contraseña?
            </Text>
          </Box>
          <Box className="reset-password-component--subtitle">
            <Text color="#4D594D" weight="400">
              No te preocupes, nos pasa a todos. Ingresa tu correo abajo para recuperar tu contraseña.
            </Text>
          </Box>

          <ResetPasswordForm
            error={error}
            onSubmit={onSubmit}
            onGoogleLogin={onGoogleLogin}
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
