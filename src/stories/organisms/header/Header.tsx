import React, { useState, useEffect } from "react";
import "./header.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import useResizeObserver from "../../hooks/useResizeObserver";
import UserDropdownElement from "../../utils/objects/UserDropdownElement";
import { ProfilePicture } from "../../molecules/profilePicture/ProfilePicture";
import { ProfileDropdown } from "../../molecules/profileDropdown/ProfileDropdown";

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
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  picture,
  name,
  onLogout = () => {},
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
  ...props
}: HeaderProps) => {
  const logoColor = dark ? "white" : "black";
  const leftSectionText =
    !logged || userRole === "client" ? "Reservar" : "Perfil";
  const rightSectionText = userRole === "client" ? "Favoritos" : "Reservas";
  const rightSectionIcon = userRole === "client" ? "heart-fill" : "table";

  const [view, setView] = useState(false);

  const dropdownObserver = useResizeObserver<HTMLDivElement>();
  const pictureObserver = logged ? useResizeObserver<HTMLDivElement>() : null;

  const dropdownOptions: UserDropdownElement[] = [
    {
      name: 'Logout',
      func: onLogout,
      icon: "logout",
    },]

  // const selectOption = (option: UserDropdownElement) => {
  //   setView(false);
  //   option.func;
  // };

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
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownObserver.ref, pictureObserver]);

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
          <Box className="header--zone" onClick={onLeftSectionClick}>
            <Icon icon="bell" size="20px" color={logoColor} />
            <Text
              type="h6"
              weight="600"
              className="header--text"
              color={logoColor}
            >
              {leftSectionText}
            </Text>
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
