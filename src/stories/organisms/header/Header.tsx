import React, { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
import styles from "./header.module.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Icon, IconType } from "../../atoms/icon/Icon";
import useResizeObserver from "../../hooks/useResizeObserver";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";
import BranchDropdownElement from "../../utils/objects/BranchDropdownElement";
import { ProfilePicture } from "../../molecules/profilePicture/ProfilePicture";
import { ProfileDropdown } from "../../molecules/profileDropdown/ProfileDropdown";
import { HeaderBranchDropdown } from "../../molecules/headerBranchDropdown/HeaderBranchDropdown";

export interface HeaderProps {
  /**
   * Profile picture
   */
  picture?: string;
  /**
   * User name
   */
  name?: string;
  /**
   * Edit profile function
   */
  onEditProfile?: () => void;
  /**
   * Logout function
   */
  onLogout?: () => void;
  /**
   * Dark mode
   */
  dark?: boolean;
  /**
   * Logged user role
   */
  userRole?: "client" | "business";
  /**
   * Is the user logged?
   */
  logged: boolean;
  /**
   * onReserveClick function
   */
  onReserveClick?: () => void;
  /**
   * onReservationsClick function
   */
  onReservationsClick?: () => void;
  /**
   * onFavoritesClick function
   */
  onFavoritesClick?: () => void;
  /**
   * On PA-CA logo click function
   */
  onPacaClick: () => void;
  /**
   * On profile click function
   */
  onProfileClick?: () => void;
  /**
   * On login click function
   */
  onLoginClick?: () => void;
  /**
   * On register click function
   */
  onRegisterClick?: () => void;
  /**
   * On sales click
   */
  onSalesClick?: () => void;
  /**
   * On products click
   */
  onProductsClick?: () => void;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Main component color
   */
  color?: string;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
  /**
   * Selected branch
   */
  currentBranch?: string;

  /**
   * Branch options
   * */
  branchOptions: BranchDropdownElement[];
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  picture,
  name,
  onLogout = () => {},
  onEditProfile = () => {},
  dark,
  userRole,
  logged,
  onFavoritesClick = () => {},
  onReservationsClick = () => {},
  onReserveClick = () => {},
  onPacaClick,
  onProfileClick = () => {},
  onLoginClick,
  onRegisterClick,
  onSalesClick = () => { },
  onProductsClick = () => {},
  backgroundColor,
  color,
  width,
  height,
  currentBranch,
  branchOptions,
  ...props
}: HeaderProps) => {
  const [view, setView] = useState(false);
  const logoColor = dark ? "white" : "black";
  const [branchListView, setBranchListView] = useState(false);
  const pictureObserver = useResizeObserver<HTMLDivElement>();
  const dropdownObserver = useResizeObserver<HTMLDivElement>();
  const branchDropdownObserver = useResizeObserver<HTMLDivElement>();

  const dropdownOptions: UserDropdownElement[] = [
    {
      name: "Editar Perfil",
      func: onEditProfile,
      icon: "pencil",
    },
    {
      name: "Ventas",
      func: onSalesClick,
      icon: "table",
    },
    {
      name: "Productos",
      func: onProductsClick,
      icon: "restaurant",
    },
    {
      name: "Cerrar Sesión",
      func: onLogout,
      icon: "logout",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownObserver.ref.current &&
        !dropdownObserver.ref.current.contains(event.target as Node) &&
        !!pictureObserver &&
        pictureObserver.ref.current &&
        !pictureObserver.ref.current.contains(event.target as Node)
      ) {
        setView(false);
      }
      if (
        branchDropdownObserver.ref.current &&
        !branchDropdownObserver.ref.current?.contains(event.target as Node)
      ) {
        setBranchListView(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownObserver, pictureObserver, branchDropdownObserver]);

  const leftSectionData = useMemo(() => {
    const businessMode = userRole === "business" && logged;
    const onClick = businessMode
      ? () => setBranchListView((prev) => !prev)
      : onReserveClick;
    const icon = (businessMode ? "restaurant" : "bell") as IconType;
    const text = businessMode ? currentBranch : "Reservar";

    return {
      onClick,
      icon,
      text,
      businessMode,
    };
  }, [logged, userRole, currentBranch]);

  const rightSectionComponent = useMemo(() => {
    const text = userRole === "client" ? "Favoritos" : "Reservas";
    const icon = userRole === "client" ? "heart-fill" : "table";
    const onClick =
      userRole === "client" ? onFavoritesClick : onReservationsClick;

    if (logged) {
      return (
        <Box className={styles["header--zone"]}>
          <Box className={styles["header--zone"]} onClick={onClick}>
            <Icon icon={icon} size="20px" color={logoColor} />
            <Text
              type="h6"
              weight="600"
              className={styles["header--text"]}
            >
              {text}
            </Text>
            <Text
              type="h6"
              weight="600"
              className={styles["header--text"]}
            >
              &nbsp;&nbsp;|
            </Text>
          </Box>
          <Box
            className={classnames(
              styles["header--zone"],
              styles["header--profile"]
            )}
            onClick={onProfileClick}
          >
            <Box
              className={styles["header--profile-picture"]}
              innerRef={pictureObserver.ref}
            >
              <ProfilePicture
                size="50px"
                border={true}
                icon={view ? "up" : "down"}
                picture={picture}
                userName={name}
                dropdownOptions={dropdownOptions}
                onClick={() => setView((currentView) => !currentView)}
                view={view}
              />
            </Box>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box className={styles["header--zone"]}>
          <Box className={styles["header--zone"]} onClick={onLoginClick}>
            <Text
              type="h6"
              weight="600"
              className={styles["header--text"]}
            >
              Login
            </Text>
          </Box>
          <Box
            className={classnames(
              styles["header--zone"],
              styles["header--profile"]
            )}
          >
            <Button
              primary
              onClick={onRegisterClick}
            >
              <Text
                type="h6"
                style={{ fontWeight: "600" }}
              >
                Regístrate
              </Text>
            </Button>
          </Box>
        </Box>
      );
    }
  }, [userRole, logged, dark, color, logoColor, view, picture, name]);

  return (
    <>
      <Box
        className={styles["header--container"]}
        style={{ width, height, backgroundColor }}
      >
        <Box className={styles["header--subcontainer"]}>
          {/* Left section */}
          <Box
            className={styles["header--zone"]}
            onClick={leftSectionData.onClick}
            innerRef={branchDropdownObserver.ref}
          >
            <Icon icon={leftSectionData.icon} size="20px" color={logoColor} />
            <Box className={styles["header--left-zone-text"]}>
              <Text
                type="h6"
                weight="600"
                className={styles["header--text"]}
                //color={logoColor}
                ellipsis
              >
                {leftSectionData.text}
              </Text>
            </Box>
            {leftSectionData.businessMode && (
              <Box>
                <Icon
                  icon={branchListView ? "up" : "down"}
                  size="20px"
                  color={logoColor}
                />
              </Box>
            )}
            <HeaderBranchDropdown
              border="5px"
              color="#EF7A08"
              view={branchListView}
              dropdownOptions={branchOptions}
            />
          </Box>

          {/* PA-CA */}
          <Box
            className={classnames(
              styles["header--pa-ca"],
              styles["header--zone"]
            )}
            onClick={onPacaClick}
          >
            <Icon icon="pa-ca" size="41px" color={logoColor} />
          </Box>

          {/* Right section */}
          {rightSectionComponent}
        </Box>
      </Box>
      <Box innerRef={dropdownObserver.ref}>
        {logged && (
          <Box className={styles["header--dropdown"]}>
            <ProfileDropdown
              size="45px"
              border="0px"
              color={color}
              picture={picture}
              userName={name}
              dropdownOptions={dropdownOptions}
              view={view}
            />
          </Box>
        )}
      </Box>
    </>
  );
};
