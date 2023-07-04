import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./branchSales.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import TaxObject from "../../utils/objects/TaxObject";
import TableObject from "../../utils/objects/TableObject";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import ProductObject from "../../utils/objects/ProductObject";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { InputText } from "../../molecules/inputText/InputText";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { PastSaleList } from "../../organisms/pastSaleList/PastSaleList";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { SaleProductList } from "../../organisms/saleProductList/SaleProductList";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";

interface BranchSalesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;

  /**
   * Current selected table
   */
  table: InputFormHook<OptionObject<TableObject | null>>;
  /**
   * All tables
   */
  allTables: OptionObject<TableObject>[];
  /**
   * Has sale
   */
  hasSale: boolean;
  /**
   * Product list
   */
  products: SaleProductProps[];
  /**
   * Products
   */
  allProducts: Record<number, ProductObject>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
  /**
   * Taxes
   */
  taxes: TaxObject[];
  /**
   * Sale note
   */
  note: string;
  /**
   * On add tax
   */
  onAddTax: () => void;
  /**
   * On create table
   */
  onCreateTable: (name: InputFormHook<string>) => Promise<boolean>;
  /**
   * Edit table
   */
  onEditTable: (name: InputFormHook<string>) => Promise<boolean>;
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
  onCreateSale: () => void;
  /**
   * On close sale
   */
  onCloseSale: () => void;
  /**
   * On delete table
   */
  onDeleteTable: () => void;
  /**
   * On save sale note
   */
  onSaveSaleNote: (note: string) => void;
  /**
   * On delete sale
   */
  onDeleteSale: () => void;

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
export const BranchSales = ({
  header,

  table,
  allTables,
  hasSale,
  products,
  allProducts,
  categories,
  subCategories,
  taxes,
  note,
  onAddTax,
  onCreateTable,
  onEditTable,
  onAddProduct,
  onClearProducts,
  onCreateSale,
  onCloseSale,
  onDeleteTable,
  onSaveSaleNote,
  onDeleteSale,

  pastSales,
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
  ...props
}: BranchSalesProps) => {
  const [tab, setTab] = useState(0);
  const windowSize = useWindowResize();
  const newTableName = useInputForm("");
  const editTableName = useInputForm(table.value.label!);
  const [showNewModal, setShowNewModal_] = useState(false);
  const [showEditModal, setShowEditModal_] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const observerTab = useResizeObserver<HTMLDivElement>();
  const observerContainer = useResizeObserver<HTMLDivElement>();

  const PageWrapper = useMemo(() => {
    return windowSize.resolutionType === "desktop"
      ? BasicPage
      : BasicMobilePage;
  }, [windowSize.resolutionType]);

  const setShowEditModal = (show: boolean) => {
    editTableName.setValue(table.value.label!);
    setShowEditModal_(show);
  };

  const setShowNewModal = (show: boolean) => {
    newTableName.setValue("");
    setShowNewModal_(show);
  };

  useEffect(() => {
    if (observerTab.ref.current && observerContainer.ref.current) {
      observerContainer.ref.current.scrollLeft = tab * (observerTab.width / 2);
    }
  }, [observerTab.width, tab]);

  const content = useMemo(() => {
    return (
      <>
        {!hasSale ? (
          <Box style={{ height: "300px" }}>
            <Box className={styles["sale-branch-sales--new-sale-title"]}>
              <Text>No hay ninguna venta activa en esta mesa.</Text>
            </Box>

            <Box className={styles["sale-branch-sales--new-sale-button"]}>
              <Button primary size="large" onClick={onCreateSale}>
                <Box className={styles["sale-branch-sales--button"]}>
                  <Text weight="600">Crear venta</Text>
                </Box>
              </Button>
            </Box>
          </Box>
        ) : (
          <SaleProductList
            note={note}
            taxes={taxes}
            products={products}
            allProducts={allProducts}
            categories={categories}
            subCategories={subCategories}
            onAddTax={onAddTax}
            onAddProduct={onAddProduct}
            onClearProducts={onClearProducts}
            onCloseSale={onCloseSale}
            onSaveSaleNote={onSaveSaleNote}
            onDeleteSale={onDeleteSale}
            key={`branch-sales--sale-product-list-products-${products.length}-taxes-${taxes.length}`}
          />
        )}
      </>
    );
  }, [table, hasSale, products, taxes, allProducts, categories, subCategories]);

  return (
    <PageWrapper headerArgs={header}>
      <Box>
        <Box width="100%" className={styles["branch-sales--header"]}>
          <InputTab
            index={tab}
            setIndex={setTab}
            tabs={["Ventas Activas", "Histórico de Ventas"]}
          />
        </Box>

        <Box
          className={styles["branch-sales--content-container"]}
          innerRef={observerContainer.ref}
        >
          <Box
            width="200%"
            className={styles["branch-sales--content"]}
            innerRef={observerTab.ref}
          >
            <Box style={{ flex: 1 }}>
              <Box className={styles["branch-sales--started-sales-header"]}>
                <Box className={styles["branch-sales--table-selector"]}>
                  <Text weight="700" type="h3">
                    Factura de la mesa:
                  </Text>
                  <InputSelect
                    label=""
                    showError={false}
                    options={allTables}
                    inputHook={table}
                  />
                  <Button
                    primary
                    size="large"
                    onClick={() => setShowNewModal(true)}
                  >
                    <Box className={styles["sale-branch-sales--button"]}>
                      <Text weight="600">Crear Mesa</Text>
                    </Box>
                  </Button>
                </Box>

                <Box className={styles["branch-sales--table-selector"]}>
                  <Button size="large" onClick={() => setShowDeleteModal(true)}>
                    <Box className={styles["sale-branch-sales--button"]}>
                      <Text weight="600">Eliminar Mesa</Text>
                    </Box>
                  </Button>
                  <Button
                    primary
                    size="large"
                    onClick={() => setShowEditModal(true)}
                  >
                    <Box className={styles["sale-branch-sales--button"]}>
                      <Text weight="600">Editar Mesa</Text>
                    </Box>
                  </Button>
                </Box>
              </Box>

              {content}

              <Modal open={showNewModal} setOpen={setShowNewModal}>
                <Box className={styles["branch-sales--modal-container"]}>
                  <Text type="h5" weight="500">
                    Indique el nombre de la nueva mesa
                  </Text>

                  <Box width="100%" style={{ marginTop: "20px" }}>
                    <InputText
                      required
                      type="text"
                      width="100%"
                      label="Nombre"
                      inputHook={newTableName}
                    />
                  </Box>

                  <Box className={styles["branch-sales--modal-buttons"]}>
                    <Button
                      fullWidth
                      size="large"
                      onClick={() => setShowNewModal(false)}
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Cancelar</Text>
                      </Box>
                    </Button>
                    <Button
                      primary
                      fullWidth
                      size="large"
                      onClick={async () =>
                        (await onCreateTable(newTableName)) &&
                        setShowNewModal(false)
                      }
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Aceptar</Text>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <Modal open={showEditModal} setOpen={setShowEditModal}>
                <Box className={styles["branch-sales--modal-container"]}>
                  <Text type="h5" weight="500">
                    Indique el nuevo nombre de la mesa
                  </Text>

                  <Box width="100%" style={{ marginTop: "20px" }}>
                    <InputText
                      required
                      type="text"
                      width="100%"
                      label="Nombre"
                      inputHook={editTableName}
                    />
                  </Box>

                  <Box className={styles["branch-sales--modal-buttons"]}>
                    <Button
                      fullWidth
                      size="large"
                      onClick={() => setShowEditModal(false)}
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Cancelar</Text>
                      </Box>
                    </Button>
                    <Button
                      primary
                      fullWidth
                      size="large"
                      onClick={async () =>
                        (await onEditTable(editTableName)) &&
                        setShowEditModal(false)
                      }
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Aceptar</Text>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <Modal open={showDeleteModal} setOpen={setShowDeleteModal}>
                <Box className={styles["branch-sales--delete-modal-container"]}>
                  <Text type="h5" weight="500">
                    ¿Estás seguro que deseas eliminar la mesa
                    <span style={{ fontWeight: "600" }}>
                      {" "}
                      {table.value.label!}{" "}
                    </span>
                    ?
                  </Text>

                  <Box className={styles["branch-sales--modal-buttons"]}>
                    <Button
                      fullWidth
                      size="large"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Cancelar</Text>
                      </Box>
                    </Button>
                    <Button
                      primary
                      fullWidth
                      size="large"
                      onClick={() => {
                        setShowDeleteModal(false);
                        onDeleteTable();
                      }}
                    >
                      <Box className={styles["branch-sales--modal-button"]}>
                        <Text weight="600">Eliminar Mesa</Text>
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Box>

            <Box style={{ flex: 1, paddingBottom: "40px" }}>
              <PastSaleList
                pastSales={pastSales}
                page={page}
                totalPages={totalPages}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
