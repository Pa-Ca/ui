import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./branchSales.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { ProductProps } from "../../molecules/product/Product";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { InputText } from "../../molecules/inputText/InputText";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { SaleProductProps } from "../../molecules/saleProduct/SaleProduct";
import { SaleProductList } from "../../organisms/saleProductList/SaleProductList";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { PastSaleProps } from "../../molecules/pastSale/PastSale";

interface BranchSalesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Current selected table
   */
  table: InputFormHook<OptionObject>;
  /**
   * All tables
   */
  allTables: OptionObject[];
  /**
   * Product list
   */
  products: SaleProductProps[];
  /**
   * Product list
   */
  allProducts: ProductProps[];
  /**
   * Product categories
   */
  categories: OptionObject[];
  /**
   * Product sub-categories
   */
  subCategories: OptionObject[];
  /**
   * Sub-category dependencies. Given a subcategory, indicate to which
   * category it belongs
   */
  subCategoryDependency: Record<string, string>;
  /**
   * On create table
   */
  onCreateTable: (name: InputFormHook<string>) => boolean;
  /**
   * Edit table
   */
  onEditTable: (name: InputFormHook<string>) => boolean;
  /**
   * On create product
   */
  onAddProduct: (productId: number, quantity: number) => void;
  /**
   * On clear products
   */
  onClearProducts: () => void;
  /**
   * On close sale
   */
  onCloseSale: (note: string) => void;
  /**
   * On delete table
   */
  onDeleteTable: () => void;

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
  products,
  allProducts,
  categories,
  subCategories,
  subCategoryDependency,
  onCreateTable,
  onEditTable,
  onAddProduct,
  onClearProducts,
  onCloseSale,
  onDeleteTable,

  pastSales,
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
  ...props
}: BranchSalesProps) => {
  const windowSize = useWindowResize();
  const newTableName = useInputForm("");
  const editTableName = useInputForm(table.value.label!);
  const [showNewModal, setShowNewModal_] = useState(false);
  const [showEditModal, setShowEditModal_] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const PageWrapper = useMemo(
    () =>
      windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage,
    [windowSize.resolutionType]
  );

  const setShowEditModal = (show: boolean) => {
    editTableName.setValue(table.value.label!);
    setShowEditModal_(show);
  };

  const setShowNewModal = (show: boolean) => {
    newTableName.setValue("");
    setShowNewModal_(show);
  };

  return (
    <PageWrapper headerArgs={header}>
      <Box className={styles["branch-sales--header"]}>
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
          <Button primary size="large" onClick={() => setShowNewModal(true)}>
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
          <Button primary size="large" onClick={() => setShowEditModal(true)}>
            <Box className={styles["sale-branch-sales--button"]}>
              <Text weight="600">Editar Mesa</Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <SaleProductList
        products={products}
        allProducts={allProducts}
        categories={categories}
        subCategories={subCategories}
        subCategoryDependency={subCategoryDependency}
        onAddProduct={onAddProduct}
        onClearProducts={onClearProducts}
        onCloseSale={onCloseSale}
      />

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
              onClick={() =>
                onCreateTable(editTableName) && setShowNewModal(false)
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
              onClick={() =>
                onEditTable(editTableName) && setShowEditModal(false)
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
            <span style={{ fontWeight: "600" }}> {table.value.label!} </span>?
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
    </PageWrapper>
  );
};
