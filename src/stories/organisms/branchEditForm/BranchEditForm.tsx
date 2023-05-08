import React, { useState } from "react";
import "./branchEditForm.scss";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import { EditableBranchLocation } from "../../molecules/editableBranchLocation/EditableBranchLocation";

export interface OptionType {
  label: string;
  value: string;
}

interface BranchEditFormProps {
  /**
   * Component width
   *  */
  width?: string;
  /**
   * Component height
   * */
  height?: string;

  /**
   * Name of the branch
   * */
  branchName?: string;

  /**
   * Description of the branch
   * */
  branchDescription?: string;

  /**
   * Location of the branch
   * */
  branchLocation?: string;

  /**
   * Phone of the branch
   * */
  branchPhone?: string;

  /**
   * Capacity of the branch
   * */
  branchCapacity?: string;

  /**
   * Average reserve time of the branch (in hours)
   * */
  branchAverageReserveTime?: string;

  /**
   * Average price per person of the branch (in USD)
   * */
  branchPrice?: string;

  /**
   * Branch type
   * */
  branchType?: string;

  /**
   * Precise location of the branch (Google maps link)
   * */
  branchMapsLink?: string;

  /**
   * Google maps API key
   * */
  MapsApiKey: string;

  /**
   * Options for the branch type
   * */
  branchTypeOptions: OptionType[];

  /**
   * Options for the branch location
   * */
  branchLocationOptions: OptionType[];
}

export const BranchEditForm = ({
  width,
  height,
  branchName,
  branchDescription,
  branchLocation,
  branchPhone,
  branchCapacity,
  branchAverageReserveTime,
  branchPrice,
  branchMapsLink,
  branchType,
  branchTypeOptions,
  branchLocationOptions,
  MapsApiKey,
  ...props
}: BranchEditFormProps) => {
  const [branchMapLinkCurrentVal, setBranchMapLinkCurrentVal] =
    useState(branchMapsLink);

  return (
    <Box className="branch-edit-form--container" width={width} height={height}>
      <Box className={classnames("branch-edit-form--name-input")}>
        <Text className="branch-edit-form--input-label"> Nombre </Text>
        <EditableInputText
          width="100%"
          height="100%"
          currentValue={branchName}
          editable={true}
          saveValueFunction={() => {}}
          type="text"
          containerClassName="branch-edit-form--input-item"
        />
      </Box>

      <Box className="branch-edit-form--two-column-row">
        <Box className={classnames("branch-edit-form--capacity-input")}>
          <Text className="branch-edit-form--input-label"> Capacidad </Text>
          <EditableInputText
            currentValue={branchCapacity}
            saveValueFunction={() => {}}
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
            currentValue={branchAverageReserveTime}
            saveValueFunction={() => {}}
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
            currentValue={branchType}
            options={branchTypeOptions}
            saveValueFunction={() => {}}
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
            currentValue={branchPrice}
            saveValueFunction={() => {}}
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
            currentValue={branchPhone}
            saveValueFunction={() => {}}
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
            currentValue={branchLocation}
            options={branchLocationOptions}
            saveValueFunction={() => {}}
            editable={true}
            type="select"
            containerClassName="branch-edit-form--input-item"
          />
        </Box>
      </Box>

      <Box className="branch-edit-form--description-container">
        <Text className="branch-edit-form--input-label"> Descripción </Text>
        <EditableInputLongText
          currentValue={branchDescription}
          minRows={6}
          maxRows={6}
          width="100%"
          height="100%"
          maxLength={480}
          saveValueFunction={(value: string) => {}}
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
          currentValue={branchMapLinkCurrentVal}
          saveValueFunction={setBranchMapLinkCurrentVal}
          editable={true}
          hideTextAfterEditing={true}
          type="text"
          defaultText="Enlace de Google Maps"
          containerClassName="branch-edit-form--input-item"
        />
        <EditableBranchLocation
          apiKey={MapsApiKey}
          googleMapsLink={branchMapLinkCurrentVal || ""}
          className="branch-edit-form--precise-location-map"
        />
      </Box>
    </Box>
  );
};
