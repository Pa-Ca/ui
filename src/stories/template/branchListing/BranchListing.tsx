import React from "react";
import "./branchListing.scss";
import { Box } from "../../atoms/box/Box";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";
import { BranchBoard } from "../../organisms/branchBoard/BranchBoard";
import { BranchItemProps } from "../../organisms/branchItem/BranchItem";
import { BranchSearch } from "../../organisms/branchSearch/BranchSearch";
import {
  BranchFilter,
  BranchFilterProps,
} from "../../organisms/branchFilter/BranchFilter";

interface BranchListing {
  /**
   * Component width
   */
  headerArgs?: HeaderProps;

  /**
   * All branch reviews
   */
  branches?: BranchItemProps[];

  /**
   * Branch filter object for the branch filter component
   */
  branchFilter?: BranchFilterProps;
}

/**
 * Primary UI component for user interaction
 */
export const BranchListing = ({
  headerArgs,
  branches,
  branchFilter = {
    min: 0,
    max: 100,
    prices: [0, 100],
    setPrices: () => {},
    startHour: { value: "00:00", name: "00:00" },
    setStartHour: () => {},
    endHour: { value: "00:00", name: "00:00" },
    setEndHour: () => {},
    rating: 0,
    setRating: () => {},
    cousines: [],
    setCousines: () => {},
    zones: [],
    setZones: () => {},
    color: "#EF7A08",
  },
  ...props
}: BranchListing) => {
  return (
    <BasicPage headerArgs={headerArgs}>
      <Box className="branch-listing--container" weakShadow>
        <BranchSearch />

        <Box className="branch-listing--columns">
          <Box className="branch-listing--left-column">
            <BranchFilter {...branchFilter} />

            {/*Create a vertical line */}
          </Box>

          <Box className="branch-listing--vertical-line" />

          <Box className="branch-listing--right-column">
            <BranchBoard branches={branches} />
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
