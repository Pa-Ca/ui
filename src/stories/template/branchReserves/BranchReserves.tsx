import React, { useEffect, useState } from "react";
import "./branchReserves.scss";
import { Box } from "../../atoms/box/Box";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";
import { InputTab } from "../../molecules/inputTab/InputTab";
import ReservationList from "../../utils/objects/ReservationList";
import { ReserveList } from "../../organisms/reserveList/ReserveList";
import useResizeObserver from "../../hooks/useResizeObserver";

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
  const observer = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * (observer.width + 30);
    }
  }, [observer.width, page]);

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

      <Box
        className="branch-reserve--content-container"
        innerRef={observer.ref}
      >
        <Box width="200%" className="branch-reserve--content">
          <Box width="100%">
            <ReserveList reservations={reservations} color={color} state={1} />
          </Box>
          <Box width="30px" />
          <Box width="100%">
            <ReserveList reservations={reservations} color={color} state={0} />
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
