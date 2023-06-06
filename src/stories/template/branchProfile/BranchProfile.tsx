import React, { useMemo, useState } from "react";
import styles from "./branchProfile.module.scss";
import { Box } from "../../atoms/box/Box";
import { Path } from "../../molecules/path/Path";
import UserData from "../../utils/objects/UserData";
import getValidHours from "../../utils/getValidHours";
import { Footer } from "../../organisms/footer/Footer";
import { Header } from "../../organisms/header/Header";
import BranchData from "../../utils/objects/BranchData";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BranchNav } from "../../molecules/branchNav/BranchNav";
import { MenuPreview } from "../../organisms/menuPreview/MenuPreview";
import { AmenityList } from "../../molecules/amenityList/AmenityList";
import { ReviewBoard } from "../../organisms/reviewBoard/ReviewBoard";
import { FastReserveBox } from "../../molecules/fastReserveBox/FastReserveBox";
import { BranchMainSummary } from "../../organisms/branchMainSummary/BranchMainSummary";
import {
  BranchLocation,
  BranchLocationProps,
} from "../../molecules/branchLocation/BranchLocation";

interface BranchProfileProps {
  /**
   * Current date input hook
   */
  date: InputFormHook<Date>;
  /**
   * Current hour input hook
   */
  hour: InputFormHook<OptionObject>;
  /**
   * Current persons number input hook
   */
  persons: InputFormHook<string>;
  /**
   * On Reserve button click
   */
  onClickReserve?: () => void;
  /**
   * On Find Hour button click
   */
  onClickFindHour?: () => void;

  /**
   * Get user data
   */
  getUserData: () => UserData;
  /**
   * Get Branch data
   */
  getBranchData: () => BranchData;
  /**
   * On Header left section button click function
   */
  onHeaderLeftClick?: () => void;
  /**
   * On PA-CA logo click function
   */
  onPacaClick: () => void;
  /**
   * On Header right section button click function
   */
  onHeaderRightClick?: () => void;
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
   * Path from Home to current page
   */
  path: { name: string; onClick: () => void }[];
  /**
   * Component main color
   */
  color?: string;
  /**
   * Branch Location props
   * */
  branchLocationProps: BranchLocationProps;
}

/**
 * Primary UI component for user interaction
 */
export const BranchProfile = ({
  date,
  hour,
  persons,
  onClickReserve,
  onClickFindHour,
  getUserData = () => {
    return { logged: false };
  },
  getBranchData,
  onHeaderLeftClick,
  onPacaClick,
  onHeaderRightClick,
  onProfileClick,
  onLoginClick,
  onRegisterClick,
  path,
  color,
  branchLocationProps,
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

  const headerObserver = useResizeObserver<HTMLDivElement>();
  const navObserver = useResizeObserver<HTMLDivElement>();

  const line = (width: string) => (
    <Box className={styles["branch-profile--nav-line"]} width={width} />
  );

  const totalScore = useMemo(() => {
    return parseFloat(
      (
        branch.reviewsData.reduce((sum, review) => sum + review.score, 0) /
        branch.reviewsData.length
      ).toFixed(1)
    );
  }, [branch.reviewsData]);

  return (
    <Box className={styles["branch-profile--container"]}>
      <Box
        className={styles["branch-profile--header-container"]}
        backgroundImage={branch.mainImage}
      />
      <div className={styles["branch-profile--overlay"]} />

      <Box
        className={styles["branch-profile--header-container"]}
        innerRef={headerObserver.ref}
        style={{ zIndex: 3 }}
      >
        <Box className={styles["branch-profile--header"]}>
          <Header
            dark
            name={name}
            logged={user.logged}
            picture={picture}
            onPacaClick={onPacaClick}
            onProfileClick={onProfileClick}
            onLoginClick={onLoginClick}
            onRegisterClick={onRegisterClick}
            userRole={user.role}
            backgroundColor="transparent"
            color={color}
            branchOptions={[]}
          />
        </Box>
        <Box className={styles["branch-profile--path"]}>
          <Path
            path={path.concat([{ name: branch.name, onClick: () => {} }])}
            color="white"
            secondaryColor="white"
          />
        </Box>
      </Box>

      <Box
        className={styles["branch-profile--content"]}
        style={{
          marginTop: `${headerObserver.height - navObserver.height + 1}px`,
        }}
      >
        <Box className={styles["branch-profile--main-content"]}>
          <Box className={styles["branch-profile--main-content-left"]}>
            <Box innerRef={navObserver.ref}>
              <BranchNav
                like={like}
                showLike={!editable}
                onLikeClick={() => setLike((oldLike) => !oldLike)}
                color={color}
              />
            </Box>
            {line("93%")}

            <Box className={styles["branch-profile--summary-container"]}>
              <BranchMainSummary
                {...branch}
                score={totalScore}
                reviews={branch.reviewsData.length}
                addPromotion={() => {}}
                color={color}
                editable={editable}
                width="100%"
              />
            </Box>
          </Box>

          <Box className={styles["branch-profile--main-content-right"]}>
            <FastReserveBox
              title="Haz una Reserva"
              date={date}
              hour={hour}
              persons={persons}
              validHours={validHours}
              onClickReserve={onClickReserve}
              onClickFindHour={onClickFindHour}
            />

            <Box className={styles["branch-profile--location-container"]}>
              <BranchLocation {...branchLocationProps} />
            </Box>
          </Box>
        </Box>

        <Box className={styles["branch-profile--secondary-content"]}>
          <Box className={styles["branch-profile--menu-container"]}>
            <MenuPreview
              plates={branch.menu}
              color={color}
              editable={editable}
            />
          </Box>

          {line("100%")}

          <Box className={styles["branch-profile--amenities-container"]}>
            <AmenityList
              amenityList={branch.amenities}
              onSave={() => {}}
              color={color}
              editable={editable}
            />
          </Box>

          {line("100%")}

          <Box className={styles["branch-profile--reviews-container"]}>
            <ReviewBoard reviews={branch.reviewsData} showButton={!editable} />
          </Box>
        </Box>
      </Box>

      <Footer color={color} />
    </Box>
  );
};
