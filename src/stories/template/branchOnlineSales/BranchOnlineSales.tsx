import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./branchOnlineSales.module.scss";
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
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { OnlineSaleProps } from "../../molecules/onlineSale/OnlineSale";
import { Paginable } from "../../molecules/paginable/Paginable";
import { OnlineSaleList } from "../../organisms/onlineSaleList/OnlineSaleList";
import { OnlineSaleStatuses } from "../../utils/objects/OnlineSaleStatus";
import { OnlineSaleFilters } from "../../organisms/onlineSaleFilters/OnlineSaleFilters";
import { PastOnlineSaleList } from "../../organisms/pastOnlineSaleList/PastOnlineSaleList";

interface BranchOnlineSalesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Sales list with status started
   */
  startedSalesList: OnlineSaleProps[];
  /**
   * Sales list with status accepted
   */
  acceptedSalesList: OnlineSaleProps[];
  /**
   * Sales list with status pending
   */
  pendingSalesList: OnlineSaleProps[];
  /*
  * Sales list with status on the way
  */
  onTheWaySalesList: OnlineSaleProps[];
  /*
  * Sales list with status ready to take out
  */
  readyToTakeOutSalesList: OnlineSaleProps[];
  /*
  * Sales list with status delivered (Havent been paid by the client)
  */
  deliveredSalesList: OnlineSaleProps[];
  /**
   * Sales list with status rejected, retired or closed
   */
  historicSalesList: OnlineSaleProps[];
  /**
   * Total number of Sales with status rejected, retired or closed
   */
  historicSalesListTotalLenght: number;
  /**
   * Current past sale page
   */
  historicCurrentPage: number;
  /**
   * Total number of past sale pages
   */
  historicTotalPage: number;
  /**
   * Filter by Online sal startDate
   */
  filterStartDate: InputFormHook<Date | null>;
  /**
   * Filter by Online sal endDate
   */
  filterEndDate: InputFormHook<Date | null>;
  /**
   * Filter by Online sale status
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
  date: InputFormHook<Date | null>;
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
export const BranchOnlineSales = ({
  header,
  pendingSalesList,
  acceptedSalesList,
  startedSalesList,
  readyToTakeOutSalesList,
  onTheWaySalesList,
  deliveredSalesList,
  historicSalesList,
  historicCurrentPage,
  historicTotalPage,
  historicSalesListTotalLenght,
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
}: BranchOnlineSalesProps) => {
  const windowSize = useWindowResize();

  const PageWrapper = useMemo(() => {
    return windowSize.resolutionType === "desktop"
      ? BasicPage
      : BasicMobilePage;
  }, [windowSize.resolutionType]);

  const [page, setPage] = useState(OnlineSaleStatuses.PENDING);

  const [currentPendingOnlineSale, setCurrentPendingOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);
  const [currentAcceptedOnlineSale, setCurrentAcceptedOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);
  const [currentStartedOnlineSale, setCurrentStartedOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);
  const [currentOnTheWayOnlineSale, setCurrentOnTheWayOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);
  const [currentReadyToTakeOutOnlineSale, setCurrentReadyToTakeOutOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);
  const [currentDeliveredOnlineSale, setCurrentDeliveredOnlineSale] = useState<
    OnlineSaleProps[]
  >([]);

  const currentAndSetterStatus = {
    [OnlineSaleStatuses.PENDING]: {
      state: currentPendingOnlineSale,
      setState: setCurrentPendingOnlineSale,
      sales : pendingSalesList
    },
    [OnlineSaleStatuses.ACCEPTED]: {
      state: currentAcceptedOnlineSale,
      setState: setCurrentAcceptedOnlineSale,
      sales : acceptedSalesList
    },
    [OnlineSaleStatuses.STARTED]: {
      state: currentStartedOnlineSale,
      setState: setCurrentStartedOnlineSale,
      sales : startedSalesList
    },
    [OnlineSaleStatuses.ON_THE_WAY]: {
      state: currentOnTheWayOnlineSale,
      setState: setCurrentOnTheWayOnlineSale,
      sales : onTheWaySalesList
    },
    [OnlineSaleStatuses.READY_TO_TAKE_OUT]: {
      state: currentReadyToTakeOutOnlineSale,
      setState: setCurrentReadyToTakeOutOnlineSale,
      sales : readyToTakeOutSalesList
    },
    [OnlineSaleStatuses.DELIVERED]: {
      state: currentDeliveredOnlineSale,
      setState: setCurrentDeliveredOnlineSale,
      sales : deliveredSalesList
    }
  };



  const observerTab = useResizeObserver<HTMLDivElement>();
  const observerContainer = useResizeObserver<HTMLDivElement>();

  const tabs = [
    `Pendientes (${pendingSalesList.length})`,
    `Aceptados (${acceptedSalesList.length})`,
    `En Curso (${startedSalesList.length})`,
    `Listos para ser buscados (${readyToTakeOutSalesList.length})`,
    `En Camino (${onTheWaySalesList.length})`,
    `Entregados (${deliveredSalesList.length})`,
    `Histórico  (${historicSalesListTotalLenght})`,
  ];

  useEffect(() => {
    if (observerTab.ref.current && observerContainer.ref.current) {
      observerContainer.ref.current.scrollLeft = page * (observerTab.width / tabs.length);
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
            tabs={tabs}
          />
        </Box>

        <Box
          className={styles["branch-reserves--content-container"]}
          innerRef={observerContainer.ref}
        >
          {haveBranch ? (
            <Box
              width= {(tabs.length * 100).toString() + "%"} // La cantidad de tabs que hay * 100%
              className={styles["branch-reserves--content"]}
              innerRef={observerTab.ref}
            >

              {Object.entries(currentAndSetterStatus).map(([status, { state, setState, sales }]) => (
                <Box style={{ flex: 1 }}>
                  <Paginable
                    list={sales}
                    setCurrentList={setState}
                    objectsPerPage={10}
                  >
                    <OnlineSaleList
                      icon_size={icon_size}
                      onlineSales={state}
                      state={Number(status)}
                      setShowModal={setShowModal}
                    />
                    <Box height="40px" />
                  </Paginable>
                </Box>
              ))}


              <Box style={{ flex: 1 }}>
                <OnlineSaleFilters
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
                <PastOnlineSaleList
                  pastOnlineSales={historicSalesList}
                  page={historicCurrentPage}
                  totalPages={historicTotalPage}
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


      </Box>
    </PageWrapper>
  );
};
