import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";
import styles from "./recoverPasswordForm.module.scss";
import useWindowResize from "../../hooks/useWindowResize";
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
  const window = useWindowResize();

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
            inputTextStyles["input-text--message-container"] +
            " " +
            inputTextStyles[
              error
                ? "input-text--message-animation"
                : "input-text--message-no-animation"
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
              <Text type="h7" errorStyle>
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
              <Text primaryButtonStyle type="h5" weight="600">
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
            {window.resolutionType === "desktop" ? "O" : "O inicia sesión con"}
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className={styles["recover-password-form--other-logins-container"]}>
        <Box
          className={styles["recover-password-form--other-login"]}
        >
          <Button
            fullWidth
            size="large"
            primary={false}
            onClick={onGoogleLogin}
            className={styles["recover-password-form--other-login-button"]}
          >
            <Box
              className={styles["recover-password-form--other-login-button-sub-container"]}
            >
              <Icon icon="google" size="24px" />
              <Text
                className={styles["recover-password-form--other-login-text"]}
              >
                {" "}
                &nbsp;&nbsp;&nbsp;Inicia Sesión con Google{" "}
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
