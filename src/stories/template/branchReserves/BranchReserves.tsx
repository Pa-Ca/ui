import React, { useState } from "react";
import "./branchReserves.scss";
import { Box } from "../../atoms/box/Box";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";
import { InputTab } from "../../molecules/inputTab/InputTab";
import ReservationList from "../../utils/objects/ReservationList";
import { ReserveList } from "../../organisms/reserveList/ReserveList";

interface BranchReservesProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Reservation list data
   */
  reservations: ReservationList[];
  /**
   * Main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchReserves = ({
  reservations,
  color,
  header,
  ...props
}: BranchReservesProps) => {
  const [page, setPage] = useState(0);

  return (
    <BasicPage headerArgs={header}>
      {/* Reserve type */}
      <Box width="100%" className="branch-reserve--header">
        <InputTab
          index={page}
          setIndex={setPage}
          tabs={["Reservas Activas", "Reservas Pendientes"]}
        />
      </Box>

      <Box className="branch-reserve--content-container">
        <Box width="300%" className="branch-reserve--content">
          <Box
            className="branch-reserve--animation"
            width={page === 0 ? "100%" : "0%"}
          />

          <Box width="100%">
            <ReserveList reservations={reservations} color={color} state={1} />
          </Box>
          <Box width="100%">
            <ReserveList reservations={reservations} color={color} state={0} />
          </Box>

          <Box
            className="branch-reserve--animation"
            width={page === 0 ? "0%" : "100%"}
          />
        </Box>
      </Box>
    </BasicPage>
  );
};
