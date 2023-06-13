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
   * Change table name
   */
  onChangeTableName: (name: InputFormHook<string>) => boolean;
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
  onChangeTableName,
  onAddProduct,
  onClearProducts,
  onCloseSale,
  ...props
}: BranchSalesProps) => {
  const windowSize = useWindowResize();
  const newTableName = useInputForm(table.value.label!);
  const [showChangeNameModal, setShowChangeNameModal_] = useState(false);
  const PageWrapper = useMemo(
    () =>
      windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage,
    [windowSize.resolutionType]
  );

  const setShowChangeNameModal = (show: boolean) => {
    newTableName.setValue(table.value.label!);
    setShowChangeNameModal_(show);
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
        </Box>

        <Button
          primary
          size="large"
          state={products.length > 0 ? "normal" : "inactive"}
          onClick={() => setShowChangeNameModal(true)}
        >
          <Box className={styles["sale-product-list--button"]}>
            <Text weight="600">Cambiar nombre de la Mesa</Text>
          </Box>
        </Button>
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

      <Modal open={showChangeNameModal} setOpen={setShowChangeNameModal}>
        <Box className={styles["product-list--modal-container"]}>
          <Text type="h5" weight="500">
            Indique el nuevo nombre de la mesa
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
              onClick={() => setShowChangeNameModal(false)}
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
                onChangeTableName(newTableName) && setShowChangeNameModal(false)
              }
            >
              <Box className={styles["branch-sales--modal-button"]}>
                <Text weight="600">Aceptar</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </PageWrapper>
  );
};
