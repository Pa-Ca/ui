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
    saleId: number,
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>,
    email: InputFormHook<string>,
    firstName: InputFormHook<string>,
    lastName: InputFormHook<string>,
    phone: InputFormHook<string>,
    clientQuantity: InputFormHook<string>,
    tables: InputFormHook<TableObject[]>
  ) => void;
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
  onGetGuest: (identityDocument: InputFormHook<string>) => Promise<void>;

  /**
   * Past sale list
   */
  pastSales: PastSaleProps[];
  /**
   * Current past sale page
   */
  page: number;
  /**
   * Total past sale pages
   */
  totalPages: number;
  /**
   * Total past sale elements
   */
  totalElements: number;
  /**
   * On next page
   */
  onNextPage: () => void;
  /**
   * On previous page
   */
  onPreviousPage: () => void;
  /**
   * On get reservations filtered
   */
  onGetSalesFiltered: (
    fullName: InputFormHook<string>,
    startDate: InputFormHook<Date | null>,
    endDate: InputFormHook<Date | null>,
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>
  ) => void;
  /**
   * On get reservations filtered
   */
  onGetReservationsFiltered: (
    fullName: InputFormHook<string>,
    startDate: InputFormHook<Date | null>,
    endDate: InputFormHook<Date | null>,
    status: InputFormHook<OptionObject<string | null>>,
    identityDocumentType: InputFormHook<OptionObject<string | null>>,
    identityDocument: InputFormHook<string>
  ) => void;

  /**
   * Reservation list with status pending
   */
  pendingReservationList: ReservationProps[];
  /**
   * Reservation list with status accepted
   */
  acceptedReservationList: ReservationProps[];
  /**
   * Reservation list with status rejected, retired or closed
   */
  historicReservationList: ReservationProps[];
  /**
   * Current past sale page
   */
  historicCurrentPage: number;
  /**
   * Total number of past sale pages
   */
  historicTotalPage: number;
  /**
   * Controls if modal is shown
   */
  setShowModal: (open: boolean) => void;

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
  onGetSalesFiltered,
  onGetReservationsFiltered,

  pastSales,
  page,
  totalPages,
  totalElements,
  onNextPage,
  onPreviousPage,

  // Reservations
  pendingReservationList,
  acceptedReservationList,
  historicReservationList,
  historicCurrentPage,
  historicTotalPage,
  setShowModal,

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
  const observerContainer = useResizeObserver<HTMLDivElement>();
  const saleByTable = useInputForm<OptionObject<SaleObject | null>>(nullObject);

  // New sale data
  const newSaleEmail = useInputForm("");
  const newSalePhone = useInputForm("");
  const newSaleLastName = useInputForm("");
  const newSaleFirstName = useInputForm("");
  const newSaleClientQuantity = useInputForm("1");
  const newSaleIdentityDocument = useInputForm("");
  const newSaleTables = useInputForm<TableObject[]>([]);
  const newSaleTable =
    useInputForm<OptionObject<TableObject | null>>(nullObject);
  const newSaleIdentityDocumentType =
    useInputForm<OptionObject<string | null>>(nullObject);

  // Reservations
  const [pendingReservation, setPendingReservation] = useState<
    ReservationProps[]
  >([]);
  const [acceptedReservation, setAcceptedReservation] = useState<
    ReservationProps[]
  >([]);

  // Filters
  const filterFullName = useInputForm("");
  const filterIdentityDocument = useInputForm("");
  const filterEndDate = useInputForm<Date | null>(null);
  const filterStartDate = useInputForm<Date | null>(null);
  const filterStatus = useInputForm<OptionObject<string | null>>(nullObject);
  const filterIdentityDocumentType =
    useInputForm<OptionObject<string | null>>(nullObject);
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
    return windowSize.resolutionType === "desktop"
      ? BasicPage
      : BasicMobilePage;
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
    if (
      saleByTable.value &&
      salesByTable.some((sale) => sale.id === saleByTable.value.value?.id)
    ) {
      saleSelected.setValue(saleByTable.value.value);
    }
  }, [saleByTable.value]);

  useEffect(() => {
    if (!newSaleTable.value.value) return;

    // Add table to new sale tables
    newSaleTables.setValue((oldList) => [
      ...oldList,
      newSaleTable.value.value!,
    ]);
    // Clear table input
    newSaleTable.setValue({
      label: "",
      value: null,
    });
  }, [newSaleTable.value]);

  useEffect(() => {
    if (!newSale) {
      newSaleTables.setValue([]);
    }
  }, [newSale]);

  return (
    <PageWrapper headerArgs={header}>
      {haveBranch ? (
        <Box>
          <Box width="100%" className={styles["branch-sales--header"]}>
            <InputTab
              index={tab}
              setIndex={setTab}
              tabs={[
                "Historial",
                "Mesa",
                "Reservas Aprobadas",
                "Reservas Pendientes",
              ]}
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
                    <Icon
                      icon={showPastSales ? "calendar" : "invoice"}
                      size="30px"
                    />

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
                      onGetSalesFiltered={() =>
                        onGetSalesFiltered(
                          filterFullName,
                          filterStartDate,
                          filterEndDate,
                          filterIdentityDocumentType,
                          filterIdentityDocument
                        )
                      }
                    />

                    <PastSaleList
                      page={page}
                      pastSales={pastSales}
                      totalPages={totalPages}
                      onNextPage={onNextPage}
                      contentHeight={contentHeight}
                      onPreviousPage={onPreviousPage}
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
                      onGetReservationsFiltered={() =>
                        onGetReservationsFiltered(
                          filterFullName,
                          filterStartDate,
                          filterEndDate,
                          filterStatus,
                          filterIdentityDocumentType,
                          filterIdentityDocument
                        )
                      }
                    />
                    <PastReservationList
                      page={historicCurrentPage}
                      totalPages={historicTotalPage}
                      contentHeight={contentHeight}
                      pastReservations={historicReservationList}
                      onNextPage={onNextPage}
                      onPreviousPage={onPreviousPage}
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
                    <Button
                      primary
                      size="large"
                      onClick={() => setNewSale(true)}
                    >
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
                        opacity:
                          tableSelected.value && salesByTable.length > 1
                            ? undefined
                            : "0",
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
                  list={acceptedReservationList}
                  setCurrentList={setAcceptedReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    state={2}
                    setShowModal={setShowModal}
                    contentHeight={`calc(${contentHeight} + 180px)`}
                    reservations={acceptedReservation}
                  />
                  <Box height="40px" />
                </Paginable>
              </Box>

              <Box style={{ flex: 1 }}>
                <Paginable
                  list={pendingReservationList}
                  setCurrentList={setPendingReservation}
                  objectsPerPage={10}
                >
                  <ReserveList
                    state={3}
                    setShowModal={setShowModal}
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
          <Icon
            icon="share"
            size={windowSize.resolutionType === "desktop" ? "50vh" : "50vw"}
          />
          <Text> Parece que no tienes ningún local asociado. </Text>
        </Box>
      )}

      <Modal open={newSale} setOpen={setNewSale}>
        <Box width="720px">
          {/* Client Form */}
          <ClientInfoForm
            email={newSaleEmail}
            phone={newSalePhone}
            lastName={newSaleLastName}
            firstName={newSaleFirstName}
            identityDocument={newSaleIdentityDocument}
            identityDocumentType={newSaleIdentityDocumentType}
            identityDocumentTypeOpt={filterIdentityDocumentTypeOpt}
            onGetGuest={() => onGetGuest(newSaleIdentityDocument)}
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
                    return oldList.filter(
                      (oldTable) => oldTable.id !== table.id
                    );
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
            <Button
              fullWidth
              primary={false}
              size="medium"
              onClick={() => setNewSale(false)}
            >
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
              onClick={() =>
                onCreateSale(
                  saleSelected.value?.id || 0,
                  newSaleIdentityDocumentType,
                  newSaleIdentityDocument,
                  newSaleEmail,
                  newSaleFirstName,
                  newSaleLastName,
                  newSalePhone,
                  newSaleClientQuantity,
                  newSaleTables
                )
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
    </PageWrapper>
  );
};
