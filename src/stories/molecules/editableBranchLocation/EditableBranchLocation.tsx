import React, { useMemo, useState } from "react";
import classnames from "classnames";
import "./editableBranchLocation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "../../assets/scss/variables.module.scss";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

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
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    language: "es",
  });

  const [error, setError] = useState(false);

  const latitude = useMemo(() => {
    let lat = googleMapsLink.match(/ll=(-?[\d\.]*)/);
    if (!lat) {
      lat = googleMapsLink.match(/\@(-?[\d\.]*)/);
    }
    if (!lat) {
      setError(true);
    }

    return lat ? parseFloat(lat[1]) : 0;
  }, [googleMapsLink]);

  const longitude = useMemo(() => {
    let long = googleMapsLink.match(/ll=[-?\d\.]*\,([-?\d\.]*)/);
    if (!long) {
      long = googleMapsLink.match(/\@[-?\d\.]*\,([-?\d\.]*)/);
    }
    if (!long) {
      setError(true);
    }

    return long ? parseFloat(long[1]) : 0;
  }, [googleMapsLink]);

  const center = useMemo(() => {
    return {
      lat: latitude,
      lng: longitude,
    };
  }, [latitude, longitude]);

  return (
    <Box
      className={classnames("editable-branch-location--container", className)}
    >
      <div
        className={
          "input-text--error-container " +
          (error
            ? "input-text--error-animation"
            : "input-text--error-no-animation")
        }
      >
        {error && (
          <>
            <Icon icon="alert" color={styles.errorColor} size="20px" />
            <div style={{ width: "10px" }} />
            <Text type="h6" color={styles.errorColor}>
              No se pudo cargar la ubicación de Google Maps
            </Text>
          </>
        )}
      </div>
      {isLoaded ? (
        <GoogleMap
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              position: 9,
            },
            draggable: false,
          }}
          center={center}
          zoom={16}
          mapContainerClassName={classnames(
            "editable-branch-location--container",
            className
          )}
        >
          {Marker && <Marker position={center} />}
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
};
