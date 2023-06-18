import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./productList.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import OptionObject from "../../utils/objects/OptionObject";
import { Paginable } from "../../molecules/paginable/Paginable";
import { InputText } from "../../molecules/inputText/InputText";
import { NewProduct } from "../../molecules/newProduct/NewProduct";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import { Product, ProductProps } from "../../molecules/product/Product";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";

interface ProductListProps {
  /**
   * Product list
   */
  products: Record<number, ProductProps>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
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
  ) => boolean;
  /**
   * On edit sub-category.
   */
  onEditSubCategory: (
    id: number,
    subCategory: InputFormHook<string>,
    categoryId: number
  ) => boolean;
  /**
   * On delete sub-category.
   */
  onDeleteSubCategory: (id: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const ProductList = ({
  products,
  categories,
  subCategories,
  onCreateProduct,
  onCreateSubCategory,
  onEditSubCategory,
  onDeleteSubCategory,
  ...props
}: ProductListProps) => {
  const [showNewModal, setShowNewModal_] = useState(false);
  const [showEditModal, setShowEditModal_] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<
    OptionObject<ProductProps>[]
  >([]);
  const newProductName = useInputForm<string>("");
  const newProductPrice = useInputForm<string>("");
  const newSubCategory = useInputForm<string>("");
  const newCategory = useInputForm<OptionObject<CategoryObject | null>>({
    label: "",
    value: null,
  });
  const editSubCategory = useInputForm<string>("");
  const editCategory = useInputForm<OptionObject<CategoryObject | null>>({
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

  const allProducts: OptionObject<ProductProps>[] = useMemo(() => {
    return Object.values(products).map((product) => {
      return { label: product.name.value, value: product };
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
    let currentProducts: OptionObject<ProductProps>[] = [];

    // If there is no category nor sub-category selected, return all products
    if (!category.value.value && !subCategory.value.value) {
      currentProducts = allProducts;
    }

    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.value) {
      for (const product of allProducts) {
        if (
          product.value.category.value.value?.id === category.value.value!.id
        ) {
          currentProducts.push(product);
        }
      }
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      for (const product of allProducts) {
        if (
          product.value.subCategory.value.value?.id ===
          subCategory.value.value!.id
        ) {
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

  const setShowEditModal = (show: boolean) => {
    editSubCategory.setValue(subCategory.value.label);
    editCategory.setValue(category.value);
    setShowEditModal_(show);
  };

  const setShowNewModal = (show: boolean) => {
    newSubCategory.setValue("");
    newCategory.setValue(category.value);
    setShowNewModal_(show);
  };

  return (
    <Box className={styles["product-list--container"]}>
      <Box className={styles["product-list--header"]}>
        <Text weight="700" type="h3">
          Productos
        </Text>

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

          <Box className={styles["product-list--header-filter-buttons"]}>
            <Box>
              <Button
                fullWidth
                size="large"
                onClick={() => setShowEditModal(true)}
                state={!subCategory.value.value ? "inactive" : "normal"}
              >
                <Box className={styles["product-list--button"]}>
                  <Text weight="600">Editar Sub-Categoría</Text>
                </Box>
              </Button>
            </Box>
            <Box>
              <Button
                primary
                fullWidth
                size="large"
                onClick={() => setShowNewModal(true)}
              >
                <Box className={styles["product-list--button"]}>
                  <Text weight="600">Crear Sub-Categoría</Text>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={styles["product-list--body"]}>
        <Box className={styles["product-list--body-item"]}>
          <NewProduct
            name={newProductName}
            category={!category.value.value ? "" : category.value.label}
            subCategory={!subCategory.value.value ? "" : subCategory.value.label}
            price={newProductPrice}
            canCreate={!!category.value.value && !!subCategory.value.value}
            onCreate={() =>
              onCreateProduct(
                newProductName,
                newProductPrice,
                category.value.value?.id!,
                subCategory.value.value?.id!
              )
            }
          />
        </Box>
        <Paginable
          list={currentProductsBySubCategory}
          setCurrentList={setCurrentProducts}
          objectsPerPage={5}
        >
          {currentProducts.map((product, index) => (
            <Box
              className={styles["product-list--body-item"]}
              key={`product-list--body-item-${index}-${product.value.id}`}
            >
              <Product
                categories={categories}
                subCategories={subCategories}
                {...product.value}
              />
            </Box>
          ))}
        </Paginable>

        <Box>
          <Button
            size="large"
            onClick={() => setShowDeleteModal(true)}
            state={
              !subCategory.value.value ||
              currentProductsBySubCategory.length > 0
                ? "inactive"
                : "normal"
            }
          >
            <Box className={styles["product-list--modal-button"]}>
              <Text weight="600">Eliminar Sub-Categoría</Text>
            </Box>
          </Button>
          <Text type="h7" weight="400">
            * Solo se pueden eliminar sub-categorias vacías
          </Text>
        </Box>
      </Box>

      <Modal open={showEditModal} setOpen={setShowEditModal}>
        <Box className={styles["product-list--modal-container"]}>
          <Text type="h5" weight="500">
            Actualice los datos de la sub-categoría
          </Text>

          <Box width="100%" style={{ zIndex: 3 }}>
            <InputSelect
              required
              width="100%"
              label="Categoría"
              showError={false}
              options={allCategories}
              inputHook={editCategory}
            />
          </Box>

          <Box width="100%">
            <InputText
              required
              type="text"
              width="100%"
              inputHook={editSubCategory}
              label="Nombre"
            />
          </Box>

          <Box className={styles["product-list--modal-buttons"]}>
            <Button
              fullWidth
              size="large"
              onClick={() => setShowEditModal(false)}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() =>
                onEditSubCategory(
                  subCategory.value.value?.id!,
                  editSubCategory,
                  editCategory.value.value?.id!
                ) && setShowEditModal(false)
              }
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Editar Sub-Categoría</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

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
            <Button
              fullWidth
              size="large"
              onClick={() => setShowNewModal(false)}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() =>
                onCreateSubCategory(newCategory.value.value?.id!, newSubCategory) &&
                setShowNewModal(false)
              }
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Crear Sub-Categoría</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={showDeleteModal} setOpen={setShowDeleteModal}>
        <Box className={styles["product-list--delete-modal-container"]}>
          <Text type="h5" weight="500">
            ¿Estás seguro que deseas eliminar la sub-categoría
            <span style={{ fontWeight: "600" }}>
              {" "}
              {subCategory.value.label}{" "}
            </span>
            de la categoría{" "}
            <span style={{ fontWeight: "600" }}> {category.value.label} </span>?
          </Text>

          <Box className={styles["product-list--modal-buttons"]}>
            <Button
              fullWidth
              size="large"
              onClick={() => setShowDeleteModal(false)}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() => {
                setShowDeleteModal(false);
                onDeleteSubCategory(subCategory.value.value?.id!);
              }}
            >
              <Box className={styles["product-list--modal-button"]}>
                <Text weight="600">Eliminar Sub-Categoría</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
