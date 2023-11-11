import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./branchProducts.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import {
  CouponList,
  HighlightProductList,
  ProductList,
} from "../../organisms/productList/ProductList";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import {
  CouponProductCardProps,
  ExtendedProductCardProps,
  HighlightProductCardProps,
} from "../../molecules/productCard/ProductCard";
import ProductObject from "../../utils/objects/ProductObject";

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

interface BranchCouponsProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Indicates if have branch
   */
  haveBranch: boolean;
  /**
   * All products
   */
  allProducts: Record<number, ProductObject>;
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
export const BranchCoupons = ({
  header,
  haveBranch,
  allProducts,
  products,
  categories,
  subCategories,
  onBack,
  onCreateCoupon,
  ...props
}: BranchCouponsProps) => {
  const windowSize = useWindowResize();
  const PageWrapper = useMemo(
    () => (windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage),
    [windowSize.resolutionType]
  );

  return (
    <PageWrapper headerArgs={header}>
      {haveBranch ? (
        <CouponList
          allProducts={allProducts}
          products={products}
          categories={categories}
          subCategories={subCategories}
          onBack={onBack}
          onCreateCoupon={onCreateCoupon}
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

interface BranchHighlightProductsProps {
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
  /**
   * On create product
   */
}
export const BranchHighlightProducts = ({
  header,
  haveBranch,
  products,
  categories,
  subCategories,
  onBack,
  ...props
}: BranchHighlightProductsProps) => {
  const windowSize = useWindowResize();
  const PageWrapper = useMemo(
    () => (windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage),
    [windowSize.resolutionType]
  );

  return (
    <PageWrapper headerArgs={header}>
      {haveBranch ? (
        <HighlightProductList
          products={products}
          categories={categories}
          subCategories={subCategories}
          onBack={onBack}
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
