import React from "react";
import "./clientInfoForm.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputText } from "../inputText/InputText";
import { InputFormHook } from "../../hooks/useInputForm";

export interface ClientInfoFormProps {
  /**
   * First name input hook
   */
  firstName: InputFormHook<string>;
  /**
   * Last name input hook
   */
  lastName: InputFormHook<string>;
  /**
   * Email input hook
   */
  email: InputFormHook<string>;
  /**
   * Phone input hook
   */
  phone: InputFormHook<string>;
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
  lastName,
  email,
  phone,
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
          <InputText inputHook={firstName} label="Nombre" />
          <InputText inputHook={lastName} label="Apellido" />
          <InputText inputHook={email} label="Correo" />
          <InputText inputHook={phone} label="Teléfono" />
        </Box>
      </Box>
    </Box>
  );
};
