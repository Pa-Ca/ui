import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./loginForm.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import inputTextStyles from "../inputText/inputText.module.scss";

interface LoginFormProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * On login button click
   */
  onLogin: (email: string, password: string) => void;
  /**
   * On forgot password click
   */
  onForgotClick: () => void;
  /**
   * On sign up click
   */
  onSignUp: () => void;
  /**
   * On sign up using Google click
   */
  onGoogleSignUp: () => void;
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
export const LoginForm = ({
  error,
  onLogin,
  onForgotClick,
  onSignUp,
  onGoogleSignUp,
  width,
  height,
  ...props
}: LoginFormProps) => {
  const email = useInputForm("");
  const window = useWindowResize();
  const password = useInputForm("");

  return (
    <Box className={styles["login-form--container"]} style={{ width, height }}>
      <Box className={styles["login-form--content"]}>
        <Box className={styles["login-form--input"]}>
          <InputText inputHook={email} label="Correo" />
        </Box>
        <Box className={styles["login-form--input"]}>
          <InputText
            type="password"
            inputHook={password}
            label="Contraseña"
            showError={false}
          />
        </Box>
        <Box className={styles["login-form--login-options"]}>
          <Box
            className={styles["login-form--pointer"]}
            onClick={onForgotClick}
          >
            <Text weight="500" type="h6" hyperlinkStyle>
              Olvidé mi contraseña
            </Text>
          </Box>
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
              <Text type="h7" errorStyle>
                Credenciales inválidas, inténtelo de nuevo.
              </Text>
            </>
          )}
        </Box>
      </Box>

      <Box className={styles["login-form--input"]}>
        <Button
          fullWidth
          primary
          size="large"
          onClick={() => onLogin(email.value, password.value)}
        >
          <Box className={styles["login-form--button-text"]}>
            <Text primaryButtonStyle type="h5" weight="600">
              Iniciar Sesión
            </Text>
          </Box>
        </Button>
      </Box>

      <Box className={styles["login-form--sign-in"]}>
        <Text highlightStyle type="h6">
          {" "}
          ¿No tiene una cuenta aún?{" "}
        </Text>
        <Box className={styles["login-form--pointer"]} onClick={onSignUp}>
          <Text hyperlinkStyle type="h6" weight="600">
            &nbsp;Regístrate
          </Text>
        </Box>
      </Box>

      <Box className={styles["login-form--login-with"]}>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className={styles["login-form--login-with-text"]}>
          <Text weight="400" type="h6" color="#889188">
            {window.resolutionType === "desktop" ? "O" : "O inicia sesión con"}
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className={styles["login-form--other-logins-container"]}>
        <Box className={styles["login-form--other-login"]}>
          <Button
            fullWidth
            size="large"
            primary={false}
            onClick={onGoogleSignUp}
            className={styles["login-form--other-login-button"]}
          >
              <Box className={styles["login-form--other-login-button-sub-container"]}>
                <Icon icon="google" size="24px" />
                <Text className={styles["login-form--other-login-text"]}>
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
