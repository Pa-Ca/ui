import React, { useState } from "react";
import "./SignUpForm.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { InputText } from "../inputText/InputText";

export interface SignUpFormProps {
  /**
   * On login button click
   */
  onLogin: () => void;
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
  otherLoginsColor?: string
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
}: SignUpFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  
  return (
    <Box className="sign-up-form--container" style={{ width, height }}>
      <Box className="sign-up-form--content">
        <Box className="two-inputs-box">
          <Box className="sign-up-form--input">
            <InputText value={firstName} setValue={setFirstName} label="Nombre" />
          </Box>
          <Box className="sign-up-form--input">
            <InputText value={lastName} setValue={setLastName} label="Apellido" />
          </Box>
        </Box>
        <Box className="two-inputs-box">
          <Box className="sign-up-form--input">
            <InputText value={email} setValue={setEmail} label="Correo" />
          </Box>
          <Box className="sign-up-form--input">
            <InputText value={phone} setValue={setPhone} label="Teléfono" />
          </Box>
        </Box>
        <Box className="sign-up-form--input">
          <InputText
            type="password"
            value={password}
            setValue={setPassword}
            label="Contraseña"
          />
        </Box>
        <Box className="sign-up-form--input">
          <InputText
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            label="Confirmar contraseña"
          />
        </Box>
        <Box className="sign-up-form--input">
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
            <Box className="sign-up-form--pointer" onClick={onSignUp}>
              <Text color={secondaryColor} type="h6" weight="600">
                &nbsp;Términos y Condiciones
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="sign-up-form--input">
          <Button
            fullWidth
            primary
            size="large"
            backgroundColor={color}
            onClick={onLogin}
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
          <Box className="sign-up-form--pointer" onClick={onSignUp}>
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
            <Box
              className="sign-up-form--other-logins-container"
              width="100%"
            >
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
