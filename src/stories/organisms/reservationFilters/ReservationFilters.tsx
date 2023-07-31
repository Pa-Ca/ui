import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./reservationFilters.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { InputText } from "../../molecules/inputText/InputText";
import { InputDate } from "../../molecules/inputDate/InputDate";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import { InputTextSelect } from "../../molecules/inputTextSelect/InputTextSelect";
import { Button } from "../../atoms/button/Button";

interface ReservationFiltersProps {
  /**
   * Reservation startDate
   */
  startDate: InputFormHook<Date|null>;
  /**
   * Reservation endDate
   */
  endDate: InputFormHook<Date|null>;
  /**
   * Reservation entry hour
   */
  status: InputFormHook<OptionObject<string | null>>;
  /**
   * Valid status
   */
  statusOptions?: OptionObject<string>[];
  /**
   * Identity document options Option Object
   */
  identityDocumentTypeOpt?: OptionObject<string>[];
  /**
   * Identity document options input hook
   */
  identityDocumentType: InputFormHook<OptionObject<string | null>>;
  /**
   * Identity document input hook
   */
  identityDocument: InputFormHook<string>;
  /**
   * Full client name of the reservation owner
   */
  fullName: InputFormHook<string>;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Submit fuction
   */
  onGetReservationsFiltered: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ReservationFilters = ({
  startDate,
  endDate,
  status,
  statusOptions,
  identityDocumentTypeOpt,
  identityDocumentType,
  identityDocument,
  fullName,
  width,
  height,
  onGetReservationsFiltered,
  ...props
}: ReservationFiltersProps) => {

  const [startDateSelected, setStartDateSelected] = useState(false);
  useEffect(() => {
    if (startDate.value !== null)
      setStartDateSelected(true);
    else
      setStartDateSelected(false);
  }, [startDate.value]);
  const resetFilters = () => {
    identityDocumentType.setValue({
      label: "",
      value: "",
    });
    identityDocument.setValue("");
    status.setValue({
      label: "",
      value: "",
    });
    fullName.setValue("");
    startDate.setValue(null);
    endDate.setValue(null);
  };
  return (
    <Box
      className={styles["reservation-filters--container"]}
      style={{ width, height }}
      {...props}
    >
      <Box>
        {/* Row 1 */}
        <Box className={styles["reservation-filters--input-container"]}>
          <Box width="100%">
            <InputTextSelect
              required
              inputHookText={identityDocument}
              inputHookSelect={identityDocumentType}
              inputHookSelectOptions={identityDocumentTypeOpt}
              label="Documento de Identidad" 
              onlySelectOptions={true}
            />
          </Box>
          <Box width="100%">
            <InputText
              required
              inputHook={fullName}
              type="text"
              label="Nombre Completo"
            />
          </Box>
          <Box width="100%">
          <InputSelect
              width="100%"
              label="Estatus"
              inputHook={status}
              options={statusOptions}
            />
          </Box>
        </Box>
        {/* Row 2 */}
        <Box className={styles["reservation-filters--input-container"]}>
          <Box width="100%">
            <InputDate
              cleanDateIcon
              label="Desde"
              inputHook={startDate}
            />
          </Box>
          <Box width="100%">
            <InputDate cleanDateIcon
              label="Hasta"
              inputHook={endDate}
              disabled={!startDateSelected}
              minDate={startDate.value || undefined}
            />
          </Box>
          <Box width="100%">
            <Button
                fullWidth
                primary={false}
                size="medium"
                onClick={resetFilters}
                className={
                  styles["reservation-filters--submit-button-text"]
                }
              >
                <Text type="h6" weight="600">
                  Limpiar filtros
                </Text>
              </Button>
          </Box>
          <Box width="100%">
            <Button
                fullWidth
                primary
                size="medium"
                onClick={onGetReservationsFiltered}
                className={
                  styles["reservation-filters--submit-button-text"]
                }
              >
                <Text type="h6" weight="600">
                  Aplicar filtros
                </Text>
              </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};