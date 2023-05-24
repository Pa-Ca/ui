import React from "react";
import "./resetPasswordForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";

import styles from "../../assets/scss/variables.module.scss";

interface ResetPasswordFormProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * Password input hook
   */
  password: InputFormHook<string>;
  /**
   * On submit button click
   */
  onSubmit: () => void;
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
  password,
  onSubmit,
  color,
  secondaryColor,
  width,
  height,
  ...props
}: ResetPasswordFormProps) => {
  const confirmPassword = useInputForm(
    "",
    "Las contraseñas no coinciden ¡Inténtalo de nuevo!"
  );

  const submit = () => {
    let error = false;

    if (confirmPassword.value !== password.value) {
      confirmPassword.setError(1);
      error = true;
    } else {
      confirmPassword.setError(0);
    }

    if (error) return;

    onSubmit();
  };

  return (
    <Box className="reset-password-form--container" style={{ width, height }}>
      <Box className="reset-password-form--content">
        <Box className="reset-password-form--input">
          <InputText type="password" inputHook={password} label="Contraseña" />
        </Box>

        <Box className="reset-password-form--input">
          <InputText
            type="password"
            inputHook={confirmPassword}
            label="Confirmar contraseña"
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
