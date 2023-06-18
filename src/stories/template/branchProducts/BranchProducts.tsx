import React, { useMemo }  from "react";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { ProductList } from "../../organisms/productList/ProductList";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import { Product, ProductProps } from "../../molecules/product/Product";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";

interface BranchProductsProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
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
export const BranchProducts = ({
  header,
  products,
  categories,
  subCategories,
  onCreateProduct,
  onCreateSubCategory,
  onEditSubCategory,
  onDeleteSubCategory,
  ...props
}: BranchProductsProps) => {
  const windowSize = useWindowResize();
  const PageWrapper = useMemo(
    () =>
      windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage,
    [windowSize.resolutionType]
  );

  return (
    <PageWrapper headerArgs={header}>
      <ProductList
        products={products}
        categories={categories}
        subCategories={subCategories}
        onCreateProduct={onCreateProduct}
        onCreateSubCategory={onCreateSubCategory}
        onEditSubCategory={onEditSubCategory}
        onDeleteSubCategory={onDeleteSubCategory}
      />
    </PageWrapper>
  );
};
