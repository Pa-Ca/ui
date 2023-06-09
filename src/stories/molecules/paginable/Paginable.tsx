import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./paginable.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";

interface PaginableProps<T> {
  /**
   * Objects list
   */
  list: T[];
  /**
   * Function to change the current list of objects
   */
  setCurrentList: (list: T[]) => void;
  /**
   * Number of objects per page
   */
  objectsPerPage?: number;
  /**
   * Button content
   */
  children?: React.ReactNode;
}

export const Paginable = <T extends any>({
  list,
  setCurrentList,
  objectsPerPage = 5,
  children,
  ...props
}: PaginableProps<T>) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(list.length / objectsPerPage);
  }, [list.length, objectsPerPage]);

  useEffect(() => {
    const currentList = [...list];
    const begin = (page - 1) * objectsPerPage;
    const end = begin + objectsPerPage;
    setCurrentList(currentList.slice(begin, end));
  }, [page, list.length]);

  const goToNextPage = () => {
    if (page > totalPages - 1) return;
    setPage((oldPage) => oldPage + 1);
  };

  const goToPreviousPage = () => {
    if (page < 2) return;
    setPage((oldPage) => oldPage - 1);
  };

  return (
    <Box
      className={styles["paginable--container"]}
      onClick={(event) => event.stopPropagation()}
    >
      <Box width="100%">{children}</Box>
      <Box className={styles["paginable--pages"]}>
        <Box
          className={styles["paginable--icon"]}
          onClick={goToPreviousPage}
          style={{ cursor: page < 2 ? "auto" : "pointer" }}
        >
          <Icon
            icon="left"
            size="18px"
            color={page < 2 ? "#a7a2a2" : "black"}
          />
        </Box>

        <Box className={styles["paginable--counter"]}>
          <Text highlightStyle weight="400">
            {page} de {totalPages}
          </Text>
        </Box>

        <Box
          className={styles["paginable--icon"]}
          onClick={goToNextPage}
          style={{ cursor: page > totalPages - 1 ? "auto" : "pointer" }}
        >
          <Icon
            icon="right"
            size="18px"
            color={page > totalPages - 1 ? "#a7a2a2" : "black"}
          />
        </Box>
      </Box>
    </Box>
  );
};
