import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./clientInfoForm.module.scss";
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
  formTitle = "Datos Personales",
  width,
  height,
  ...props
}: ClientInfoFormProps) => {
  return (
    <Box className={styles["client-info-form--container"]} style={{ width, height }}>
      <Box className={styles["client-info-form--content"]}>
        <Box className={styles["client-info-form--title"]}>
          <Text type="h4" color="#112211" weight="700">
            {formTitle}
          </Text>
        </Box>
        <Box className={styles["client-info-form-inputs-box"]}>
          <InputText required inputHook={firstName} label="Nombre" />
          <InputText required inputHook={lastName} label="Apellido" />
          <InputText required inputHook={email} label="Correo" />
          <InputText required inputHook={phone} label="Teléfono" placeholder="+58 4240000000 | 04240000000" />
        </Box>
      </Box>
    </Box>
  );
};
