import React, { useMemo }  from "react";
import { InputFormHook } from "../../hooks/useInputForm";
import { HeaderProps } from "../../organisms/header/Header";
import OptionObject from "../../utils/objects/OptionObject";
import { ProductProps } from "../../molecules/product/Product";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { ProductList } from "../../organisms/productList/ProductList";
import useWindowResize from "../../hooks/useWindowResize";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";

interface BranchProductsProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
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
export const BranchProducts = ({
  header,
  products,
  categories,
  subCategories,
  subCategoryDependency,
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
        subCategoryDependency={subCategoryDependency}
        onCreateProduct={onCreateProduct}
        onCreateSubCategory={onCreateSubCategory}
        onEditSubCategory={onEditSubCategory}
        onDeleteSubCategory={onDeleteSubCategory}
      />
    </PageWrapper>
  );
};
