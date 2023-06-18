import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./branchReserves.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import useThemeProvider from "../../hooks/useThemeProvider";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { Paginable } from "../../molecules/paginable/Paginable";
import { ReserveList } from "../../organisms/reserveList/ReserveList";
import { ReservationProps } from "../../molecules/reservation/Reservation";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";

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
  hourIn: InputFormHook<OptionObject<string | null>>;
  /**
   * List of valid start hour for reservation
   */
  validHoursIn: OptionObject<string>[];
  /**
   * Reservation hourIn input hook
   */
  hourOut: InputFormHook<OptionObject<string | null>>;
  /**
   * List of valid end hours for reservation
   */
  validHoursOut: OptionObject<string>[];
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
   * Color of the cancel button
   */
  cancelButtonColor: string;
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
  haveBranch = true,
  icon_size,
  showModal,
  setShowModal,
  onSubmit,
  ...props
}: BranchReservesProps) => {
  const windowSize = useWindowResize();

  const PageWrapper = useMemo(() => {
    return windowSize.resolutionType === "desktop"
      ? BasicPage
      : BasicMobilePage;
  }, [windowSize.resolutionType]);

  const [page, setPage] = useState(0);
  const [currentActiveReservation, setCurrentActiveReservation] = useState<
    ReservationProps[]
  >([]);
  const [currentPendingReservation, setCurrentPendingReservation] = useState<
    ReservationProps[]
  >([]);

  const [currentHistoricReservation, setCurrentHistoricReservation] = useState<
    ReservationProps[]
  >([]);

  const observerTab = useResizeObserver<HTMLDivElement>();
  const observerContainer = useResizeObserver<HTMLDivElement>();

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

  // Filter all other previosly filter reservations by state
  const historicReservation = useMemo(
    () =>
      reservations.filter(
        (reservation) => reservation.state !== 1 && reservation.state !== 2
      ),
    [reservations]
  );

  useEffect(() => {
    if (observerTab.ref.current && observerContainer.ref.current) {
      observerContainer.ref.current.scrollLeft = page * (observerTab.width / 3);
    }
  }, [observerTab.width, page]);

  // Get the theme from the provider
  const { isDarkMode } = useThemeProvider();
  header.dark = isDarkMode;

  return (
    <PageWrapper headerArgs={header}>
      <Box>
        {/* Reserve type */}
        <Box width="100%" className={styles["branch-reserves--header"]}>
          <InputTab
            index={page}
            setIndex={setPage}
            tabs={[
              `Reservas Activas (${activeReservations.length})`,
              `Reservas Pendientes (${pendingReservations.length})`,
              `Histórico (${historicReservation.length})`,
            ]}
          />
        </Box>

        <Box
          className={styles["branch-reserves--content-container"]}
          innerRef={observerContainer.ref}
        >
          {haveBranch ? (
            <Box
              width="300%"
              className={styles["branch-reserves--content"]}
              innerRef={observerTab.ref}
            >
              <Box style={{ flex: 1 }}>
                <Paginable
                  list={activeReservations}
                  setCurrentList={setCurrentActiveReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentActiveReservation}
                    state={2}
                    setShowModal={setShowModal}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={pendingReservations}
                  setCurrentList={setCurrentPendingReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentPendingReservation}
                    state={1}
                    setShowModal={setShowModal}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={historicReservation}
                  setCurrentList={setCurrentHistoricReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentHistoricReservation}
                    state={3}
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

            <div className={styles["branch-reserves--modal-button-box"]}>
              {/* Cancel Button */}
              <Button
                fullWidth
                primary={false}
                size="medium"
                onClick={() => setShowModal(false)}
              >
                <Box
                  className={
                    styles["branch-reserves--submit-reservation--button-text"]
                  }
                >
                  <Text type="h6" weight="600">
                    Cerrar
                  </Text>
                </Box>
              </Button>

              <div style={{ width: "24px" }} />

              {/* Submit Button */}
              <Button
                fullWidth
                primary
                size="medium"
                onClick={() => onSubmit()}
              >
                <Box
                  className={
                    styles["branch-reserves--submit-reservation--button-text"]
                  }
                >
                  <Text primaryButtonStyle type="h6" weight="600">
                    Completar
                  </Text>
                </Box>
              </Button>
            </div>
          </Box>
        </Modal>
      </Box>
    </PageWrapper>
  );
};
