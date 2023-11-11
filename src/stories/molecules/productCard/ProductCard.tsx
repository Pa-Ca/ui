import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./productCard.module.scss";
import { Button } from "../../atoms/button/Button";
import useInputForm from "../../hooks/useInputForm";
import { StarRating } from "../../atoms/starRating/StarRating";
import { Switch } from "../../atoms/switch/Switch";

export interface ProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Indicates if the user liked the product
   */
  like: boolean;
  /**
   * Number of reviews
   */
  reviews: number;
  /**
   * On like click
   */
  onLike: () => void;
  /**
   * On add to cart click
   */
  onAddToCart: (quantity: string) => Promise<boolean>;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const ProductCard = ({
  name,
  cost,
  like,
  reviews,
  onLike,
  width,
  height,
  productImage,
  ...props
}: ProductCardProps) => {
  const quantity = useInputForm("1");
  const [quantityMode, setQuantityMode] = useState(false);

  useEffect(() => {
    quantity.setValue("1");
  }, [quantityMode]);

  return (
    <Box className={styles["product-card--container"]} style={{ width, height }}>
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />
      </Box>

      {/* Branch data Box */}
      <Box className={styles["product-card--data-container"]} style={{ flex: 0.8 }}>
        <Box className={styles["product-card--data-sub-container"]}>
          <Box className={styles["product-card--data"]}>
            <Text weight="600" type="h5">
              {name}
            </Text>

            <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <StarRating
                rating={4}
                size={20}
                readonly
                className={styles["product-card--rating"]}
              />
              <Text type="h7">{reviews} reviews</Text>
            </Box>
          </Box>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>
            <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
              {cost}$
            </Text>
          </Box>
        </Box>

        <hr className={styles["product-card--hr"]} />

        <Box className={styles["product-card--data-sub-container"]}>
          <Box>
            <Button
              size="box"
              primary={like}
              className={like ? styles["product-card--button"] : ""}
              onClick={onLike}
            >
              <Icon size="20px" icon={like ? "heart-fill" : "heart"} />
            </Button>
          </Box>

          <Box style={{ flex: 1, marginLeft: "16px" }}>
            <Button
              primary
              fullWidth
              size="box"
              onClick={() => setQuantityMode(true)}
              className={styles["product-card--button"]}
            >
              <Box className={styles["product-card--button-inner-container"]}>
                <Text weight="700" primaryButtonStyle type="h5">
                  Agregar al Carrito
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export interface ExtendedProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Product category
   */
  category: string;
  /**
   * Product sub-category
   */
  subCategory: string;
  /**
   * Is available
   */
  available: boolean;
  /**
   * Is available on mobile
   */
  availableMobile: boolean;
  /**
   * On delete click
   */
  onDelete: () => void;
  /**
   * On edit click
   */
  onEdit: () => void;
  /**
   * On mobile availability click
   */
  onMobileAvailabilityClick: (available: boolean) => void;
  /**
   * On availability click
   */
  onAvailabilityClick: (available: boolean) => void;
  /**
   * On category click
   */
  onCategoryClick: () => void;
  /**
   * On sub-category click
   */
  onSubCategoryClick: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const ExtendedProductCard = ({
  name,
  cost,
  category,
  subCategory,
  available,
  availableMobile,
  onDelete,
  onEdit,
  onMobileAvailabilityClick,
  onAvailabilityClick,
  onCategoryClick,
  onSubCategoryClick,
  width,
  height,
  productImage,
  ...props
}: ExtendedProductCardProps) => {
  return (
    <Box
      className={styles["product-card--container"]}
      style={{ width, height, minHeight: "270px", minWidth: "270px" }}
    >
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex", position: "relative" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />

        <Box
          onClick={onDelete}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="delete" size="25px" />
        </Box>

        <Box
          onClick={onEdit}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="pencil" size="25px" />
        </Box>
      </Box>

      {/* Branch data Box */}
      <Box
        className={styles["product-card--data-container"]}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text weight="600" type="h5">
            {name}
          </Text>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>

            <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
              {cost}$
            </Text>
          </Box>
        </Box>

        <hr style={{ width: "100%" }} />

        <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <Button
              primary
              size="extra-small"
              onClick={onCategoryClick}
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Text type="h7" weight="700" primaryButtonStyle>
                {category}
              </Text>
            </Button>

            <Button
              size="extra-small"
              onClick={onSubCategoryClick}
              style={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              <Text type="h7" weight="600">
                {subCategory}
              </Text>
            </Button>
          </Box>

          <Box style={{ display: "flex", justifyContent: "space-around", gap: "10px" }}>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Text type="h7" weight="400">
                Móvil
              </Text>

              <Switch
                active={availableMobile}
                onClick={() => onMobileAvailabilityClick(!availableMobile)}
                width="50px"
                height="27px"
              />
            </Box>

            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Text type="h7" weight="400">
                Activo
              </Text>

              <Switch
                active={available}
                onClick={() => onAvailabilityClick(!available)}
                width="50px"
                height="27px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export interface SimpleProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * On delete click
   */
  onDelete: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const SimpleProductCard = ({
  name,
  cost,
  onDelete,
  width,
  height,
  productImage,
  ...props
}: SimpleProductCardProps) => {
  return (
    <Box
      className={styles["product-card--container"]}
      style={{ width, height, minHeight: "225px", minWidth: "225px" }}
    >
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex", position: "relative" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />

        <Box
          onClick={onDelete}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="delete" size="25px" />
        </Box>
      </Box>

      {/* Branch data Box */}
      <Box className={styles["product-card--data-container"]}>
        <Box
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text weight="600" type="h5">
            {name}
          </Text>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>

            <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
              {cost}$
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export interface CouponProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Product category
   */
  category: string;
  /**
   * Product sub-category
   */
  subCategory: string;
  /**
   * Cost with discount
   */
  discountCost: number;
  /**
   * Is available
   */
  available: boolean;
  /**
   * On delete click
   */
  onDelete: () => void;
  /**
   * On edit click
   */
  onEdit: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const CouponProductCard = ({
  name,
  cost,
  discountCost,
  available,
  onDelete,
  onEdit,
  width,
  height,
  productImage,
  ...props
}: CouponProductCardProps) => {
  return (
    <Box
      className={styles["product-card--container"]}
      style={{ width, height, minHeight: "225px", minWidth: "225px" }}
    >
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex", position: "relative" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />

        <Box
          onClick={onDelete}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="delete" size="25px" />
        </Box>

        <Box
          onClick={onEdit}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <Icon icon="pencil" size="25px" />
        </Box>
      </Box>

      {/* Branch data Box */}
      <Box
        className={styles["product-card--data-container"]}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Box
          style={{
            display: "flex",
            flex: 1,
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text weight="600" type="h5">
            {name}
          </Text>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>

            {discountCost && (
              <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
                  {discountCost}$
                </Text>

                <Text weight="400" type="h6">
                  <del>{cost}$ </del>
                </Text>
              </Box>
            )}

            {!discountCost && (
              <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
                {cost}$
              </Text>
            )}
          </Box>
        </Box>

        <hr style={{ width: "100%" }} />

        <Box
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Text weight="400" type="h6">
            Activo
          </Text>
          <Switch active={available} onClick={() => {}} width="50px" height="27px" />
        </Box>
      </Box>
    </Box>
  );
};

export interface HighlightProductCardProps {
  /**
   * Product name
   */
  name: string;
  /**
   * Product cost
   */
  cost: number;
  /**
   * Product category
   */
  category: string;
  /**
   * Product sub-category
   */
  subCategory: string;
  /**
   * Is available
   */
  available: boolean;
  /**
   * Is button disabled
   */
  disabled: boolean;
  /**
   * On availability click
   */
  onAvailabilityClick: (available: boolean) => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card product image from url
   */
  productImage: string;
}
export const HighlightProductCard = ({
  name,
  cost,
  available,
  disabled,
  onAvailabilityClick,
  width,
  height,
  productImage,
  ...props
}: HighlightProductCardProps) => {
  return (
    <Box
      className={styles["product-card--container"]}
      style={{ width, height, minHeight: "225px", minWidth: "225px" }}
    >
      {/* Image Box */}
      <Box style={{ flex: 1, display: "flex", position: "relative" }}>
        <Box backgroundImage={productImage} className={styles["product-card--image"]} />
      </Box>

      {/* Branch data Box */}
      <Box
        className={styles["product-card--data-container"]}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Box
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text weight="600" type="h5">
            {name}
          </Text>

          <Box className={styles["product-card--cost-container"]}>
            <Text weight="400" type="h6">
              Costo
            </Text>

            <Text weight="700" type="h4" className={styles["product-card--cost-text"]}>
              {cost}$
            </Text>
          </Box>
        </Box>

        <hr style={{ width: "100%" }} />

        <Box
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            state={disabled ? "inactive" : "normal"}
            primary={!available}
            size="extra-small"
            fullWidth
            onClick={() => onAvailabilityClick(!available)}
            style={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Text primaryButtonStyle={!available} weight="700" type="h6">
              {available ? "Des-seleccionar" : "Seleccionar"}
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
