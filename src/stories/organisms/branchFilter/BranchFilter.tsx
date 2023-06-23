import React, { useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Range } from "../../atoms/range/Range";
import styles from "./branchFilter.module.scss";
import getValidHours from "../../utils/getValidHours";
import { InputFormHook } from "../../hooks/useInputForm";
import CheckObject from "../../utils/objects/CheckObject";
import OptionObject from "../../utils/objects/OptionObject";
import { StarRating } from "../../atoms/starRating/StarRating";
import { CheckList } from "../../molecules/checkList/CheckList";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";

export interface BranchFilterProps {
  /**
   * Minimum price
   */
  min: number;
  /**
   * Maximum price
   */
  max: number;
  /**
   * Current price range
   */
  prices: number[];
  /**
   * Function that change price range
   */
  setPrices: (numbers: number[]) => void;
  /**
   * Start hour input hook
   */
  startHour: InputFormHook<OptionObject<string | null>>;
  /**
   * Current end hour
   */
  endHour: InputFormHook<OptionObject<string | null>>;
  /**
   * Current minimum rating
   */
  rating: number;
  /**
   * Function that change rating
   */
  setRating: (value: number) => void;
  /**
   * Current cousines values
   */
  cousines: CheckObject[];
  /**
   * Function that change cousines values
   */
  setCousines: (objects: CheckObject[]) => void;
  /**
   * Current zones values
   */
  zones: CheckObject[];
  /**
   * Function that change zones values
   */
  setZones: (objects: CheckObject[]) => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchFilter = ({
  min,
  max,
  prices,
  setPrices,
  startHour,
  endHour,
  rating,
  setRating,
  cousines,
  setCousines,
  zones,
  setZones,
  color,
  width,
  height,
  ...props
}: BranchFilterProps) => {
  const [zoneView, setZoneView] = useState(false);
  const [hoursView, setHoursView] = useState(false);
  const [pricesView, setPricesView] = useState(false);
  const [ratingView, setRatingView] = useState(false);
  const [cousineView, setCousineView] = useState(false);

  const checkboxHeight = (length: number) => `${length * 29 + 32}px`;

  return (
    <Box
      className={styles["branch-filter--container"]}
      style={{ width, height }}
    >
      <Box>
        <Box>
          <Text type="h5" weight="600">
            Filtros
          </Text>
        </Box>

        <Box className={styles["branch-filter--item-container"]}>
          <Box
            className={styles["branch-filter--item-header"]}
            onClick={() => setPricesView(!pricesView)}
          >
            <Text> Precio </Text>
            <Icon icon={pricesView ? "up" : "down"} size="24px" />
          </Box>

          <Box
            style={{
              opacity: pricesView ? 1 : 0,
              top: pricesView ? 0 : -50,
              height: pricesView ? "120px" : "0px",
            }}
            className={styles["branch-filter--animation"]}
          >
            <Box className={styles["branch-filter--range"]}>
              <Range
                values={prices}
                setValues={setPrices}
                min={min}
                max={max}
                minMark={`$${min}`}
                maxMark={`+$${max}`}
                labelFunct={(price: number) => `$${price}`}
                displayLabels
                color={color}
              />
            </Box>
          </Box>

          <Box backgroundColor="#C4C8C4" height="1px" width="100%" />
        </Box>

        <Box className={styles["branch-filter--item-container"]}>
          <Box
            className={styles["branch-filter--item-header"]}
            onClick={() => setHoursView(!hoursView)}
          >
            <Text> Horarios </Text>
            <Icon icon={hoursView ? "up" : "down"} size="24px" />
          </Box>

          <Box
            style={{
              opacity: hoursView ? 1 : 0,
              top: hoursView ? 0 : -50,
              height: hoursView ? "120px" : "0px",
            }}
            className={styles["branch-filter--animation"]}
          >
            <Box className={styles["branch-filter--hours-container"]}>
              <Box className={styles["branch-filter--hour"]}>
                <InputSelect
                  label="Mínimo"
                  inputHook={startHour}
                  options={getValidHours()}
                  width="100%"
                  showError={false}
                />
              </Box>

              <Box className={styles["branch-filter--hour-conector"]}>
                <Text>a</Text>
              </Box>

              <Box className={styles["branch-filter--hour"]}>
                <InputSelect
                  label="Máximo"
                  inputHook={endHour}
                  options={getValidHours()}
                  width="100%"
                  showError={false}
                />
              </Box>
            </Box>
          </Box>

          <Box backgroundColor="#C4C8C4" height="1px" width="100%" />
        </Box>

        <Box className={styles["branch-filter--item-container"]}>
          <Box
            className={styles["branch-filter--item-header"]}
            onClick={() => setRatingView(!ratingView)}
          >
            <Text> Rating </Text>
            <Icon icon={ratingView ? "up" : "down"} size="24px" />
          </Box>

          <Box
            style={{
              opacity: ratingView ? 1 : 0,
              top: ratingView ? 0 : -50,
              height: ratingView ? "70px" : "0px",
            }}
            className={styles["branch-filter--animation"]}
          >
            <Box className={styles["branch-filter--rating"]}>
              <StarRating
                rating={rating}
                setRating={setRating}
                size={37.5}
                color={color}
              />
            </Box>
          </Box>

          <Box backgroundColor="#C4C8C4" height="1px" width="100%" />
        </Box>

        <Box className={styles["branch-filter--item-container"]}>
          <Box
            className={styles["branch-filter--item-header"]}
            onClick={() => setCousineView(!cousineView)}
          >
            <Text> Cocina </Text>
            <Icon icon={cousineView ? "up" : "down"} size="24px" />
          </Box>

          <Box
            style={{
              opacity: cousineView ? 1 : 0,
              top: cousineView ? 0 : -50,
              height: cousineView
                ? `${checkboxHeight(cousines.length)}`
                : "0px",
            }}
            className={styles["branch-filter--animation"]}
          >
            <Box className={styles["branch-filter--check-list"]}>
              <CheckList items={cousines} setItems={setCousines} />
            </Box>
          </Box>

          <Box backgroundColor="#C4C8C4" height="1px" width="100%" />
        </Box>

        <Box className={styles["branch-filter--item-container"]}>
          <Box
            className={styles["branch-filter--item-header"]}
            onClick={() => setZoneView(!zoneView)}
          >
            <Text> Zona </Text>
            <Icon icon={zoneView ? "up" : "down"} size="24px" />
          </Box>

          <Box
            style={{
              opacity: zoneView ? 1 : 0,
              top: zoneView ? 0 : -50,
              height: zoneView ? `${checkboxHeight(zones.length)}` : "0px",
            }}
            className={styles["branch-filter--animation"]}
          >
            <Box className={styles["branch-filter--check-list"]}>
              <CheckList items={zones} setItems={setZones} />
            </Box>
          </Box>

          <Box backgroundColor="#C4C8C4" height="1px" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};
