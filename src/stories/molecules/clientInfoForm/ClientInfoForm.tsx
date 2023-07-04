import React, { useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./clientInfoForm.module.scss";
import { InputText } from "../inputText/InputText";
import { Button } from "../../atoms/button/Button";
import { InputFormHook } from "../../hooks/useInputForm";
import { InputTextSelect } from "../inputTextSelect/InputTextSelect";
import OptionObject from "../../utils/objects/OptionObject";

export interface ClientInfoFormProps {
  /**
   * Identity document options Option Object
   */
  identityDocumentTypeOpt?: OptionObject<string>[];
  /**
   * Identity document options input hook
   */
  identityDocumentType: InputFormHook<OptionObject<string | null>>;
  /**
   * Identity document input hook
   */
  identityDocument: InputFormHook<string>;
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
   * Get Guest fuction
   */
  onGetGuest: () => void;
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
  identityDocumentTypeOpt = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ],
  identityDocumentType,
  identityDocument,
  firstName,
  lastName,
  email,
  phone,
  formTitle = "Datos Personales",
  onGetGuest,
  width,
  height,
  ...props
}: ClientInfoFormProps) => {
  const [activeInputs, setActiveInputs] = useState(false);
  return (
    <Box className={styles["client-info-form--container"]} style={{ width, height }}>
      <Box className={styles["client-info-form--content"]}>
        <Box className={styles["client-info-form--title"]}>
          <Text type="h4"  weight="700">
            {formTitle}
          </Text>
        </Box>
        <Box className={styles["client-info-form-inputs-box"]}>
          <InputTextSelect
            required
            inputHookText={identityDocument}
            inputHookSelect={identityDocumentType}
            inputHookSelectOptions={identityDocumentTypeOpt}
            label="Documento de Identidad" 
          />
          <Button
            fullWidth
            primary
            size="medium"
            onClick={() => {setActiveInputs(true); onGetGuest()}}
            className={
              styles["client-info--submit-reservation--button-text"]
            }
          >
            <Text primaryButtonStyle type="h6" weight="600">
              Obtener Usuario
            </Text>
          </Button>
          { activeInputs && <Box>
            <InputText required inputHook={firstName} label="Nombre" />
            </Box>
          }
          { activeInputs && <Box>
            <InputText required inputHook={lastName} label="Apellido" />
            </Box>
          }
          { activeInputs && <Box>
            <InputText required inputHook={email} label="Correo" />
            </Box>
          }
          { activeInputs && <Box>
            <InputText required inputHook={phone} label="Teléfono" placeholder="+58 4240000000 | 04240000000" />
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};
