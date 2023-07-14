import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./saleProductList.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import useInputForm from "../../hooks/useInputForm";
import TaxObject from "../../utils/objects/TaxObject";
import ProductObject from "../../utils/objects/ProductObject";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { NewSaleProduct } from "../../molecules/newSaleProduct/NewSaleProduct";
import { EditableInputTax } from "../../molecules/editableInputTax/EditableInputTax";
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
   * On create product
   */
  onAddProduct: (productId: number, amount: number) => Promise<boolean>;
  /**
   * On clear products
   */
  onClearProducts: () => void;
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
  note,
  onAddTax,
  onAddProduct,
  onClearProducts,
  onCloseSale,
  onSaveSaleNote,
  onDeleteSale,
  ...props
}: SaleProductListProps) => {
  const noteHook = useInputForm(note);
  const [showPayModal, setShowPayModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const quantities = products.map((product) => {
    return useInputForm(product.amount.toString());
  });
  const taxesHook = taxes.map((tax) => {
    let type;
    if (tax.type === 0) {
      type = "%";
    } else {
      type = "$";
    }

    return {
      nameInputHook: useInputForm(tax.name),
      valueInputHook: useInputForm(tax.value.toString()),
      typeInputHook: useInputForm(type),
    };
  });

  const subTotal = useMemo(() => {
    return products.reduce((acc, product, index) => {
      const value =
        quantities[index].value === "" ? 1 : parseInt(quantities[index].value);
      return acc + product.price * value;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    // Get taxes
    const totalTaxes = taxesHook.reduce((acc, tax) => {
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
        <hr className={styles["sale-product-list--hr"]} />
        {taxes.map((tax, index) => {
          return (
            <Box key={`sale-product-list--tax-${index}`}>
              <EditableInputTax
                {...tax}
                totalValue={subTotal}
                editable={!showPayModal}
                nameInputHook={taxesHook[index].nameInputHook}
                valueInputHook={taxesHook[index].valueInputHook}
                typeInputHook={taxesHook[index].typeInputHook}
                saveValueFunction={() =>
                  tax.saveValueFunction(
                    taxesHook[index].nameInputHook,
                    taxesHook[index].valueInputHook,
                    taxesHook[index].typeInputHook
                  )
                }
                showError={
                  taxesHook[index].nameInputHook.code +
                    taxesHook[index].valueInputHook.code >
                  0
                }
                key={`sale-product-list--tax-${index}`}
              />
            </Box>
          );
        })}

        {!showPayModal && (
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
        )}
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
  }, [subTotal, taxes, taxesHook, total, showPayModal]);

  return (
    <Box className={styles["sale-product-list--container"]}>
      {products.map((product, index) => {
        return (
          <Box
            key={`sale-product-list--product-${index}-${product.name}`}
            width="100%"
          >
            <SaleProduct
              {...product}
              amountHook={quantities[index]}
              onDelete={product.onDelete}
            />
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
              inputHook={noteHook}
              minRows={6}
              maxRows={6}
              width="100%"
              height="250px"
              maxLength={640}
              saveValueFunction={onSaveSaleNote}
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
              <Box className={styles["sale-product-list--modal-item-amount"]}>
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
                      className={styles["sale-product-list--modal-item-amount"]}
                    >
                      <Text type="h5">{quantities[index].value}</Text>
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
                          (quantities[index].value === ""
                            ? 1
                            : parseInt(quantities[index].value))
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
                onCloseSale();
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
