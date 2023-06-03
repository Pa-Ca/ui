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
                color={styleVariables.errorColor}
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
            backgroundColor={color}
            onClick={() => onSubmit(email.value)}
          >
            <Box className={styles["recover-password-form--button-text"]}>
              <Text color="white" type="h5" weight="600">
                Enviar
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box className={styles["recover-password-form--login-with"]}>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className={styles["recover-password-form--login-with-text"]}>
          <Text weight="400" type="h6" color="#889188">
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
            borderColor={otherLoginsColor}
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
