import React, { useState } from "react";
import "./reservationCheckOutBeta.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { Button } from "../../atoms/button/Button";
import BranchData from "../../utils/objects/BranchData";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { RestaurantDetails } from "../../molecules/restaurantDetails/restaurantDetails";

interface ReservationCheckOutBeta {
  /**
   * Component width
   */
  headerArgs?: HeaderProps;
  /**
   * Color of Submit button
   */
  submitButtonColor: string;
  /**
   * Valid start hour for reservation
   */
  validHoursIn: OptionObject[];
  /**
   * Valid end hour for reservation
   */
  validHoursOut: OptionObject[];

  /**
   * Show error message in client form
   */
  firstNameError  : boolean;
  lastNameError  : boolean;
  emailError  : boolean;
  phoneError  : boolean;

  dateError  : boolean;
  hourInError  : boolean;
  personsError  : boolean;

  /**
   * Text for error message in client form
   */
  firstNameErrorMessage : string;
  lastNameErrorMessage : string;
  emailErrorMessage : string;
  phoneErrorMessage : string;

  dateErrorMessage : string;
  hourInErrorMessage : string;
  personsErrorMessage : string;
  /**
   * Get Branch data
   */
  getBranchData: () => BranchData;
  /**
   * On Header left section button click function
   */
  onMapsClick: () => void;

  /**
   * Indicate if the client data is valid
   */
  validateClientData?: (
    name: string,
    surname: string,
    email: string,
    phone: string
  ) => boolean;

  /**
   * On submit
   */
  onSubmit: (
    date: Date,
    persons: number,
    hourIn: string,
    hourOut: string | null,
    petition: string | null,
    occasion: string | null
  ) => void;
}

/**
 * Primary UI component for user interaction
 */
export const ReservationCheckOutBeta = ({
  getBranchData,
  onMapsClick,
  onSubmit,
  headerArgs,
  submitButtonColor,
  validHoursIn,
  validHoursOut,
  firstNameError,
  firstNameErrorMessage,
  lastNameError,
  lastNameErrorMessage,
  emailError,
  emailErrorMessage,
  phoneError,
  phoneErrorMessage,

  dateError,
  dateErrorMessage,
  hourInError,
  hourInErrorMessage,
  personsError,
  personsErrorMessage,

  ...props
}: ReservationCheckOutBeta) => {
  const branch = getBranchData();

  // Reservation data
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hourIn, setHourIn] = useState<OptionObject | undefined>(undefined);
  const [hourOut, setHourOut] = useState<OptionObject | undefined>(undefined);
  const [persons, setPersons] = useState<string | undefined>(undefined);
  const [occasion, setOccasion] = useState<string | undefined>(undefined);
  const [petition, setPetition] = useState<string | undefined>(undefined);

  // Client data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BasicPage headerArgs={headerArgs}>
      <Box>
        <Box className="left-content-box">
          <Box>
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

          {/* Client Form */}
          <Box className="white-background-box" weakShadow>
            <ClientInfoForm
              firstName = {firstName}
              setFirstName = {setFirstName}
              firstNameError = {firstNameError}
              firstNameErrorMessage = {firstNameErrorMessage}
              lastName = {lastName}
              setLastName = {setLastName}
              lastNameError = {lastNameError}
              lastNameErrorMessage = {lastNameErrorMessage}
              email = {email}
              setEmail = {setEmail}
              emailError = {emailError}
              emailErrorMessage = {emailErrorMessage}
              phone = {phone}
              setPhone = {setPhone}
              phoneError = {phoneError}
              phoneErrorMessage = {phoneErrorMessage}
            />
          </Box>

          {/* Reservation Form */}
          <Box>
            <ReserveDetails
              date={date}
              setDate={setDate}
              dateError={dateError}
              dateErrorMessage={dateErrorMessage}
              hourIn={hourIn}
              setHourIn={setHourIn}
              hourInError={hourInError}
              hourInErrorMessage={hourInErrorMessage}
              validHoursIn={validHoursIn}
              hourOut={hourOut}
              setHourOut={setHourOut}
              validHoursOut={validHoursOut}
              persons={persons}
              setPersons={setPersons}
              personsError={personsError}
              personsErrorMessage={personsErrorMessage}
              occasion={occasion}
              setOccasion={setOccasion}
              petition={petition}
              setPetition={setPetition}
              showInviteFriends={false}
            />
          </Box>

          {/* Submit Button */}
          <Box className="white-background-box" weakShadow>
            <Button
              fullWidth
              primary
              size="large"
              backgroundColor={submitButtonColor}
              onClick={() =>
                onSubmit(
                  date!,
                  parseInt(persons!),
                  typeof hourIn!.value === "string"
                    ? hourIn!.value
                    : hourIn!.value.toString(),
                  typeof hourOut!.value === "string"
                    ? hourOut!.value
                    : hourOut!.value.toString(),
                  petition!,
                  occasion!
                )
              }
            >
              <Box className="login-form--button-text">
                <Text color="white" type="h6" weight="600">
                  Completar Reserva
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
