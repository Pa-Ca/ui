import React, { useState } from "react";
import "./businessAccountInfo.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { InputText } from "../../molecules/inputText/InputText";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";

interface BusinessAccountInfoProps {
  /**
   * Current business name
   */
  currentName: string;
  /**
   * Current business email
   */
  currentEmail: string;
  /**
   * Current business phone number
   */
  currentPhoneNumber: string;
  /**
   * Indicates if there is an error with the current password
   */
  currentPasswordError: boolean;
  /**
   * Indicates if there is an error with the new password
   */
  passwordError: boolean;
  /**
   * Message displayed if there is an error with the password
   */
  passwordErrorMessage?: string;
  /**
   * Function that validates the current password
   */
  validateCurrentPassword: (currentPassword: string) => boolean;
  /**
   * Function that changes the user's password
   */
  onChangePassword: (newPassword: string) => void;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BusinessAccountInfo = ({
  currentName,
  currentEmail,
  currentPhoneNumber,
  currentPasswordError = false,
  passwordError = false,
  passwordErrorMessage = "",
  validateCurrentPassword,
  onChangePassword,
  color,
  ...props
}: BusinessAccountInfoProps) => {
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const submit = () => {
    let error = false;

    if (confirmPassword !== newPassword) {
      setConfirmPasswordError(true);
      error = true;
    } else {
      setConfirmPasswordError(false);
    }

    if (!validateCurrentPassword(newPassword)) {
      error = true;
    }

    if (error) return;

    onChangePassword(newPassword);
  };

  return (
    <Box className="business-account-info--container">
      <Text type="h3" weight="700">
        Cuenta
      </Text>

      <Box className="business-account-info--data-container">
        <Box className="business-account-info--input-container">
          <Text color="#112211" weight="400">
            Nombre Local
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            currentValue={name}
            editable
            saveValueFunction={(value: string) => setName(value)}
            type="text"
          />
        </Box>

        <Box className="business-account-info--input-container">
          <Text color="#112211" weight="400">
            Email
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            currentValue={email}
            editable={false}
            saveValueFunction={(value: string) => setEmail(value)}
            type="email"
          />
        </Box>

        <Box className="business-account-info--input-container">
          <Text color="#112211" weight="400">
            Número de teléfono
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            currentValue={phoneNumber}
            editable={true}
            saveValueFunction={(value: string) => setPhoneNumber(value)}
            type="phoneNumber"
          />
        </Box>

        <Button
          primary
          backgroundColor={color}
          onClick={() => setChangePassword(true)}
        >
          <Text weight="400">Cambiar contraseña</Text>
        </Button>
      </Box>

      <Modal open={changePassword} setOpen={setChangePassword}>
        <Box className="business-account-info--modal-title">
          <Text type="h5" weight="700">
            Cambiar contraseña
          </Text>

          <Box
            className="business-account-info--modal-cancel"
            onClick={() => setChangePassword(false)}
          >
            <Icon icon="cancel" size="25px" />
          </Box>
        </Box>

        <InputText
          width="600px"
          value={currentPassword}
          setValue={setCurrentPassword}
          label="Contraseña actual"
          error={currentPasswordError}
          errorMessage="La contraseña actual indicada es incorrecta."
        />

        <InputText
          width="600px"
          value={newPassword}
          setValue={setNewPassword}
          label="Contraseña nueva"
          error={currentPasswordError}
          errorMessage={passwordErrorMessage}
        />

        <InputText
          width="600px"
          value={confirmPassword}
          setValue={setConfirmPassword}
          label="Repetir contraseña nueva"
          error={confirmPasswordError}
          errorMessage="Las contraseñas no coinciden ¡Inténtalo de nuevo!"
        />

        <Box height="20px" />

        <Button fullWidth primary onClick={submit} backgroundColor={color}>
          <Box className="business-account-info--modal-change-password-button">
            <Text type="h6" weight="600">
              Cambiar contraseña
            </Text>
          </Box>
        </Button>
      </Modal>
    </Box>
  );
};
