import React, { useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./branchEditForm.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import OptionObject from "../../utils/objects/OptionObject";
import { InputText } from "../../molecules/inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { EditableInputTime } from "../../molecules/editableInputTime/EditableInputTime";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";
import { EditableInputSelect } from "../../molecules/editableInputSelect/EditableInputSelect";
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import { EditableBranchLocation } from "../../molecules/editableBranchLocation/EditableBranchLocation";
import TaxObject from "../../utils/objects/TaxObject";
import { EditableInputTax } from "../../molecules/editableInputTax/EditableInputTax";
import { Icon } from "../../atoms/icon/Icon";

interface BranchEditFormProps {
  /**
   * Name of the branch
   */
  name: InputFormHook<string>;
  /**
   * Description of the branch
   */
  description: InputFormHook<string>;
  /**
   * Location of the branch
   */
  location: InputFormHook<OptionObject<string | null>>;
  /**
   * Phone of the branch
   */
  phone: InputFormHook<string>;
  /**
   * Capacity of the branch
   */
  capacity: InputFormHook<string>;
  /**
   * Average reserve time hours of the branch
   */
  averageReserveTimeHours: InputFormHook<string>;
  /**
   * Average reserve time minutes of the branch
   */
  averageReserveTimeMinutes: InputFormHook<string>;
  /**
   * Average price per person of the branch (in USD)
   */
  price: InputFormHook<string>;
  /**
   * Branch type
   */
  type: InputFormHook<OptionObject<string | null>>;
  /**
   * Precise location of the branch (Google maps link)
   */
  mapsLink: InputFormHook<string>;

  /**
   * Opening time hours of the branch
   */
  openingTimeHour: InputFormHook<string>;
  /**
   * Opening time minutes of the branch
   */
  openingTimeMinute: InputFormHook<string>;

  /**
   * Closing time hours of the branch
   */
  closingTimeHour: InputFormHook<string>;
  /**
   * Closing time minutes of the branch
   */
  closingTimeMinute: InputFormHook<string>;
  /**
   * Taxes
   */
  taxes: TaxObject[];

  /**
   * Function that is executed when the name is saved
   */
  onSaveName: () => void;
  /**
   * Description of the branch
   */
  onSaveDescription: () => void;
  /**
   * Location of the branch
   */
  onSaveLocation: () => void;
  /**
   * Phone of the branch
   */
  onSavePhone: () => void;
  /**
   * Capacity of the branch
   */
  onSaveCapacity: () => void;
  /**
   * Average reserve time of the branch
   */
  onSaveAverageReserveTime: () => void;
  /**
   * Average price per person of the branch (in USD)
   */
  onSavePrice: () => void;
  /**
   * On save event for the opening time
   * */
  onSaveOpeningTime: () => void;
  /**
   * On save event for the closing time
   * */
  onSaveClosingTime: () => void;
  /**
   * Branch type
   */
  onSaveType: () => void;
  /**
   * Precise location of the branch (Google maps link)
   */
  onSaveMapsLink: () => void;
  /**
   * On delete branch
   */
  onDeleteBranch: () => void;
  /**
   * On add tax
   */
  onAddTax: () => void;

  /**
   * Business email
   */
  email: string;
  /**
   * Google maps API key
   */
  mapsApiKey: string;
  /**
   * Options for the branch type
   */
  typeOptions: OptionObject<string>[];
  /**
   * Options for the branch location
   */
  locationOptions: OptionObject<string>[];
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

export const BranchEditForm = ({
  name,
  description,
  location,
  phone,
  capacity,
  averageReserveTimeHours,
  averageReserveTimeMinutes,
  price,
  mapsLink,
  type,
  openingTimeHour,
  openingTimeMinute,
  closingTimeHour,
  closingTimeMinute,
  taxes,

  onSaveName = () => {},
  onSaveDescription = () => {},
  onSaveLocation = () => {},
  onSavePhone = () => {},
  onSaveCapacity = () => {},
  onSaveAverageReserveTime = () => {},
  onSavePrice = () => {},
  onSaveType = () => {},
  onSaveMapsLink = () => {},
  onSaveOpeningTime = () => {},
  onSaveClosingTime = () => {},
  onDeleteBranch = () => {},
  onAddTax = () => {},

  email,
  typeOptions,
  locationOptions,
  mapsApiKey,
  width,
  height,
  color,
  ...props
}: BranchEditFormProps) => {
  const [taxInfo, setTaxInfo] = useState(false);
  const [deleteBranch, setDeleteBranch] = useState(false);
  const emailInput = useInputForm("");

  const taxesHook = taxes.map((tax) => {
    let type;
    if (tax.type === 0) {
      type = "%";
    } else {
      type = "$";
    }

    return {
      nameInputHook: useInputForm(tax.name),
      valueInputHook: useInputForm(tax.value.toString()),
      typeInputHook: useInputForm(type),
    };
  });

  const locationName = useMemo(() => {
    const match = mapsLink.value.match(/\/place\/(.*?)\//);
    if (match) {
      const placeName = match[1].replace(/\+/g, " ");
      return placeName;
    }
    return "";
  }, [mapsLink]);

  return (
    <Box
      className={styles["branch-edit-form--container"]}
      width={width}
      height={height}
    >
      <Box className={styles["branch-edit-form--name-input"]}>
        <Text weight="400" highlightStyle>
          {" "}
          Nombre{" "}
        </Text>
        <EditableInputText
          useEditIcons
          width="100%"
          height="100%"
          inputHook={name}
          editable={true}
          saveValueFunction={onSaveName}
          type="text"
          containerClassName={styles["branch-edit-form--input-item"]}
        />
      </Box>

      <Box className={styles["branch-edit-form--two-column-row"]}>
        <Box className={styles["branch-edit-form--capacity-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Capacidad{" "}
          </Text>
          <EditableInputText
            useEditIcons
            inputHook={capacity}
            saveValueFunction={onSaveCapacity}
            editable={true}
            type="positiveInteger"
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>

        <Box className={styles["branch-edit-form--average-reserve-time"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Tiempo promedio de reserva{" "}
          </Text>
          <EditableInputTime
            useEditIcons
            hoursInputHook={averageReserveTimeHours}
            minutesInputHook={averageReserveTimeMinutes}
            saveValueFunction={onSaveAverageReserveTime}
            editable={true}
            type="duration"
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--two-column-row"]}>
        <Box className={styles["branch-edit-form--type-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Tipo{" "}
          </Text>
          <EditableInputSelect
            useEditIcons
            inputHook={type}
            options={typeOptions}
            saveValueFunction={onSaveType}
            editable={true}
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>

        <Box className={styles["branch-edit-form--cost-per-person-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Coste por persona ($){" "}
          </Text>
          <EditableInputText
            useEditIcons
            inputHook={price}
            saveValueFunction={onSavePrice}
            editable={true}
            type="positiveNumber"
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--two-column-row"]}>
        <Box className={styles["branch-edit-form--type-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Hora de apertura{" "}
          </Text>
          <EditableInputTime
            useEditIcons
            hoursInputHook={openingTimeHour}
            minutesInputHook={openingTimeMinute}
            saveValueFunction={onSaveOpeningTime}
            editable={true}
            type="localtime"
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>

        <Box className={styles["branch-edit-form--cost-per-person-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Hora de cierre{" "}
          </Text>
          <EditableInputTime
            useEditIcons
            hoursInputHook={closingTimeHour}
            minutesInputHook={closingTimeMinute}
            saveValueFunction={onSaveClosingTime}
            editable={true}
            type="localtime"
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--two-column-row"]}>
        <Box className={styles["branch-edit-form--phone-number-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Número de teléfono Local{" "}
          </Text>
          <EditableInputText
            useEditIcons
            inputHook={phone}
            saveValueFunction={onSavePhone}
            editable={true}
            type="phoneNumber"
            containerClassName={styles["branch-edit-form--input-item"]}
            placeholder="+58 4240000000 | 04240000000"
          />
        </Box>

        <Box className={styles["branch-edit-form--location-input"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Ubicación{" "}
          </Text>
          <EditableInputSelect
            useEditIcons
            width="100%"
            height="100%"
            inputHook={location}
            options={locationOptions}
            saveValueFunction={onSaveLocation}
            editable={true}
            containerClassName={styles["branch-edit-form--input-item"]}
          />
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--two-column-row"]}>
        <Box className={styles["branch-edit-form--description-container"]}>
          <Text weight="400" highlightStyle>
            {" "}
            Descripción{" "}
          </Text>
          <Box height="10px" />
          <EditableInputLongText
            useEditIcons
            inputHook={description}
            minRows={6}
            maxRows={6}
            width="100%"
            height="100%"
            maxLength={480}
            saveValueFunction={onSaveDescription}
          />
        </Box>

        <Box>
          <Box style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <Text weight="400" highlightStyle>
              {" "}
              Tarifas por defecto{" "}
            </Text>
            <Box
              style={{ cursor: "pointer", height: "100%", marginBottom: "5px" }}
              onClick={() => setTaxInfo(true)}
            >
              <Icon icon="info" size="20px" />
            </Box>
          </Box>

          {taxes.map((tax, index) => {
            return (
              <Box key={`sale-product-list--tax-${index}`}>
                <EditableInputTax
                  {...tax}
                  editable
                  hideSubtotal
                  nameInputHook={taxesHook[index].nameInputHook}
                  valueInputHook={taxesHook[index].valueInputHook}
                  typeInputHook={taxesHook[index].typeInputHook}
                  saveValueFunction={() =>
                    tax.saveValueFunction(
                      taxesHook[index].nameInputHook,
                      taxesHook[index].typeInputHook,
                      taxesHook[index].valueInputHook
                    )
                  }
                  showError={
                    taxesHook[index].nameInputHook.code +
                      taxesHook[index].valueInputHook.code >
                    0
                  }
                  key={`sale-product-list--tax-${index}`}
                />
              </Box>
            );
          })}

          <Button size="box" onClick={onAddTax} style={{ marginTop: "10px" }}>
            <Box className={styles["sale-product-list--button"]}>
              <Text weight="600">Agregar Tarifa</Text>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--precise-location-container"]}>
        <Text weight="400" highlightStyle>
          {" "}
          Ubicación precisa
        </Text>
        <EditableInputText
          useEditIcons
          width="100%"
          inputHook={mapsLink}
          editable={true}
          hideTextAfterEditing={true}
          type="text"
          showError={false}
          defaultText={locationName}
          saveValueFunction={onSaveMapsLink}
          containerClassName={styles["branch-edit-form--input-item"]}
        />
        <EditableBranchLocation
          apiKey={mapsApiKey}
          googleMapsLink={mapsLink.value || ""}
          className={styles["branch-edit-form--precise-location-map"]}
        />
      </Box>

      <Box>
        <Button primary size="large" onClick={() => setDeleteBranch(true)}>
          <Box>
            <Text weight="600">Eliminar Local</Text>
          </Box>
        </Button>
      </Box>

      <Modal open={deleteBranch} setOpen={setDeleteBranch}>
        <Box className={styles["branch-edit-form--modal-container"]}>
          <Text
            type="h4"
            weight="600"
            className={styles["branch-edit-form--modal-text"]}
          >
            ¿Estás seguro que deseas eliminar este local?
          </Text>
          <Text
            type="h6"
            weight="400"
            className={styles["branch-edit-form--modal-text"]}
          >
            Esta acción no se puede deshacer. Escriba abajo el correo de su
            cuenta para confirmar.
          </Text>
          <Box width="100%">
            <InputText
              inputHook={emailInput}
              label="Email"
              width="100%"
              showError={false}
            />
          </Box>

          <Box className={styles["branch-edit-form--modal-buttons"]}>
            <Button
              primary
              fullWidth
              size="large"
              state={emailInput.value === email ? "normal" : "inactive"}
            >
              <Box
                className={styles["branch-edit-form--modal-button"]}
                onClick={() => emailInput.value === email && onDeleteBranch()}
              >
                <Text weight="600">Eliminar Local</Text>
              </Box>
            </Button>
            <Button
              fullWidth
              size="large"
              onClick={() => setDeleteBranch(false)}
              state={emailInput.value === email ? "normal" : "inactive"}
            >
              <Box className={styles["branch-edit-form--modal-button"]}>
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={taxInfo} setOpen={setTaxInfo}>
        <Box className={styles["branch-edit-form--modal-container-info"]}>
          <Text
            type="h4"
            weight="600"
            className={styles["branch-edit-form--modal-text"]}
          >
            Taxes por defecto
          </Text>
          <Text
            type="h6"
            weight="400"
            className={styles["branch-edit-form--modal-text"]}
          >
            Las tarifas por defecto se crean automáticamente cuando se inicia
            una venta y modifican el precio total de la venta. Puedes agregar
            tantas tarifas como desees. En cada venta se pueden modificar las
            tarifas por defecto.
          </Text>

          <Button primary fullWidth onClick={() => setTaxInfo(false)}>
            <Box className={styles["branch-edit-form--modal-button"]}>
              <Text weight="600">Entendido</Text>
            </Box>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
