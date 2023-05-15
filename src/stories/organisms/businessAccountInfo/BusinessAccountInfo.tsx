import React, { useState } from "react";
import "./businessAccountInfo.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
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
  onChangePassword: () => Promise<boolean>;
  /**
   * Component main color
   */
  color?: string;
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
  onSaveName,
  onSavePhoneNumber,
  onChangePassword,
  color,
  ...props
}: BusinessAccountInfoProps) => {
  const confirmPassword = useInputForm(
    "",
    "Las contraseñas no coinciden ¡Inténtalo de nuevo!"
  );
  const [changePassword, setChangePassword] = useState(false);

  const submit = async () => {
    let error = false;

    if (confirmPassword.value !== newPassword.value) {
      confirmPassword.setError(true);
      error = true;
    } else {
      confirmPassword.setError(false);
    }

    if (error) return;

    if (!! await onChangePassword()) {
      confirmPassword.setValue("");
    };
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
            inputHook={name}
            editable
            saveValueFunction={(value: string) => onSaveName(value)}
            type="text"
            color={color}
          />
        </Box>

        <Box className="business-account-info--input-container">
          <Text color="#112211" weight="400">
            Email
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            inputHook={email}
            editable={false}
            saveValueFunction={(value: string) => {}}
            type="email"
            color={color}
          />
        </Box>

        <Box className="business-account-info--input-container">
          <Text color="#112211" weight="400">
            Número de teléfono
          </Text>

          <EditableInputText
            width="100%"
            height="100%"
            inputHook={phoneNumber}
            editable={true}
            saveValueFunction={(value: string) => onSavePhoneNumber(value)}
            type="phoneNumber"
            color={color}
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
          type="password"
          inputHook={password}
          label="Contraseña actual"
        />
        <Box height="10px" />

        <InputText
          width="600px"
          type="password"
          inputHook={newPassword}
          label="Contraseña nueva"
        />
        <Box height="10px" />

        <InputText
          width="600px"
          type="password"
          inputHook={confirmPassword}
          label="Repetir contraseña nueva"
        />
        <Box height="20px" />

        <Box height="20px">
          {done && (
            <Text weight="400" type="h6">
              ¡Contraseña cambiada exitosamente!
            </Text>
          )}
        </Box>
        <Button
          fullWidth
          primary
          onClick={submit}
          backgroundColor={color}
          state={done ? "inactive" : "normal"}
        >
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
