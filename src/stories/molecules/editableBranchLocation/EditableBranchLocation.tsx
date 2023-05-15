import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import "./editableBranchLocation.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "../../assets/scss/variables.module.scss";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

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
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    language: "es",
  });

  const [error, setError] = useState(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 })

  const latitude = useMemo(() => {
    let lat = googleMapsLink.match(/ll=(-?[\d\.]*)/);
    if (!lat) {
      lat = googleMapsLink.match(/\@(-?[\d\.]*)/);
    }
    if (!lat) {
      setError(true);
    }
    else {
      setError(false);
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
    else {
      setError(false);
    }

    return long ? parseFloat(long[1]) : 0;
  }, [googleMapsLink]);

  useEffect(() => {
    setCenter({
      lat: latitude,
      lng: longitude,
    });
  }, [latitude, longitude]);

  const handleCenterChanged = () => {
    if (mapRef) {
      const newCenter = mapRef.getCenter();
      if (newCenter?.lat() !== center.lat || newCenter?.lng() !== center.lng) {
        setCenter({
          lat: latitude,
          lng: longitude,
        });
      }
    }
  };

  return (
    <Box
      className={classnames("editable-branch-location--container")}
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
          onLoad={(map) => setMapRef(map)}
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
          onCenterChanged={handleCenterChanged}
          mapContainerClassName={classnames(
            "editable-branch-location--container",
            className
          )}
        >
          <MarkerF
            onClick={() => {
              latitude && longitude && window.open(googleMapsLink);
            }}
            position={center}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
};
