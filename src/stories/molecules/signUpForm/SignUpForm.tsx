import React, { useState } from "react";
import "./SignUpForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";
import styles from "../../assets/scss/variables.module.scss";

export interface SignUpFormProps {
  /**
   * Indicates if there is an error with the client first name
   */
  firstNameError?: boolean;
  /**
   * Indicates if there is an error with the client last name
   */
  lastNameError?: boolean;
  /**
   * Indicates if there is an error with the business name
   */
  nameError?: boolean;
  /**
   * Indicates if there is an error with the email
   */
  emailError?: boolean;
  /**
   * Indicates if there is an error with the client phone number
   */
  phoneError?: boolean;
  /**
   * Indicates if there is an error with the password
   */
  passwordError?: boolean;
  /**
   * Message displayed if there is an error with the client first name
   */
  firstNameErrorMessage?: string;
  /**
   * Message displayed if there is an error with the client last name
   */
  lastNameErrorMessage?: string;
  /**
   * Message displayed if there is an error with the business name
   */
  nameErrorMessage?: string;
  /**
   * Message displayed if there is an error with the email
   */
  emailErrorMessage?: string;
  /**
   * Message displayed if there is an error with the client phone number
   */
  phoneErrorMessage?: string;
  /**
   * Message displayed if there is an error with the password
   */
  passwordErrorMessage?: string;
  /**
   * Indicate if the client data is valid
   */
  validateClientData?: (
    name: string,
    surname: string,
    email: string,
    phone: string,
    password: string
  ) => boolean;
  /**
   * On business sign up click
   */
  validateBusinessData?: (
    name: string,
    email: string,
    password: string
  ) => boolean;
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
  onClientSignUp?: (
    name: string,
    surname: string,
    email: string,
    phone: string,
    password: string
  ) => void;
  /**
   * On business sign up click
   */
  onBusinessSignUp?: (name: string, email: string, password: string) => void;
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
  firstNameError = false,
  lastNameError = false,
  nameError = false,
  emailError = false,
  phoneError = false,
  passwordError = false,
  firstNameErrorMessage = "",
  lastNameErrorMessage = "",
  nameErrorMessage = "",
  emailErrorMessage = "",
  phoneErrorMessage = "",
  passwordErrorMessage = "",
  validateClientData = () => true,
  validateBusinessData = () => true,
  onLogin,
  onTermsAndConditionsClick,
  onClientSignUp = () => {},
  onBusinessSignUp = () => {},
  onGoogleSignUp,
  business = false,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: SignUpFormProps) => {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [termsAndConditionsError, setTermsAndConditionsError] = useState(false);

  // User data
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Client data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // Business data
  const [name, setName] = useState("");

  const submit = () => {
    let error = false;

    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      error = true;
    } else {
      setConfirmPasswordError(false);
    }

    if (!terms) {
      setTermsAndConditionsError(true);
      error = true;
    } else {
      setTermsAndConditionsError(false);
    }

    if (business && !validateBusinessData(name, email, password)) {
      error = true;
    }

    if (
      !business &&
      !validateClientData(firstName, lastName, email, phone, password)
    ) {
      error = true;
    }

    if (error) return;

    if (business) {
      onBusinessSignUp(name, email, password);
    } else {
      onClientSignUp(firstName, lastName, email, phone, password);
    }
  };

  return (
    <Box className="sign-up-form--container" style={{ width, height }}>
      <Box className="sign-up-form--content">
        {business ? (
          <Box className="two-inputs-box">
            <Box className="sign-up-form--input">
              <InputText
                value={name}
                setValue={setName}
                label="Nombre"
                error={nameError}
                errorMessage={nameErrorMessage}
              />
            </Box>
            <Box className="sign-up-form--input">
              <InputText
                value={email}
                setValue={setEmail}
                label="Correo"
                error={emailError}
                errorMessage={emailErrorMessage}
              />
            </Box>
          </Box>
        ) : (
          <Box className="two-inputs-box">
            <Box className="sign-up-form--input">
              <InputText
                value={firstName}
                setValue={setFirstName}
                label="Nombre"
                error={firstNameError}
                errorMessage={firstNameErrorMessage}
              />
            </Box>
            <Box className="sign-up-form--input">
              <InputText
                value={lastName}
                setValue={setLastName}
                label="Apellido"
                error={lastNameError}
                errorMessage={lastNameErrorMessage}
              />
            </Box>
          </Box>
        )}

        {!business && (
          <Box className="two-inputs-box">
            <Box className="sign-up-form--input">
              <InputText
                value={email}
                setValue={setEmail}
                label="Correo"
                error={emailError}
                errorMessage={emailErrorMessage}
              />
            </Box>
            <Box className="sign-up-form--input">
              <InputText
                value={phone}
                setValue={setPhone}
                label="Teléfono"
                error={phoneError}
                errorMessage={phoneErrorMessage}
              />
            </Box>
          </Box>
        )}

        <Box className="sign-up-form--input">
          <InputText
            type="password"
            value={password}
            setValue={setPassword}
            label="Contraseña"
            error={passwordError}
            errorMessage={passwordErrorMessage}
          />
        </Box>

        <Box className="sign-up-form--input">
          <InputText
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            label="Confirmar contraseña"
            error={confirmPasswordError}
            errorMessage={"Las contraseñas no coinciden ¡Inténtalo de nuevo!"}
          />
        </Box>

        <Box className="sign-up-form--input">
          <Box className="terms-input-container">
            <Box className="terms-input-box">
              <Box
                className="sign-up-form--pointer"
                onClick={() => setTerms((oldTerms) => !oldTerms)}
              >
                <Icon icon={terms ? "checkbox" : "uncheckbox"} size="24px" />
              </Box>
              <Box width="8px" />
              <Text weight="500" type="h6" color="#112211">
                Acepto todos los
              </Text>
              <Box
                className="sign-up-form--pointer"
                onClick={onTermsAndConditionsClick}
              >
                <Text color={secondaryColor} type="h6" weight="600">
                  &nbsp;Términos y Condiciones
                </Text>
              </Box>
            </Box>
            <Box className="input-text--error-container">
              {termsAndConditionsError && (
                <>
                  <Icon icon="alert" color={styles.errorColor} size="20px" />
                  <Box style={{ width: "10px" }} />
                  <Text type="h6" color={styles.errorColor}>
                    Por favor acepte los Términos y Condiciones
                  </Text>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box className="sign-up-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={() => submit()}
          >
            <Box className="sign-up-form--button-text">
              <Text color="white" type="h6" weight="600">
                Crear una Cuenta
              </Text>
            </Box>
          </Button>
        </Box>

        <Box className="sign-up-form--sign-in">
          <Text color="#112211" type="h6">
            {" "}
            ¿Ya tiene una cuenta?{" "}
          </Text>
          <Box className="sign-up-form--pointer" onClick={onLogin}>
            <Text color={secondaryColor} type="h6" weight="600">
              &nbsp;Inicia Sesión
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="sign-up-form--login-with">
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
        <Box className="sign-up-form--login-with-text">
          <Text weight="400" type="h6" color="#889188">
            Ó
          </Text>
        </Box>
        <Box height="0.5px" backgroundColor="#889188" style={{ flex: 1 }} />
      </Box>

      <Box className="sign-up-form--other-logins-container" height="100%">
        <Box className="sign-up-form--other-login" width="100%">
          <Button
            primary={false}
            borderColor={otherLoginsColor}
            fullWidth
            size="large"
            onClick={onGoogleSignUp}
          >
            <Box className="sign-up-form--other-logins-container" width="100%">
              <Box className="sign-up-form--other-login-button">
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
