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
import ReservationDetail from '../../utils/objects/ReservationDetail';
import { Button } from "@mui/material";

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
  /**
   * On Header left section button click function
   */
  onMapsClick: () => void;
  /**
   * On login button click
   */
  onLogin: () => void;
  /**
   * On forgot password click
   */
  onForgotClick: () => void;
  /**
   * On sign up click
   */
  onSignUp: () => void;
  /**
   * On sign up using Google click
   */
  onGoogleSignUp: () => void;
  /**
   * Get Reservation details
   */
  getReservationDetails: () => ReservationDetail[];
  /**
   * On submit
   */
  onSubmit: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ReservationCheckOut = ({
  getBranchData,
  onMapsClick,
  onLogin,
  onForgotClick,
  onSignUp,
  onGoogleSignUp,
  getReservationDetails,
  headerArgs,
  path,
  ...props
}: ReservationCheckOut) => {

  const branch = getBranchData();
  const reservationDetails = getReservationDetails();

  return (
    <BasicPage headerArgs={headerArgs}>
        <Box className="branch-profile--path">
          <Path
            path={path.concat([{ name: branch.name, onClick: () => {} }, { name: "Check Out", onClick: () => {} }])}
            color="orange"
            secondaryColor="black"
          />
        <Box className="branch-profile--main-content">
          <Box>
            <RestaurantDetails
              onClick={onMapsClick}
              branchName={branch.name}
              zone="Estandar"
              textColor="#FF8682"
              buttonColor="#EF7A08"
              borderColor="#8DD3BB"
              price={branch.price}
              width="600px"
              height="350px"
              backgroundImage={branch.thumbnail}
              iconList={branch.amenities}
              location={branch.location}
            />
            <Box className="details-card--container">
              <LoginForm
                onLogin={onLogin}
                onForgotClick={onForgotClick}
                onSignUp={onSignUp}
                onGoogleSignUp={onSignUp}
                color="#EF7A08"
                secondaryColor="#FF8682"
                otherLoginsColor="#8DD3BB"
                width="600px"
                height="350px"
              />
              <SignUpForm
                onLogin={onLogin}
                onForgotClick={onForgotClick}
                onSignUp={onSignUp}
                onGoogleSignUp={onSignUp}
                color="#EF7A08"
                secondaryColor="#FF8682"
                otherLoginsColor="#8DD3BB"
                width="600px"
                height="350px"
              />
            </Box>
            <Box>
              <Button>
                
              </Button>
            </Box>
          </Box>
          <Box>
            <ReservationDetails
              branchName={branch.name}
              color="#EF7A08"
              text="Tu reserva está protegida por Pa´Ca"
              score={branch.score}
              reviews={branch.reviews}
              width="600px"
              height="350px"
              backgroundImage={branch.thumbnail}
              detailsList={reservationDetails}
            />
          </Box>
        </Box>

        </Box>
    </BasicPage>
  );
};
