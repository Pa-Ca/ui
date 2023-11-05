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
} from "../../molecules/productCard/ProductCard";

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
    subCategoryId: number
  ) => void;
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
  const [showNewModal, setShowNewModal_] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<OptionObject<ExtendedProductCardProps>[]>(
    []
  );
  const newProductName = useInputForm<string>("");
  const newProductPrice = useInputForm<string>("");
  const newSubCategory = useInputForm<string>("");
  const newCategory = useInputForm<OptionObject<CategoryObject | null>>({
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

  const setShowNewModal = (show: boolean) => {
    newSubCategory.setValue("");
    newCategory.setValue(category.value);
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
            <Button primary onClick={() => setShowNewModal(true)}>
              <Text primaryButtonStyle>Crear Producto</Text>
            </Button>
            <Button primary onClick={() => setShowNewModal(true)}>
              <Text primaryButtonStyle>Crear Categoría</Text>
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

      <Modal open={showNewModal} setOpen={setShowNewModal}>
        <Box className={styles["product-list--modal-container"]}>
          <Text type="h5" weight="500">
            Indique los datos de la nueva sub-categoría
          </Text>

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
              onClick={async () => {
                const response = await onCreateSubCategory(
                  newCategory.value.value?.id!,
                  newSubCategory
                );
                if (response.id > -1) {
                  setShowNewModal(false);
                  subCategory.setValue({
                    label: response.name,
                    value: response,
                  });
                }
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Crear Sub-Categoría</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

interface CouponListProps {
  /**
   * Product list
   */
  products: Record<number, CouponProductCardProps>;
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
    subCategoryId: number
  ) => void;
  /**
   * On create sub-category.
   */
  onCreateSubCategory: (
    categoryId: number,
    subCategory: InputFormHook<string>
  ) => Promise<SubCategoryObject>;
}
export const CouponList = ({
  products,
  categories,
  subCategories,
  onBack,
  onCreateProduct,
  onCreateSubCategory,
  ...props
}: CouponListProps) => {
  const [showNewModal, setShowNewModal_] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<OptionObject<CouponProductCardProps>[]>(
    []
  );
  const newSubCategory = useInputForm<string>("");
  const newCategory = useInputForm<OptionObject<CategoryObject | null>>({
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

  const allProducts: OptionObject<CouponProductCardProps>[] = useMemo(() => {
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
    let currentProducts: OptionObject<CouponProductCardProps>[] = [];

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

  const setShowNewModal = (show: boolean) => {
    newSubCategory.setValue("");
    newCategory.setValue(category.value);
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
        <Box className={styles["product-list--modal-container"]}>
          <Text type="h5" weight="500">
            Indique los datos de la nueva sub-categoría
          </Text>

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
              onClick={async () => {
                const response = await onCreateSubCategory(
                  newCategory.value.value?.id!,
                  newSubCategory
                );
                if (response.id > -1) {
                  setShowNewModal(false);
                  subCategory.setValue({
                    label: response.name,
                    value: response,
                  });
                }
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Crear Sub-Categoría</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
