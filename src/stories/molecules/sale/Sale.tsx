import React from "react";
import classnames from "classnames";
import styles from "./sale.module.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import SaleObject from "../../utils/objects/SaleObject";
import { InputFormHook } from "../../hooks/useInputForm";
import TableObject from "../../utils/objects/TableObject";

export interface SaleProps {
  /**
   * Sale data
   */
  sale: SaleObject;
  /**
   * Table selected
   */
  tableSelected: InputFormHook<TableObject | null>;
  /**
   * Indicates if sale is selected
   */
  selected?: boolean;
  /**
   * On click event
   */
  onClick?: () => void;
  /**
   * Total component width
   */
  width?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Sale = ({
  sale,
  selected,
  tableSelected,
  onClick,
  width,
  ...props
}: SaleProps) => {
  const tablesToShow =
    sale.tables.length > 8 ? sale.tables.slice(0, 7) : sale.tables.slice(0, 8);
  const columns = Math.ceil(tablesToShow.length / 4);
  const tableWidth = `calc(${100 / columns}% - ${(5 * (columns - 1)) / 2}px)`;

  return (
    <Box
      style={{ width }}
      onClick={onClick}
      strongShadow={!selected}
      className={classnames(
        styles["sale--container"],
        selected ? styles["sale--container-selected"] : ""
      )}
    >
      {/* Sale data */}
      <Box className={styles["sale--data-container"]}>
        <Text weight="700" type="p">
          {sale.ownerName}
        </Text>

        <Box className={styles["sale--data-footer-container"]}>
          <Text weight="400" type="h6">
            {sale.startTime.toISOString().split("T")[1].substring(0, 5)}
          </Text>

          <Box className={styles["sale--icon-data"]}>
            <Icon icon="person" size="20px" />
            <Text weight="400" type="h6">
              {sale.clientQuantity}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Sale tables */}
      <Box className={styles["sale--tables-container"]}>
        {tablesToShow.map((table, index) => {
          return (
            <Box
              key={`sale--table-${table}-${index}`}
              strongShadow
              style={{ width: tableWidth }}
              onClick={(event) => {
                event.stopPropagation();
                tableSelected.setValue(table);
              }}
              className={classnames(
                styles["sale--table-container"],
                table.id === tableSelected.value?.id
                  ? styles["sale--table-selected"]
                  : ""
              )}
            >
              <Text weight="700" type="h6" primaryButtonStyle>
                {table.name}
              </Text>
            </Box>
          );
        })}
        {sale.tables.length > 8 && (
          <Box
            style={{ width: tableWidth }}
            className={styles["sale--more-tables-container"]}
          >
            <Text weight="700" type="h6">
              +{sale.tables.length - 7}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
