import React, { useMemo, useState } from "react";
import classnames from "classnames";
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
import { EditableInputLongText } from "../../molecules/editableInputLongText/EditableInputLongText";
import { EditableBranchLocation } from "../../molecules/editableBranchLocation/EditableBranchLocation";

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
  location: InputFormHook<string>;
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
  type: InputFormHook<string>;
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
   * Function that is executed when the name is saved
   */
  onSaveName: (value: string) => void;
  /**
   * Description of the branch
   */
  onSaveDescription: (value: string) => void;
  /**
   * Location of the branch
   */
  onSaveLocation: (value: string) => void;
  /**
   * Phone of the branch
   */
  onSavePhone: (value: string) => void;
  /**
   * Capacity of the branch
   */
  onSaveCapacity: (value: string) => void;
  /**
   * Average reserve time of the branch
   */
  onSaveAverageReserveTime: (hours: string, minutes: string) => void;
  /**
   * Average price per person of the branch (in USD)
   */
  onSavePrice: (value: string) => void;
  /**
   * On save event for the opening time
   * */
  onSaveOpeningTime: (hour: string, minute: string) => void;

  /**
   * On save event for the closing time
   * */
  onSaveClosingTime: (hour: string, minute: string) => void;

  /**
   * Branch type
   */
  onSaveType: (value: string) => void;
  /**
   * Precise location of the branch (Google maps link)
   */
  onSaveMapsLink: (value: string) => void;
  /**
   * On delete branch
   */
  onDeleteBranch: () => void;

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
  typeOptions: OptionObject[];
  /**
   * Options for the branch location
   */
  locationOptions: OptionObject[];
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

  onSaveName = () => { },
  onSaveDescription = () => { },
  onSaveLocation = () => { },
  onSavePhone = () => { },
  onSaveCapacity = () => { },
  onSaveAverageReserveTime = () => { },
  onSavePrice = () => { },
  onSaveType = () => { },
  onSaveMapsLink = () => { },
  onSaveOpeningTime = () => { },
  onSaveClosingTime = () => { },
  onDeleteBranch = () => { },

  email,
  typeOptions,
  locationOptions,
  mapsApiKey,
  width,
  height,
  color,
  ...props
}: BranchEditFormProps) => {
  const [deleteBranch, setDeleteBranch] = useState(false);
  const emailInput = useInputForm("");

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
        <Text weight="400">
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
          <Text weight="400">
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
          <Text weight="400">
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
          <Text weight="400">
            {" "}
            Tipo{" "}
          </Text>
          <EditableInputText
            useEditIcons
            inputHook={type}
            options={typeOptions}
            saveValueFunction={onSaveType}
            editable={true}
            type="select"
            containerClassName={styles["branch-edit-form--input-item"]}

          />
        </Box>

        <Box className={styles["branch-edit-form--cost-per-person-input"]}>
          <Text weight="400">
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
          <Text weight="400">
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
          <Text weight="400">
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
          <Text weight="400">
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
          <Text weight="400">
            {" "}
            Ubicación{" "}
          </Text>
          <EditableInputText
            useEditIcons
            width="100%"
            height="100%"
            inputHook={location}
            options={locationOptions}
            saveValueFunction={onSaveLocation}
            editable={true}
            type="select"
            containerClassName={styles["branch-edit-form--input-item"]}

          />
        </Box>
      </Box>

      <Box className={styles["branch-edit-form--description-container"]}>
        <Text weight="400">
          {" "}
          Descripción{" "}
        </Text>
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

      <Box className={styles["branch-edit-form--precise-location-container"]}>
        <Text weight="400">
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
        <Button
          primary
          size="large"
          onClick={() => setDeleteBranch(true)}
        >
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
              <Box
                className={styles["branch-edit-form--modal-button"]}
                onClick={() => emailInput.value === email && onDeleteBranch()}
              >
                <Text weight="600">Cancelar</Text>
              </Box>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
