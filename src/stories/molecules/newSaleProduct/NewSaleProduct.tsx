import React, { useEffect, useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./newSaleProduct.module.scss";
import { ProductProps } from "../product/Product";
import { InputText } from "../inputText/InputText";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
import { InputSelect } from "../inputSelect/InputSelect";
import OptionObject from "../../utils/objects/OptionObject";

export interface NewSaleProductProps {
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
  onCreate: (productId: number, quantity: number) => void;
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
  subCategoryDependency,
  onCreate,
  width,
  height,
  ...props
}: NewSaleProductProps) => {
  const quantity = useInputForm<string>("1");
  const product = useInputForm<OptionObject>({ label: "", text: "" });
  const category = useInputForm<OptionObject>({ label: "", text: "" });
  const subCategory = useInputForm<OptionObject>({ label: "", text: "" });

  const currentSubCategories = useMemo(() => {
    if (!category.value.text || category.value.text === "") {
      return subCategories;
    }

    return subCategories.filter((subCategory) => {
      return subCategoryDependency[subCategory.text!] === category.value.text!;
    });
  }, [category.value.text, subCategories, subCategoryDependency]);

  const currentProductsBySubCategory = useMemo(() => {
    let currentProducts;
    // If there is no category nor sub-category selected, return all products
    if (
      (!category.value.text || category.value.text === "") &&
      (!subCategory.value.text || subCategory.value.text === "")
    ) {
      currentProducts = products;
    }
    // If there is no sub-category selected, return all products from the
    // selected category
    else if (!subCategory.value.text || subCategory.value.text === "") {
      currentProducts = products.filter((product) => {
        return product.category.value === category.value.text;
      });
    }
    // If there is a sub-category selected, return all products from the
    // selected sub-category
    else {
      currentProducts = products.filter((product) => {
        return product.subCategory.value === subCategory.value.text;
      });
    }

    // Convert products to options
    return currentProducts.map((product) => {
      return {
        label: product.name.value,
        text: product.name.value,
        number: product.id,
      };
    });
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
    if (!subCategory.value.text || subCategory.value.text === "") return;
    
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

  const handleCreate = () => {
    const productId = product.value.number!;
    const productQuantity = parseInt(quantity.value);

    onCreate(productId, productQuantity);
  };

  return (
    <Box borderRadius="12px" className={styles["new-sale-product--container"]}>
      <Box className={styles["new-sale-product--category-container"]}>
        <InputSelect
          height="45px"
          addEmptyOption
          label="Categoría"
          showError={false}
          options={categories}
          inputHook={category}
        />
      </Box>
      <Box className={styles["new-sale-product--sub-category-container"]}>
        <InputSelect
          height="45px"
          addEmptyOption
          showError={false}
          label="Sub-categoría"
          inputHook={subCategory}
          options={currentSubCategories}
        />
      </Box>
      <Box className={styles["new-sale-product--product-container"]}>
        <InputSelect
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
          height="45px"
          width="100px"
          type="naturalNumber"
          label="Cantidad"
          showError={false}
          inputHook={quantity}
        />
        <Button
          primary
          fullWidth
          onClick={handleCreate}
          state={!!product.value.label && parseInt(quantity.value) > 0 ? "normal" : "inactive"}
        >
          <Box className={styles["sale-product--button"]}>
            <Text weight="600">Agregar</Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
