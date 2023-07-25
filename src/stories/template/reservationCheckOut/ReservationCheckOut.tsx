import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Path } from "../../molecules/path/Path";
import { Button } from "../../atoms/button/Button";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import styles from "./reservationCheckOut.module.scss";
import BranchData from "../../utils/objects/BranchData";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import ReservationDetail from "../../utils/objects/ReservationDetail";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import { RestaurantDetails } from "../../molecules/restaurantDetails/restaurantDetails";
import { ReservationDetails } from "../../molecules/reservationDetails/reservationDetails";

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
   * Valid hours in
   */
  validHoursIn: OptionObject<string>[];
  /**
   * Valid hours out
   */
  validHoursOut: OptionObject<string>[];
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
  onSubmit: (
    date: InputFormHook<Date|null>,
    persons: InputFormHook<string>,
    hourIn: InputFormHook<OptionObject<string | null>>,
    hourOut: InputFormHook<OptionObject<string | null>>,
    occasion: InputFormHook<string>
  ) => void;
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
  path,
  validHoursIn,
  validHoursOut,
  ...props
}: ReservationCheckOut) => {
  const branch = getBranchData();
  const tables = useInputForm<string>("");
  const reservationPrice = getReservationPrice();

  const date = useInputForm<Date>(new Date());
  const hourIn = useInputForm<OptionObject<string | null>>({
    label: "",
    value: null,
  });
  const hourOut = useInputForm<OptionObject<string | null>>({
    label: "",
    value: null,
  });
  const persons = useInputForm<string>("");
  const occasion = useInputForm<string>("");

  return (
    <BasicPage headerArgs={headerArgs}>
      <Box className={styles["reservation-checkout-path-box"]}>
        <Path
          path={path.concat([
            { name: branch.name, onClick: () => {} },
            { name: "Check Out", onClick: () => {} },
          ])}
          color="orange"
          secondaryColor="black"
        />
      </Box>
      <Box
        className={styles["reservation-checkout-branch-profile--main-content"]}
      >
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
              tables={tables}
              hourIn={hourIn}
              validHoursIn={validHoursIn}
              hourOut={hourOut}
              validHoursOut={validHoursOut}
              persons={persons}
              occasion={occasion}
              showInviteFriends={false}
              durationHour={2}
              durationMin={2}
            />
          </Box>
          <Box className={styles["reservation-checkout-button-box"]} weakShadow>
            <Button
              fullWidth
              primary
              size="large"
              onClick={() => onSubmit(date, persons, hourIn, hourOut, occasion)}
            >
              <Box
                className={
                  styles["reservation-checkout-login-form--button-text"]
                }
              >
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
            color="#8DD3BB"
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
