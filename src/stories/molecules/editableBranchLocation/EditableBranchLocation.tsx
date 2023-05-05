import React, { useState } from "react";
import "./editableBranchLocation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import classnames from "classnames";
import { EditableInputText } from "../editableInputText/EditableInputText";
import { Editable } from "../editable/Editable";

export interface EditableBranchLocationProps {
  /**
   * Google Maps API Key
   * */
  apiKey: string;
  /**
   * Google Maps Link
   */
  googleMapsLink: string;
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

  /**
   * Class name
   * */
  className?: string;

}

/**
 * Primary UI component for user interaction
 */
export const EditableBranchLocation = ({
  apiKey,
  googleMapsLink,
  color,
  width,
  height,
  className,
  ...props
}: EditableBranchLocationProps) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    language: "es"
  })

  // const containerStyle = {
  //   flex: "1",
  //   display: "flex",
  //   margin_top: "20px",
  //   margin_bottom: "20px",
  // }

  // Use The foollowing regex to get the lat and lng from the google maps link
  // Latitude:  ll=(-?[\d\.]*) 
  // Longitude:  ll=[-?\d\.]*\,([-?\d\.]*) 
  
  let latitude  = googleMapsLink.match(/ll=(-?[\d\.]*)/);
  let longitude = googleMapsLink.match(/ll=[-?\d\.]*\,([-?\d\.]*)/);

  // If the response is null, try the following regex
  // Latitude: \@(-?[\d\.]*)
  // Longitude:  \@[-?\d\.]*\,([-?\d\.]*)

  if (!latitude || !longitude) {
    latitude  = googleMapsLink.match(/\@(-?[\d\.]*)/);
    longitude = googleMapsLink.match(/\@[-?\d\.]*\,([-?\d\.]*)/);
  }


  // Convert the latitude and longitude to decimal format
  const latDecimal = latitude  ? parseFloat(latitude[1]) : 0;

  const lngDecimal = longitude ? parseFloat(longitude[1]) : 0;

  let center = {
    lat: latDecimal,
    lng: lngDecimal
  }

  return (
    <Box className={classnames("editable-branch-location--container" , className)}>

        {isLoaded ? (
        <GoogleMap
          options = {{
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: 9
            },
            draggable: false,
          }}
          center={center}
          zoom={16}
          mapContainerClassName= {classnames("editable-branch-location--container" , className)}
        >
          {
            Marker && <Marker position={center} />
          }
        </GoogleMap>
      ) : <></>}
    </Box>
  );
};



