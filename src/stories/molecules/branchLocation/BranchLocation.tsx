import React, { useState } from "react";
import "./branchLocation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


export interface BranchLocationProps {
  /**
   * Google Maps API Key
   * */
  apiKey: string;
  /**
   * Latitude in decimal format
   * 
   */
  lat: number;
  /**
   * Longitude in decimal format
   * 
    */
  lng: number;
  /**
   * Location text
   */
  location: string;
  /**
   * Indicates if the data is editable
   */
  editable?: boolean;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Images width
   */
  width?: string;
  /**
   * Images height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchLocation = ({
  apiKey,
  lat,
  lng,
  location,
  editable,
  color,
  width,
  height,
  ...props
}: BranchLocationProps) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    language: "es"
  })

  let center = {
    lat: lat,
    lng: lng
  }

  const containerStyle = {
    flex: "1",
    display: "flex",
    margin_top: "20px",
    margin_bottom: "20px",
  }

  return (
    <Box className="branch-location--container">
      <Box className="branch-location--header">
        <Box>
          <Text type="h5" color="#112211" weight="700">
            Location/Map
          </Text>

          <Box height="5px" />
        </Box>

        <Button primary backgroundColor={color} onClick={
          () => window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, "_blank")
        }>
          <Text type="h6" weight="600">Ver en Google Maps</Text>
        </Button>
      </Box>

        {isLoaded ? (
        <GoogleMap
          options = {{
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: 9
            }
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onClick={(e) => console.log(e)}
        >
          {
            Marker && <Marker position={center} />
          }
        </GoogleMap>
      ) : <></>}

      <Box className="branch-location--footer">
        <Icon icon="location" size="20px" />
        <Text type="h6"> &nbsp;{location} </Text>
      </Box>
    </Box>
  );
};



