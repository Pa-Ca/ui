import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import { Modal } from "../modal/Modal";
import { Box } from "../../atoms/box/Box";
import styles from "./product.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Button } from "../../atoms/button/Button";
import { Switch } from "../../atoms/switch/Switch";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
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
  name: string;
  /**
   * Product category
   */
  category: OptionObject<CategoryObject | null>;
  /**
   * Product sub-category
   */
  subCategory: OptionObject<SubCategoryObject | null>;
  /**
   * Product description
   */
  description: string;
  /**
   * Product price
   */
  price: string;
  /**
   * Indicates if the product is disabled
   */
  disabled: boolean;
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
  onSaveName: (id: number, name: InputFormHook<string>) => void;
  /**
   * On save product sub-category
   */
  onSaveSubCategory: (
    id: number,
    subCategory: InputFormHook<OptionObject<SubCategoryObject | null>>
  ) => void;
  /**
   * On save product description
   */
  onSaveDescription: (id: number, description: InputFormHook<string>) => void;
  /**
   * On save product price
   */
  onSavePrice: (id: number, price: InputFormHook<string>) => void;
  /**
   * On save product disabled
   */
  onSaveDisabled: (id: number, disabled: boolean) => void;
  /**
   * On delete product
   */
  onDelete: (id: number) => void;

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
  id,
  name,
  category,
  subCategory,
  description,
  price,
  disabled,
  categories = {},
  subCategories = {},

  onSaveName,
  onSaveSubCategory,
  onSaveDescription,
  onSavePrice,
  onSaveDisabled,
  onDelete,

  width,
  height,
  ...props
}: ProductProps) => {
  const nameHook = useInputForm(name);
  const priceHook = useInputForm(price);
  const categoryHook = useInputForm(category);
  const disabledHook = useInputForm(disabled);
  const subCategoryHook = useInputForm(subCategory);
  const descriptionHook = useInputForm(description);

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
    if (!categoryHook.value.value) return allSubCategories;

    // If the category is selected, filter the subcategories
    return allSubCategories.filter((c) => {
      return c.value.categoryId === categoryHook.value.value?.id;
    });
  }, [allSubCategories, categoryHook.value, categories, subCategories]);

  useEffect(() => {
    if (!subCategoryHook.value.value) return;

    // If there is a subcategory selected while changing the category, and
    // both do not match, then we deselect the subcategory
    if (
      subCategoryHook.value.value?.categoryId !== categoryHook.value.value?.id
    ) {
      subCategoryHook.setValue({ label: "", value: null });
    }
  }, [categoryHook.value]);

  return (
    <Box
      weakShadow
      borderRadius="12px"
      style={{ width, height }}
      className={classnames(
        styles["product--container"],
        disabledHook.value
          ? styles["product--container-unavailable"]
          : styles["product--container-available"]
      )}
    >
      <Box className={styles["product--header"]}>
        <Box className={styles["product--header-title"]}>
          <Text weight="700" type="h5">
            {" "}
            {nameHook.value}{" "}
          </Text>
        </Box>
        <Box className={styles["product--header-category"]}>
          <Text type="h5">
            {" "}
            {`${categoryHook.value.label} | ${subCategoryHook.value.label}`}{" "}
          </Text>
        </Box>
        <Box className={styles["product--price-and-icon-container"]}>
          <Text weight="700" type="h5">
            {" "}
            {`$${priceHook.value}`}{" "}
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
                inputHook={nameHook}
                editable={true}
                saveValueFunction={() => onSaveName(id, nameHook)}
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
                  inputHook={priceHook}
                  editable={true}
                  saveValueFunction={() => onSavePrice(id, priceHook)}
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
                inputHook={categoryHook}
                options={allCategories}
                editable={true}
                saveValueFunction={() => {}}
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
                  inputHook={subCategoryHook}
                  options={currentSubCategoriyOptions}
                  editable={true}
                  saveValueFunction={() => onSaveSubCategory(id, subCategoryHook)}
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
                inputHook={descriptionHook}
                minRows={3}
                maxRows={3}
                width="100%"
                height="100%"
                maxLength={200}
                showError={false}
                saveValueFunction={() => onSaveDescription(id, descriptionHook)}
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
                active={!disabledHook.value}
                onClick={() =>
                  disabledHook.setValue((prev) => {
                    onSaveDisabled(id, !prev);
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
                onDelete(id);
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
