import React, { useState } from "react";
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
import { Button } from "../../atoms/button/Button";
import { Text } from "../../atoms/text/Text";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import OptionObject from "../../utils/objects/OptionObject";

interface ReservationCheckOut {
  /**
   * Component width
   */
  headerArgs?: HeaderProps;
  /**
   * Path from Home to current page
   */
  path: { name: string; onClick: () => void }[];
  color: string;
  validHoursIn: OptionObject[];
  validHoursOut: OptionObject[];
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
  getReservationPrice: () => ReservationDetail[];
  /**
   * On submit
   */
  onSubmit: (date:Date,persons:number,hourIn:string,hourOut:string|null, petition:string|null, occasion:string|null,) => void;
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
  onSubmit,
  onGoogleSignUp,
  getReservationPrice,
  headerArgs,
  color,
  path,
  validHoursIn,
  validHoursOut,
  ...props
}: ReservationCheckOut) => {

  const branch = getBranchData();
  const reservationPrice = getReservationPrice();

  const [date, setDate] = useState<Date|undefined>(undefined);
  const [hourIn, setHourIn] = useState<OptionObject|undefined>(undefined);
  const [hourOut, setHourOut] = useState<OptionObject|undefined>(undefined);
  const [persons, setPersons] = useState<string|undefined>(undefined);
  const [occasion, setOccasion] = useState<string|undefined>(undefined);
  const [petition, setPetition] = useState<string|undefined>(undefined);

  return (
    <BasicPage headerArgs={headerArgs}>
      <Box className="path-box">
        <Path
          path={path.concat([{ name: branch.name, onClick: () => {} }, { name: "Check Out", onClick: () => {} }])}
          color="orange"
          secondaryColor="black"
        />
      </Box>
      <Box className="branch-profile--main-content">
        <Box className="left-content-box">
          <Box className="RestaurantDetails-box">
            <RestaurantDetails
              onClick={onMapsClick}
              branchName={branch.name}
              zone="Estandar"
              textColor="#FF8682"
              buttonColor="#EF7A08"
              borderColor="#8DD3BB"
              price={branch.price}
              backgroundImage={branch.thumbnail}
              iconList={branch.amenities}
              location={branch.location}
            />
          </Box>
          {/* <Box className="auth-form-box">
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
          </Box> */}
          <Box>
            <ReserveDetails
              date={date}
              setDate={setDate}
              hourIn={hourIn}
              setHourIn={setHourIn}
              validHoursIn={validHoursIn}
              hourOut={hourOut}
              setHourOut={setHourOut}
              validHoursOut={validHoursOut}
              persons={persons}
              setPersons={setPersons}
              occasion={occasion}
              setOccasion={setOccasion}
              petition={petition}
              setPetition={setPetition}
            />
          </Box>
          <Box className="button-box" weakShadow>
            <Button
              fullWidth
              primary
              size="large"
              backgroundColor={color}
              onClick={() => onSubmit(date,persons, hourIn, hourOut, petition, occasion)}
            >
              <Box className="login-form--button-text">
                <Text color="white" type="h6" weight="600">
                  Completar Reserva
                </Text>
              </Box>
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
            backgroundImage={branch.thumbnail}
            detailsList={reservationPrice}
          />
        </Box>
      </Box>
    </BasicPage>
  );
};
