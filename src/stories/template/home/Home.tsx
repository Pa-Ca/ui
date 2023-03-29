import React, { useMemo, useState, useRef } from "react";
import "./home.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import UserData from "../../utils/objects/UserData";
import getValidHours from "../../utils/getValidHours";
import { Header } from "../../organisms/header/Header";
import { useDraggable } from "react-use-draggable-scroll";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BranchSearch } from "../../organisms/branchSearch/BranchSearch";
import { CategoryCard } from "../../molecules/categoryCard/CategoryCard";
import { CategoryCardProps } from "../../molecules/categoryCard/CategoryCard";
import { CategoryPreview } from "../../organisms/categoryPreview/CategoryPreview";
import { CategoryPreviewProps } from "../../organisms/categoryPreview/CategoryPreview";
import {
  HighlightReview,
  HighlightReviewProps,
} from "../../molecules/highlightReview/HighlightReview";

interface HomeProps {
  /**
   * Main picture that appears in the header
   */
  headerPicture?: string;
  /**
   * Get user data
   */
  getUserData: () => UserData;
  /**
   * On search button click
   */
  onSearch: (
    date: Date | undefined,
    hour: string,
    persons: number,
    search: string
  ) => void;
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
   * Get category previews data
   */
  getCategoryPreviews?: () => CategoryPreviewProps[];
  /**
   * Get category cards data
   */
  getCategoryCards?: () => CategoryCardProps[];
  /**
   * Get highlight reviews data
   */
  getHihgLightReviews?: () => HighlightReviewProps[];
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Home = ({
  headerPicture,
  getUserData = () => {
    return { logged: false };
  },
  onHeaderReserveClick,
  onPacaClick,
  onFavoritesClick,
  onProfileClick,
  onLoginClick,
  onRegisterClick,
  onSearch = () => {},
  getCategoryPreviews = () => [],
  getCategoryCards = () => [],
  getHihgLightReviews = () => [],
  color,
  ...props
}: HomeProps) => {
  const [search, setSearch] = useState("");
  const [persons, setPersons] = useState("");
  const [hour, setHour] = useState(getValidHours()[0]);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const observer = useResizeObserver<HTMLDivElement>();

  const user = getUserData();
  const categoryCards = getCategoryCards();
  const highlightReviews = getHihgLightReviews();
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

  const nCategories = useMemo(() => {
    return Math.max(1, Math.floor(observer.width / 530));
  }, [observer.width]);

  const selectPersons = (value: string) => {
    if (value === "" || parseInt(value) > 1) setPersons(value);
    else setPersons("1");
  };

  const selectDate = (selectedDate: Date) => {
    if (date !== undefined && selectedDate.getTime() === date.getTime()) {
      setDate(undefined);
    } else {
      setDate(selectedDate);
    }
  };

  return (
    <Box className="home--container">
      {/* Header */}
      <Box className="home--header-container">
        <Box
          backgroundImage={headerPicture}
          width="100%"
          height="600px"
          borderRadius="24px"
          className="home--header-image-container"
        >
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
          />

          <Box
            className="home--header-text-container"
            backgroundColor="transparent"
            height="33%"
          >
            <Box backgroundColor="transparent">
              <Text type="h2" color="white" weight="400">
                {" "}
                ¡Hola!{" "}
              </Text>
            </Box>
            <Box backgroundColor="transparent">
              <Text type="h1" color="white" weight="700" italic uppercase>
                {" "}
                ¿A DONDE VAMOS HOY?{" "}
              </Text>
            </Box>
            <Box backgroundColor="transparent">
              <Text type="h5" color="white" weight="600">
                {" "}
                Ofertas especiales todos los días{" "}
              </Text>
            </Box>
          </Box>

          <Box
            className="home--branch-searcher"
            backgroundColor="transparent"
            width="100%"
          >
            <BranchSearch
              date={date}
              setDate={(date: Date) => selectDate(date)}
              hour={hour}
              setHour={setHour}
              persons={persons}
              setPersons={selectPersons}
              search={search}
              setSearch={setSearch}
              onClick={() =>
                onSearch(date, hour.value, parseInt(persons), search)
              }
              width="85%"
              color={color}
            />
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box className="home--content">
        <Box backgroundColor="transparent">
          {getCategoryPreviews().map((category) => (
            <Box
              className="home--category-preview"
              key={`home--category-preview-${category.title}`}
            >
              <CategoryPreview {...category} color={color} />
            </Box>
          ))}
        </Box>

        <Box
          className="home--categories-card-container"
          innerRef={observer.ref}
        >
          {categoryCards?.slice(0, nCategories).map((category, index) => (
            <Box
              className="home--category-card"
              style={{ marginLeft: index === 0 ? "0px" : "24px" }}
              key={`home--category-card-${category.title}`}
            >
              <CategoryCard {...category} height="560px" buttonColor={color} />
            </Box>
          ))}
        </Box>

        <Box className="home--highlight-reviews-container">
          <Box
            className="home--highlight-reviews-container-header"
            height="72px"
          >
            <Text type="h3" weight="600">
              Críticas destacadas
            </Text>
            <Text weight="400">
              Conoce sobre los restaurantes destacados de la zona
            </Text>
          </Box>

          <div
            className="home--highlight-reviews-carousel"
            ref={ref}
            {...events}
          >
            {highlightReviews.map((review, index) => (
              <Box
                style={{ marginLeft: index === 0 ? "0px" : "50px" }}
                key={`home--highlight-review-${review.title}`}
              >
                <HighlightReview
                  {...review}
                  viewMore={() => {}}
                  width="425px"
                  shadowColor="rgba(239, 122, 8, 0.4)"
                  color={color}
                />
              </Box>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};
