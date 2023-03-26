import React, { useMemo, useState } from "react";
import "./branchBoard.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import {
  BranchItem,
  BranchItemProps,
  exampleLongBranchList,
} from "../branchItem/BranchItem";

interface BranchBoard {
  /**
   * Component width
   */
  width?: string;

  /**
   * Component height
   */
  height?: string;

  /**
   * Number of branches per page
   */
  branchesPerPage?: number;

  /**
   * All branch reviews
   */
  branches?: BranchItemProps[];

  /**
   * Component color
   */
  branchColor?: string;

  /**
   * Component price color
   */
  branchPriceColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchBoard = ({
  width,
  height,
  branchesPerPage = 5,
  branches = exampleLongBranchList,
  branchColor = "#EF7A08",
  branchPriceColor = "#FF8682",
  ...props
}: BranchBoard) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(branches.length / branchesPerPage);
  }, [branches, branchesPerPage]);

  const paginatedbranches = useMemo(() => {
    const inicio = (page - 1) * branchesPerPage;
    const fin = inicio + branchesPerPage;
    return branches.slice(inicio, fin);
  }, [page, branches, branchesPerPage]);

  const goToNextPage = () => {
    if (page > totalPages - 1) return;
    setPage((oldPage) => oldPage + 1);
  };

  const goToPreviousPage = () => {
    if (page < 2) return;
    setPage((oldPage) => oldPage - 1);
  };

  return (
    <Box width={width} {...props} className="branch-board--container">
      {paginatedbranches.map((branch) => (
        <Box>
          <BranchItem
            color={branchColor}
            priceColor={branchPriceColor}
            {...branch}
          />
        </Box>
      ))}
      <Box className="branch-board--pages-centerer">
        <Box className="branch-board--pages">
          <Box
            className="branch-board--icon"
            onClick={goToPreviousPage}
            style={{ cursor: page < 2 ? "auto" : "pointer" }}
          >
            <Icon
              icon="left"
              size="18px"
              color={page < 2 ? "#a7a2a2" : "black"}
            />
          </Box>

          <Text color="#112211" weight="400">
            {page} de {totalPages}
          </Text>

          <Box
            className="branch-board--icon"
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
    </Box>
  );
};
