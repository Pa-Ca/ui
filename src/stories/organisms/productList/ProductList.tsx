import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./productList.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import OptionObject from "../../utils/objects/OptionObject";
import { Paginable } from "../../molecules/paginable/Paginable";
import { InputText } from "../../molecules/inputText/InputText";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { Icon } from "../../atoms/icon/Icon";
import {
  CouponProductCard,
  CouponProductCardProps,
  ExtendedProductCard,
  ExtendedProductCardProps,
  HighlightProductCard,
  HighlightProductCardProps,
} from "../../molecules/productCard/ProductCard";
import { InputLongText } from "../../molecules/inputLongText/InputLongText";
import { Switch } from "../../atoms/switch/Switch";
import ProductObject from "../../utils/objects/ProductObject";
import { InputDate } from "../../molecules/inputDate/InputDate";

interface ProductListProps {
  /**
   * Product list
   */
  products: Record<number, ExtendedProductCardProps>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
  /**
   * On back
   */
  onBack: () => void;
  /**
   * On create product
   */
  onCreateProduct: (
    name: InputFormHook<string>,
    price: InputFormHook<string>,
    categoryId: number,
    subCategoryId: number,
    description: string,
    image: string,
    active: boolean,
    mobile: boolean
  ) => Promise<boolean>;
  /**
   * On create sub-category.
   */
  onCreateSubCategory: (
    categoryId: number,
    subCategory: InputFormHook<string>
  ) => Promise<SubCategoryObject>;
}
export const ProductList = ({
  products,
  categories,
  subCategories,
  onBack,
  onCreateProduct,
  onCreateSubCategory,
  ...props
}: ProductListProps) => {
  const [showNewProductModal, setShowNewProductModal_] = useState(false);
  const [showNewSubCategoryModal, setShowNewSubCategoryModal_] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<OptionObject<ExtendedProductCardProps>[]>(
    []
  );

  const [newProductActive, setNewProductActive] = useState(false);
  const [newProductMobile, setNewProductMobile] = useState(false);
  const newProductImage = useInputForm("");
  const newProductName = useInputForm("");
  const newProductPrice = useInputForm("");
  const newSubCategory = useInputForm("");
  const newProductDescription = useInputForm("");
  const newCategory = useInputForm<OptionObject<CategoryObject | null>>({
    label: "",
    value: null,
  });
  const newProductSubCategory = useInputForm<OptionObject<SubCategoryObject | null>>({
    label: "",
    value: null,
  });
  const category = useInputForm<OptionObject<CategoryObject | null>>({
    label: "Todas",
    value: null,
  });
  const subCategory = useInputForm<OptionObject<SubCategoryObject | null>>({
    label: "Todas",
    value: null,
  });

  const allCategories: OptionObject<CategoryObject>[] = useMemo(() => {
    return Object.values(categories).map((category) => {
      return { label: category.name, value: category };
    });
  }, [categories]);

  const allSubCategories: OptionObject<SubCategoryObject>[] = useMemo(() => {
    return Object.values(subCategories).map((subCategory) => {
      return { label: subCategory.name, value: subCategory };
    });
  }, [subCategories]);

  const allProducts: OptionObject<ExtendedProductCardProps>[] = useMemo(() => {
    return Object.values(products).map((product) => {
      return { label: product.name, value: product };
    });
  }, [products]);

  const currentSubCategories = useMemo(() => {
    if (!category.value.value) {
      return allSubCategories;
    }

    // Filter sub-categories by category
    return allSubCategories.filter(
      (subCategory) => subCategory.value.categoryId === category.value.value!.id
    );
  }, [allSubCategories, category.value.value]);

  const currentProductsBySubCategory = useMemo(() => {
    let currentProducts: OptionObject<ExtendedProductCardProps>[] = [];

    // If there is no category nor sub-category selected, return all products
    if (!category.value.value && !subCategory.value.value) {
      currentProducts = allProducts;
    }

    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.value) {
      for (const product of allProducts) {
        if (product.value.category === category.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      for (const product of allProducts) {
        if (product.value.subCategory === subCategory.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }

    return currentProducts;
  }, [allProducts, category.value.value, subCategory.value.value]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategory.value.value.categoryId !== category.value.value?.id) {
      subCategory.setValue({ label: "Todas", value: null });
    }
  }, [category.value.value]);

  useEffect(() => {
    // If we select a subcategory and there is no selected category, then we
    // place the corresponding category
    if (!category.value.value) {
      for (const c of allCategories) {
        if (c.value.id === subCategory.value.value?.categoryId) {
          category.setValue(c);
          break;
        }
      }
    }
  }, [subCategory.value.value]);

  const setShowNewSubCategoryModal = (show: boolean) => {
    newSubCategory.setValue("");
    newCategory.setValue(category.value);
    setShowNewSubCategoryModal_(show);
  };

  const setShowNewProductModal = (show: boolean) => {
    newProductName.setValue("");
    newProductPrice.setValue("");
    newCategory.setValue(category.value);
    newProductSubCategory.setValue(subCategory.value);
    setShowNewProductModal_(show);
  };

  return (
    <Box className={styles["product-list--container"]}>
      <Box className={styles["product-list--header"]}>
        <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box style={{ cursor: "pointer", padding: "10px" }} onClick={onBack}>
            <Icon icon="left" size="28px" />
          </Box>

          <Text weight="700" type="h3">
            Productos
          </Text>
        </Box>

        <Box
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text type="h3" weight="700">
            Menú
          </Text>

          <Box style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Button primary onClick={() => setShowNewProductModal(true)}>
              <Text primaryButtonStyle>Crear Producto</Text>
            </Button>
            <Button primary onClick={() => setShowNewSubCategoryModal(true)}>
              <Text primaryButtonStyle>Crear Sub-Categoría</Text>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles["product-list--body"]} weakShadow>
        <Box className={styles["product-list--header-filters"]}>
          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                label="Categoría"
                showError={false}
                options={allCategories}
                inputHook={category}
                emptyLabel="Todas"
              />
            </Box>
          </Box>

          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                showError={false}
                label="Sub-categoría"
                inputHook={subCategory}
                emptyLabel="Todas"
                options={currentSubCategories}
              />
            </Box>
          </Box>
        </Box>

        <Paginable
          list={currentProductsBySubCategory}
          setCurrentList={setCurrentProducts}
          objectsPerPage={8}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {currentProducts.map((product, index) => (
              <Box
                weakShadow
                className={styles["product-list--body-item"]}
                key={`product-list--body-item-${index}-${product.value.name}`}
              >
                <ExtendedProductCard {...product.value} />
              </Box>
            ))}
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
          </Box>
        </Paginable>
      </Box>

      <Modal open={showNewSubCategoryModal} setOpen={setShowNewSubCategoryModal}>
        <Box className={styles["product-list--modal-container"]}>
          <Box style={{ display: "flex", flex: 1, width: "100%", justifyContent: "center" }}>
            <Text type="h5" weight="700">
              Datos de la sub-categoría
            </Text>
          </Box>

          <Box width="100%" style={{ zIndex: 3 }}>
            <InputSelect
              required
              width="100%"
              label="Categoría"
              showError={false}
              options={allCategories}
              inputHook={newCategory}
            />
          </Box>

          <Box width="100%">
            <InputText
              required
              type="text"
              width="100%"
              inputHook={newSubCategory}
              label="Nombre"
            />
          </Box>

          <hr style={{ width: "100%" }} />

          <Box className={styles["product-list--modal-buttons"]}>
            <Button fullWidth size="large" onClick={() => setShowNewSubCategoryModal(false)}>
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={async () => {
                const response = await onCreateSubCategory(
                  newCategory.value.value?.id!,
                  newSubCategory
                );
                if (response.id > -1) {
                  setShowNewSubCategoryModal(false);
                  subCategory.setValue({
                    label: response.name,
                    value: response,
                  });
                }
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text primaryButtonStyle weight="600">
                  Crear Sub-Categoría
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={showNewProductModal} setOpen={setShowNewProductModal}>
        <Box className={styles["product-list--modal-container"]} style={{ minWidth: "650px" }}>
          <Box style={{ display: "flex", flex: 1, width: "100%", justifyContent: "center" }}>
            <Text type="h5" weight="700">
              Datos del Producto
            </Text>
          </Box>

          <Box width="100%" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box style={{ flex: 1 }}>
              <InputText
                required
                type="text"
                width="100%"
                inputHook={newProductName}
                label="Nombre"
              />
            </Box>

            <Box style={{ flex: 1 }}>
              <InputText
                required
                type="number"
                width="100%"
                inputHook={newProductPrice}
                label="Precio"
              />
            </Box>
          </Box>

          <Box width="100%" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box style={{ flex: 1 }}>
              <InputSelect
                required
                width="100%"
                label="Categoría"
                options={allCategories}
                inputHook={newCategory}
              />
            </Box>

            <Box style={{ flex: 1 }}>
              <InputSelect
                required
                width="100%"
                label="Sub-Categoría"
                options={allSubCategories}
                inputHook={newProductSubCategory}
              />
            </Box>
          </Box>

          <Box width="100%">
            <InputLongText
              width="100%"
              minRows={3}
              maxRows={3}
              value={newProductDescription.value}
              setValue={newProductDescription.setValue}
              label="Descripción"
            />
          </Box>

          <Box
            width="100%"
            style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}
          >
            <Box style={{ flex: 1 }}>
              <InputText
                required
                type="text"
                width="100%"
                showError={false}
                inputHook={newProductImage}
                label="Subir imagen"
              />
            </Box>

            <Box
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Text type="h7">Activo</Text>
                <Switch active={newProductActive} onClick={() => setNewProductActive((a) => !a)} />
              </Box>

              <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Text type="h7">Móvil</Text>
                <Switch active={newProductMobile} onClick={() => setNewProductMobile((a) => !a)} />
              </Box>
            </Box>
          </Box>

          <hr style={{ width: "100%" }} />

          <Box className={styles["product-list--modal-buttons"]}>
            <Button fullWidth size="large" onClick={() => setShowNewProductModal(false)}>
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={async () => {
                const response = await onCreateProduct(
                  newProductName,
                  newProductPrice,
                  newCategory.value.value?.id!,
                  newProductSubCategory.value.value?.id!,
                  newProductDescription.value,
                  newProductImage.value,
                  newProductActive,
                  newProductMobile
                );
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text primaryButtonStyle weight="600">
                  Crear Producto
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const couponTypes = [
  {
    label: "Producto",
    value: "product",
  },
  {
    label: "Sub-Categoría",
    value: "sub_category",
  },
  {
    label: "Categoría",
    value: "category",
  },
];
const couponAmountTypes = [
  {
    label: "$",
    value: "amount",
  },
  {
    label: "%",
    value: "percentage",
  },
];

interface CouponListProps {
  /**
   * Product list
   */
  products: Record<number, CouponProductCardProps>;
  /**
   * All products
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
   * On back
   */
  onBack: () => void;
  /**
   * On create coupon
   */
  onCreateCoupon: (
    type: string,
    amountType: string,
    amount: string,
    startDate: Date,
    endDate: Date,
    description: string,
    product?: ProductObject,
    category?: CategoryObject,
    subCategory?: SubCategoryObject
  ) => void;
}
export const CouponList = ({
  products,
  allProducts,
  categories,
  subCategories,
  onBack,
  onCreateCoupon,
  ...props
}: CouponListProps) => {
  const [showNewModal, setShowNewModal_] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<OptionObject<CouponProductCardProps>[]>(
    []
  );

  const newCouponAmount = useInputForm("0");
  const newCouponDescription = useInputForm("");
  const newCouponEndDate = useInputForm<Date | null>(null);
  const newCouponStartDate = useInputForm<Date | null>(null);
  const newCouponCategory = useInputForm<OptionObject<CategoryObject | null>>({
    value: null,
    label: "",
  });
  const newCouponSubCategory = useInputForm<OptionObject<SubCategoryObject | null>>({
    value: null,
    label: "",
  });
  const newCouponProduct = useInputForm<OptionObject<ProductObject | null>>({
    value: null,
    label: "",
  });
  const newCouponType = useInputForm<OptionObject<string | null>>(couponTypes[0]);
  const newCouponAmountType = useInputForm<OptionObject<string | null>>(couponAmountTypes[0]);

  const category = useInputForm<OptionObject<CategoryObject | null>>({
    label: "Todas",
    value: null,
  });
  const subCategory = useInputForm<OptionObject<SubCategoryObject | null>>({
    label: "Todas",
    value: null,
  });

  const allCategories: OptionObject<CategoryObject>[] = useMemo(() => {
    return Object.values(categories).map((category) => {
      return { label: category.name, value: category };
    });
  }, [categories]);

  const allSubCategories: OptionObject<SubCategoryObject>[] = useMemo(() => {
    return Object.values(subCategories).map((subCategory) => {
      return { label: subCategory.name, value: subCategory };
    });
  }, [subCategories]);

  const allCoupons: OptionObject<CouponProductCardProps>[] = useMemo(() => {
    return Object.values(products).map((product) => {
      return { label: product.name, value: product };
    });
  }, [products]);

  const allProductObjects: OptionObject<ProductObject>[] = useMemo(() => {
    return Object.values(allProducts).map((product) => {
      return { label: product.name, value: product };
    });
  }, [allProducts]);

  const currentSubCategories = useMemo(() => {
    if (!category.value.value) {
      return allSubCategories;
    }

    // Filter sub-categories by category
    return allSubCategories.filter(
      (subCategory) => subCategory.value.categoryId === category.value.value!.id
    );
  }, [allSubCategories, category.value.value]);

  const currentProductsBySubCategory = useMemo(() => {
    let currentProducts: OptionObject<CouponProductCardProps>[] = [];

    // If there is no category nor sub-category selected, return all products
    if (!category.value.value && !subCategory.value.value) {
      currentProducts = allCoupons;
    }

    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.value) {
      for (const product of allCoupons) {
        if (product.value.category === category.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      for (const product of allCoupons) {
        if (product.value.subCategory === subCategory.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }

    return currentProducts;
  }, [allCoupons, category.value.value, subCategory.value.value]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategory.value.value.categoryId !== category.value.value?.id) {
      subCategory.setValue({ label: "Todas", value: null });
    }
  }, [category.value.value]);

  useEffect(() => {
    // If we select a subcategory and there is no selected category, then we
    // place the corresponding category
    if (!category.value.value) {
      for (const c of allCategories) {
        if (c.value.id === subCategory.value.value?.categoryId) {
          category.setValue(c);
          break;
        }
      }
    }
  }, [subCategory.value.value]);

  const setShowNewModal = (show: boolean) => {
    setShowNewModal_(show);
  };

  return (
    <Box className={styles["product-list--container"]}>
      <Box className={styles["product-list--header"]}>
        <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box style={{ cursor: "pointer", padding: "10px" }} onClick={onBack}>
            <Icon icon="left" size="28px" />
          </Box>

          <Text weight="700" type="h3">
            Cupones
          </Text>
        </Box>

        <Box
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text type="h3" weight="700">
            Menú
          </Text>

          <Box style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Button primary onClick={() => setShowNewModal(true)}>
              <Text primaryButtonStyle>Crear Cupón</Text>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles["product-list--body"]} weakShadow>
        <Box className={styles["product-list--header-filters"]}>
          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                label="Categoría"
                showError={false}
                options={allCategories}
                inputHook={category}
                emptyLabel="Todas"
              />
            </Box>
          </Box>

          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                showError={false}
                label="Sub-categoría"
                inputHook={subCategory}
                emptyLabel="Todas"
                options={currentSubCategories}
              />
            </Box>
          </Box>
        </Box>

        <Paginable
          list={currentProductsBySubCategory}
          setCurrentList={setCurrentProducts}
          objectsPerPage={8}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {currentProducts.map((product, index) => (
              <Box
                weakShadow
                className={styles["product-list--body-item"]}
                key={`product-list--body-item-${index}-${product.value.name}`}
              >
                <CouponProductCard {...product.value} />
              </Box>
            ))}
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
          </Box>
        </Paginable>
      </Box>

      <Modal open={showNewModal} setOpen={setShowNewModal}>
        <Box className={styles["product-list--modal-container"]} style={{ minWidth: "650px" }}>
          <Box style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <Text type="h5" weight="700">
              Datos del cupón
            </Text>
          </Box>

          <Box width="100%" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box style={{ flex: 1 }}>
              <InputSelect
                required
                width="100%"
                label="Aplicar a"
                options={couponTypes}
                inputHook={newCouponType}
              />
            </Box>

            <Box style={{ flex: 3 }}>
              {newCouponType.value.value === "product" && (
                <InputSelect
                  required
                  width="100%"
                  label="Producto"
                  options={allProductObjects}
                  inputHook={newCouponProduct}
                />
              )}

              {newCouponType.value.value === "category" && (
                <InputSelect
                  required
                  width="100%"
                  label="Categoría"
                  options={allCategories}
                  inputHook={newCouponCategory}
                />
              )}

              {newCouponType.value.value === "sub_category" && (
                <InputSelect
                  required
                  width="100%"
                  label="Sub Categoría"
                  options={allSubCategories}
                  inputHook={newCouponSubCategory}
                />
              )}
            </Box>

            <Box style={{ flex: 0.5 }}>
              <InputSelect
                required
                width="100%"
                label="Tipo"
                options={couponAmountTypes}
                inputHook={newCouponAmountType}
              />
            </Box>

            <Box>
              <InputText
                required
                type="number"
                width="100%"
                inputHook={newCouponAmount}
                label="Monto"
              />
            </Box>
          </Box>

          <Box width="100%" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box style={{ flex: 1 }}>
              <InputDate
                required
                width="100%"
                label="Fecha de Inicio"
                inputHook={newCouponStartDate}
              />
            </Box>

            <Box style={{ flex: 1 }}>
              <InputDate
                required
                width="100%"
                label="Fecha de Finalización"
                inputHook={newCouponEndDate}
              />
            </Box>
          </Box>

          <Box width="100%">
            <InputLongText
              width="100%"
              minRows={3}
              maxRows={3}
              value={newCouponDescription.value}
              setValue={newCouponDescription.setValue}
              label="Descripción"
            />
          </Box>

          <hr style={{ width: "100%" }} />

          <Box className={styles["product-list--modal-buttons"]}>
            <Button fullWidth size="large" onClick={() => setShowNewModal(false)}>
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() => {
                onCreateCoupon(
                  newCouponType.value.value!,
                  newCouponAmountType.value.value!,
                  newCouponAmount.value,
                  newCouponStartDate.value!,
                  newCouponEndDate.value!,
                  newCouponDescription.value,
                  newCouponProduct.value.value ?? undefined,
                  newCouponCategory.value.value ?? undefined,
                  newCouponSubCategory.value.value ?? undefined
                );
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600" primaryButtonStyle>
                  Crear Cupón
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

interface HighlightProductListProps {
  /**
   * Product list
   */
  products: Record<number, HighlightProductCardProps>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
  /**
   * On back
   */
  onBack: () => void;
}
export const HighlightProductList = ({
  products,
  categories,
  subCategories,
  onBack,
  ...props
}: HighlightProductListProps) => {
  const [currentProducts, setCurrentProducts] = useState<OptionObject<HighlightProductCardProps>[]>(
    []
  );
  const category = useInputForm<OptionObject<CategoryObject | null>>({
    label: "Todas",
    value: null,
  });
  const subCategory = useInputForm<OptionObject<SubCategoryObject | null>>({
    label: "Todas",
    value: null,
  });

  const allCategories: OptionObject<CategoryObject>[] = useMemo(() => {
    return Object.values(categories).map((category) => {
      return { label: category.name, value: category };
    });
  }, [categories]);

  const allSubCategories: OptionObject<SubCategoryObject>[] = useMemo(() => {
    return Object.values(subCategories).map((subCategory) => {
      return { label: subCategory.name, value: subCategory };
    });
  }, [subCategories]);

  const allProducts: OptionObject<HighlightProductCardProps>[] = useMemo(() => {
    return Object.values(products).map((product) => {
      return { label: product.name, value: product };
    });
  }, [products]);

  const currentSubCategories = useMemo(() => {
    if (!category.value.value) {
      return allSubCategories;
    }

    // Filter sub-categories by category
    return allSubCategories.filter(
      (subCategory) => subCategory.value.categoryId === category.value.value!.id
    );
  }, [allSubCategories, category.value.value]);

  const currentProductsBySubCategory = useMemo(() => {
    let currentProducts: OptionObject<HighlightProductCardProps>[] = [];

    // If there is no category nor sub-category selected, return all products
    if (!category.value.value && !subCategory.value.value) {
      currentProducts = allProducts;
    }

    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.value) {
      for (const product of allProducts) {
        if (product.value.category === category.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      for (const product of allProducts) {
        if (product.value.subCategory === subCategory.value.value!.name) {
          currentProducts.push(product);
        }
      }
    }

    return currentProducts;
  }, [allProducts, category.value.value, subCategory.value.value]);

  const selectedCount = useMemo(() => {
    return currentProducts.filter((product) => product.value.available).length;
  }, [currentProducts]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategory.value.value.categoryId !== category.value.value?.id) {
      subCategory.setValue({ label: "Todas", value: null });
    }
  }, [category.value.value]);

  useEffect(() => {
    // If we select a subcategory and there is no selected category, then we
    // place the corresponding category
    if (!category.value.value) {
      for (const c of allCategories) {
        if (c.value.id === subCategory.value.value?.categoryId) {
          category.setValue(c);
          break;
        }
      }
    }
  }, [subCategory.value.value]);

  return (
    <Box className={styles["product-list--container"]}>
      <Box className={styles["product-list--header"]}>
        <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box style={{ cursor: "pointer", padding: "10px" }} onClick={onBack}>
            <Icon icon="left" size="28px" />
          </Box>

          <Text weight="700" type="h3">
            Productos Destacados
          </Text>
        </Box>

        <Box
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text type="h3" weight="700">
            Menú
          </Text>
        </Box>
      </Box>

      <Box className={styles["product-list--body"]} weakShadow>
        <Box className={styles["product-list--header-filters"]}>
          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                label="Categoría"
                showError={false}
                options={allCategories}
                inputHook={category}
                emptyLabel="Todas"
              />
            </Box>
          </Box>

          <Box className={styles["product-list--header-filter-item"]}>
            <Box width="100%">
              <InputSelect
                width="100%"
                addEmptyOption
                showError={false}
                label="Sub-categoría"
                inputHook={subCategory}
                emptyLabel="Todas"
                options={currentSubCategories}
              />
            </Box>
          </Box>
        </Box>

        <Paginable
          list={currentProductsBySubCategory}
          setCurrentList={setCurrentProducts}
          objectsPerPage={8}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {currentProducts.map((product, index) => (
              <Box
                weakShadow
                className={styles["product-list--body-item"]}
                key={`product-list--body-item-${index}-${product.value.name}`}
              >
                <HighlightProductCard
                  {...product.value}
                  disabled={!product.value.available && selectedCount > 3}
                />
              </Box>
            ))}
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
            <Box className={styles["product-list--body-item"]} />
          </Box>
        </Paginable>
      </Box>
    </Box>
  );
};
