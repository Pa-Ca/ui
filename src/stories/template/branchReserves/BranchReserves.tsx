import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./branchReserves.module.scss";
import { Button } from "../../atoms/button/Button";
import { BasicPage } from "../basicPage/BasicPage";
import { Modal } from "../../molecules/modal/Modal";
import { InputFormHook } from "../../hooks/useInputForm";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import { Paginable } from "../../molecules/paginable/Paginable";
import { ReserveList } from "../../organisms/reserveList/ReserveList";
import { ReservationProps } from "../../molecules/reservation/Reservation";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";

interface BranchReservesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Reservation list data
   */
  reservations: ReservationProps[];
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
   * Branch avrg reservation time hour
   */
  durationHour: number;
  /**
   * Branch avrg reservation time minute
   */
  durationMin: number;
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
  durationHour,
  durationMin,
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
  icon_size,
  showModal,
  setShowModal,
  onSubmit,
  ...props
}: BranchReservesProps) => {
  const [page, setPage] = useState(0);
  const [currentActiveReservation, setCurrentActiveReservation] = useState<
    ReservationProps[]
  >([]);
  const [currentPendingReservation, setCurrentPendingReservation] = useState<
    ReservationProps[]
  >([]);
  const observer = useResizeObserver<HTMLDivElement>();

  // Ordered reservations by date
  reservations.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  // Filter reservations by state equals to 2
  const activeReservations = useMemo(
    () => reservations.filter((reservation) => reservation.state === 2),
    [reservations]
  );

  // Filter reservations by state equals to 1
  const pendingReservations = useMemo(
    () => reservations.filter((reservation) => reservation.state === 1),
    [reservations]
  );

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * (observer.width + 30);
    }
  }, [observer.width, page]);

  return (
    <BasicPage headerArgs={header}>
      {/* Reserve type */}
      <Box width="100%" className={styles["branch-reserves--header"]}>
        <InputTab
          index={page}
          setIndex={setPage}
          tabs={[
            `Reservas Activas (${activeReservations.length})`,
            `Reservas Pendientes (${pendingReservations.length})`,
          ]}
        />
      </Box>

      <Box
        className={styles["branch-reserves--content-container"]}
        innerRef={observer.ref}
      >
        {haveBranch ? (
          <Box width="200%" className={styles["branch-reserves--content"]}>
            <Box width="100%">
              <Paginable
                list={activeReservations}
                setCurrentList={setCurrentActiveReservation}
                objectsPerPage={10}
              >
                <ReserveList
                  icon_size={icon_size}
                  reservations={currentActiveReservation}
                  color={color}
                  state={2}
                  setShowModal={setShowModal}
                />
                <Box height="40px" />
              </Paginable>
            </Box>

            <Box width="30px" />

            <Box width="100%">
              <Paginable
                list={pendingReservations}
                setCurrentList={setCurrentPendingReservation}
                objectsPerPage={10}
              >
                <ReserveList
                  icon_size={icon_size}
                  reservations={currentPendingReservation}
                  color={color}
                  state={1}
                  setShowModal={setShowModal}
                />
                <Box height="40px" />
              </Paginable>
            </Box>
          </Box>
        ) : (
          <Box className={styles["branch-reserves--no-branch-box"]}>
            {" "}
            <Icon icon="share" size={icon_size} />
            <Text> Parece que no tienes ningún local asociado. </Text>
          </Box>
        )}
      </Box>

      <Modal open={showModal} setOpen={setShowModal}>
        <Box width="720px">
          {/* Client Form */}
          <ClientInfoForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
          />

          {/* Reservation Form */}
          <ReserveDetails
            durationHour={durationHour}
            durationMin={durationMin}
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
            onClick={() => onSubmit()}
          >
            <Box
              className={
                styles["branch-reserves--submit-reservation--button-text"]
              }
            >
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
