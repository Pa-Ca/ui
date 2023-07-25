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
   * Reservation entry hour
   */
  hourIn: InputFormHook<OptionObject<string | null>>;
  /**
   * Valid entry hours
   */
  validHoursIn?: OptionObject<string>[];
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
  identityDocumentTypeOpt = [
    {label: "V", value: "V"},
    {label: "E", value: "E"},
    {label: "J", value: "J"},
    {label: "G", value: "G"},
    {label: "P", value: "P"},
  ],
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
  }, [startDate.value])
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
            <InputDate cleanDateIcon label="Desde" inputHook={startDate} />
          </Box>
          <Box width="100%">
            <InputDate cleanDateIcon disabled={!startDateSelected} label="Hasta" inputHook={endDate}/>
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
            <Button
                fullWidth
                primary
                size="medium"
                onClick={onGetReservationsFiltered}
                className={
                  styles["reservation-filters--submit-button-text"]
                }
              >
                <Text primaryButtonStyle type="h6" weight="600">
                  Aplicar filtros
                </Text>
              </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};