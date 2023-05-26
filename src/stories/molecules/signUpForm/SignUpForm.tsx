import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./signUpForm.module.scss";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import inputTextStyles from "../inputText/inputText.module.scss";
import styleVariables from "../../assets/scss/variables.module.scss";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";

export interface SignUpFormProps {
  /**
   * Client first name input hook
   */
  firstName?: InputFormHook<string>;
  /**
   * Client last name input hook
   */
  lastName?: InputFormHook<string>;
  /**
   * Business name input hook
   */
  businessName?: InputFormHook<string>;
  /**
   * Email input hook
   */
  email?: InputFormHook<string>;
  /**
   * Phone input hook
   */
  phone?: InputFormHook<string>;
  /**
   * Password input hook
   */
  password?: InputFormHook<string>;

  /**
   * Indicate if the client data is valid
   */
  validateClientData?: () => boolean;
  /**
   * On business sign up click
   */
  validateBusinessData?: () => boolean;
  /**
   * On login button click
   */
  onLogin: () => void;
  /**
   * On termas and conditions click
   */
  onTermsAndConditionsClick: () => void;
  /**
   * On client sign up click
   */
  onClientSignUp?: () => void;
  /**
   * On business sign up click
   */
  onBusinessSignUp?: () => void;
  /**
   * On sign up using Google click
   */
  onGoogleSignUp: () => void;

  /**
   * Indicates if the user to register is a business. Otherwise, it will
   * be considered a client
   */
  business?: boolean;
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
export const SignUpForm = ({
  firstName,
  lastName,
  businessName,
  email,
  phone,
  password,

  validateClientData = () => true,
  validateBusinessData = () => true,
  onLogin = () => {},
  onTermsAndConditionsClick,
  onClientSignUp = () => {},
  onBusinessSignUp = () => {},
  onGoogleSignUp = () => {},

  business = false,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: SignUpFormProps) => {
  const terms = useInputForm<boolean>(
    false,
    "Por favor acepte los Términos y Condiciones"
  );
  const confirmPassword = useInputForm<string>(
    "",
    "Las contraseñas no coinciden ¡Inténtalo de nuevo!"
  );

  const submit = () => {
    let error = false;

    if (confirmPassword.value !== password!.value) {
      confirmPassword.setError(1);
      error = true;
    } else {
      confirmPassword.setError(0);
    }

    if (!terms.value) {
      terms.setError(1);
      error = true;
    } else {
      terms.setError(0);
    }

    if (business && !validateBusinessData()) {
      error = true;
    }

    if (!business && !validateClientData()) {
      error = true;
    }

    if (error) return;

    if (business) {
      onBusinessSignUp();
    } else {
      onClientSignUp();
    }
  };

  return (
    <Box
      className={styles["sign-up-form--container"]}
      style={{ width, height }}
    >
      <Box className={styles["sign-up-form--content"]}>
        {business ? (
          <Box className={styles["sign-up-form--two-inputs-box"]}>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={businessName!} label="Nombre" />
            </Box>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={email!} label="Correo" />
            </Box>
          </Box>
        ) : (
          <Box className={styles["sign-up-form--two-inputs-box"]}>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={firstName!} label="Nombre" />
            </Box>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={lastName!} label="Apellido" />
            </Box>
          </Box>
        )}

        {!business && (
          <Box className={styles["sign-up-form--two-inputs-box"]}>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={email!} label="Correo" />
            </Box>
            <Box className={styles["sign-up-form--input"]}>
              <InputText inputHook={phone!} label="Teléfono" />
            </Box>
          </Box>
        )}

        <Box className={styles["sign-up-form--input"]}>
          <InputText type="password" inputHook={password!} label="Contraseña" />
        </Box>

        <Box className={styles["sign-up-form--input"]}>
          <InputText
            type="password"
            inputHook={confirmPassword}
            label="Confirmar contraseña"
          />
        </Box>

        <Box className={styles["sign-up-form--input"]}>
          <Box className={styles["sign-up-form--terms-input-container"]}>
            <Box className={styles["sign-up-form--terms-input-box"]}>
              <Box
                className={styles["sign-up-form--pointer"]}
                onClick={() => terms.setValue((check) => !check)}
              >
                <Icon
                  icon={terms.value ? "checkbox" : "uncheckbox"}
                  size="24px"
                />
              </Box>
              <Box width="8px" />
              <Text weight="500" type="h6" color="#112211">
                Acepto todos los
              </Text>
              <Box
                className={styles["sign-up-form--pointer"]}
                onClick={onTermsAndConditionsClick}
              >
                <Text color={secondaryColor} type="h6" weight="600">
                  &nbsp;Términos y Condiciones
                </Text>
              </Box>
            </Box>
            <Box
              className={
                inputTextStyles["input-text--error-container"] +
                " " +
                inputTextStyles[
                  terms.error == 1
                    ? "input-text--error-animation"
                    : "input-text--error-no-animation"
                ]
              }
            >
              {terms.error == 1 && (
                <>
                  <Icon
                    icon="alert"
                    color={styleVariables.errorColor}
                    size="20px"
                  />
                  <Box style={{ width: "10px" }} />
                  <Text type="h6" color={styleVariables.errorColor}>
                    Por favor acepte los Términos y Condiciones
                  </Text>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box className={styles["sign-up-form--input"]}>
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={() => submit()}
          >
            <Box className={styles["sign-up-form--button-text"]}>
              <Text color="white" type="h6" weight="600">
                Crear una Cuenta
              </Text>
            </Box>
          </Button>
        </Box>

        <Box className={styles["sign-up-form--sign-in"]}>
          <Text color="#112211" type="h6">
            {" "}
            ¿Ya tiene una cuenta?{" "}
          </Text>
          <Box className={styles["sign-up-form--pointer"]} onClick={onLogin}>
            <Text color={secondaryColor} type="h6" weight="600">
              &nbsp;Inicia Sesión
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles["sign-up-form--login-with"]}>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className={styles["sign-up-form--login-with-text"]}>
          <Text weight="400" type="h6" color="#889188">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box
        className={styles["sign-up-form--other-logins-container"]}
        height="100%"
      >
        <Box className={styles["sign-up-form--other-login"]} width="100%">
          <Button
            primary={false}
            borderColor={otherLoginsColor}
            fullWidth
            size="large"
            onClick={onGoogleSignUp}
          >
            <Box
              className={styles["sign-up-form--other-logins-container"]}
              width="100%"
            >
              <Box className={styles["sign-up-form--other-login-button"]}>
                <Icon icon="google" size="24px" />
                <Text> &nbsp;&nbsp;&nbsp;Registrate con Google </Text>
              </Box>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
