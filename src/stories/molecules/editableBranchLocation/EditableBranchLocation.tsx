import React, { useMemo, useState } from "react";
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


  const latitude  = useMemo(() =>{
    let lat = googleMapsLink.match(/ll=(-?[\d\.]*)/);
    if (!lat) {
      lat = googleMapsLink.match(/\@(-?[\d\.]*)/);
    }
    return lat ? parseFloat(lat[1]) : 0 ;
  }, [googleMapsLink]);

  const longitude = useMemo(() => {
    let long = googleMapsLink.match(/ll=[-?\d\.]*\,([-?\d\.]*)/);
    if (!long) {
      long = googleMapsLink.match(/\@[-?\d\.]*\,([-?\d\.]*)/);
    } 
    return long ? parseFloat(long[1]) : 0 ;
    }, [googleMapsLink]);


  const  center = useMemo(() => {
    return {
    lat: latitude,
    lng: longitude
    }
  }, [latitude, longitude]);

  return ( 
    <Box className={classnames("editable-branch-location--container" , className)}
    style={{
      width: width,
      height: height,
    }}>
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
          mapContainerStyle={{
            width: width,
            height: height,
          }}
        >
          {
            Marker && <Marker position={center} />
          }
        </GoogleMap>
      ) : <></>}
    </Box>
  );
};



