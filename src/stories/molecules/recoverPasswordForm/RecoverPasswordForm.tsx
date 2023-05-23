import React from "react";
import "./recoverPasswordForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";

const styles = require("../../assets/scss/variables.module.scss").default;

interface RecoverPasswordFormProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
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
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const RecoverPasswordForm = ({
  error,
  onSubmit,
  onGoogleLogin,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: RecoverPasswordFormProps) => {
  const email = useInputForm("");

  return (
    <Box className="recover-password-form--container" style={{ width, height }}>
      <Box className="recover-password-form--content">
        <Box>
          <InputText inputHook={email} label="Correo" />
        </Box>

        <Box
          className={
            "input-text--error-container " +
            (error
              ? "input-text--error-animation"
              : "input-text--error-no-animation")
          }
        >
          {error && (
            <>
              <Icon icon="alert" color={styles.errorColor} size="20px" />
              <Box style={{ width: "10px" }} />
              <Text type="h6" color={styles.errorColor}>
                Credenciales inválidas, inténtelo de nuevo.
              </Text>
            </>
          )}
        </Box>

        <Box className="recover-password-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={() => onSubmit(email.value)}
          >
            <Box className="recover-password-form--button-text">
              <Text color="white" type="h6" weight="600">
                Enviar
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box className="recover-password-form--login-with">
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className="recover-password-form--login-with-text">
          <Text weight="400" type="h6" color="#889188">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box
        className="recover-password-form--other-logins-container"
        height="100%"
      >
        <Box className="recover-password-form--other-login" width="100%">
          <Button
            primary={false}
            borderColor={otherLoginsColor}
            fullWidth
            size="large"
            onClick={onGoogleLogin}
          >
            <Box
              className="recover-password-form--other-logins-container"
              width="100%"
            >
              <Box className="recover-password-form--other-login-button">
                <Icon icon="google" size="24px" />
                <Text> &nbsp;&nbsp;&nbsp;Inicia Sesión con Google </Text>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
