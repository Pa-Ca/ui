import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./saleProductList.module.scss";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
import { Modal } from "../../molecules/modal/Modal";
import OptionObject from "../../utils/objects/OptionObject";
import { ProductProps } from "../../molecules/product/Product";
import { NewSaleProduct } from "../../molecules/newSaleProduct/NewSaleProduct";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import {
  SaleProduct,
  SaleProductProps,
} from "../../molecules/saleProduct/SaleProduct";

interface SaleProductListProps {
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
export const SaleProductList = ({
  products,
  allProducts,
  categories,
  subCategories,
  subCategoryDependency,
  onAddProduct,
  onClearProducts,
  onCloseSale,
  ...props
}: SaleProductListProps) => {
  const note = useInputForm("");
  const [showPayModal, setShowPayModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      const value =
        product.quantity.value === "" ? 1 : parseInt(product.quantity.value);
      return acc + product.price * value;
    }, 0);
  }, [products]);

  const iva = useMemo(() => {
    return subTotal * 0.12;
  }, [subTotal]);

  const igtf = useMemo(() => {
    return subTotal * 0.03;
  }, [subTotal]);

  const total = useMemo(() => {
    return subTotal + iva + igtf;
  }, [subTotal, iva, igtf]);

  const summary = useMemo(() => {
    return (
      <Box width="100%">
        <Box className={styles["sale-product-list--summary-item"]}>
          <Text type="h5" weight="600">
            SUB-TOTAL:
          </Text>
          <Text type="h5" weight="400">
            {subTotal.toFixed(2)}$
          </Text>
        </Box>
        <Box className={styles["sale-product-list--summary-item"]}>
          <Text type="h5" weight="600">
            IVA (12%):
          </Text>
          <Text type="h5" weight="400">
            {iva.toFixed(2)}$
          </Text>
        </Box>
        <Box className={styles["sale-product-list--summary-item"]}>
          <Text type="h5" weight="600">
            IGTF (3%):
          </Text>
          <Text type="h5" weight="400">
            {igtf.toFixed(2)}$
          </Text>
        </Box>
        <hr className={styles["sale-product-list--hr"]} />
        <Box className={styles["sale-product-list--summary-item"]}>
          <Text type="h5" weight="600">
            TOTAL:
          </Text>
          <Text type="h5" weight="400">
            {total.toFixed(2)}$
          </Text>
        </Box>
      </Box>
    );
  }, [subTotal, iva, igtf, total]);

  return (
    <Box className={styles["sale-product-list--container"]}>
      {products.map((product, index) => {
        return (
          <Box width="100%">
            <SaleProduct key={index} {...product} />
          </Box>
        );
      })}

      <Box width="100%">
        <NewSaleProduct
          products={allProducts}
          categories={categories}
          subCategories={subCategories}
          subCategoryDependency={subCategoryDependency}
          onCreate={onAddProduct}
        />
      </Box>

      <Box width="100%">
        <Button
          size="large"
          state={products.length > 0 ? "normal" : "inactive"}
          onClick={() => setShowDeleteModal(true)}
        >
          <Box className={styles["sale-product-list--button"]}>
            <Text weight="600">Limpiar Mesa</Text>
          </Box>
        </Button>
      </Box>

      <hr className={styles["sale-product-list--hr"]} />

      <Box className={styles["sale-product-list--footer"]}>
        <Box className={styles["sale-product-list--note"]}>
          <Text type="h5" weight="400">
            Nota:
          </Text>
          <Box width="100%">
            <EditableInputLongText
              useEditIcons
              inputHook={note}
              minRows={6}
              maxRows={6}
              width="100%"
              height="250px"
              maxLength={640}
              saveValueFunction={() => {}}
            />
          </Box>
        </Box>

        <Box className={styles["sale-product-list--summary"]}>
          {summary}

          <Button
            primary
            fullWidth
            size="large"
            onClick={() => setShowPayModal(true)}
            state={products.length > 0 ? "normal" : "inactive"}
          >
            <Box className={styles["sale-product-list--button"]}>
              <Text weight="600">Cerrar Mesa</Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <Modal open={showDeleteModal} setOpen={setShowDeleteModal}>
        <Box className={styles["sale-product-list--delete-modal-container"]}>
          <Text type="h5" weight="500">
            ¿Estás seguro que deseas eliminar todos los productos de la mesa?
          </Text>

          <Box className={styles["sale-product-list--modal-buttons"]}>
            <Button
              fullWidth
              size="large"
              onClick={() => setShowDeleteModal(false)}
            >
              <Box className={styles["sale-product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() => {
                setShowDeleteModal(false);
                onClearProducts();
              }}
            >
              <Box className={styles["sale-product-list--modal-button"]}>
                <Text weight="600">Limpiar Mesa</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={showPayModal} setOpen={setShowPayModal}>
        <Box className={styles["sale-product-list--pay-modal-container"]}>
          <Text type="h5" weight="500">
            Resumen de la factura:
          </Text>

          <Box className={styles["sale-product-list--modal-summary"]}>
            <Box className={styles["sale-product-list--modal-item"]}>
              <Box className={styles["sale-product-list--modal-item-quantity"]}>
                <Text type="h5" weight="600">
                  Cantidad
                </Text>
              </Box>
              <Box className={styles["sale-product-list--modal-item-product"]}>
                <Text type="h5" weight="600">
                  Producto
                </Text>
              </Box>
              <Box className={styles["sale-product-list--modal-item-total"]}>
                <Text type="h5" weight="600">
                  Total
                </Text>
              </Box>
            </Box>

            {products.map((product, index) => {
              return (
                <Box
                  key={`sale-product-list--modal-summary-item-${index}-${product.name}`}
                  className={styles["sale-product-list--modal-item"]}
                >
                  <Box className={styles["sale-product-list--modal-item"]}>
                    <Box
                      className={
                        styles["sale-product-list--modal-item-quantity"]
                      }
                    >
                      <Text type="h5">{product.quantity.value}</Text>
                    </Box>
                    <Box
                      className={
                        styles["sale-product-list--modal-item-product"]
                      }
                    >
                      <Text type="h5">{product.name}</Text>
                    </Box>
                    <Box
                      className={styles["sale-product-list--modal-item-total"]}
                    >
                      <Text type="h5">
                        {(
                          product.price *
                          (product.quantity.value === ""
                            ? 1
                            : parseInt(product.quantity.value))
                        ).toFixed(2)}
                        $
                      </Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          {summary}

          <Box className={styles["sale-product-list--modal-buttons"]}>
            <Button
              fullWidth
              size="large"
              onClick={() => setShowPayModal(false)}
            >
              <Box className={styles["sale-product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() => {
                setShowPayModal(false);
                onCloseSale(note.value);
              }}
            >
              <Box className={styles["sale-product-list--modal-button"]}>
                <Text weight="600">Cerrar Mesa</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
