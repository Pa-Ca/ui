import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import styles from "./resetPasswordForm.module.scss";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";

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
  width,
  height,
  ...props
}: ResetPasswordFormProps) => {
  const confirmPassword = useInputForm(
    "",
    "Las contraseñas no coinciden."
  );

  const submit = () => {
    let error = false;

    if (confirmPassword.value !== password.value) {
      confirmPassword.setCode(1);
      error = true;
    } else {
      confirmPassword.setCode(0);
    }

    if (error) return;

    onSubmit();
  };

  return (
    <Box
      className={styles["reset-password-form--container"]}
      style={{ width, height }}
    >
      <Box className={styles["reset-password-form--content"]}>
        <Box className={styles["reset-password-form--input"]}>
          <InputText type="password" inputHook={password} label="Contraseña" />
        </Box>

        <Box className={styles["reset-password-form--input"]}>
          <InputText
            type="password"
            inputHook={confirmPassword}
            label="Confirmar contraseña"
          />
        </Box>

        <Box
          className={
            "input-text--message-container " +
            (error
              ? "input-text--message-animation"
              : "input-text--message-no-animation")
          }
        >
          {error && (
            <>
              <Icon
                icon="alert"
                errorStyle={true}
                size="20px"
              />
              <Box style={{ width: "10px" }} />
              <Text type="h7" errorStyle={true}>
                Credenciales inválidas, inténtelo de nuevo.
              </Text>
            </>
          )}
        </Box>
        <Box className={styles["reset-password-form--button-container"]}>
          <Button
            fullWidth
            primary
            size="large"
            onClick={submit}
          >
            <Box className={styles["reset-password-form--button-text"]}>
              <Text color="white" type="h5" weight="600">
                Cambiar contraseña
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
