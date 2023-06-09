import React, { useState } from "react";
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
import { EditableInputText } from "../editableInputText/EditableInputText";
import { EditableInputLongText } from "../editableInputLongText/EditableInputLongText";

export interface ProductProps {
  /**
   * Product name
   */
  name: InputFormHook<string>;
  /**
   * Product category
   */
  category: InputFormHook<string>;
  /**
   * Product sub-category
   */
  subCategory: InputFormHook<string>;
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
  categoryOptions: OptionObject[];
  /**
   * Sub-category options
   */
  subCategoryOptions: OptionObject[];

  /**
   * On save product name
   */
  onSaveName: (value: string) => void;
  /**
   * On save product category
   */
  onSaveCategory: (value: string) => void;
  /**
   * On save product sub-category
   */
  onSaveSubCategory: (value: string) => void;
  /**
   * On save product description
   */
  onSaveDescription: (value: string) => void;
  /**
   * On save product price
   */
  onSavePrice: (value: string) => void;
  /**
   * On save product availability
   */
  onSaveAvailable: (value: boolean) => void;
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
  categoryOptions,
  subCategoryOptions,

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
        <Box>
          <Text weight="700" type="h5">
            {" "}
            {name.value}{" "}
          </Text>
        </Box>
        <Box>
          <Text type="h5"> {`${category.value} | ${subCategory.value}`} </Text>
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
              <EditableInputText
                useEditIcons
                width="100%"
                height="100%"
                inputHook={category}
                options={categoryOptions}
                editable={true}
                saveValueFunction={onSaveCategory}
                type="select"
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
                <EditableInputText
                  useEditIcons
                  height="100%"
                  inputHook={subCategory}
                  options={subCategoryOptions}
                  editable={true}
                  saveValueFunction={onSaveSubCategory}
                  type="select"
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
                    onSaveAvailable(!prev);
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
            <Button primary fullWidth size="large" onClick={onDelete}>
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
