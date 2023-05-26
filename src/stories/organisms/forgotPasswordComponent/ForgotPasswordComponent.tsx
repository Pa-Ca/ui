import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./forgotPasswordComponent.module.scss";
import useResizeObserver from "../../hooks/useResizeObserver";
import { ImagesCarousel } from "../../molecules/imagesCarousel/ImagesCarousel";
import { ForgotPasswordForm } from "../../molecules/forgotPasswordForm/ForgotPasswordForm";

export interface ForgotPasswordComponentProps {
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
  onSubmit: (email: string) => void;
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
export const ForgotPasswordComponent = ({
  error = false,
  images = [],
  onSubmit,
  onGoogleSignUp,
  color,
  secondaryColor,
  otherLoginsColor,
  ...props
}: ForgotPasswordComponentProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  return (
    <Box className={styles["forgot-password-component--container"]}>
      <Box
        className={styles["forgot-password-component--left-container"]}
        width={`${observer.width + 2}px`}
      >
        <Icon icon="pa-ca" size="70px" />

        <Box className={styles["forgot-password-component--content"]}>
          <Box className={styles["forgot-password-component--title"]}>
            <Text weight="700" type="h2">
              ¿Olvidaste tu constraseña?
            </Text>
          </Box>
          <Box className={styles["forgot-password-component--subtitle"]}>
            <Text color="#4D594D" weight="400">
              No te preocupes, le pasa a cualquiera. Ingresa tu correo
              electrónico para poder recuperarla.
            </Text>
          </Box>

          <ForgotPasswordForm
            error={error}
            onSubmit={onSubmit}
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
