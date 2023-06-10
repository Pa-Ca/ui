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
import { Product, ProductProps } from "../../molecules/product/Product";

interface ProductListProps {
  /**
   * Product list
   */
  products: ProductProps[];
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
  onCreateProduct: (
    name: InputFormHook<string>,
    price: InputFormHook<string>,
    category: string,
    subCategory: string
  ) => void;
  /**
   * On create sub-category.
   */
  onCreateSubCategory: (
    category: InputFormHook<OptionObject>,
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
  subCategoryDependency,
  onCreateProduct,
  onCreateSubCategory,
  onEditSubCategory,
  onDeleteSubCategory,
  ...props
}: ProductListProps) => {
  const [showNewModal, setShowNewModal_] = useState(false);
  const [showEditModal, setShowEditModal_] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentProducts, setCurrentProducts] = useState<ProductProps[]>([]);

  const newProductName = useInputForm<string>("");
  const newProductPrice = useInputForm<string>("");

  const newSubCategory = useInputForm<string>("");
  const newCategory = useInputForm<OptionObject>({ label: "", text: "" });

  const editSubCategory = useInputForm<string>("");
  const editCategory = useInputForm<OptionObject>({ label: "", text: "" });

  const category = useInputForm<OptionObject>({ label: "", text: "" });
  const subCategory = useInputForm<OptionObject>({ label: "", text: "" });

  const currentSubCategories = useMemo(() => {
    if (!category.value.text || category.value.text === "")
      return subCategories;

    return subCategories.filter((subCategory) => {
      return subCategoryDependency[subCategory.text!] === category.value.text!;
    });
  }, [category.value.text, subCategories, subCategoryDependency]);

  const currentProductsBySubCategory = useMemo(() => {
    // If there is no category nor sub-category selected, return all products
    if (
      (!category.value.text || category.value.text === "") &&
      (!subCategory.value.text || subCategory.value.text === "")
    ) {
      return products;
    }
    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.text || subCategory.value.text === "") {
      return products.filter((product) => {
        return product.category.value === category.value.text;
      });
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      return products.filter((product) => {
        return product.subCategory.value === subCategory.value.text;
      });
    }
  }, [products, category.value.text, subCategory.value.text]);

  useEffect(() => {
    if (!subCategory.value.text || subCategory.value.text === "") return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategoryDependency[subCategory.value.text] !== category.value.text) {
      subCategory.setValue({ label: "", text: "" });
    }
  }, [category.value.text]);

  useEffect(() => {
    // If we select a subcategory and there is no selected category, then we
    // place the corresponding category
    if (category.value.text === "") {
      for (const c of categories) {
        if (c.text === subCategoryDependency[subCategory.value.text!]) {
          category.setValue(c);
          break;
        }
      }
    }
  }, [subCategory.value.text]);

  const setShowEditModal = (show: boolean) => {
    editSubCategory.setValue(subCategory.value.text!);
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
                options={categories}
                inputHook={category}
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
                state={subCategory.value.text! === "" ? "inactive" : "normal"}
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
            category={category.value.text!}
            subCategory={subCategory.value.text!}
            price={newProductPrice}
            canCreate={
              category.value.text! !== "" && subCategory.value.text! !== ""
            }
            onCreate={() =>
              onCreateProduct(
                newProductName,
                newProductPrice,
                category.value.text!,
                subCategory.value.text!
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
              key={`product-list--body-item-${index}-${product.id}`}
            >
              <Product
                categoryOptions={categories}
                subCategoryOptions={subCategories}
                subCategoryDependency={subCategoryDependency}
                {...product}
              />
            </Box>
          ))}
        </Paginable>

        <Box>
          <Button
            size="large"
            onClick={() => setShowDeleteModal(true)}
            state={
              subCategory.value.text! === "" ||
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

          <Box width="100%" style={{ zIndex: 2 }}>
            <InputSelect
              required
              width="100%"
              label="Categoría"
              showError={false}
              options={categories}
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
                  subCategory.value.number!,
                  editSubCategory,
                  editCategory.value.number!
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

          <Box width="100%" style={{ zIndex: 2 }}>
            <InputSelect
              required
              width="100%"
              label="Categoría"
              showError={false}
              options={categories}
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
                onCreateSubCategory(newCategory, newSubCategory) &&
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
              {subCategory.value.text!}{" "}
            </span>
            de la categoría{" "}
            <span style={{ fontWeight: "600" }}> {category.value.text!} </span>?
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
                onDeleteSubCategory(subCategory.value.number!);
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
