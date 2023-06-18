import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./saleProductList.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import useInputForm from "../../hooks/useInputForm";
import ProductObject from "../../utils/objects/ProductObject";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { NewSaleProduct } from "../../molecules/newSaleProduct/NewSaleProduct";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import {
  EditableInputTax,
  EditableInputTaxProps,
} from "../../molecules/editableInputTax/EditableInputTax";
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
  taxes: EditableInputTaxProps[];
  /**
   * On add tax
   */
  onAddTax: () => void;
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
   * On delete sale
   */
  onDeleteSale: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SaleProductList = ({
  products,
  allProducts,
  categories,
  subCategories,
  taxes,
  onAddTax,
  onAddProduct,
  onClearProducts,
  onCloseSale,
  onDeleteSale,
  ...props
}: SaleProductListProps) => {
  const note = useInputForm("");
  const [showPayModal, setShowPayModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      const value =
        product.quantity.value === "" ? 1 : parseInt(product.quantity.value);
      return acc + product.price * value;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    // Get taxes
    const totalTaxes = taxes.reduce((acc, tax) => {
      const taxValue = parseFloat(tax.valueInputHook.value);
      const taxType = tax.typeInputHook.value;
      if (taxType === "%") {
        return acc + (subTotal * taxValue) / 100;
      } else {
        return acc + taxValue;
      }
    }, 0);

    return subTotal + totalTaxes;
  }, [subTotal, taxes]);

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
        {taxes.map((tax, index) => {
          return (
            <EditableInputTax
              {...tax}
              totalValue={subTotal}
              editable={!showPayModal}
              showError={tax.nameInputHook.error + tax.valueInputHook.error > 0}
              key={`sale-product-list--tax-${index}`}
            />
          );
        })}
        <Box>
          <Button
            size="box"
            onClick={onAddTax}
            style={{
              marginTop: "10px",
            }}
          >
            <Box className={styles["sale-product-list--button"]}>
              <Text weight="600">Agregar Tarifa</Text>
            </Box>  
          </Button>
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
  }, [subTotal, taxes, total, showPayModal]);

  return (
    <Box className={styles["sale-product-list--container"]}>
      {products.map((product, index) => {
        return (
          <Box
            key={`sale-product-list--product-${index}-${product.name}`}
            width="100%"
          >
            <SaleProduct {...product} />
          </Box>
        );
      })}

      <Box width="100%">
        <NewSaleProduct
          products={allProducts}
          categories={categories}
          subCategories={subCategories}
          onCreate={onAddProduct}
        />
      </Box>

      <Box width="100%">
        <Button
          size="large"
          state={products.length > 0 ? "normal" : "inactive"}
          onClick={() => setShowClearModal(true)}
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

          <Box className={styles["sale-product-list--summary-buttons"]}>
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
            <Button
              fullWidth
              size="large"
              onClick={() => setShowDeleteModal(true)}
              state={products.length > 0 ? "normal" : "inactive"}
            >
              <Box className={styles["sale-product-list--button"]}>
                <Text weight="600">Eliminar Factura</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal open={showClearModal} setOpen={setShowClearModal}>
        <Box className={styles["sale-product-list--delete-modal-container"]}>
          <Text type="h5" weight="500">
            ¿Estás seguro que deseas eliminar todos los productos de la mesa?
          </Text>

          <Box className={styles["sale-product-list--modal-buttons"]}>
            <Button
              fullWidth
              size="large"
              onClick={() => setShowClearModal(false)}
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
                setShowClearModal(false);
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

      <Modal open={showDeleteModal} setOpen={setShowDeleteModal}>
        <Box className={styles["sale-product-list--delete-modal-container"]}>
          <Text type="h5" weight="500">
            ¿Estás seguro que deseas eliminar esta factura?
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
                onDeleteSale();
              }}
            >
              <Box className={styles["sale-product-list--modal-button"]}>
                <Text weight="600">Eliminar</Text>
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
