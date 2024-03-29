import React, { useMemo, useState } from "react";
import "./reviewBoard.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import scoreString from "../../utils/scoreString";
import { Button } from "../../atoms/button/Button";
import { Review, ReviewProps } from "../../molecules/review/Review";

interface ReviewBoardProps {
  /**
   * All branch reviews
   */
  reviews?: ReviewProps[];
  /**
   * Number of reviews per page
   */
  reviewsPerPage?: number;
  /**
   * Indicates if the button should be displayed
   */
  showButton?: boolean;
  /**
   * On new opinion button
   */
  onButtonClick?: () => void;
  /**
   * Component width
   */
  width?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ReviewBoard = ({
  reviews = [],
  reviewsPerPage = 5,
  showButton,
  onButtonClick,
  width,
  ...props
}: ReviewBoardProps) => {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(reviews.length / reviewsPerPage);
  }, [reviews, reviewsPerPage]);

  const paginatedReviews = useMemo(() => {
    const inicio = (page - 1) * reviewsPerPage;
    const fin = inicio + reviewsPerPage;
    return reviews.slice(inicio, fin);
  }, [page, reviews, reviewsPerPage]);

  const totalScore = useMemo(() => {
    return (
      reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length
    );
  }, [reviews]);

  const line = (key?: string) => (
    <Box
      backgroundColor="#112211"
      height="0.5px"
      className="review-board--line"
      key={key}
    />
  );

  const goToNextPage = () => {
    if (page > totalPages - 1) return;
    setPage((oldPage) => oldPage + 1);
  };

  const goToPreviousPage = () => {
    if (page < 2) return;
    setPage((oldPage) => oldPage - 1);
  };

  return (
    <Box className="review-board--container" style={{ width }}>
      <Box className="review-board--header">
        <Box className="review-board--header-top">
          <Text type="h5" color="#112211" weight="700">
            Reviews
          </Text>
          {showButton && (
            <Button primary onClick={onButtonClick}>
              <Text type="h6" weight="600">
                {" "}
                Da tu opinión{" "}
              </Text>
            </Button>
          )}
        </Box>

        <Box className="review-board--header-bottom">
          <Box className="review-board--score">
            <Text type="h2" color="#112211" weight="700">
              {totalScore}
            </Text>
          </Box>
          <Box className="review-board--review-summary">
            <Text type="h5" color="#112211">
              {scoreString(totalScore)}
            </Text>
            <Text color="#112211" weight="400" type="h6">
              {reviews.length} reviews verificados
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="review-board--content">
        {line()}
        {paginatedReviews.map((review, index) => (
          <Box key={`review-board--review-index-${index}`}>
            <Review {...review} />
            {line(`review-board--line-index-${index}`)}
          </Box>
        ))}
        <Box className="review-board--pages">
          <Box
            className="review-board--icon"
            onClick={goToPreviousPage}
            style={{ cursor: page < 2 ? "auto" : "pointer" }}
          >
            <Icon
              icon="left"
              size="18px"
              color={page < 2 ? "#a7a2a2" : "black"}
            />
          </Box>

          <Box className="review-board--counter">
            <Text color="#112211" weight="400">
              {page} de {totalPages}
            </Text>
          </Box>

          <Box
            className="review-board--icon"
            onClick={goToNextPage}
            style={{ cursor: page > totalPages - 1 ? "auto" : "pointer" }}
          >
            <Icon
              icon="right"
              size="18px"
              color={page > totalPages - 1 ? "#a7a2a2" : "black"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
