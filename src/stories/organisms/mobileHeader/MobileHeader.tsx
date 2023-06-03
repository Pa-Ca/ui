import React, { useMemo } from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { HeaderProps } from "../header/Header";
import styles from "./mobileHeader.module.scss";
import { Button } from "../../atoms/button/Button";
import { LeftMenu } from "../../molecules/leftMenu/LeftMenu";

/**
 * Primary UI component for user interaction
 */
export const MobileHeader = ({
  picture,
  name,
  onLogout = () => {},
  onEditProfile = () => {},
  dark = false,
  userRole,
  logged,
  onFavoritesClick = () => {},
  onReservationsClick = () => {},
  onReserveClick = () => {},
  onPacaClick,
  onProfileClick = () => {},
  onLoginClick,
  onRegisterClick,
  backgroundColor,
  color,
  width,
  height,
  currentBranch,
  branchOptions,
  ...props
}: HeaderProps) => {
  const [viewMenu, setViewMenu] = React.useState(false);

  const leftSection = useMemo(() => {
    if (!logged) {
      return (
        <Button
          size="extra-small"
          onClick={onRegisterClick}
          backgroundColor={dark ? "white" : color}
        >
          <Text type="h6" weight="600">
            Regístrate
          </Text>
        </Button>
      );
    } else {
      return (
        <Box
          className={styles["mobile-header--section"]}
          onClick={() => setViewMenu(true)}
        >
          <Icon icon="menu" size="28px" />
        </Box>
      );
    }
  }, [logged]);

  const rightSection = useMemo(() => {
    if (!logged || userRole === "client") {
      return (
        <Box
          className={styles["mobile-header--section"]}
          onClick={onReserveClick}
        >
          <Icon icon="bell" size="24px" />
        </Box>
      );
    } else {
      return (
        <Box
          className={styles["mobile-header--section"]}
          onClick={onReservationsClick}
        >
          <Icon icon="table" size="24px" />
        </Box>
      );
    }
  }, [logged, userRole]);

  return (
    <Box
      weakShadow
      style={{ width, height, backgroundColor }}
      className={styles["mobile-header--container"]}
    >
      {leftSection}

      <Box className={styles["mobile-header--center-section"]}>
        <Icon icon="pa-ca" size="35px" />
      </Box>

      {rightSection}

      <Box
        className={styles["mobile-header--left-menu-container"]}
        style={{ left: viewMenu ? "0" : "-100%" }}
      >
        <LeftMenu
          picture={picture!}
          username={name!}
          userRole={userRole!}
          currentBranch={currentBranch!}
          branchOptions={branchOptions}
          onClose={() => setViewMenu(false)}
          onEditProfile={onEditProfile}
          onReserveClick={onReserveClick}
          onReservationsClick={onReservationsClick}
          onFavoritesClick={onFavoritesClick}
          onLogoutClick={onLogout}
        />
      </Box>
    </Box>
  );
};
