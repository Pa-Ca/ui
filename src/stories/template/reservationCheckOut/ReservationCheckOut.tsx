import React from "react";
import "./reservationCheckOut.scss";
import { Box } from "../../atoms/box/Box";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";
import { Path } from "../../molecules/path/Path";
import BranchData from "../../utils/objects/BranchData";
import { RestaurantDetails } from "../../molecules/restaurantDetails/restaurantDetails";
import { ReservationDetails } from "../../molecules/reservationDetails/reservationDetails";
import { LoginForm } from "../../molecules/loginForm/LoginForm";
import { SignUpForm } from "../../molecules/signUpForm/SignUpForm";

interface ReservationCheckOut {
  /**
   * Component width
   */
  headerArgs?: HeaderProps;
  /**
   * Path from Home to current page
   */
  path: { name: string; onClick: () => void }[];
  /**
   * Get Branch data
   */
  getBranchData: () => BranchData;
}

/**
 * Primary UI component for user interaction
 */
export const ReservationCheckOut = ({
  getBranchData,
  headerArgs,
  path,
  ...props
}: ReservationCheckOut) => {

  const branch = getBranchData();

  return (
    <BasicPage headerArgs={headerArgs}>
        <Box className="branch-profile--path">
          <Path
            path={path.concat([{ name: branch.name, onClick: () => {} }, { name: "Check Out", onClick: () => {} }])}
            color="orange"
            secondaryColor="black"
          />
        </Box>
    </BasicPage>
  );
};
