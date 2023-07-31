import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./saleFilters.module.scss";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { InputText } from "../../molecules/inputText/InputText";
import { InputDate } from "../../molecules/inputDate/InputDate";
import { InputTextSelect } from "../../molecules/inputTextSelect/InputTextSelect";
import { Button } from "../../atoms/button/Button";

interface SaleFiltersProps {
  /**
   * Sale startDate
   */
  startDate: InputFormHook<Date|null>;
  /**
   * Sale endDate
   */
  endDate: InputFormHook<Date|null>;
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
   * Full client name of the sale owner
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
  onGetSalesFiltered: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SaleFilters = ({
  startDate,
  endDate,
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
  onGetSalesFiltered,
  ...props
}: SaleFiltersProps) => {

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
    fullName.setValue("");
    startDate.setValue(null);
    endDate.setValue(null);
  };
  return (
    <Box
      className={styles["sale-filters--container"]}
      style={{ width, height }}
      {...props}
    >
      <Box>
        {/* Row 1 */}
        <Box className={styles["sale-filters--input-container"]}>
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
        </Box>
        {/* Row 2 */}
        <Box className={styles["sale-filters--input-container"]}>
          <Box width="100%">
            <InputDate cleanDateIcon label="Desde" inputHook={startDate} />
          </Box>
          <Box width="100%">
            <InputDate
              cleanDateIcon
              disabled={!startDateSelected}
              label="Hasta"
              inputHook={endDate}
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
                  styles["sale-filters--submit-button-text"]
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
                onClick={onGetSalesFiltered}
                className={
                  styles["sale-filters--submit-button-text"]
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