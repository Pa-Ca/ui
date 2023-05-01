import React, { useState } from "react";
import "./resetPasswordForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import styles from "../../assets/scss/variables.module.scss";

interface ResetPasswordFormProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * Indicates if there is an error with the password
   */
  passwordError?: boolean;
  /**
   * Message displayed if there is an error with the password
   */
  passwordErrorMessage?: string;
  /**
   * On submit button click
   */
  onSubmit: (password: string) => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
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
export const ResetPasswordForm = ({
  error = false,
  passwordError = false,
  passwordErrorMessage = "",
  onSubmit,
  color,
  secondaryColor,
  width,
  height,
  ...props
}: ResetPasswordFormProps) => {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // User data
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = () => {
    let error = false;

    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      error = true;
    } else {
      setConfirmPasswordError(false);
    }

    if (error) return;

    onSubmit(password);
  };

  return (
    <Box className="reset-password-form--container" style={{ width, height }}>
      <Box className="reset-password-form--content">
        <Box className="reset-password-form--input">
          <InputText
            type="password"
            value={password}
            setValue={setPassword}
            label="Contraseña"
            error={passwordError}
            errorMessage={passwordErrorMessage}
          />
        </Box>

        <Box className="reset-password-form--input">
          <InputText
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            label="Confirmar contraseña"
            error={confirmPasswordError}
            errorMessage={"Las contraseñas no coinciden ¡Inténtalo de nuevo!"}
          />
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
        <Box className="reset-password-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={submit}
          >
            <Box className="reset-password-form--button-text">
              <Text color="white" type="h6" weight="600">
                Cambiar contraseña
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
