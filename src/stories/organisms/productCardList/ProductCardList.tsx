import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./productCardList.module.scss";
import useInputForm from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { ProductProps } from "../../molecules/product/Product";
import { InputText } from "../../molecules/inputText/InputText";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import { ProductCard } from "../../molecules/productCard/ProductCard";
import useResizeObserver from "../../hooks/useResizeObserver";
import { Switch } from "../../atoms/switch/Switch";
import { Range } from "../../atoms/range/Range";
import { Button } from "../../atoms/button/Button";

type ProductInfo = {
  /**
   * Product data
   */
  product: ProductProps;
  /**
   * Indicates if the product is liked
   */
  like: boolean;
  /**
   * Product image
   */
  image: string;
  /**
   * On like click
   */
  onLike: () => void;
  /**
   * On add to cart click
   */
  onAddToCart: (quantity: string) => Promise<boolean>;
};

interface ProductCardListProps {
  /**
   * Product list
   */
  products: Record<number, ProductInfo>;
  /**
   * Product categories
   */
  categories: Record<number, CategoryObject>;
  /**
   * Product sub-categories
   */
  subCategories: Record<number, SubCategoryObject>;
}

/**
 * Primary UI component for user interaction
 */
export const ProductCardList = ({
  products,
  categories,
  subCategories,
  ...props
}: ProductCardListProps) => {
  const nullOption = { label: "", value: null };
  const observer = useResizeObserver<HTMLDivElement>();

  // Filters
  const search = useInputForm("");
  const [onlyLiked, setOnlyLiked] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1]);
  const category = useInputForm<OptionObject<CategoryObject | null>>(nullOption);
  const subCategory = useInputForm<OptionObject<SubCategoryObject | null>>(nullOption);

  const categoriesOptions = useMemo(() => {
    return Object.values(categories).map((category) => {
      return { label: category.name, value: category };
    });
  }, [categories]);

  const subCategoriesOptions = useMemo(() => {
    return Object.values(subCategories)
      .filter((subCategory) => {
        return !category.value.value || subCategory.categoryId === category.value?.value?.id;
      })
      .map((subCategory) => {
        return { label: subCategory.name, value: subCategory };
      });
  }, [category, subCategories]);

  const filteredProducts = useMemo(() => {
    return Object.values(products).filter((product) => {
      const categoryFilter = category.value?.value?.id
        ? product.product.category.value?.id === category.value.value.id
        : true;
      const subCategoryFilter = subCategory.value?.value?.id
        ? product.product.subCategory.value?.id === subCategory.value.value.id
        : true;
      const searchFilter = search.value
        ? product.product.name.toLowerCase().includes(search.value.toLowerCase())
        : true;
      const priceFilter =
        Number(product.product.price) >= priceRange[0] &&
        Number(product.product.price) <= priceRange[1];
      const likeFilter = !onlyLiked || product.like;

      return categoryFilter && subCategoryFilter && searchFilter && priceFilter && likeFilter;
    });
  }, [products, category.value, subCategory.value, search.value, priceRange, onlyLiked]);

  const elementsToComplete = useMemo(() => {
    if (!observer.ref.current) return 1;

    const gap = 10;
    const elementWidth = 357;
    const width = observer.width;
    const elementsByRow = Math.floor(width / (elementWidth + gap));

    return elementsByRow - (filteredProducts.length % elementsByRow);
  }, [observer.width, filteredProducts]);

  const maxPrice = useMemo(() => {
    const result = Math.ceil(
      Object.values(products).reduce((max, product) => {
        return Math.max(max, Number(product.product.price));
      }, 0)
    );
    setPriceRange([0, result]);
    return result;
  }, [products]);

  const clearFilters = () => {
    category.setValue(nullOption);
    subCategory.setValue(nullOption);
    search.setValue("");
    setOnlyLiked(false);
    setPriceRange([0, maxPrice]);
  };

  useEffect(() => {
    if (
      !category.value?.value?.id ||
      subCategory.value?.value?.categoryId !== category.value.value.id
    ) {
      subCategory.setValue(nullOption);
    }
  }, [category.value]);

  return (
    <Box className={styles["product-card-list--container"]} innerRef={observer.ref}>
      <Box>
        <Box className={styles["product-card-list--filters-container"]}>
          <Box style={{ flex: 1 }}>
            <InputSelect
              emptyLabel=""
              addEmptyOption
              showError={false}
              label="Categoría"
              inputHook={category}
              options={categoriesOptions}
            />
          </Box>

          <Box style={{ flex: 1 }}>
            <InputSelect
              emptyLabel=""
              addEmptyOption
              showError={false}
              label="Sub-categoría"
              inputHook={subCategory}
              options={subCategoriesOptions}
            />
          </Box>

          <Box style={{ flex: 1 }}>
            <InputText
              showError={false}
              inputHook={search}
              label="Buscar producto"
              placeholder="Nombre del producto"
            />
          </Box>
        </Box>

        <Box className={styles["product-card-list--filters-container"]} style={{ gap: "30px" }}>
          <Box className={styles["product-card-list--switch"]}>
            <Text weight="400" type="h6">
              Solo favoritos
            </Text>
            <Switch active={onlyLiked} onClick={() => setOnlyLiked(!onlyLiked)} />
          </Box>

          <Box style={{ flex: 1, paddingLeft: "20px", paddingRight: "20px" }}>
            <Text weight="400" type="h6">
              Precio
            </Text>
            <Range
              min={0}
              minMark="0$"
              max={maxPrice}
              maxMark={`${maxPrice}$`}
              values={priceRange}
              setValues={setPriceRange}
              labelFunct={(value) => `${value}$`}
            />
          </Box>

          <Button primary onClick={clearFilters} size="large">
            <Text weight="700" type="h5" primaryButtonStyle>
              Limpiar filtros
            </Text>
          </Button>
        </Box>
      </Box>

      <Box className={styles["product-card-list--list-container"]}>
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product, index) => {
              return (
                <ProductCard
                  reviews={0}
                  key={`product-card--product-${index}-${product.product.id}`}
                  name={product.product.name}
                  cost={Number(product.product.price)}
                  like={product.like}
                  width="325px"
                  onLike={product.onLike}
                  onAddToCart={product.onAddToCart}
                  productImage={product.image}
                />
              );
            })}
            {elementsToComplete > 0 &&
              [...Array(elementsToComplete)].map((_, index) => {
                return <Box key={`product-card-list--list-empty-item-${index}`} width="357px" />;
              })}
          </>
        ) : (
          <Box>
            <Text>No se encontraron productos</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
