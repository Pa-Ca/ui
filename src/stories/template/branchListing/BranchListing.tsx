import React from "react";
import styles from "./branchListing.module.scss";
import { Box } from "../../atoms/box/Box";
import { InputFormHook } from "../../hooks/useInputForm";
import CheckObject from "../../utils/objects/CheckObject";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { BranchBoard } from "../../organisms/branchBoard/BranchBoard";
import { BranchItemProps } from "../../organisms/branchItem/BranchItem";
import { BranchSearch } from "../../organisms/branchSearch/BranchSearch";
import { BranchFilter } from "../../organisms/branchFilter/BranchFilter";

interface BranchListing {
  /**
   * Date search search input hook
   */
  date: InputFormHook<Date|null>;
  /**
   * Hour search input hook
   */
  hour: InputFormHook<OptionObject<string | null>>;
  /**
   * Persons number search input hook
   */
  persons: InputFormHook<string>;
  /**
   * Branch search search input hook
   */
  search: InputFormHook<string>;
  /**
   * On search button click
   */
  onSearch?: () => void;

  /**
   * Filter minimum price
   */
  min: number;
  /**
   * Filter maximum price
   */
  max: number;
  /**
   * Filter current price range
   */
  prices: number[];
  /**
   * Function that change price range
   */
  setPrices: (numbers: number[]) => void;
  /**
   * Filter start hour input hook
   */
  startHour: InputFormHook<OptionObject<string | null>>;
  /**
   * Filter current end hour
   */
  endHour: InputFormHook<OptionObject<string | null>>;
  /**
   * Filter current minimum rating
   */
  rating: number;
  /**
   * Function that change rating
   */
  setRating: (value: number) => void;
  /**
   * Filter current cousines values
   */
  cousines: CheckObject[];
  /**
   * Function that change cousines values
   */
  setCousines: (objects: CheckObject[]) => void;
  /**
   * Filter current zones values
   */
  zones: CheckObject[];
  /**
   * Function that change zones values
   */
  setZones: (objects: CheckObject[]) => void;

  /**
   * Component width
   */
  headerArgs: HeaderProps;

  /**
   * All branch reviews
   */
  branches?: BranchItemProps[];
}

/**
 * Primary UI component for user interaction
 */
export const BranchListing = ({
  date,
  hour,
  persons,
  search,
  onSearch = () => {},

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

  headerArgs,
  branches,
  ...props
}: BranchListing) => {
  return (
    <BasicPage headerArgs={headerArgs}>
      <Box className={styles["branch-listing--container"]} weakShadow>
        <BranchSearch
          date={date}
          hour={hour}
          persons={persons}
          search={search}
          onClick={onSearch}
        />

        <Box className={styles["branch-listing--columns"]}>
          <Box className={styles["branch-listing--left-column"]}>
            <BranchFilter
              min={min}
              max={max}
              prices={prices}
              setPrices={setPrices}
              startHour={startHour}
              endHour={endHour}
              rating={rating}
              setRating={setRating}
              cousines={cousines}
              setCousines={setCousines}
              zones={zones}
              setZones={setZones}
            />

            {/*Create a vertical line */}
          </Box>

          <Box className={styles["branch-listing--vertical-line"]} />

          <Box className={styles["branch-listing--right-column"]}>
            <BranchBoard branches={branches} />
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
