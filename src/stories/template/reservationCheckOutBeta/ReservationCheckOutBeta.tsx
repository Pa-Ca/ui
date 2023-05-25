import React from "react";
import "./reservationCheckOutBeta.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
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
  ...props
}: ReservationCheckOutBeta) => {
  const branch = getBranchData();

  // Reservation data
  const date = useInputForm<Date >(new Date());
  const hourIn = useInputForm<OptionObject >({ text: "", label: "" });
  const hourOut = useInputForm<OptionObject >({ text: "", label: "" });
  const persons = useInputForm<string >("");
  const occasion = useInputForm<string >("");

  // Client data
  const firstName = useInputForm("");
  const lastName = useInputForm("");
  const phone = useInputForm("");
  const email = useInputForm("");

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
              lastName = {lastName}
              email = {email}
              phone={phone}
            />
          </Box>

          {/* Reservation Form */}
          <Box>
            <ReserveDetails
              date={date}
              hourIn={hourIn}
              validHoursIn={validHoursIn}
              hourOut={hourOut}
              persons={persons}
              occasion={occasion}
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
                  date.value,
                  parseInt(persons.value),
                  typeof hourIn!.value === "string"
                    ? hourIn!.value
                    : hourIn!.value.toString(),
                  typeof hourOut!.value === "string"
                    ? hourOut!.value
                    : hourOut!.value.toString(),
                  occasion.value
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