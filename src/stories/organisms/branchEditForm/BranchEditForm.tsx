import React from "react";
import "./branchEditForm.scss";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputFormHook } from "../../hooks/useInputForm";
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
   * Average reserve time of the branch (in hours)
   */
  averageReserveTime: InputFormHook<string>;
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
   * Average reserve time of the branch (in hours)
   */
  onSaveAverageReserveTime: (value: string) => void;
  /**
   * Average price per person of the branch (in USD)
   */
  onSavePrice: (value: string) => void;
  /**
   * Branch type
   */
  onSaveType: (value: string) => void;
  /**
   * Precise location of the branch (Google maps link)
   */
  onSaveMapsLink: (value: string) => void;

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
}

export const BranchEditForm = ({
  name,
  description,
  location,
  phone,
  capacity,
  averageReserveTime,
  price,
  mapsLink,
  type,

  onSaveName = () => {},
  onSaveDescription = () => {},
  onSaveLocation = () => {},
  onSavePhone = () => {},
  onSaveCapacity = () => {},
  onSaveAverageReserveTime = () => {},
  onSavePrice = () => {},
  onSaveType = () => {},
  onSaveMapsLink = () => {},

  typeOptions,
  locationOptions,
  mapsApiKey,
  width,
  height,
  ...props
}: BranchEditFormProps) => {
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
          />
        </Box>

        <Box
          className={classnames(
            "branch-edit-form--input-item",
            "branch-edit-form--average-reserve-time"
          )}
        >
          <Text className="branch-edit-form--input-label">
            {" "}
            Tiempo promedio de reserva (en horas){" "}
          </Text>
          <EditableInputText
            inputHook={averageReserveTime}
            saveValueFunction={onSaveAverageReserveTime}
            editable={true}
            type="positiveInteger"
            containerClassName="branch-edit-form--input-item"
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
          />
        </Box>

        <Box className="branch-edit-form--cost-per-person-input">
          <Text className="branch-edit-form--input-label">
            {" "}
            Coste por persona{" "}
          </Text>
          <EditableInputText
            inputHook={price}
            saveValueFunction={onSavePrice}
            editable={true}
            type="positiveNumber"
            containerClassName="branch-edit-form--input-item"
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
        />
      </Box>

      <Box className="branch-edit-form--precise-location-container">
        <Text className="branch-edit-form--input-label">
          {" "}
          Ubicación precisa
        </Text>
        <EditableInputText
          width="100%"
          height="100%"
          inputHook={mapsLink}
          editable={true}
          hideTextAfterEditing={true}
          type="text"
          defaultText="Enlace de Google Maps"
          saveValueFunction={onSaveMapsLink}
          containerClassName="branch-edit-form--input-item"
        />
        <EditableBranchLocation
          apiKey={mapsApiKey}
          googleMapsLink={mapsLink.value || ""}
          className="branch-edit-form--precise-location-map"
        />
      </Box>
    </Box>
  );
};
