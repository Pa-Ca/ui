<<<<<<< HEAD
import React, { useMemo } from "react";
=======
import React, { useMemo, useState } from "react";
>>>>>>> 0188cac3726ae34ff095296ada64f6143b7d6bcb
import "./branchEditForm.scss";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { InputText } from "../../molecules/inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { EditableInputTime } from "../../molecules/editableInputTime/EditableInputTime";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import { EditableBranchLocation } from "../../molecules/editableBranchLocation/EditableBranchLocation";

export interface OptionType {
  label: string;
  value: string;
}

interface BranchEditFormProps {
  /**
   * Name of the branch
   */
  name: InputFormHook<string>;
  /**
   * Description of the branch
   */
  description: InputFormHook<string>;
  /**
   * Location of the branch
   */
  location: InputFormHook<string>;
  /**
   * Phone of the branch
   */
  phone: InputFormHook<string>;
  /**
   * Capacity of the branch
   */
  capacity: InputFormHook<string>;
  /**
   * Average reserve time hours of the branch
   */
  averageReserveTimeHours: InputFormHook<string>;
  /**
   * Average reserve time minutes of the branch
   */
  averageReserveTimeMinutes: InputFormHook<string>;
  /**
   * Average price per person of the branch (in USD)
   */
  price: InputFormHook<string>;
  /**
   * Branch type
   */
  type: InputFormHook<string>;
  /**
   * Precise location of the branch (Google maps link)
   */
  mapsLink: InputFormHook<string>;

  /**
   * Opening time hours of the branch
   */
  openingTimeHour: InputFormHook<string>;
  /**
   * Opening time minutes of the branch
   */
  openingTimeMinute: InputFormHook<string>;

  /**
   * Closing time hours of the branch
   */
  closingTimeHour: InputFormHook<string>;
  /**
   * Closing time minutes of the branch
   */
  closingTimeMinute: InputFormHook<string>;

  /**
   * Function that is executed when the name is saved
   */
  onSaveName: (value: string) => void;
  /**
   * Description of the branch
   */
  onSaveDescription: (value: string) => void;
  /**
   * Location of the branch
   */
  onSaveLocation: (value: string) => void;
  /**
   * Phone of the branch
   */
  onSavePhone: (value: string) => void;
  /**
   * Capacity of the branch
   */
  onSaveCapacity: (value: string) => void;
  /**
   * Average reserve time of the branch
   */
  onSaveAverageReserveTime: (hours: string, minutes: string) => void;
  /**
   * Average price per person of the branch (in USD)
   */
  onSavePrice: (value: string) => void;
  /**
   * On save event for the opening time
   * */
  onSaveOpeningTime: (hour: string, minute: string) => void;

  /**
   * On save event for the closing time
   * */
  onSaveClosingTime: (hour: string, minute: string) => void;

  /**
   * Branch type
   */
  onSaveType: (value: string) => void;
  /**
   * Precise location of the branch (Google maps link)
   */
  onSaveMapsLink: (value: string) => void;
  /**
   * On delete branch
   */
  onDeleteBranch: () => void;


  /**
   * Business email
   */
  email: string;
  /**
   * Google maps API key
   */
  mapsApiKey: string;
  /**
   * Options for the branch type
   */
  typeOptions: OptionType[];
  /**
   * Options for the branch location
   */
  locationOptions: OptionType[];
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

export const BranchEditForm = ({
  name,
  description,
  location,
  phone,
  capacity,
  averageReserveTimeHours,
  averageReserveTimeMinutes,
  price,
  mapsLink,
  type,
  openingTimeHour,
  openingTimeMinute,
  closingTimeHour,
  closingTimeMinute,

  onSaveName = () => {},
  onSaveDescription = () => {},
  onSaveLocation = () => {},
  onSavePhone = () => {},
  onSaveCapacity = () => {},
  onSaveAverageReserveTime = () => {},
  onSavePrice = () => {},
  onSaveType = () => {},
  onSaveMapsLink = () => {},
  onSaveOpeningTime = () => {},
  onSaveClosingTime = () => {},
  onDeleteBranch = () => {},

  email,
  typeOptions,
  locationOptions,
  mapsApiKey,
  width,
  height,
  color,
  ...props
}: BranchEditFormProps) => {
<<<<<<< HEAD
=======
  const [deleteBranch, setDeleteBranch] = useState(false);
  const emailInput = useInputForm("");

>>>>>>> 0188cac3726ae34ff095296ada64f6143b7d6bcb
  const locationName = useMemo(() => {
    const match = mapsLink.value.match(/\/place\/(.*?)\//);
    if (match) {
      const placeName = match[1].replace(/\+/g, " ");
      return placeName;
    }
    return "";
  }, [mapsLink]);

  return (
    <Box className="branch-edit-form--container" width={width} height={height}>
      <Box className={classnames("branch-edit-form--name-input")}>
        <Text className="branch-edit-form--input-label"> Nombre </Text>
        <EditableInputText
          width="100%"
          height="100%"
          inputHook={name}
          editable={true}
          saveValueFunction={onSaveName}
          type="text"
          containerClassName="branch-edit-form--input-item"
          color={color}
        />
      </Box>

      <Box className="branch-edit-form--two-column-row">
        <Box className={classnames("branch-edit-form--capacity-input")}>
          <Text className="branch-edit-form--input-label"> Capacidad </Text>
          <EditableInputText
            inputHook={capacity}
            saveValueFunction={onSaveCapacity}
            editable={true}
            type="positiveInteger"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>

        <Box className={classnames("branch-edit-form--average-reserve-time")}>
          <Text className="branch-edit-form--input-label">
            {" "}
            Tiempo promedio de reserva{" "}
          </Text>
          <EditableInputTime
            hoursInputHook={averageReserveTimeHours}
            minutesInputHook={averageReserveTimeMinutes}
            saveValueFunction={onSaveAverageReserveTime}
            editable={true}
            type="duration"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>
      </Box>

      <Box className="branch-edit-form--two-column-row">
        <Box className={classnames("branch-edit-form--type-input")}>
          <Text className="branch-edit-form--input-label"> Tipo </Text>
          <EditableInputText
            inputHook={type}
            options={typeOptions}
            saveValueFunction={onSaveType}
            editable={true}
            type="select"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>

        <Box className="branch-edit-form--cost-per-person-input">
          <Text className="branch-edit-form--input-label">
            {" "}
            Coste por persona ($){" "}
          </Text>
          <EditableInputText
            inputHook={price}
            saveValueFunction={onSavePrice}
            editable={true}
            type="positiveNumber"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>
      </Box>

      <Box className="branch-edit-form--two-column-row">
        <Box className={classnames("branch-edit-form--type-input")}>
          <Text className="branch-edit-form--input-label">
            {" "}
            Hora de apertura{" "}
          </Text>
          <EditableInputTime
            hoursInputHook={openingTimeHour}
            minutesInputHook={openingTimeMinute}
            saveValueFunction={onSaveOpeningTime}
            editable={true}
            type="localtime"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>

        <Box className="branch-edit-form--cost-per-person-input">
          <Text className="branch-edit-form--input-label">
            {" "}
            Hora de cierre{" "}
          </Text>
          <EditableInputTime
            hoursInputHook={closingTimeHour}
            minutesInputHook={closingTimeMinute}
            saveValueFunction={onSaveClosingTime}
            editable={true}
            type="localtime"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>
      </Box>

      <Box className="branch-edit-form--two-column-row">
        <Box className={classnames("branch-edit-form--phone-number-input")}>
          <Text className="branch-edit-form--input-label">
            {" "}
            Número de teléfono Local{" "}
          </Text>
          <EditableInputText
            inputHook={phone}
            saveValueFunction={onSavePhone}
            editable={true}
            type="phoneNumber"
            containerClassName="branch-edit-form--input-item"
            color={color}
            placeholder="+58 4240000000 | 04240000000"
          />
        </Box>

        <Box className={classnames("branch-edit-form--location-input")}>
          <Text className="branch-edit-form--input-label"> Ubicación </Text>
          <EditableInputText
            width="100%"
            height="100%"
            inputHook={location}
            options={locationOptions}
            saveValueFunction={onSaveLocation}
            editable={true}
            type="select"
            containerClassName="branch-edit-form--input-item"
            color={color}
          />
        </Box>
      </Box>

      <Box className="branch-edit-form--description-container">
        <Text className="branch-edit-form--input-label"> Descripción </Text>
        <EditableInputLongText
          inputHook={description}
          minRows={6}
          maxRows={6}
          width="100%"
          height="100%"
          maxLength={480}
          saveValueFunction={onSaveDescription}
          color={color}
        />
      </Box>

      <Box className="branch-edit-form--precise-location-container">
        <Text className="branch-edit-form--input-label">
          {" "}
          Ubicación precisa
        </Text>
        <EditableInputText
          width="100%"
          inputHook={mapsLink}
          editable={true}
          hideTextAfterEditing={true}
          type="text"
          showError={false}
          defaultText={locationName}
          saveValueFunction={onSaveMapsLink}
          containerClassName="branch-edit-form--input-item"
          color={color}
        />
        <EditableBranchLocation
          apiKey={mapsApiKey}
          googleMapsLink={mapsLink.value || ""}
          className="branch-edit-form--precise-location-map"
        />
      </Box>

      <Box>
        <Button
          primary
          backgroundColor={color}
          size="large"
          onClick={() => setDeleteBranch(true)}
        >
          <Box>
            <Text color="#112211" type="h6" weight="500">
              Eliminar Local
            </Text>
          </Box>
        </Button>
      </Box>

      <Modal open={deleteBranch} setOpen={setDeleteBranch}>
        <Box className="branch-edit-form--modal-container">
          <Text type="h4" weight="600" color="#112211">
            ¿Estás seguro que deseas eliminar este local?
          </Text>
          <Text type="h6" weight="400" color="#112211">
            Esta acción no se puede deshacer. Escriba abajo el correo de su
            cuenta para confirmar.
          </Text>
          <Box height="20px" />
          <Box width="100%">
            <InputText inputHook={emailInput} label="Email" width="100%" />
          </Box>

          <Button
            primary
            fullWidth
            size="large"
            backgroundColor={color}
            state={emailInput.value === email ? "normal" : "inactive"}
          >
            <Box
              className="branch-edit-form--modal-button"
              onClick={() => emailInput.value === email && onDeleteBranch()}
            >
              <Text color="#112211" type="h6" weight="500">
                Eliminar Local
              </Text>
            </Box>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
