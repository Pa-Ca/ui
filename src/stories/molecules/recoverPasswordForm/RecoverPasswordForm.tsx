import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";
import styles from "./recoverPasswordForm.module.scss";
import inputTextStyles from "../inputText/inputText.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";

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
  width,
  height,
  ...props
}: RecoverPasswordFormProps) => {
  const email = useInputForm("");

  return (
    <Box
      className={styles["recover-password-form--container"]}
      style={{ width, height }}
    >
      <Box className={styles["recover-password-form--content"]}>
        <Box>
          <InputText inputHook={email} label="Correo" />
        </Box>

        <Box
          className={
            inputTextStyles["input-text--error-container"] +
            " " +
            inputTextStyles[
              error
                ? "input-text--error-animation"
                : "input-text--error-no-animation"
            ]
          }
        >
          {error && (
            <>
              <Icon
                icon="alert"
                errorStyle
                size="20px"
              />
              <Box style={{ width: "10px" }} />
              <Text type="h7" color={styleVariables.errorColor}>
                Credenciales inválidas, inténtelo de nuevo.
              </Text>
            </>
          )}
        </Box>

        <Box className={styles["recover-password-form--input"]}>
          <Button
            fullWidth
            primary
            size="large"
            onClick={() => onSubmit(email.value)}
          >
            <Box className={styles["recover-password-form--button-text"]}>
              <Text buttonText type="h6" weight="600">
                Enviar
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box className={styles["recover-password-form--login-with"]}>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className={styles["recover-password-form--login-with-text"]}>
          <Text weight="400" type="h6">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className={styles["recover-password-form--other-logins-container"]}>
        <Box
          className={styles["recover-password-form--other-login"]}
          width="100%"
        >
          <Button
            primary={false}
            fullWidth
            size="large"
            onClick={onGoogleLogin}
          >
            <Box
              className={
                styles["recover-password-form--other-logins-container"]
              }
              width="100%"
            >
              <Box
                className={styles["recover-password-form--other-login-button"]}
              >
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
