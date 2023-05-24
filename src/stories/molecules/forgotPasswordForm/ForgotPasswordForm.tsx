import React from "react";
import "./forgotPasswordForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import useInputForm from "../../hooks/useInputForm";
import styles from "../../assets/scss/variables.module.scss";

interface ForgotPasswordFormProps {
  /**
   * Indicates if there is a credencial error
   */
  error?: boolean;
  /**
   * On submit button click
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
export const ForgotPasswordForm = ({
  error,
  onSubmit,
  onGoogleSignUp,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: ForgotPasswordFormProps) => {
  const email = useInputForm("");

  return (
    <Box className="forgot-password-form--container" style={{ width, height }}>
      <Box className="forgot-password-form--content">
        
        <Box className="forgot-password-form--input-email">
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
                Correo eléctronico inválido, inténtelo de nuevo.
              </Text>
            </>
          )}
        </Box>

        <Box className="forgot-password-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={() => onSubmit(email.value)}
          >
            <Box className="forgot-password-form--button-text">
              <Text color="white" type="h6" weight="600">
                Submit
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box className="forgot-password-form--login-with">
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className="forgot-password-form--login-with-text">
          <Text weight="400" type="h6" color="#889188">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className="forgot-password-form--other-logins-container" height="100%">
        <Box className="forgot-password-form--other-login" width="100%">
          <Button
            primary={false}
            borderColor={otherLoginsColor}
            fullWidth
            size="large"
            onClick={onGoogleSignUp}
          >
            <Box className="forgot-password-form--other-logins-container" width="100%">
              <Box className="forgot-password-form--other-login-button">
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
