import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./branchProducts.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import { ProductProps } from "../../molecules/product/Product";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { ProductList } from "../../organisms/productList/ProductList";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { ExtendedProductCardProps } from "../../molecules/productCard/ProductCard";

interface BranchProductsProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Indicates if have branch
   */
  haveBranch: boolean;
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

/**
 * Primary UI component for user interaction
 */
export const BranchProducts = ({
  header,
  haveBranch,
  products,
  categories,
  subCategories,
  onBack,
  onCreateProduct,
  onCreateSubCategory,
  ...props
}: BranchProductsProps) => {
  const windowSize = useWindowResize();
  const PageWrapper = useMemo(
    () => (windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage),
    [windowSize.resolutionType]
  );

  return (
    <PageWrapper headerArgs={header}>
      {haveBranch ? (
        <ProductList
          products={products}
          categories={categories}
          subCategories={subCategories}
          onBack={onBack}
          onCreateProduct={onCreateProduct}
          onCreateSubCategory={onCreateSubCategory}
        />
      ) : (
        <Box className={styles["branch-products--no-branch"]}>
          <Icon icon="share" size={windowSize.resolutionType === "desktop" ? "50vh" : "50vw"} />
          <Text> Parece que no tienes ningún local asociado. </Text>
        </Box>
      )}
    </PageWrapper>
  );
};
