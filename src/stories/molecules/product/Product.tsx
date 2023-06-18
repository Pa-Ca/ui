import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import { Modal } from "../modal/Modal";
import { Box } from "../../atoms/box/Box";
import styles from "./product.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import { Switch } from "../../atoms/switch/Switch";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import CategoryObject from "../../utils/objects/ProductCategoryObject";
import { EditableInputText } from "../editableInputText/EditableInputText";
import SubCategoryObject from "../../utils/objects/ProductSubCategoryObject";
import { EditableInputSelect } from "../editableInputSelect/EditableInputSelect";
import { EditableInputLongText } from "../editableInputLongText/EditableInputLongText";

export interface ProductProps {
  /**
   * Product id
   */
  id: number;
  /**
   * Product name
   */
  name: InputFormHook<string>;
  /**
   * Product category
   */
  category: InputFormHook<OptionObject<CategoryObject | null>>;
  /**
   * Product sub-category
   */
  subCategory: InputFormHook<OptionObject<SubCategoryObject | null>>;
  /**
   * Product description
   */
  description: InputFormHook<string>;
  /**
   * Product price
   */
  price: InputFormHook<string>;
  /**
   * Indicates if the product is available
   */
  available: InputFormHook<boolean>;
  /**
   * Category options
   */
  categories?: Record<number, CategoryObject>;
  /**
   * Sub-category options
   */
  subCategories?: Record<number, SubCategoryObject>;

  /**
   * On save product name
   */
  onSaveName: () => void;
  /**
   * On save product category
   */
  onSaveCategory: () => void;
  /**
   * On save product sub-category
   */
  onSaveSubCategory: () => void;
  /**
   * On save product description
   */
  onSaveDescription: () => void;
  /**
   * On save product price
   */
  onSavePrice: () => void;
  /**
   * On save product availability
   */
  onSaveAvailable: () => void;
  /**
   * On delete product
   */
  onDelete: () => void;

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
export const Product = ({
  name,
  category,
  subCategory,
  description,
  price,
  available,
  categories = {},
  subCategories = {},

  onSaveName,
  onSaveCategory,
  onSaveSubCategory,
  onSaveDescription,
  onSavePrice,
  onSaveAvailable,
  onDelete,

  width,
  height,
  ...props
}: ProductProps) => {
  const [viewDetails, setViewDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const allCategories: OptionObject<CategoryObject>[] = useMemo(() => {
    return Object.values(categories).map((category) => {
      return { label: category.name, value: category };
    });
  }, [categories]);

  const allSubCategories: OptionObject<SubCategoryObject>[] = useMemo(() => {
    return Object.values(subCategories).map((subCategory) => {
      return { label: subCategory.name, value: subCategory };
    });
  }, [subCategories]);

  const currentSubCategoriyOptions = useMemo(() => {
    if (!category.value.value) return allSubCategories;

    // If the category is selected, filter the subcategories
    return allSubCategories.filter((c) => {
      return c.value.categoryId === category.value.value?.id;
    });
  }, [allSubCategories, category.value, categories, subCategories]);

  useEffect(() => {
    if (!subCategory.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (subCategory.value.value?.categoryId !== category.value.value?.id) {
      subCategory.setValue({ label: "", value: null });
    }
  }, [category.value]);

  return (
    <Box
      weakShadow
      borderRadius="12px"
      style={{ width, height }}
      className={classnames(
        styles["product--container"],
        available.value
          ? styles["product--container-available"]
          : styles["product--container-unavailable"]
      )}
    >
      <Box className={styles["product--header"]}>
        <Box className={styles["product--header-title"]}>
          <Text weight="700" type="h5">
            {" "}
            {name.value}{" "}
          </Text>
        </Box>
        <Box className={styles["product--header-category"]}>
          <Text type="h5"> {`${category.value.label} | ${subCategory.value.label}`} </Text>
        </Box>
        <Box className={styles["product--price-and-icon-container"]}>
          <Text weight="700" type="h5">
            {" "}
            {`$${price.value}`}{" "}
          </Text>
          <Box
            className={styles["product--icon-container"]}
            onClick={() => setViewDetails((prev) => !prev)}
          >
            <Icon icon={viewDetails ? "up" : "down"} size="30px" />
          </Box>
        </Box>
      </Box>

      <Box
        className={classnames(
          styles["product--details-container"],
          styles[
            viewDetails
              ? "product--details-container-show"
              : "product--details-container-hide"
          ]
        )}
      >
        <hr className={styles["product--details-container-hr"]} />

        <Box className={styles["product--details"]}>
          <Box className={styles["product--details-row-input"]}>
            <Box className={styles["product--details-input"]}>
              <Text weight="400" highlightStyle>
                {" "}
                Nombre:{" "}
              </Text>
              <EditableInputText
                useEditIcons
                width="100%"
                height="100%"
                inputHook={name}
                editable={true}
                saveValueFunction={onSaveName}
                type="text"
                showError={false}
                containerClassName={styles["product--input-item"]}
              />
            </Box>
            <Box className={styles["product--details-input"]}>
              <Text weight="400" highlightStyle>
                {""}
                Precio ($):{" "}
              </Text>
              <Box style={{ flex: 1 }}>
                <EditableInputText
                  useEditIcons
                  width="100%"
                  height="100%"
                  inputHook={price}
                  editable={true}
                  saveValueFunction={onSavePrice}
                  type="positiveNumber"
                  showError={false}
                  containerClassName={styles["product--input-item"]}
                />
              </Box>
            </Box>
          </Box>

          <Box className={styles["product--details-row-input"]}>
            <Box className={styles["product--details-input"]}>
              <Text weight="400" highlightStyle>
                {" "}
                Categoría:{" "}
              </Text>
              <EditableInputSelect
                useEditIcons
                width="100%"
                height="100%"
                inputHook={category}
                options={allCategories}
                editable={true}
                saveValueFunction={onSaveCategory}
                showError={false}
                containerClassName={styles["product--input-item"]}
              />
            </Box>
            <Box className={styles["product--details-input"]}>
              <Box>
                <Text weight="400" highlightStyle>
                  {" "}
                  Sub-categoría:{" "}
                </Text>
              </Box>
              <Box style={{ flex: 1 }}>
                <EditableInputSelect
                  useEditIcons
                  height="100%"
                  inputHook={subCategory}
                  options={currentSubCategoriyOptions}
                  editable={true}
                  saveValueFunction={onSaveSubCategory}
                  showError={false}
                  containerClassName={styles["product--input-item"]}
                />
              </Box>
            </Box>
          </Box>

          <Box className={styles["product--description"]}>
            <Box className={styles["product--description-label"]}>
              <Text weight="400" highlightStyle>
                {" "}
                Descripción:{" "}
              </Text>
            </Box>
            <Box className={styles["product--description-content"]}>
              <EditableInputLongText
                useEditIcons
                inputHook={description}
                minRows={3}
                maxRows={3}
                width="100%"
                height="100%"
                maxLength={200}
                showError={false}
                saveValueFunction={onSaveDescription}
              />
            </Box>
          </Box>

          <Box className={styles["product--details-row-input"]}>
            <Button onClick={() => setShowModal(true)}>
              <Text weight="600" type="h5">
                {" "}
                Eliminar{" "}
              </Text>
            </Button>

            <Box className={styles["product--details-available"]}>
              <Text weight="400" highlightStyle>
                {" "}
                Disponible:{" "}
              </Text>
              <Switch
                active={available.value}
                onClick={() =>
                  available.setValue((prev) => {
                    onSaveAvailable();
                    return !prev;
                  })
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Modal open={showModal} setOpen={setShowModal}>
        <Box className={styles["product--modal-container"]}>
          <Text
            type="h4"
            weight="600"
            className={styles["product--modal-text"]}
          >
            ¿Estás seguro que deseas eliminar este producto?
          </Text>

          <Box className={styles["product--modal-buttons"]}>
            <Button fullWidth size="large" onClick={() => setShowModal(false)}>
              <Box className={styles["product--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
            <Button
              primary
              fullWidth
              size="large"
              onClick={() => {
                onDelete();
                setShowModal(false);
              }}
            >
              <Box className={styles["product--modal-button"]}>
                <Text weight="600">Eliminar Producto</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
