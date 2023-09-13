import React, { useEffect, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import styles from "./branchTables.module.scss";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import SaleObject from "../../utils/objects/SaleObject";
import TableObject from "../../utils/objects/TableObject";
import { InputText } from "../../molecules/inputText/InputText";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { EditableInputText } from "../../molecules/editableInputText/EditableInputText";

interface BranchTablesProps {
  /**
   * Tables
   */
  tables: TableObject[];
  /**
   * Sales
   */
  sales: SaleObject[];
  /**
   * On update search
   */
  onUpdateSearch: (search: string) => void;
  /**
   * On search table
   */
  onSearchTable: (table: InputFormHook<string>) => void;
  /**
   * On create table
   */
  onCreateTable: (table: InputFormHook<string>) => Promise<boolean>;
  /**
   * On edit table
   */
  onEditTable: (id: number, table: InputFormHook<string>) => void;
  /**
   * On delete table
   */
  onDeleteTable: (tableId: number) => void;
  /**
   * Content height
   */
  contentHeight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchTables = ({
  tables,
  sales,
  onUpdateSearch,
  onSearchTable,
  onCreateTable,
  onEditTable,
  onDeleteTable,
  contentHeight,
  ...props
}: BranchTablesProps) => {
  const searchHook = useInputForm("");
  const newTableName = useInputForm("");
  const editTableName = useInputForm("");
  const [newTable, setNewTable] = useState(false);
  const [tableDetails, setTableDetails] = useState(false);
  const [associatedSales, setAssociatedSales] = useState(0);
  const [tableSelected, setTableSelected] = useState<TableObject | null>(null);

  useEffect(() => {
    newTableName.setValue("");
  }, [newTable]);

  useEffect(() => {
    if (!tableSelected) return;

    editTableName.setValue(tableSelected.name);
    setAssociatedSales(
      sales.filter((sale) => sale.tables.some((t) => t.id === tableSelected.id)).length
    );
  }, [tableSelected, tableDetails]);

  useEffect(() => {
    onUpdateSearch(searchHook.value);
  }, [searchHook.value]);

  return (
    <Box className={styles["branch-tables--container"]}>
      <Text type="h3" weight="700">
        {" "}
        Detalles de Mesas{" "}
      </Text>

      <hr className={styles["branch-tables--separator"]} />

      <Box className={styles["branch-tables--search-container"]}>
        <Box style={{ flex: 6 }}>
          <InputText
            label={""}
            maxLength={4}
            leftIcon="search"
            showError={false}
            inputHook={searchHook}
            placeholder="Buscar mesa"
            onLeftIconClick={() => onSearchTable(searchHook)}
          />
        </Box>

        <Box>
          <Button primary fullWidth size="medium" onClick={() => setNewTable(true)}>
            <Text type="h5" weight="700" primaryButtonStyle>
              Crear mesa
            </Text>
          </Button>
        </Box>
      </Box>

      <Box className={styles["branch-tables--tables-container"]} style={{ maxHeight: contentHeight }}>
        {tables.map((table, index) => (
          <Box
            key={`branch-tables--table-${table}-${index}`}
            className={styles["branch-tables--table"]}
            onClick={() => {
              setTableSelected(table);
              setTableDetails(true);
            }}
          >
            <Text type="h4" weight="700" primaryButtonStyle>
              {table.name}
            </Text>
          </Box>
        ))}
      </Box>

      <Modal open={newTable} setOpen={setNewTable}>
        <Box width="350px">
          <Box className={styles["branch-tables--modal-subtitle"]}>
            <Text type="h4" weight="700">
              Nueva mesa
            </Text>
          </Box>

          <Box style={{ flex: 1 }}>
            <InputText required maxLength={4} inputHook={newTableName} label="Nombre" />
          </Box>

          <div className={styles["branch-tables--modal-button-box"]}>
            {/* Cancel Button */}
            <Button fullWidth primary={false} size="medium" onClick={() => setNewTable(false)}>
              <Box className={styles["branch-tables--submit-button-text"]}>
                <Text type="p" weight="700">
                  Cerrar
                </Text>
              </Box>
            </Button>

            {/* Submit Button */}
            <Button
              fullWidth
              primary
              size="medium"
              onClick={async () => (await onCreateTable(newTableName)) && setNewTable(false)}
            >
              <Box className={styles["branch-tables--submit-button-text"]}>
                <Text primaryButtonStyle type="p" weight="700">
                  Crear mesa
                </Text>
              </Box>
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal open={tableDetails} setOpen={setTableDetails}>
        <Box width="400px">
          <Box className={styles["branch-tables--modal-subtitle"]}>
            <Text type="h4" weight="700">
              Detalles de la mesa
            </Text>
          </Box>

          <Box className={styles["branch-tables--edit-row"]}>
            <Box style={{ marginBottom: "20px" }}>
              <Text type="h5" weight="400">
                Nombre:
              </Text>
            </Box>

            <Box width="100%">
              <EditableInputText
                editable
                useEditIcons
                saveValueFunction={() => onEditTable(tableSelected?.id!, editTableName)}
                inputHook={editTableName}
              />
            </Box>
          </Box>

          <Box
            className={styles["branch-tables--edit-row"]}
            style={{ gap: "20px", marginBottom: "20px" }}
          >
            <Text type="h5" weight="400">
              Ventas activas:
            </Text>

            <Text type="h5" weight="700">
              {associatedSales}
            </Text>
          </Box>

          <div className={styles["branch-tables--modal-button-box-column"]}>
            {/* Submit Button */}
            <Button fullWidth primary size="medium" onClick={() => setTableDetails(false)}>
              <Box className={styles["branch-tables--submit-button-text"]}>
                <Text primaryButtonStyle type="p" weight="700">
                  Aceptar
                </Text>
              </Box>
            </Button>

            {/* Cancel Button */}
            <Box>
              {associatedSales !== 0 && (
                <Text type="h7" weight="400">
                  *No se puede eliminar la mesa porque tiene ventas activas
                </Text>
              )}
              <Button
                fullWidth
                primary={false}
                state={associatedSales === 0 ? "normal" : "inactive"}
                size="medium"
                onClick={() => {
                  onDeleteTable(tableSelected!.id);
                  setTableDetails(false);
                }}
              >
                <Box className={styles["branch-tables--submit-button-text"]}>
                  <Text type="p" weight="700">
                    Eliminar mesa
                  </Text>
                </Box>
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};
