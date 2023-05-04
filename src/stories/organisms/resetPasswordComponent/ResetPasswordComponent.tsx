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
  onSubmit: (email: string) => void;
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
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className="reset-password-component--container">
      <Box
        className="reset-password-component--left-container"
        width={`${observer.width + 2}px`}
      >
        <Icon icon="pa-ca" size="70px" />

        <Box className="reset-password-component--content" style={{ paddingRight: completed ? "0" : "100px" }}>
          <Box
            className="reset-password-component--back-to-login"
            onClick={onBackToLogin}
          >
            <Icon icon="left" size="18px" />
            <Box width="5px" />
            <Text weight="400">Iniciar sesión</Text>
          </Box>

          {!completed ? (
            <Box className="reset-password-component--form">
              <Box className="reset-password-component--title">
                <Text weight="700" type="h2">
                  Cambiar contraseña
                </Text>
              </Box>
              <Box className="reset-password-component--subtitle">
                <Text color="#4D594D" weight="400"></Text>
              </Box>

              <ResetPasswordForm
                error={error}
                onSubmit={onSubmit}
                color={color}
                secondaryColor={secondaryColor}
              />
            </Box>
          ) : (
            <Box className="reset-password-component--password-changed">
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
