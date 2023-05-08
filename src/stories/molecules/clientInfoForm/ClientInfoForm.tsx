import React, { useState } from "react";
import "./clientInfoForm.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputText } from "../inputText/InputText";

export interface ClientInfoFormProps {
  /**
   * Client first name
   */
  firstName?: string;
  /**
   * Function that changes the first name
   */
  setFirstName?: Function;
  /**
   * Indicates if there is an error with the client first name
   */
  firstNameError?: boolean;
  /**
   * Message displayed if there is an error with the client first name
   */
  firstNameErrorMessage?: string;

  /**
   * Client last name
   */
  lastName?: string;
  /**
   * Function that changes the last name
   */
  setLastName?: Function;
  /**
   * Indicates if there is an error with the client last name
   */
  lastNameError?: boolean;
  /**
   * Message displayed if there is an error with the client last name
   */
  lastNameErrorMessage?: string;

  /**
   * Client email
   */
  email?: string;
  /**
   * Function that changes the email
   */
  setEmail?: Function;
  /**
   * Indicates if there is an error with the client email
   */
  emailError?: boolean;
  /**
   * Message displayed if there is an error with the client email
   */
  emailErrorMessage?: string;

  /**
   * Client phone
   */
  phone?: string;
  /**
   * Function that changes the phone
   */
  setPhone?: Function;
  /**
   * Indicates if there is an error with the client phone
   */
  phoneError?: boolean;
  /**
   * Message displayed if there is an error with the client phone
   */
  phoneErrorMessage?: string;

  /**
   * Form title
   */
  formTitle?: string;
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
  firstName,
  setFirstName,
  firstNameError = false,
  firstNameErrorMessage = "",

  lastName,
  setLastName,
  lastNameError = false,
  lastNameErrorMessage = "",

  email,
  setEmail,
  emailError = false,
  emailErrorMessage = "",

  phone,
  setPhone,
  phoneError = false,
  phoneErrorMessage = "",

  formTitle = "Datos Del Cliente",
  width,
  height,
  ...props
}: ClientInfoFormProps) => {

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
