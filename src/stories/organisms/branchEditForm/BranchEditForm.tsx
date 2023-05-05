import React, { useMemo, useState, useRef } from "react";
import "./branchEditForm.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";	
import { EditableBranchLocation } from "../../molecules/editableBranchLocation/EditableBranchLocation";
import classnames from "classnames";
interface OptionType {
  label: string;
  value: string;
}

interface BranchEditProps {
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
  branchTypeOptions : OptionType[];

  /**
   * Options for the branch location
   * */
  branchLocationOptions : OptionType[];
  
}

export const BranchEdit = ({
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
}: BranchEditProps) => {




  return (
    <Box className="branch-edit--container">
        <Box className={classnames("branch-edit--name-input")}>
          <Text className="branch-edit--input-label"> Nombre </Text> 
          <EditableInputText 
            width="100%"
            height="100%"
            currentValue={branchName}
            editable={true}
            saveValueFunction={() => {}}
            type="text"
            containerClassName="branch-edit--input-item"
          />
        </Box>

      

      <Box className="branch-edit--two-column-row">

        <Box className={classnames( "branch-edit--capacity-input")}>
          <Text className="branch-edit--input-label"> Capacidad </Text>
          <EditableInputText 
            currentValue={branchCapacity}
            saveValueFunction={() => {}}
            editable={true}
            type="positiveInteger"
            containerClassName="branch-edit--input-item"
          />
        </Box>

        <Box className={classnames("branch-edit--input-item", "branch-edit--average-reserve-time")}>
          <Text className="branch-edit--input-label"> Tiempo promedio de reserva (en horas) </Text>
          <EditableInputText 
            currentValue={branchAverageReserveTime}
            saveValueFunction={() => {}}
            editable={true}
            type="positiveInteger"
            containerClassName="branch-edit--input-item"
          />
        </Box>

      </Box>

      <Box className="branch-edit--two-column-row">

        <Box className={classnames("branch-edit--type-input")}>
          <Text className="branch-edit--input-label"> Tipo </Text>
          <EditableInputText 
            currentValue={branchType}
            options={branchTypeOptions}
            saveValueFunction={() => {}}
            editable={true}
            type="select"
            containerClassName="branch-edit--input-item"
          />
        </Box>

        <Box className="branch-edit--cost-per-person-input">
          <Text className="branch-edit--input-label"> Coste por persona </Text>
          <EditableInputText 
            currentValue={branchPrice}
            saveValueFunction={() => {}}
            editable={true}
            type="positiveNumber"
            containerClassName="branch-edit--input-item"

          />
        </Box>

      </Box>

      <Box className="branch-edit--two-column-row">

        <Box className={classnames("branch-edit--phone-number-input")}>
          <Text className="branch-edit--input-label"> Número de teléfono Local </Text>
          <EditableInputText 
            currentValue={branchPhone}
            saveValueFunction={() => {}}
            editable={true}
            type="phoneNumber"
            containerClassName="branch-edit--input-item"
          />
        </Box>

        <Box className={classnames("branch-edit--location-input")}>
          <Text className="branch-edit--input-label"> Ubicación </Text>
          <EditableInputText 
            width="100%"
            height="100%"
            currentValue={branchLocation}
            options={branchLocationOptions}
            saveValueFunction={() => {}}
            editable={true}
            type="select"
            containerClassName="branch-edit--input-item"
          />
        </Box>

      </Box>
        
      <Box className="branch-edit--description-container">
      <Text className="branch-edit--input-label"> Descripción </Text>
          <EditableInputLongText
          currentValue={branchDescription}
          minRows= {6}
          maxRows= {6}
          width= "100%"
          height= "100%"
          maxLength ={480}  
          saveValueFunction = {(value: string) => {}}
          />
      </Box>

      <Box className="branch-edit--precise-location-container">
      <Text className="branch-edit--input-label"> Ubicación precisa</Text>
        <EditableInputText 
            width="100%"
            height="100%"
            currentValue={branchMapsLink}
            saveValueFunction={() => {}}
            editable={true}
            hideTextAfterEditing={true}
            type="url"
            defaultText="Enlace de Google Maps"
            containerClassName="branch-edit--input-item"
          />
          <EditableBranchLocation
            apiKey={MapsApiKey}
            googleMapsLink={branchMapsLink || ""}
            className="branch-edit--precise-location-map"
          />
      </Box>
    </Box>
  );
};
