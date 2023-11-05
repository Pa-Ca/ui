import React, { useMemo } from "react";
import useWindowResize from "../../hooks/useWindowResize";
import { HeaderProps } from "../../organisms/header/Header";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./branchProductsResume.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { AddBox } from "../../molecules/addBox/AddBox";
import useResizeObserver from "../../hooks/useResizeObserver";
import { SimpleProductCard, SimpleProductCardProps } from "../../molecules/productCard/ProductCard";

interface BranchProductsResumeProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Number of products
   */
  productsCount: number;
  /**
   * Number of categories
   */
  categoriesCount: number;
  /**
   * Number of products available online
   */
  productsAvailableOnlineCount: number;
  /**
   * Highlight products
   */
  highlightProducts: SimpleProductCardProps[];
  /**
   * Cupons
   */
  cupons: SimpleProductCardProps[];
  /**
   * On add highlight product
   */
  onAddHighlightProduct?: () => void;
  /**
   * On click event for view more products
   */
  onViewMoreProductsClick?: () => void;
  /**
   * On add cupon
   */
  onAddCupon?: () => void;
  /**
   * On click event for view more cupons
   */
  onViewMoreCuponsClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const BranchProductsResume = ({
  header,
  productsCount,
  categoriesCount,
  productsAvailableOnlineCount,
  highlightProducts,
  cupons,
  onAddHighlightProduct,
  onViewMoreCuponsClick,
  onAddCupon,
  onViewMoreProductsClick,
  ...props
}: BranchProductsResumeProps) => {
  const windowSize = useWindowResize();
  const observer = useResizeObserver<HTMLDivElement>();

  const PageWrapper = useMemo(
    () => (windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage),
    [windowSize.resolutionType]
  );

  return (
    <PageWrapper headerArgs={header}>
      <Box style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "60px" }}>
        {/* Header */}
        <Box>
          <Text type="h2" weight="600">
            Productos
          </Text>
        </Box>

        {/* Resume */}
        <Box>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Text type="h3" weight="600">
              Menú
            </Text>

            <Button primary onClick={onViewMoreProductsClick}>
              <Text primaryButtonStyle>Ver mas</Text>
            </Button>
          </Box>

          <Box weakShadow className={styles["branch-products-resume--card"]}>
            <Box
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon icon="table" size="28px" />

                <Text type="h5" weight="600">
                  Número de productos
                </Text>
              </Box>

              <Text type="h1" weight="600" style={{ fontSize: "10rem" }}>
                {productsCount}
              </Text>
            </Box>

            <Box
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon icon="table" size="28px" />

                <Text type="h5" weight="600">
                  Número de Categorías
                </Text>
              </Box>

              <Text type="h1" weight="600" style={{ fontSize: "10rem" }}>
                {categoriesCount}
              </Text>
            </Box>

            <Box
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon icon="table" size="28px" />

                <Text type="h5" weight="600">
                  Productos disponibles online
                </Text>
              </Box>

              <Text type="h1" weight="600" style={{ fontSize: "10rem" }}>
                {productsAvailableOnlineCount}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Highlight products */}
        <Box>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Text type="h3" weight="600">
              Productos destacados
            </Text>
          </Box>

          <Box
            weakShadow
            innerRef={observer.ref}
            className={styles["branch-products-resume--card"]}
          >
            <Box style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
              {highlightProducts.map((product, index) => (
                <Box key={index} style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                  <SimpleProductCard {...product} width="80%" />
                </Box>
              ))}
              {new Array(Math.max(0, 4 - highlightProducts.length)).fill(0).map((_, index) => (
                <Box key={index} style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                  <AddBox onClick={onAddHighlightProduct} size={`${observer.width / 5 - 80}px`} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Cupons */}
        <Box>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Text type="h3" weight="600">
              Cupones
            </Text>

            <Button primary onClick={onViewMoreCuponsClick}>
              <Text primaryButtonStyle>Ver mas</Text>
            </Button>
          </Box>

          <Box weakShadow className={styles["branch-products-resume--card"]}>
            <Box style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
              {cupons.map((product, index) => (
                <Box key={index} style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                  <SimpleProductCard {...product} width="80%" />
                </Box>
              ))}
              {new Array(Math.max(0, 4 - cupons.length)).fill(0).map((_, index) => (
                <Box key={index} style={{ display: "flex", flex: 1, justifyContent: "center" }}>
                  <AddBox onClick={onAddHighlightProduct} size={`${observer.width / 5 - 80}px`} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};
