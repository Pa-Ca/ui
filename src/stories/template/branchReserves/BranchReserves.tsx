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
import { ReservationFilters } from "../../organisms/reservationFilters/ReservationFilters";
import { PastReservationList } from "../../organisms/pastReservationList/PastReservationList";

interface BranchReservesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Reservation list with status started
   */
  startedReservationList: ReservationProps[];
  /**
   * Reservation list with status accepted
   */
  acceptedReservationList: ReservationProps[];
  /**
   * Reservation list with status pending
   */
  pendingReservationList: ReservationProps[];
  /**
   * Reservation list with status rejected, retired or closed
   */
  historicReservationList: ReservationProps[];
  /**
   * Total number of reservation with status rejected, retired or closed
   */
  historicReservationListTotalLenght: number;
  /**
   * Current past sale page
   */
  historicCurrentPage: number;
  /**
   * Filter by Reservation startDate
   */
  filterStartDate: InputFormHook<Date|null>;
  /**
   * Filter by Reservation endDate
   */
  filterEndDate: InputFormHook<Date|null>;
  /**
   * Filter by Reservation status
   */
  filterStatus: InputFormHook<OptionObject<string | null>>;
  /**
   * Valid status options for filter
   */
  filterStatusOptions?: OptionObject<string>[];
  /**
   * Identity document options Option Object for filter
   */
  filterIdentityDocumentTypeOpt?: OptionObject<string>[];
  /**
   * Filter by  Identity document options
   */
  filterIdentityDocumentType: InputFormHook<OptionObject<string | null>>;
  /**
   * Filter by Identity document
   */
  filterIdentityDocument: InputFormHook<string>;
  /**
   * Filter by Full client name of the reservation owner
   */
  filterFullName: InputFormHook<string>;
  /**
   * Submit filters for reservation
   */
  onGetReservationsFiltered: () => void;
  /**
   * Main color
   */
  color?: string;
  /**
   * Identity document options Option Object
   */
  identityDocumentTypeOpt?: OptionObject<string>[];
  /**
   * Identity document options input hook
   */
  identityDocumentType: InputFormHook<OptionObject<string | null>>;
  /**
   * Identity document input hook
   */
  identityDocument: InputFormHook<string>;
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
  date: InputFormHook<Date|null>;
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
   * Number of tables in the reservation
   */
  tables: InputFormHook<string>;
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
  /**
   * Submit fuction
   */
  onGetGuest: () => void;
  /**
   * On next page
   */
  onNextPage: () => void;
  /**
   * On previous page
   */
  onPreviousPage: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BranchReserves = ({
  header,
  startedReservationList,
  acceptedReservationList,
  pendingReservationList,
  historicReservationList,
  historicCurrentPage,
  historicReservationListTotalLenght,
  filterStartDate,
  filterEndDate,
  filterStatus,
  filterStatusOptions,
  filterIdentityDocumentTypeOpt,
  filterIdentityDocumentType,
  filterIdentityDocument,
  filterFullName,
  durationHour,
  durationMin,
  identityDocumentTypeOpt,
  identityDocumentType,
  identityDocument,
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
  tables,
  occasion,
  haveBranch = true,
  icon_size,
  showModal,
  setShowModal,
  onSubmit,
  onGetGuest,
  onGetReservationsFiltered,
  onNextPage,
  onPreviousPage,
  ...props
}: BranchReservesProps) => {
  const windowSize = useWindowResize();

  const PageWrapper = useMemo(() => {
    return windowSize.resolutionType === "desktop"
      ? BasicPage
      : BasicMobilePage;
  }, [windowSize.resolutionType]);

  const [page, setPage] = useState(0);
  const [currentStartedReservation, setCurrentStartedReservation] = useState<
    ReservationProps[]
  >([]);
  const [currentAcceptedReservation, setCurrentAcceptedReservation] = useState<
    ReservationProps[]
  >([]);
  const [currentPendingReservation, setCurrentPendingReservation] = useState<
    ReservationProps[]
  >([]);

  const observerTab = useResizeObserver<HTMLDivElement>();
  const observerContainer = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (observerTab.ref.current && observerContainer.ref.current) {
      observerContainer.ref.current.scrollLeft = page * (observerTab.width / 4);
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
              `Reservas En Curso (${startedReservationList.length})`,
              `Reservas Aceptadas (${acceptedReservationList.length})`,
              `Reservas Pendientes (${pendingReservationList.length})`,
              `Histórico  (${historicReservationListTotalLenght})`,
            ]}
          />
        </Box>

        <Box
          className={styles["branch-reserves--content-container"]}
          innerRef={observerContainer.ref}
        >
          {haveBranch ? (
            <Box
              width="400%"
              className={styles["branch-reserves--content"]}
              innerRef={observerTab.ref}
            >

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={startedReservationList}
                  setCurrentList={setCurrentStartedReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentStartedReservation}
                    state={1}
                    setShowModal={setShowModal}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={acceptedReservationList}
                  setCurrentList={setCurrentAcceptedReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentAcceptedReservation}
                    state={2}
                    setShowModal={setShowModal}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>

                <Paginable
                  list={pendingReservationList}
                  setCurrentList={setCurrentPendingReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    icon_size={icon_size}
                    reservations={currentPendingReservation}
                    state={3}
                    setShowModal={setShowModal}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <ReservationFilters
                  startDate={filterStartDate}
                  endDate={filterEndDate}
                  status={filterStatus}
                  statusOptions={filterStatusOptions}
                  identityDocument={filterIdentityDocument}
                  identityDocumentType={filterIdentityDocumentType}
                  identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
                  fullName={filterFullName}
                  onGetReservationsFiltered={onGetReservationsFiltered}
                />  
                <PastReservationList
                  pastReservations={historicReservationList}
                  page={historicCurrentPage}
                  totalPages={10}
                  onNextPage={onNextPage}
                  onPreviousPage={onPreviousPage}
                />
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
              onGetGuest={onGetGuest}
              identityDocumentType={identityDocumentType}
              identityDocument={identityDocument}
              identityDocumentTypeOpt={identityDocumentTypeOpt}
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
              tables={tables}
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
