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
   * On forgot password click
   */
  onForgotClick: () => void;
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
  onForgotClick,
  onSubmit,
  headerArgs,
  color,
  path,
  validHoursIn,
  validHoursOut,
  ...props
}: ReservationCheckOutBeta) => {
  const branch = getBranchData();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hourIn, setHourIn] = useState<OptionObject | undefined>(undefined);
  const [hourOut, setHourOut] = useState<OptionObject | undefined>(undefined);
  const [persons, setPersons] = useState<string | undefined>(undefined);
  const [occasion, setOccasion] = useState<string | undefined>(undefined);
  const [petition, setPetition] = useState<string | undefined>(undefined);

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
          <Box className="white-background-box" weakShadow>
            <ClientInfoForm
              color="#EF7A08"
              secondaryColor="#FF8682"
              otherLoginsColor="#8DD3BB"
            />
          </Box>
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
              showInviteFriends={false}
            />
          </Box>
          <Box className="white-background-box" weakShadow>
            <Button
              fullWidth
              primary
              size="large"
              backgroundColor={color}
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
