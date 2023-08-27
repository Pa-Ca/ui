import React, { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./saleList.module.scss";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Sale } from "../../molecules/sale/Sale";
import SaleObject from "../../utils/objects/SaleObject";
import { InputFormHook } from "../../hooks/useInputForm";
import TableObject from "../../utils/objects/TableObject";
import { InputText } from "../../molecules/inputText/InputText";

interface SaleListProps {
  /**
   * Input value hook
   */
  searchHook: InputFormHook<string>;
  /**
   * Sales
   */
  sales: SaleObject[];
  /**
   * Tables
   */
  tables: TableObject[];
  /**
   * Sale selected
   */
  saleSelected: InputFormHook<SaleObject | null>;
  /**
   * Table selected
   */
  tableSelected: InputFormHook<TableObject | null>;
  /**
   * Max height
   */
  maxHeight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const SaleList = ({
  searchHook,
  sales,
  tables,
  saleSelected,
  tableSelected,
  maxHeight,
  ...props
}: SaleListProps) => {
  const [showSales, setShowSales] = useState(true);

  const activeTables = useMemo(() => {
    // Filters tables if exists in sales
    return tables.filter((table) => {
      return sales.some((sale) =>
        sale.tables.some((saleTable) => saleTable.id === table.id)
      );
    });
  }, [tables, sales]);

  const inactiveTables = useMemo(() => {
    // Filters tables if not exists in sales
    return tables.filter((table) => {
      return activeTables.every((activeTable) => activeTable.id !== table.id);
    });
  }, [tables, activeTables]);

  return (
    <Box className={styles["sale-list--container"]} style={{ maxHeight }}>
      <Box className={styles["sale-list--search-container"]}>
        <Box className={styles["sale-list--search"]}>
          <InputText
            label={""}
            leftIcon="search"
            showError={false}
            inputHook={searchHook}
            placeholder="Buscar venta o mesa"
          />
        </Box>

        <Box
          className={styles["sale-list--exchange"]}
          onClick={() => setShowSales((value) => !value)}
        >
          <Icon icon={showSales ? "table" : "invoice"} size="30px" />
          <Icon icon="exchange" size="30px" />
        </Box>
      </Box>

      {showSales ? (
        <Box className={styles["sale-list--sales"]}>
          {sales.map((sale, index) => (
            <Sale
              sale={sale}
              key={`sale-list--sale-${sale.ownerName}-${sale.startTime}-${index}`}
              width={`calc(100% - ${
                saleSelected.value?.id === sale.id ? 38 : 37
              }px)`}
              tableSelected={tableSelected}
              selected={saleSelected.value?.id === sale.id}
              onClick={() => {
                saleSelected.setValue(sale);
                tableSelected.setValue(null);
              }}
            />
          ))}
        </Box>
      ) : (
        <Box className={styles["sale-list--tables"]}>
          {activeTables.map((table, index) => {
            return (
              <Box
                key={`sale-list--active-table-${table}-${index}`}
                strongShadow={tableSelected.value?.id !== table.id}
                onClick={() => {
                  saleSelected.setValue(null);
                  tableSelected.setValue(table);
                }}
                className={classnames(
                  styles["sale-list--table"],
                  tableSelected.value === table
                    ? styles["sale-list--table-selected"]
                    : styles["sale-list--table-active"]
                )}
              >
                <Text weight="700" type="h3" primaryButtonStyle>
                  {table.name}
                </Text>
              </Box>
            );
          })}
          {inactiveTables.map((table, index) => {
            return (
              <Box
                key={`sale-list--inactive-table-${table}-${index}`}
                strongShadow
                className={classnames(
                  styles["sale-list--table"],
                  styles["sale-list--table-inactive"]
                )}
              >
                <Text weight="700" type="h3" primaryButtonStyle>
                  {table.name}
                </Text>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
