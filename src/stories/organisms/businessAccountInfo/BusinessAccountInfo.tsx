import React, { useEffect } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import styles from "./businessAccountInfo.module.scss";
import { InputText } from "../../molecules/inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";

interface BusinessAccountInfoProps {
  /**
   * Business name input hook
   */
  name: InputFormHook<string>;
  /**
   * Business email input hook
   */
  email: InputFormHook<string>;
  /**
   * Business phone number input hook
   */
  phoneNumber: InputFormHook<string>;
  /**
   * Business password input hook
   */
  password: InputFormHook<string>;
  /**
   * Business new password input hook
   */
  newPassword: InputFormHook<string>;
  /**
   * Indicates that the change has already been made
   */
  done: boolean;
  /**
   * Indicates that an email was sent to change the password
   */
  emailSent: boolean;
  /**
   * Indicates that the password change modal is active
   */
  changePassword: boolean;
  /**
   * Function to change the variable that indicates if the password change modal is active
   */
  setChangePassword: (value: boolean) => void;
  /**
   * Function that is executed when the name is saved
   */
  onSaveName: (value: string) => void;
  /**
   * Function that is executed when the phone number is saved
   */
  onSavePhoneNumber: (value: string) => void;
  /**
   * Function that changes the user's password
   */
  onChangePassword: () => void;
  /**
   * Function that will be executed when clicking on you forgot your password
   */
  onForgotPassword: () => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BusinessAccountInfo = ({
  name,
  email,
  phoneNumber,
  password,
  newPassword,
  done,
  emailSent,
  changePassword,
  setChangePassword,
  onSaveName,
  onSavePhoneNumber,
  onChangePassword,
  onForgotPassword,
  ...props
}: BusinessAccountInfoProps) => {
  const confirmPassword = useInputForm(
    "",
    "Las contraseñas no coinciden."
  );

  const submit = async () => {
    let error = false;

    if (confirmPassword.value !== newPassword.value) {
      confirmPassword.setError(1);
      error = true;
    } else {
      confirmPassword.setError(0);
    }

    if (error) return;

    onChangePassword();
  };

  useEffect(() => {
    confirmPassword.setValue("");
  }, [changePassword]);

  return (
    <Box className={styles["business-account-info--container"]}>
      <Text type="h3" weight="700">
        Cuenta
      </Text>

      <Box className={styles["business-account-info--data-container"]}>
        <Box className={styles["business-account-info--input-container"]}>
          <Text highlightStyle weight="400">
            Nombre Local
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            inputHook={name}
            editable
            saveValueFunction={(value: string) => onSaveName(value)}
            type="text"
          />
        </Box>

        <Box className={styles["business-account-info--input-container"]}>
          <Text highlightStyle weight="400">
            Email
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            inputHook={email}
            editable={false}
            saveValueFunction={(value: string) => {}}
            type="email"
          />
        </Box>

        <Box className={styles["business-account-info--input-container"]}>
          <Text highlightStyle weight="400">
            Número de teléfono
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            inputHook={phoneNumber}
            editable={true}
            saveValueFunction={(value: string) => onSavePhoneNumber(value)}
            type="phoneNumber"
          />
        </Box>

        <Button
          primary
          onClick={() => setChangePassword(true)}
        >
          <Text weight="400">Cambiar contraseña</Text>
        </Button>
      </Box>

      <Modal open={changePassword} setOpen={setChangePassword}>
        <Box className={styles["business-account-info--modal-title"]}>
          <Text type="h5" weight="700" color="#112211">
            Cambio de Contraseña
          </Text>
        </Box>

        <InputText
          width="410px"
          type="password"
          inputHook={password}
          label="Contraseña actual"
        />
        <Box height="10px" />

        <InputText
          width="410px"
          type="password"
          inputHook={newPassword}
          label="Contraseña nueva"
        />
        <Box height="10px" />

        <InputText
          width="410px"
          type="password"
          inputHook={confirmPassword}
          label="Repetir contraseña nueva"
        />
        <Box
          className={styles["business-account-info--forgot-password"]}
          onClick={onForgotPassword}
        >
          <Text  type="h6">
            ¿Olvidaste tu Contraseña?
          </Text>
        </Box>
        <Box height="20px">
          {emailSent && (
            <Text type="h6" color="#112211" weight="400">
              Te hemos enviado un correo para cambiar tu contraseña.
            </Text>
          )}
        </Box>

        <Box
          height="24px"
          width="100%"
          className={styles["business-account-info--modal-line"]}
        >
          <Box width="100%" height="1px" backgroundColor="#DADCDA" />
        </Box>

        <Button
          fullWidth
          primary
          onClick={submit}
          state={done ? "inactive" : "normal"}
        >
          <Box
            className={
              styles["business-account-info--modal-change-password-button"]
            }
          >
            <Text type="h6" weight="600" primaryButtonStyle>
              Cambiar contraseña
            </Text>
          </Box>
        </Button>
        <Box height="10px" />
        <Button
          fullWidth
          onClick={() => setChangePassword(false)}
        >
          <Box
            className={
              styles["business-account-info--modal-change-password-button"]
            }
          >
            <Text type="h6" weight="600">
              Cancelar
            </Text>
          </Box>
        </Button>
      </Modal>
    </Box>
  );
};
