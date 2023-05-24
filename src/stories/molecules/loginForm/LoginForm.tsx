import React from "react";
import "./loginForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";

const styles =
  require("../../assets/scss/variables.module.scss").default ??
  require("../../assets/scss/variables.module.scss");

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
export const LoginForm = ({
  error,
  onLogin,
  onForgotClick,
  onSignUp,
  onGoogleSignUp,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: LoginFormProps) => {
  const email = useInputForm("");
  const password = useInputForm("");
  const rememberMe = useInputForm(false);

  return (
    <Box className="login-form--container" style={{ width, height }}>
      <Box className="login-form--content">
        <Box className="login-form--input">
          <InputText inputHook={email} label="Correo" />
        </Box>
        <Box className="login-form--input">
          <InputText type="password" inputHook={password} label="Contraseña" />
        </Box>
        <Box className="login-form--login-options">
          <Box
            className="login-form--remember-me"
            onClick={() => rememberMe.setValue(!rememberMe.value)}
          >
            <Icon icon={rememberMe ? "checkbox" : "uncheckbox"} size="24px" />
            <Box width="8px" />
            <Text weight="500" type="h6" color="#112211">
              Recuérdame
            </Text>
          </Box>

          <Box className="login-form--pointer" onClick={onForgotClick}>
            <Text weight="500" type="h6" color={secondaryColor}>
              Olvidé mi contraseña
            </Text>
          </Box>
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

        <Box className="login-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={() => onLogin(email.value, password.value)}
          >
            <Box className="login-form--button-text">
              <Text color="white" type="h6" weight="600">
                Iniciar Sesión
              </Text>
            </Box>
          </Button>
        </Box>

        <Box className="login-form--sign-in">
          <Text color="#112211" type="h6">
            {" "}
            ¿No tiene una cuenta aún?{" "}
          </Text>
          <Box className="login-form--pointer" onClick={onSignUp}>
            <Text color={secondaryColor} type="h6" weight="600">
              &nbsp;Regístrate
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="login-form--login-with">
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className="login-form--login-with-text">
          <Text weight="400" type="h6" color="#889188">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className="login-form--other-logins-container" height="100%">
        <Box className="login-form--other-login" width="100%">
          <Button
            primary={false}
            borderColor={otherLoginsColor}
            fullWidth
            size="large"
            onClick={onGoogleSignUp}
          >
            <Box className="login-form--other-logins-container" width="100%">
              <Box className="login-form--other-login-button">
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
