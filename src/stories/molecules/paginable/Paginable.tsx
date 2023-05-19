import React, { useEffect, useMemo, useState } from "react";
import "./paginable.scss";
import { Box } from "../../atoms/box/Box";
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
  }, [list, objectsPerPage]);

  useEffect(() => {
    const begin = (page - 1) * objectsPerPage;
    const end = begin + objectsPerPage;
    setCurrentList(list.slice(begin, end));
  }, [page]);

  const goToNextPage = () => {
    if (page > totalPages - 1) return;
    setPage((oldPage) => oldPage + 1);
  };

  const goToPreviousPage = () => {
    if (page < 2) return;
    setPage((oldPage) => oldPage - 1);
  };

  return (
    <Box className="paginable--container" onClick={(event) => event.stopPropagation()}>
      <Box width="100%">
        {children}
      </Box>
      <Box className="paginable--pages">
        <Box
          className="paginable--icon"
          onClick={goToPreviousPage}
          style={{ cursor: page < 2 ? "auto" : "pointer" }}
        >
          <Icon
            icon="left"
            size="18px"
            color={page < 2 ? "#a7a2a2" : "black"}
          />
        </Box>

        <Box className="paginable--counter">
          <Text color="#112211" weight="400">
            {page} de {totalPages}
          </Text>
        </Box>

        <Box
          className="paginable--icon"
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