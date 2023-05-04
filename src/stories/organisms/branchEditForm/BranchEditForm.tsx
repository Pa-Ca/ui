import React, { useMemo, useState, useRef } from "react";
import "./branchEditForm.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";	

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
  branchCapacity?: Number;

  /**
   * Average reserve time of the branch (in hours)
   * */
  branchAverageReserveTime?: Number;

  /**
   * Average price per person of the branch (in USD)
   * */
  branchPrice?: Number;

  /**
   * Precise location of the branch (Google maps link)
   * */
  branchMapsLink?: string;

  /**
   * Google maps API key
   * */
  MapsApiKey?: string;
  
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
  MapsApiKey,
  ...props
}: BranchEditProps) => {



  return (
    <Box className="branch-edit--container">

      <Box className="branch-edit--row">

        <Box className="branch-edit--name-input">
          <Text> Nombre </Text> 
          <EditableInputText 
            width="100%"
            height="100%"
            currentValue={branchName}
            editable={true}
            saveValueFunction={() => {}}
            type="text"
          />
        </Box>

      </Box>

      <Box className="branch-edit--row">

        <Box className="branch-edit--capacity-input">
          <Text> Capacidad </Text>
          <EditableInputText 
            currentValue={
              branchCapacity === undefined ? "" : branchCapacity.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="positiveInteger"
          />
        </Box>

        <Box className="branch-edit--average-reserve-time">
          <Text> Tiempo promedio de reserva (en horas) </Text>
          <EditableInputText 
            currentValue={
              branchAverageReserveTime === undefined ? "" : branchAverageReserveTime.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="positiveInteger"
          />
        </Box>

      </Box>

      <Box className="branch-edit--row">

        <Box className="branch-edit--type-input">
          <Text> Tipo </Text>
          <EditableInputText 
            currentValue={
              branchName === undefined ? "" : branchName.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="select"
          />
        </Box>

        <Box className="branch-edit--cost-per-person-input">
          <Text> Coste por persona </Text>
          <EditableInputText 
            currentValue={
              branchPrice === undefined ? "" : branchPrice.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="positiveNumber"
          />
        </Box>

      </Box>

      <Box className="branch-edit--row">

        <Box className="branch-edit--phone-number-input">
          <Text> Número de teléfono Local </Text>
          <EditableInputText 
            currentValue={
              branchName === undefined ? "" : branchName.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="phoneNumber"
          />
        </Box>

        <Box className="branch-edit--location-input">
          <Text> Ubicación </Text>
          <EditableInputText 
            width="100%"
            height="100%"
            currentValue={
              branchPrice === undefined ? "" : branchPrice.toString()
            }
            saveValueFunction={() => {}}
            editable={true}
            type="select"
          />
        </Box>

      </Box>
        
      <Box className="branch-edit--description-container">
      <Text> Descripción </Text>
          <EditableInputLongText
          minRows= {6}
          maxRows= {6}
          width= "100%"
          height= "100%"
          maxLength ={480}  
          saveValueFunction = {(value: string) => {}}
          />
      </Box>

      <Box className="branch-edit--precise-location-container">
      <Text> Ubicación </Text>

      </Box>


    </Box>
  );
};
