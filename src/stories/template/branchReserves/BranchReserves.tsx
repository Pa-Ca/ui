import React, { useEffect, useState } from "react";
import "./branchReserves.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { BasicPage } from "../basicPage/BasicPage";
import { Modal } from "../../molecules/modal/Modal";
import { InputFormHook } from "../../hooks/useInputForm";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import ReservationList from "../../utils/objects/ReservationList";
import { ReserveList } from "../../organisms/reserveList/ReserveList";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import { Icon } from "../../atoms/icon/Icon";

interface BranchReservesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Reservation list data
   */
  reservations: ReservationList[];
  /**
   * Main color
   */
  color?: string;
  /**
   * Client first name input hook
   */
  firstName: InputFormHook<string>;
  /**
   * Client last name input hook
   */
  lastName: InputFormHook<string>;
  /**
   * Client phone input hook
   */
  phone: InputFormHook<string>;
  /**
   * Client email input hook
   */
  email: InputFormHook<string>;
  /**
   * Reservation date input hook
   */
  date: InputFormHook<Date>;
  /**
   * Reservation hourIn input hook
   */
  hourIn: InputFormHook<OptionObject>;
  /**
   * List of valid start hour for reservation
   */
  validHoursIn: OptionObject[];
  /**
   * Reservation hourIn input hook
  */
  hourOut: InputFormHook<OptionObject>;
  /**
  * List of valid end hours for reservation
  */
  validHoursOut: OptionObject[];
  /**
  * Reservation persons number input hook
  */
  persons: InputFormHook<string>;
  /**
   * Reservation occasion input hook
   */
  occasion: InputFormHook<string>;
  /**
   * Color of the submit button
   */
  submitButtonColor: string;
  /**
   * Controls if modal is shown
   */
  showModal: boolean;
  /**
   * Indicates if any branch is being shown
   */
  haveBranch?: boolean;
  /**
   * Icon size
   */
  icon_size: string;
  /**
   * Controls if modal is shown
   */
  setShowModal: (open: boolean) => void;
  /**
   * Submit fuction
   */
  onSubmit: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BranchReserves = ({
  reservations,
  color,
  header,
  firstName,
  lastName,
  phone,
  email,
  date,
  hourIn,
  validHoursIn,
  hourOut,
  validHoursOut,
  persons,
  occasion,
  submitButtonColor,
  haveBranch = true,
  icon_size = "400px",
  showModal,
  setShowModal,
  onSubmit,
  ...props
}: BranchReservesProps) => {
  const [page, setPage] = useState(0);
  const observer = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * (observer.width + 30);
    }
  }, [observer.width, page]);

  return (
    <BasicPage headerArgs={header}>
      {/* Reserve type */}
      <Box width="100%" className="branch-reserve--header">
        <InputTab
          index={page}
          setIndex={setPage}
          tabs={["Reservas Activas", "Reservas Pendientes"]}
        />
      </Box>

      <Box
        className="branch-reserve--content-container"
        innerRef={observer.ref}
      >
        {haveBranch ? (
          <Box width="200%" className="branch-reserve--content">
            <Box width="100%">
              <ReserveList reservations={reservations}
                color={color}
                state={1}
                setShowModal={setShowModal} />
            </Box>
            <Box width="30px" />
            <Box width="100%">
              <ReserveList 
                reservations={reservations}
                color={color}
                state={0}
                setShowModal={setShowModal} />
            </Box>
          </Box>
        ) : (
          <Box className="no-branch-box">
            {" "}
            <Icon icon="share" size={icon_size} />
            <Text> Parece que no tienes ningún local asociado. </Text>
          </Box>
        )}
      </Box>

      <Modal open={showModal} setOpen={setShowModal}>
        <Box className="create-reservation-modal--container">

            {/* Client Form */}
            <ClientInfoForm
                firstName = {firstName}
                lastName = {lastName}
                email = {email}
                phone={phone}
            />

            {/* Reservation Form */}
            <ReserveDetails
                date={date}
                hourIn={hourIn}
                validHoursIn={validHoursIn}
                hourOut={hourOut}
                validHoursOut={validHoursOut}
                persons={persons}
                occasion={occasion}
                showInviteFriends={false}
            />

            {/* Submit Button */}
            <Button
                fullWidth
                primary
                size="large"
                backgroundColor={submitButtonColor}
                onClick={() => onSubmit() }
            >
                <Box className="login-form--button-text">
                <Text color="white" type="h6" weight="600">
                    Completar Reserva
                </Text>
                </Box>
            </Button>
        </Box>
      </Modal>
    </BasicPage>
  );
};
