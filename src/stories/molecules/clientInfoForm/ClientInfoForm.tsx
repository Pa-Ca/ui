import React, { useState } from "react";
import "./clientInfoForm.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputText } from "../inputText/InputText";

export interface ClientInfoFormProps {
  /**
   * Indicates if there is an error with the client first name
   */
  firstNameError?: boolean;
  /**
   * Indicates if there is an error with the client last name
   */
  lastNameError?: boolean;
  /**
   * Indicates if there is an error with the email
   */
  emailError?: boolean;
  /**
   * Indicates if there is an error with the client phone number
   */
  phoneError?: boolean;
  /**
   * Message displayed if there is an error with the client first name
   */
  firstNameErrorMessage?: string;
  /**
   * Message displayed if there is an error with the client last name
   */
  lastNameErrorMessage?: string;
  /**
   * Message displayed if there is an error with the email
   */
  emailErrorMessage?: string;
  /**
   * Message displayed if there is an error with the client phone number
   */
  phoneErrorMessage?: string;
  /**
   * Indicate if the client data is valid
   */
  validateClientData?: (
    name: string,
    surname: string,
    email: string,
    phone: string
  ) => boolean;
  /**
   * On client sign up click
   */
  onClientSignUp?: (
    name: string,
    surname: string,
    email: string,
    phone: string
  ) => void;
  /**
   * Form title
   */
  formTitle?: string;
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
export const ClientInfoForm = ({
  firstNameError = false,
  lastNameError = false,
  emailError = false,
  phoneError = false,
  firstNameErrorMessage = "",
  lastNameErrorMessage = "",
  emailErrorMessage = "",
  phoneErrorMessage = "",
  formTitle = "Datos Del Cliente",
  validateClientData = () => true,
  color,
  secondaryColor,
  otherLoginsColor,
  width,
  height,
  ...props
}: ClientInfoFormProps) => {
  
  // Client data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Box className="client-info-form--container" style={{ width, height }}>
      <Box className="client-info-form--content">
        <Box className="form--title">
          <Text type="h4" color="#112211" weight="700">
            {formTitle}
          </Text>
        </Box>
        <Box className="client-info-form-inputs-box">
          <InputText
            value={firstName}
            setValue={setFirstName}
            label="Nombre"
            error={firstNameError}
            errorMessage={firstNameErrorMessage}
          />
          <InputText
            value={lastName}
            setValue={setLastName}
            label="Apellido"
            error={lastNameError}
            errorMessage={lastNameErrorMessage}
          />
          <InputText
            value={email}
            setValue={setEmail}
            label="Correo"
            error={emailError}
            errorMessage={emailErrorMessage}
          />
          <InputText
            value={phone}
            setValue={setPhone}
            label="Teléfono"
            error={phoneError}
            errorMessage={phoneErrorMessage}
          />
        </Box>
      </Box>
    </Box>
  );
};
