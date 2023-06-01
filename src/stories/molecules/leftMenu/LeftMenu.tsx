import React, { useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import styles from "./leftMenu.module.scss";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import BranchDropdownElement from "../../utils/objects/BranchDropdownElement";

export interface LeftMenuProps {
  /**
   * Profile picture
   */
  picture: string;
  /**
   * User name
   */
  username: string;
  /**
   * User role
   */
  userRole: "client" | "business";
  /**
   * Selected branch
   */
  currentBranch: string;
  /**
   * Branch options
   * */
  branchOptions?: BranchDropdownElement[];
  /**
   * On click in close
   */
  onClose: () => void;
  /**
   * Edit profile function
   */
  onEditProfile: () => void;
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
   * onLogoutClick function
   */
  onLogoutClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const LeftMenu = ({
  picture,
  username,
  userRole,
  currentBranch,
  branchOptions = [],
  onClose,
  onEditProfile,
  onReserveClick = () => {},
  onReservationsClick = () => {},
  onFavoritesClick,
  onLogoutClick,
  ...props
}: LeftMenuProps) => {
  const [viewBranches, setViewBranches] = useState(false);

  return (
    <Box className={styles["left-menu--container"]}>
      <Box className={styles["left-menu--header"]}>
        <Box className={styles["left-menu--header-profile"]}>
          <Box
            backgroundImage={
              picture == ""
                ? "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                : picture
            }
            className={styles["left-menu--header-image"]}
          />
          <Text weight="500" ellipsis>
            {username}
          </Text>
        </Box>

        <Box onClick={onClose} className={styles["left-menu--close"]}>
          <Icon icon="left" size="25px" />
        </Box>
      </Box>

      <hr style={{ width: "100%" }} />

      <Box className={styles["left-menu--content-container"]}>
        <Box className={styles["left-menu--content"]}>
          <Box
            className={styles["left-menu--content-item"]}
            onClick={() =>
              userRole === "business" ? onReservationsClick() : onReserveClick()
            }
          >
            <Box className={styles["left-menu--content-item-icon"]}>
              <Icon
                icon={userRole === "business" ? "table" : "table"}
                size="20px"
              />
            </Box>
            <Text weight="500" type="h6">
              {userRole === "business" ? "Reservas" : "Reservar"}
            </Text>
          </Box>
          <Box
            className={styles["left-menu--content-item"]}
            onClick={onEditProfile}
          >
            <Box className={styles["left-menu--content-item-icon"]}>
              <Icon icon="pencil" size="20px" />
            </Box>
            <Text weight="500" type="h6">
              Editar perfil
            </Text>
          </Box>
          {userRole === "business" ? (
            <>
              <Box
                className={styles["left-menu--content-branches"]}
                onClick={() => setViewBranches((view) => !view)}
              >
                <Box
                  className={styles["left-menu--content-branches-icon-name"]}
                >
                  <Box className={styles["left-menu--content-item-icon"]}>
                    <Icon icon="restaurant" size="20px" />
                  </Box>
                  <Text weight="500" type="h6">
                    {currentBranch}
                  </Text>
                </Box>

                <Icon
                  icon={viewBranches ? "up" : "down"}
                  size="30px"
                  style={{ marginRight: "10px" }}
                />
              </Box>

              <Box
                className={styles["left-menu--branches-container"]}
                style={{
                  opacity: viewBranches ? 1 : 0,
                  top: viewBranches ? 0 : -50,
                  height: viewBranches ? `140px` : "0px",
                }}
              >
                {branchOptions.map((branch, index) => (
                  <Box
                    key={`left-menu--branches-branch-${index}-${branch.name}`}
                    className={styles["left-menu--branches-item"]}
                    onClick={() => branch.func()}
                  >
                    <Text weight="500" type="h6" ellipsis>
                      {branch.name}
                    </Text>
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <Box
              className={styles["left-menu--content-item"]}
              onClick={onFavoritesClick}
            >
              <Box className={styles["left-menu--content-item-icon"]}>
                <Icon icon="heart-fill" size="20px" />
              </Box>
              <Text weight="500" type="h6">
                Favoritos
              </Text>
            </Box>
          )}
        </Box>

        <Box
          className={styles["left-menu--content-last-item"]}
          onClick={onLogoutClick}
        >
          <Box className={styles["left-menu--content-item-icon"]}>
            <Icon icon="logout" size="20px" />
          </Box>
          <Text weight="500" type="h6">
            Cerrar sesión
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
