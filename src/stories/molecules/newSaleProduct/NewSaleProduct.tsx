import React, { useEffect, useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./newSaleProduct.module.scss";
import { InputText } from "../inputText/InputText";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
import { InputSelect } from "../inputSelect/InputSelect";
import OptionObject from "../../utils/objects/OptionObject";
import ProductObject from "../../utils/objects/ProductObject";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";

export interface NewSaleProductProps {
  /**
   * Products
   */
  products: Record<number, ProductObject>;
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
  onCreate: (productId: number, amount: number) => void;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const NewSaleProduct = ({
  products,
  categories,
  subCategories,
  onCreate,
  width,
  height,
  ...props
}: NewSaleProductProps) => {
  const amount = useInputForm<string>("1");
  const product = useInputForm<OptionObject<ProductObject | null>>({
    label: "Todas",
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

  const allCategories = useMemo(() => {
    return Object.values(categories).map((category) => {
      return {
        label: category.name,
        value: category,
      };
    });
  }, [categories]);

  const allSubCategories = useMemo(() => {
    return Object.values(subCategories).map((subCategory) => {
      return {
        label: subCategory.name,
        value: subCategory,
      };
    });
  }, [subCategories]);

  const allProducts = useMemo(() => {
    return Object.values(products).map((product) => {
      return {
        label: product.name,
        value: product,
      };
    });
  }, [products]);

  const currentSubCategories = useMemo(() => {
    if (!category.value.value) {
      return allSubCategories;
    }

    // Filter sub-categories by category
    return allSubCategories.filter((subCategory) => {
      return (
        categories[subCategory.value.categoryId].name ===
        category.value.value?.name
      );
    });
  }, [category.value.value, subCategories, categories, allSubCategories]);

  const currentProductsBySubCategory = useMemo(() => {
    let currentProducts;

    // If there is no category nor sub-category selected, return all products
    if (!category.value.value && !subCategory.value.value) {
      currentProducts = allProducts;
    }
    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.value) {
      currentProducts = allProducts.filter((product) => {
        return (
          subCategories[product.value.subCategoryId].categoryId ===
          category.value.value?.id
        );
      });
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      currentProducts = allProducts.filter((product) => {
        return product.value.subCategoryId === subCategory.value.value?.id;
      });
    }

    // Convert products to options
    return currentProducts;
  }, [category.value.value, subCategory.value.value, allProducts]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategory.value.value.categoryId !== category.value.value?.id) {
      subCategory.setValue({ label: "Todas", value: null });
    }
  }, [category.value.value]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If we select a subcategory and there is no selected category, then we
    // place the corresponding category
    if (!category.value.value) {
      for (const c of allCategories) {
        if (c.value.id === subCategory.value.value.categoryId) {
          category.setValue(c);
          break;
        }
      }
    }
  }, [subCategory.value.value]);

  const handleCreate = () => {
    const productId = product.value.value?.id!;
    const productAmount = parseInt(amount.value);

    onCreate(productId, productAmount);
  };

  return (
    <Box borderRadius="12px" className={styles["new-sale-product--container"]}>
      <Box className={styles["new-sale-product--category-container"]}>
        <InputSelect
          height="45px"
          addEmptyOption
          label="Categoría"
          showError={false}
          emptyLabel="Todas"
          inputHook={category}
          options={allCategories}
        />
      </Box>
      <Box className={styles["new-sale-product--sub-category-container"]}>
        <InputSelect
          height="45px"
          addEmptyOption
          showError={false}
          emptyLabel="Todas"
          label="Sub-categoría"
          inputHook={subCategory}
          options={currentSubCategories}
        />
      </Box>
      <Box className={styles["new-sale-product--product-container"]}>
        <InputSelect
          required
          height="45px"
          addEmptyOption
          label="Producto"
          showError={false}
          inputHook={product}
          options={currentProductsBySubCategory}
        />
      </Box>
      <Box className={styles["sale-product--right-section-container"]}>
        <InputText
          required
          height="45px"
          width="100px"
          type="naturalNumber"
          label="Cantidad"
          showError={false}
          inputHook={amount}
        />
        <Button
          primary
          fullWidth
          onClick={handleCreate}
          state={
            !!product.value.value && parseInt(amount.value) > 0
              ? "normal"
              : "inactive"
          }
        >
          <Box className={styles["sale-product--button"]}>
            <Text weight="600">Agregar</Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
