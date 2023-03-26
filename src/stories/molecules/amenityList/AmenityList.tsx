import React, { useEffect, useMemo, useState } from "react";
import "./amenityList.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import getAllAmenities from "../../utils/getAllAmenities";
import useResizeObserver from "../../hooks/useResizeObserver";
import AmenityObject from "../../utils/objects/AmenityObject";

interface AmenityListProps {
  /**
   * Amenity list
   */
  amenityList: AmenityObject[];
  /**
   * Indicates if the component is editable
   */
  editable?: boolean;
  /**
   * On save editions
   */
  onSave: (amenities: AmenityObject[]) => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component main color
   */
  color?: string;
}

const MAX_SHOW = 11;

/**
 * Primary UI component for user interaction
 */
export const AmenityList = ({
  amenityList = [],
  editable = false,
  onSave,
  width,
  color = "black",
  ...props
}: AmenityListProps) => {
  const observer = useResizeObserver<HTMLDivElement>();

  const allAmenities = getAllAmenities();

  const [edit, setEdit] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [amenityListBackup, setAmenityListBackup] = useState(amenityList);
  const [currentAmenityList, setCurrentAmenityList] = useState(amenityList);

  /**
   * Add an amenity if it is not in currentAmenityList, or remove it otherwise
   * @param amenity Amenity
   * @returns
   */
  const changeAmenity = (amenity: AmenityObject) => {
    if (!edit) return;

    const currentAmenity = currentAmenityList.find(
      (currentAmenity) => currentAmenity.name === amenity.name
    );

    if (!currentAmenity) {
      const realAmenity = allAmenities.find(
        (currentAmenity) => currentAmenity.name === amenity.name
      );

      if (!realAmenity) return;

      setCurrentAmenityList((oldList) => [...oldList, realAmenity]);
    } else {
      const index = currentAmenityList.indexOf(currentAmenity);
      setCurrentAmenityList((oldList) => [
        ...oldList.slice(0, index),
        ...oldList.slice(index + 1, oldList.length),
      ]);
    }
  };

  /**
   * Indicates if the amenity is part of the branch
   * @param amenity Amenity to be sought
   * @returns
   */
  const hasAmenity = (amenity: AmenityObject): boolean => {
    return currentAmenityList.some(
      (currentAmenity) => currentAmenity.name === amenity.name
    );
  };

  const selectEdit = () => {
    setAmenityListBackup(currentAmenityList);
    setEdit(true);
  };

  const onSaveClick = () => {
    setEdit(false);
    onSave(currentAmenityList);
  };

  const onCancelClick = () => {
    setEdit(false);
    setCurrentAmenityList(amenityListBackup);
  };

  /**
   * Change animation color
   */
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--amenity-list--color", color);
  }, [color]);

  /**
   * Number of columns of amenities that the component will have
   */
  const nColumns = useMemo(() => {
    if (observer.width > 918) return 3;
    if (observer.width > 468) return 2;
    else return 1;
  }, [observer.width]);

  /**
   * List of amenities to be displayed
   */
  const showList = useMemo(() => {
    const fewAmenities = currentAmenityList.length < MAX_SHOW;
    let viewMorePositon = MAX_SHOW;
    let count = 0;

    let showList_ = allAmenities.map((e, i) => {
      const display = edit || hasAmenity(e);

      if (!display && count < MAX_SHOW) viewMorePositon += 1;
      else count += 1;

      return (
        <Box
          className="amenity-list--item"
          key={`amenity-list--item-${i}-${e.name}`}
          style={{
            cursor: edit ? "pointer" : "auto",
            display: display ? "flex" : "none",
          }}
          onClick={() => changeAmenity(e)}
        >
          <Box
            className="amenity-list--check"
            style={{ width: edit ? "34px" : "0" }}
          >
            <Icon
              icon={hasAmenity(e) ? "checkbox" : "uncheckbox"}
              size="24px"
            />
          </Box>
          <Icon icon={e.icon} size="24px" />
          <Box width="10px" />
          <Text> {e.name} </Text>
        </Box>
      );
    });

    // If all the amenities were shown either because the viewMore option
    // was pressed, or it is being edited, or there are few
    if (viewMore || edit || fewAmenities) {
      // So many Boxes are added so that there is only one space left in the
      // last row
      if (currentAmenityList.length % nColumns < nColumns - 1) {
        for (
          let i = 0;
          i < nColumns - (currentAmenityList.length % nColumns) - 1;
          i++
        ) {
          showList_.push(<Box />);
        }
      } else if (currentAmenityList.length % nColumns === 0) {
        for (let i = 0; nColumns - 1; i++) {
          showList_.push(<Box />);
        }
      }

      // If there are many amenities, it is completed with the option
      // to see less
      if (!fewAmenities && !edit) {
        showList_.push(
          <Box
            className="amenity-list--view"
            onClick={() => setViewMore(false)}
          >
            <Text weight="600" color={color}>
              {`Ver menos`}
            </Text>
          </Box>
        );
      }
      // Otherwise, it is filled with another Box
      else {
        showList_.push(<Box />);
      }
    }
    // If fewer are displayed, a "View more" will be inserted in the last
    // position of the last row to be displayed
    else if (!fewAmenities) {
      showList_.splice(
        viewMorePositon,
        0,
        <Box className="amenity-list--view" onClick={() => setViewMore(true)}>
          <Text weight="600" color={color}>
            {`Ver ${currentAmenityList.length - MAX_SHOW} más`}
          </Text>
        </Box>
      );
    }

    return showList_;
  }, [viewMore, nColumns, currentAmenityList, edit]);

  /**
   * Height in pixels that the component that shows the amenities will occupy
   */
  const amenitiesHeight = useMemo(() => {
    let length = 0;
    if (edit) {
      length += allAmenities.length;
    } else {
      length += currentAmenityList.length;
    }

    length += length % nColumns === 0 ? 2 : 1;

    if (length < MAX_SHOW) {
      return Math.ceil((49 * length) / nColumns) - 10;
    } else if (viewMore || edit) {
      return (49 * (length + 1)) / nColumns - 10;
    }
    return (49 * (MAX_SHOW + 1)) / nColumns - 10;
  }, [viewMore, nColumns, allAmenities, currentAmenityList, edit]);

  return (
    <Box
      className="amenity-list--container"
      style={{ width }}
      innerRef={observer.ref}
    >
      <Box className="amenity-list--title">
        <Text type="h5" color="#112211" weight="700">
          Servicios
        </Text>
        <Editable
          editable={editable}
          edit={edit}
          onPencilClick={selectEdit}
          onSaveClick={onSaveClick}
          onCancelClick={onCancelClick}
          color={color}
        />
      </Box>

      <Box
        style={{ height: `${amenitiesHeight}px` }}
        className="amenity-list--amenity-container"
      >
        {showList}
      </Box>
    </Box>
  );
};
