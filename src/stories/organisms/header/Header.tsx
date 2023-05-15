import React, { useState, useEffect, useMemo } from "react";
import "./header.scss";
import { Box } from "../../atoms/box/Box";
import { Icon, IconType } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
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
   * On Left Section click function
   */
  onLeftSectionClick?: () => void;
  /**
   * On PA-CA logo click function
   */
  onPacaClick: () => void;
  /**
   * On Right Section click function
   */
  onRightSectionClick?: () => void;
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
  branchOptions?: BranchDropdownElement[];
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  picture,
  name,
  onLogout = () => { },
  onEditProfile = () => { },
  dark = false,
  userRole,
  logged,
  onLeftSectionClick,
  onPacaClick,
  onRightSectionClick,
  onProfileClick,
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
  const logoColor = dark ? "white" : "black";

  const rightSectionText = userRole === "client" ? "Favoritos" : "Reservas";
  const rightSectionIcon = userRole === "client" ? "heart-fill" : "table";

  const [view, setView] = useState(false);
  const [branchListView, setBranchListView] = useState(false);

  const dropdownObserver = useResizeObserver<HTMLDivElement>();
  const branchDropdownObserver = useResizeObserver<HTMLDivElement>();
  const pictureObserver = logged ? useResizeObserver<HTMLDivElement>() : null;

  // If the branch is in buisness mode, the header will show a select with the branches
  const showBranchSelector = useMemo(() => { return userRole === "business" && logged; }, [userRole, logged]);

  const leftSectionContents = useMemo(() => {
    if (userRole === "client" && !logged) {
      return {
        text: "Reservar",
        icon: "bell" as IconType
      }
    }
    else if (userRole === "client" && logged) {
      return {
        text: "Reservar",
        icon: "bell" as IconType
      };
    } else if (userRole === "business" && !logged) {
      return {
        text: "Ingresar",
        icon: "person" as IconType
      };
    } else if (userRole === "business" && logged) {
      return {
        text: currentBranch,
        icon: "restaurant" as IconType

      };
    }
  }, [userRole, logged, currentBranch]);

  const onLeftSectionClickHandler = () => {
    if (onLeftSectionClick) {
      onLeftSectionClick();
    }

    if (showBranchSelector) {
      setBranchListView((currentView) => !currentView);
    }

  };

  const dropdownOptions: UserDropdownElement[] = [
    {
      name: 'Editar Perfil',
      func: onEditProfile,
      icon: "pencil",
    },
    {
      name: 'Cerrar Sesión',
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
        && branchDropdownObserver.ref.current
        && !branchDropdownObserver.ref.current?.contains(event.target as Node)
      ) {
        setView(false);
        setBranchListView(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownObserver.ref, pictureObserver, branchDropdownObserver]);

  const rightSectionComponent = () => {
    if (logged) {
      return (
        <>
          <Box className="header--zone" onClick={onRightSectionClick}>
            <Icon icon={rightSectionIcon} size="20px" color={logoColor} />
            <Text
              type="h6"
              weight="600"
              className="header--text"
              color={logoColor}
            >
              {rightSectionText}
            </Text>
            <Text
              type="h6"
              weight="600"
              className="header--text"
              color={logoColor}
            >
              &nbsp;&nbsp;|
            </Text>
          </Box>
          <Box
            className="header--zone header--profile"
            onClick={onProfileClick}
          >
            <Box
              className="header--profile-picture"
              innerRef={pictureObserver!.ref}
            >
              <ProfilePicture
                size="45px"
                border="0px"
                icon={view ? "up" : "down"}
                color={color}
                picture={picture}
                userName={name}
                dropdownOptions={dropdownOptions}
                onClick={() => setView((currentView) => !currentView)}
                view={view}
              />
            </Box>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Box className="header--zone" onClick={onLoginClick}>
            <Text
              type="h6"
              weight="600"
              className="header--text"
              color={logoColor}
            >
              Login
            </Text>
          </Box>
          <Box className="header--zone header--profile">
            <Button
              primary
              onClick={onRegisterClick}
              backgroundColor={dark ? "white" : color}
            >
              <Text
                type="h6"
                style={{ fontWeight: "600" }}
                color={dark ? "black" : "white"}
              >
                Regístrate
              </Text>
            </Button>
          </Box>
        </>
      );
    }
  };

  return (
    <>
      <Box
        className="header--container"
        style={{ width, height, backgroundColor }}
      >
        <Box className="header--subcontainer">
          {/* Left section */}
          <Box className="header--zone" onClick={onLeftSectionClickHandler} innerRef={branchDropdownObserver.ref}>
            <Icon icon={leftSectionContents?.icon} size="20px" color={logoColor} />
            <Text
              type="h6"
              weight="600"
              className="header--text"
              color={logoColor}
            >
              {leftSectionContents?.text}
            </Text>
            {
              showBranchSelector && (
                <Box >
                  <Icon icon="down" size="20px" color={logoColor} />
                </Box>
              )
            }
            <HeaderBranchDropdown
              border="5px"
              color="#EF7A08"
              dropdownOptions={branchOptions}
              view={branchListView}
            />
          </Box>

          {/* PA-CA */}
          <Box className="header--pa-ca header--zone" onClick={onPacaClick}>
            <Icon icon="pa-ca" size="41px" color={logoColor} />
          </Box>

          {/* Right section */}
          <Box className="header--zone">{rightSectionComponent()}</Box>
        </Box>
      </Box>
      <Box innerRef={dropdownObserver.ref}>
        {logged && (
          <Box className="header--dropdown">
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
