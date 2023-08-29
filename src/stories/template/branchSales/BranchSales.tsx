import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./branchSales.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import SaleObject from "../../utils/objects/SaleObject";
import TableObject from "../../utils/objects/TableObject";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { SaleList } from "../../organisms/saleList/SaleList";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import ProductObject from "../../utils/objects/ProductObject";
import { InputText } from "../../molecules/inputText/InputText";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { Paginable } from "../../molecules/paginable/Paginable";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";
import { ReserveList } from "../../organisms/reserveList/ReserveList";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import { SaleFilters } from "../../organisms/saleFilters/SaleFilters";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { PastSaleList } from "../../organisms/pastSaleList/PastSaleList";
import { ReservationProps } from "../../molecules/reservation/Reservation";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { ReserveDetails } from "../../organisms/reserveDetails/ReserveDetails";
import { SaleProductList } from "../../organisms/saleProductList/SaleProductList";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { ReservationFilters } from "../../organisms/reservationFilters/ReservationFilters";
import { PastReservationList } from "../../organisms/pastReservationList/PastReservationList";

interface BranchSalesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Indicates if have branch
   */
  haveBranch: boolean;

  /**
   * Sale selected
   */
  saleSelected: InputFormHook<SaleObject | null>;
  /**
   * Table selected
   */
  tableSelected: InputFormHook<TableObject | null>;
  /**
   * Sales
   */
  sales: SaleObject[];
  /**
   * Tables
   */
  tables: TableObject[];
  /**
   * Products
   */
  products: Record<number, ProductObject>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
  /**
   * On add tax
   */
  onAddTax: () => void;
  /**
   * On create product
   */
  onAddProduct: (productId: number, amount: number) => Promise<boolean>;
  /**
   * On clear products
   */
  onClearProducts: () => void;
  /**
   * On create sale
   */
  onCreateSale: (
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>,
    clientQuantity: InputFormHook<string>,
    tables: InputFormHook<TableObject[]>
  ) => Promise<boolean>;
  /**
   * On close sale
   */
  onCloseSale: () => void;
  /**
   * On save sale note
   */
  onSaveSaleNote: (note: string) => void;
  /**
   * On delete sale
   */
  onDeleteSale: () => void;
  /**
   * Get Guest data fuction
   */
  onGetGuest: (
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>
  ) => Promise<void>;

  /**
   * Past sale list
   */
  pastSales: PastSaleProps[];
  /**
   * Current past sale page
   */
  salePage: number;
  /**
   * Total past sale pages
   */
  saleTotalPages: number;
  /**
   * On next page
   */
  onSaleNextPage: () => void;
  /**
   * On previous page
   */
  onSalePreviousPage: () => void;

  /**
   * Guest email
   */
  guestEmail: InputFormHook<string>;
  /**
   * Guest phone
   */
  guestPhone: InputFormHook<string>;
  /**
   * Guest identity document
   */
  guestLastName: InputFormHook<string>;
  /**
   * Guest identity document
   */
  guestFirstName: InputFormHook<string>;

  /**
   * Average reservation duration hour
   */
  durationHour: number;
  /**
   * Average reservation duration minute
   */
  durationMin: number;
  /**
   * Valid entry hours
   */
  validHoursIn: OptionObject<string>[];
  /**
   * Valid departure hours
   */
  validHoursOut: OptionObject<string>[];
  /**
   * Reservation number of persons
   */
  newReservationPersons: InputFormHook<string>;
  /**
   * On create new reservation
   */
  onCreateReservation: (
    newReservationDate: InputFormHook<Date | null>,
    newReservationHourIn: InputFormHook<OptionObject<string | null>>,
    newReservationHourOut: InputFormHook<OptionObject<string | null>>,
    newReservationTables: InputFormHook<string>,
    newReservationOccasion: InputFormHook<string>,
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>
  ) => Promise<boolean>;

  /**
   * Filter full name
   */
  filterFullName: InputFormHook<string>;
  /**
   * Filter identity document
   */
  filterIdentityDocument: InputFormHook<string>;
  /**
   * Filter start date
   */
  filterStartDate: InputFormHook<Date | null>;
  /**
   * Filter end date
   */
  filterEndDate: InputFormHook<Date | null>;
  /**
   * Filter status
   */
  filterStatus: InputFormHook<OptionObject<string | null>>;
  /**
   * Filter status options
   */
  filterIdentityDocumentType: InputFormHook<OptionObject<string | null>>;
  /**
   * On get reservations filtered
   */
  onGetSalesFiltered: () => void;
  /**
   * On get reservations filtered
   */
  onGetReservationsFiltered: () => void;

  /**
   * Reservation list with status pending
   */
  pendingReservations: ReservationProps[];
  /**
   * Reservation list with status accepted
   */
  acceptedReservations: ReservationProps[];
  /**
   * Reservation list with status rejected, retired or closed
   */
  pastReservations: ReservationProps[];
  /**
   * Current past sale page
   */
  reservationPage: number;
  /**
   * Total number of past sale pages
   */
  reservationTotalPages: number;
  /**
   * On next page
   */
  onReservationNextPage: () => void;
  /**
   * On previous page
   */
  onReservationPreviousPage: () => void;

  /**
   * Max content height
   */
  contentHeight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchSales = ({
  header,
  haveBranch,

  saleSelected,
  tableSelected,
  sales,
  tables,
  products,
  categories,
  subCategories,
  onAddTax,
  onAddProduct,
  onClearProducts,
  onCreateSale,
  onCloseSale,
  onSaveSaleNote,
  onDeleteSale,
  onGetGuest,

  guestEmail,
  guestPhone,
  guestLastName,
  guestFirstName,

  durationHour,
  durationMin,
  validHoursIn,
  validHoursOut,
  newReservationPersons,
  onCreateReservation,

  filterFullName,
  filterIdentityDocument,
  filterStartDate,
  filterEndDate,
  filterStatus,
  filterIdentityDocumentType,
  onGetSalesFiltered,
  onGetReservationsFiltered,

  pastSales,
  salePage,
  saleTotalPages,
  onSaleNextPage,
  onSalePreviousPage,

  pastReservations,
  pendingReservations,
  acceptedReservations,
  reservationPage,
  reservationTotalPages,
  onReservationNextPage,
  onReservationPreviousPage,

  contentHeight,
  ...props
}: BranchSalesProps) => {
  const [tab, setTab] = useState(0);
  const search = useInputForm("");
  const windowSize = useWindowResize();
  const [newSale, setNewSale] = useState(false);
  const nullObject = { label: "", value: null };
  const observerTab = useResizeObserver<HTMLDivElement>();
  const [showPastSales, setShowPastSales] = useState(true);
  const [newReservation, setNewReservation] = useState(false);
  const observerContainer = useResizeObserver<HTMLDivElement>();
  const saleByTable = useInputForm<OptionObject<SaleObject | null>>(nullObject);

  // Guest data
  const guestIdentityDocument = useInputForm("");
  const guestIdentityDocumentType = useInputForm<OptionObject<string | null>>(nullObject);

  // New sale data
  const newSaleClientQuantity = useInputForm("1");
  const newSaleTables = useInputForm<TableObject[]>([]);
  const newSaleTable = useInputForm<OptionObject<TableObject | null>>(nullObject);

  // New reservation data
  const newReservationTables = useInputForm("1");
  const newReservationOccasion = useInputForm("");
  const newReservationDate = useInputForm<Date | null>(null);
  const newReservationHourIn = useInputForm<OptionObject<string | null>>(nullObject);
  const newReservationHourOut = useInputForm<OptionObject<string | null>>(nullObject);

  // Reservations
  const [pendingReservation, setPendingReservation] = useState<ReservationProps[]>([]);
  const [acceptedReservation, setAcceptedReservation] = useState<ReservationProps[]>([]);

  // Filters
  const filterStatusOptions = [
    { label: "Cerrada", value: "6" },
    { label: "Retirada", value: "4" },
    { label: "Rechazada", value: "2" },
  ];
  const filterIdentityDocumentTypeOpt = [
    { label: "V", value: "V" },
    { label: "E", value: "E" },
    { label: "J", value: "J" },
    { label: "G", value: "G" },
    { label: "P", value: "P" },
  ];

  const PageWrapper = useMemo(() => {
    return windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage;
  }, [windowSize.resolutionType]);

  const salesByTable = useMemo(() => {
    if (!tableSelected.value) return [];

    const result = sales.filter((sale) => {
      return sale.tables.some((table) => table.id === tableSelected.value!.id);
    });

    return result;
  }, [sales, tableSelected.value]);

  const newSaleAvailableTables = useMemo(() => {
    const result = tables
      .filter((table) => {
        return !newSaleTables.value.some(
          (newSaleTable) => newSaleTable != null && newSaleTable.id === table.id
        );
      })
      .map((table) => ({
        label: table.name,
        value: table,
      }));

    return result;
  }, [tables, newSaleTables.value]);

  const reservationDuration = useMemo(() => {
    if (!!newReservationHourIn.value.value && !!newReservationHourOut.value.value) {
      const hourIn = parseInt(newReservationHourIn.value.value!.split(":")[0]);
      const hourOut = parseInt(newReservationHourOut.value.value!.split(":")[0]);
      const minIn = parseInt(newReservationHourIn.value.value!.split(":")[1]);
      const minOut = parseInt(newReservationHourOut.value.value!.split(":")[1]);
      return {
        hour: hourOut - hourIn,
        min: minOut - minIn,
      };
    } else {
      return {
        hour: durationHour,
        min: durationMin,
      };
    }
  }, [durationHour, durationMin, newReservationHourIn.value, newReservationHourOut.value]);

  useEffect(() => {
    if (observerTab.ref.current && observerContainer.ref.current) {
      observerContainer.ref.current.scrollLeft = tab * (observerTab.width / 4);
    }
  }, [observerTab.width, tab]);

  useEffect(() => {
    if (salesByTable.length > 1) {
      saleByTable.setValue({
        label: salesByTable[0].ownerName,
        value: salesByTable[0],
      });
    } else if (salesByTable.length === 1) {
      saleSelected.setValue(salesByTable[0]);
      saleByTable.setValue({
        label: "",
        value: null,
      });
    } else {
      saleByTable.setValue({
        label: "",
        value: null,
      });
    }
  }, [salesByTable]);

  useEffect(() => {
    if (saleByTable.value && salesByTable.some((sale) => sale.id === saleByTable.value.value?.id)) {
      saleSelected.setValue(saleByTable.value.value);
    }
  }, [saleByTable.value]);

  useEffect(() => {
    if (!newSaleTable.value.value) return;

    // Add table to new sale tables
    newSaleTables.setValue((oldList) => [...oldList, newSaleTable.value.value!]);
    // Clear table input
    newSaleTable.setValue({
      label: "",
      value: null,
    });
  }, [newSaleTable.value]);

  useEffect(() => {
    guestEmail.setValue("");
    guestPhone.setValue("");
    guestLastName.setValue("");
    guestFirstName.setValue("");
    guestIdentityDocument.setValue("");
    guestIdentityDocumentType.setValue(nullObject);

    newSaleTables.setValue([]);
    newSaleClientQuantity.setValue("1");

    newReservationDate.setValue(null);
    newReservationTables.setValue("1");
    newReservationOccasion.setValue("");
    newReservationPersons.setValue("1");
    newReservationHourIn.setValue(nullObject);
    newReservationHourOut.setValue(nullObject);
  }, [newSale, newReservation]);

  useEffect(() => {
    newSaleTable.setCode(newSaleTables.code);
    newSaleTable.setMessage(newSaleTables.message);
  }, [newSaleTables])

  return (
    <PageWrapper headerArgs={header}>
      {haveBranch ? (
        <Box>
          <Box width="100%" className={styles["branch-sales--header"]}>
            <InputTab
              index={tab}
              setIndex={setTab}
              tabs={["Historial", "Mesa", "Reservas Aprobadas", "Reservas Pendientes"]}
            />
          </Box>

          <Box
            className={styles["branch-sales--content-container"]}
            innerRef={observerContainer.ref}
          >
            <Box
              width="400%"
              className={styles["branch-sales--content"]}
              innerRef={observerTab.ref}
            >
              <Box style={{ flex: 1 }}>
                <Box className={styles["branch-sales--historical-header"]}>
                  <Box width="360px">
                    {showPastSales ? (
                      <Text type="h3" weight="700">
                        Historial de Ventas
                      </Text>
                    ) : (
                      <Text type="h3" weight="700">
                        Historial de Reservas
                      </Text>
                    )}
                  </Box>

                  <Box
                    className={styles["branch-sales--exchange"]}
                    onClick={() => {
                      setShowPastSales((value) => !value);
                    }}
                  >
                    <Icon icon={showPastSales ? "calendar" : "invoice"} size="30px" />

                    <Icon icon="exchange" size="30px" />
                  </Box>
                </Box>

                {showPastSales ? (
                  <>
                    <SaleFilters
                      startDate={filterStartDate}
                      endDate={filterEndDate}
                      identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
                      identityDocumentType={filterIdentityDocumentType}
                      identityDocument={filterIdentityDocument}
                      fullName={filterFullName}
                      onGetSalesFiltered={() => onGetSalesFiltered()}
                    />

                    <PastSaleList
                      page={salePage}
                      pastSales={pastSales}
                      totalPages={saleTotalPages}
                      contentHeight={contentHeight}
                      onNextPage={onSaleNextPage}
                      onPreviousPage={onSalePreviousPage}
                    />
                  </>
                ) : (
                  <>
                    <ReservationFilters
                      startDate={filterStartDate}
                      endDate={filterEndDate}
                      status={filterStatus}
                      statusOptions={filterStatusOptions}
                      identityDocument={filterIdentityDocument}
                      identityDocumentType={filterIdentityDocumentType}
                      identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
                      fullName={filterFullName}
                      onGetReservationsFiltered={() => onGetReservationsFiltered()}
                    />
                    <PastReservationList
                      page={reservationPage}
                      contentHeight={contentHeight}
                      totalPages={reservationTotalPages}
                      pastReservations={pastReservations}
                      onNextPage={onReservationNextPage}
                      onPreviousPage={onReservationPreviousPage}
                    />
                  </>
                )}
              </Box>

              <Box style={{ flex: 1 }}>
                <Box className={styles["branch-sales--tables-and-sale-header"]}>
                  <Text type="h3" weight="700">
                    Ventas
                  </Text>

                  <Box>
                    <Button primary size="large" onClick={() => setNewSale(true)}>
                      <Text weight="700" primaryButtonStyle>
                        Crear venta
                      </Text>
                    </Button>
                  </Box>
                </Box>

                <Box className={styles["branch-sales--tables-and-sale"]}>
                  <Box style={{ flex: 1 }}>
                    <SaleList
                      searchHook={search}
                      sales={sales}
                      tables={tables}
                      maxHeight={`calc(${contentHeight} + 180px)`}
                      saleSelected={saleSelected}
                      tableSelected={tableSelected}
                    />
                  </Box>

                  <Box style={{ flex: 2 }}>
                    <Box
                      style={{
                        opacity: tableSelected.value && salesByTable.length > 1 ? undefined : "0",
                      }}
                    >
                      <InputSelect
                        inputHook={saleByTable}
                        options={salesByTable.map((sale) => ({
                          label: sale.ownerName,
                          value: sale,
                        }))}
                        label=""
                      />
                    </Box>
                    {!!saleSelected.value && (
                      <SaleProductList
                        note={saleSelected.value.note}
                        taxes={saleSelected.value.taxes}
                        products={saleSelected.value.products}
                        allProducts={products}
                        categories={categories}
                        subCategories={subCategories}
                        hasReservation={saleSelected.value.hasReservation}
                        onAddTax={onAddTax}
                        onAddProduct={onAddProduct}
                        onClearProducts={onClearProducts}
                        onCloseSale={onCloseSale}
                        onSaveSaleNote={onSaveSaleNote}
                        onDeleteSale={onDeleteSale}
                        key={`branch-sales--sale-${saleSelected.value?.id}-product-list-products-${saleSelected.value?.products.length}-taxes-${saleSelected.value?.taxes.length}`}
                      />
                    )}
                  </Box>
                </Box>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={acceptedReservations}
                  setCurrentList={setAcceptedReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    state={2}
                    tableList={tables}
                    setShowModal={setNewReservation}
                    contentHeight={`calc(${contentHeight} + 180px)`}
                    reservations={acceptedReservation}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={pendingReservations}
                  setCurrentList={setPendingReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    state={3}
                    tableList={tables}
                    setShowModal={setNewReservation}
                    contentHeight={`calc(${contentHeight} + 180px)`}
                    reservations={pendingReservation}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={styles["branch-sales--no-branch"]}>
          <Icon icon="share" size={windowSize.resolutionType === "desktop" ? "50vh" : "50vw"} />
          <Text> Parece que no tienes ningún local asociado. </Text>
        </Box>
      )}

      <Modal open={newSale} setOpen={setNewSale}>
        <Box width="720px">
          {/* Client Form */}
          <ClientInfoForm
            email={guestEmail}
            phone={guestPhone}
            lastName={guestLastName}
            firstName={guestFirstName}
            identityDocument={guestIdentityDocument}
            identityDocumentType={guestIdentityDocumentType}
            identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
            onGetGuest={() => onGetGuest(guestIdentityDocumentType, guestIdentityDocument)}
          />

          {/* Sale form */}
          <Box className={styles["branch-sales--modal-subtitle"]}>
            <Text type="h4" weight="700">
              Datos de la venta
            </Text>
          </Box>

          <Box className={styles["branch-sales--modal-inputs"]}>
            <Box style={{ flex: 1 }}>
              <InputText
                required
                type="naturalNumber"
                label="Cantidad de clientes"
                inputHook={newSaleClientQuantity}
              />
            </Box>

            <Box style={{ flex: 1 }}>
              <InputSelect
                required
                label="Mesas disponibles"
                inputHook={newSaleTable}
                options={newSaleAvailableTables}
              />
            </Box>
          </Box>

          <Box className={styles["branch-sales--modal-tables"]}>
            <Text type="h4" weight="700">
              Mesas:
            </Text>
            <Box width="10px" />

            {newSaleTables.value.map((table, index) => (
              <Box
                key={`branch-sales--modal-table-${table.id}-${index}`}
                className={styles["branch-sales--modal-table"]}
                onClick={() => {
                  newSaleTables.setValue((oldList) => {
                    return oldList.filter((oldTable) => oldTable.id !== table.id);
                  });
                }}
              >
                <Text type="h6" weight="700" primaryButtonStyle>
                  {table.name}
                </Text>
              </Box>
            ))}
          </Box>

          <div className={styles["branch-sales--modal-button-box"]}>
            {/* Cancel Button */}
            <Button fullWidth primary={false} size="medium" onClick={() => setNewSale(false)}>
              <Box className={styles["branch-sales--submit-sale-button-text"]}>
                <Text type="p" weight="700">
                  Cerrar
                </Text>
              </Box>
            </Button>

            {/* Submit Button */}
            <Button
              fullWidth
              primary
              size="medium"
              onClick={async () =>
                (await onCreateSale(
                  guestIdentityDocumentType,
                  guestIdentityDocument,
                  newSaleClientQuantity,
                  newSaleTables
                )) && setNewSale(false)
              }
            >
              <Box className={styles["branch-sales--submit-sale-button-text"]}>
                <Text primaryButtonStyle type="p" weight="700">
                  Completar
                </Text>
              </Box>
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal open={newReservation} setOpen={setNewReservation}>
        <Box width="720px">
          {/* Client Form */}
          <ClientInfoForm
            email={guestEmail}
            phone={guestPhone}
            lastName={guestLastName}
            firstName={guestFirstName}
            identityDocument={guestIdentityDocument}
            identityDocumentType={guestIdentityDocumentType}
            identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
            onGetGuest={() => onGetGuest(guestIdentityDocumentType, guestIdentityDocument)}
          />

          {/* Reservation Form */}
          <ReserveDetails
            validHoursIn={validHoursIn}
            validHoursOut={validHoursOut}
            date={newReservationDate}
            tables={newReservationTables}
            hourIn={newReservationHourIn}
            hourOut={newReservationHourOut}
            persons={newReservationPersons}
            occasion={newReservationOccasion}
            durationMin={reservationDuration.min}
            durationHour={reservationDuration.hour}
            showInviteFriends={false}
          />

          <div className={styles["branch-sales--modal-button-box"]}>
            {/* Cancel Button */}
            <Button
              fullWidth
              primary={false}
              size="medium"
              onClick={() => setNewReservation(false)}
            >
              <Box className={styles["branch-sales--submit-sale-button-text"]}>
                <Text type="p" weight="700">
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
              onClick={async () => {
                (await onCreateReservation(
                  newReservationDate,
                  newReservationHourIn,
                  newReservationHourOut,
                  newReservationTables,
                  newReservationOccasion,
                  guestIdentityDocumentType,
                  guestIdentityDocument
                )) && setNewReservation(false);
              }}
            >
              <Box className={styles["branch-sales--submit-sale-button-text"]}>
                <Text primaryButtonStyle type="p" weight="700">
                  Completar
                </Text>
              </Box>
            </Button>
          </div>
        </Box>
      </Modal>
    </PageWrapper>
  );
};
