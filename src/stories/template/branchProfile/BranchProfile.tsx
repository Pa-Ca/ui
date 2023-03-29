import React, { useState } from "react";
import "./branchProfile.scss";
import { Box } from "../../atoms/box/Box";
import UserData from "../../utils/objects/UserData";
import getValidHours from "../../utils/getValidHours";
import { Footer } from "../../organisms/footer/Footer";
import { Header } from "../../organisms/header/Header";
import BranchData from "../../utils/objects/BranchData";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BranchNav } from "../../molecules/branchNav/BranchNav";
import { MenuPreview } from "../../organisms/menuPreview/MenuPreview";
import { AmenityList } from "../../molecules/amenityList/AmenityList";
import { ReviewBoard } from "../../organisms/reviewBoard/ReviewBoard";
import { FastReserveBox } from "../../molecules/fastReserveBox/FastReserveBox";
import { BranchLocation } from "../../molecules/branchLocation/BranchLocation";
import { BranchMainSummary } from "../../organisms/branchMainSummary/BranchMainSummary";

interface BranchProfileProps {
  /**
   * Get user data
   */
  getUserData: () => UserData;
  /**
   * Get Branch data
   */
  getBranchData: () => BranchData;
  /**
   * On Reserve function
   */
  onHeaderReserveClick?: () => void;
  /**
   * On PA-CA logo click function
   */
  onPacaClick: () => void;
  /**
   * On Favorites function
   */
  onFavoritesClick?: () => void;
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
   * Location image in google maps
   */
  locationImage: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchProfile = ({
  getUserData = () => {
    return { logged: false };
  },
  getBranchData,
  onHeaderReserveClick,
  onPacaClick,
  onFavoritesClick,
  onProfileClick,
  onLoginClick,
  onRegisterClick,
  locationImage,
  color,
  ...props
}: BranchProfileProps) => {
  const user = getUserData();
  const branch = getBranchData();
  const validHours = getValidHours();
  const name = !user.logged
    ? ""
    : user.role === "business"
    ? user.business?.name
    : `${user.client?.name} ${user.client?.surname.slice(0, 1)}.`;
  const picture = !user.logged
    ? ""
    : user.role === "business"
    ? user.business?.picture
    : user.client?.picture;
  const editable =
    user.logged &&
    user.role === "business" &&
    user.business?.id === branch.businessId;

  const [like, setLike] = useState(false);
  const [reserveDate, setReserveDate] = useState<Date | undefined>(undefined);
  const [reservePersons, setReservePersons] =
    useState<string | undefined>(undefined);
  const [reserveHour, setReserveHour] = useState<OptionObject>({
    value: "",
    name: "",
  });

  const headerObserver = useResizeObserver<HTMLDivElement>();
  const navObserver = useResizeObserver<HTMLDivElement>();

  const line = (width: string) => (
    <Box className="branch-profile--nav-line" width={width} />
  );

  return (
    <Box className="branch-profile--container">
      <Box
        className="branch-profile--header-container"
        backgroundImage={branch.mainImage}
        innerRef={headerObserver.ref}
      >
        <Box className="branch-profile--header">
          <Header
            dark
            name={name}
            logged={user.logged}
            picture={picture}
            onLeftSectionClick={onHeaderReserveClick}
            onPacaClick={onPacaClick}
            onRightSectionClick={onFavoritesClick}
            onProfileClick={onProfileClick}
            onLoginClick={onLoginClick}
            onRegisterClick={onRegisterClick}
            userRole={user.role}
            backgroundColor="transparent"
            color={color}
          />
        </Box>
      </Box>

      <Box
        className="branch-profile--content"
        style={{
          marginTop: `${headerObserver.height - navObserver.height + 1}px`,
        }}
      >
        <Box className="branch-profile--main-content">
          <Box className="branch-profile--main-content-left">
            <Box innerRef={navObserver.ref} backgroundColor="transparent">
              <BranchNav
                like={like}
                showLike={!editable}
                onLikeClick={() => setLike((oldLike) => !oldLike)}
                color={color}
              />
            </Box>
            {line("93%")}

            <Box className="branch-profile--summary-container">
              <BranchMainSummary
                {...branch}
                addPromotion={() => {}}
                color={color}
                editable={editable}
                width="100%"
              />
            </Box>
          </Box>

          <Box className="branch-profile--main-content-right">
            <FastReserveBox
              title="Haz una Reserva"
              date={reserveDate}
              setDate={setReserveDate}
              hour={reserveHour}
              setHour={setReserveHour}
              validHours={validHours}
              persons={reservePersons}
              setPersons={setReservePersons}
            />

            <Box className="branch-profile--location-container">
              <BranchLocation
                location={branch.location}
                image={locationImage}
                editable={editable}
              />
            </Box>
          </Box>
        </Box>

        <Box className="branch-profile--secondary-content">
          <Box className="branch-profile--menu-container">
            <MenuPreview
              plates={branch.menu}
              color={color}
              editable={editable}
            />
          </Box>

          {line("100%")}

          <Box className="branch-profile--amenities-container">
            <AmenityList
              amenityList={branch.amenities}
              onSave={() => {}}
              color={color}
              editable={editable}
            />
          </Box>

          {line("100%")}

          <Box className="branch-profile--reviews-container">
            <ReviewBoard reviews={branch.reviewsData} showButton={!editable} />
          </Box>
        </Box>
      </Box>

      <Footer color={color} />
    </Box>
  );
};
