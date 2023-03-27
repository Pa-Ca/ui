import React from "react";
import "./branchMainSummary.scss";
import { Box } from "../../atoms/box/Box";
import { ImagesCollage } from "../../molecules/imagesCollage/imagesCollage";
import {
  PromotionCard,
  PromotionCardProps,
} from "../../molecules/promotionCard/PromotionCard";
import { BranchContentSummary } from "../../molecules/branchContentSummary/BranchContentSummary";
import { BranchContentOverview } from "../../molecules/branchContentOverview/BranchContentOverview";

interface BranchMainSummaryProps {
  /**
   * Branch name
   */
  name: string;
  /**
   * Branch score
   */
  score: number;
  /**
   * Nomber of branch reviews
   */
  reviews: number;
  /**
   * Main branch category
   */
  category: string;
  /**
   * Price per person
   */
  pricePerson: number;
  /**
   * Branch location
   */
  location: string;
  /**
   * Consumible price
   */
  price: number;
  /**
   * Branch promotion list
   */
  promotions?: PromotionCardProps[];
  /**
   * Branch overview
   */
  overview: string;
  /**
   * Branch images
   */
  images?: string[];
  /**
   * On view all images click
   */
  onImagesButtonClick?: () => void;
  /**
   * Indicates if the data is editable
   */
  editable?: boolean;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchMainSummary = ({
  name,
  score,
  reviews,
  category,
  pricePerson,
  location,
  price,
  promotions = [],
  overview,
  images = [],
  onImagesButtonClick,
  editable,
  color,
  width,
  height,
  ...props
}: BranchMainSummaryProps) => {
  return (
    <Box className="branch-main-summary--container" style={{ width, height }}>
      <Box className="branch-main-summary--content">
        <BranchContentSummary
          name={name}
          score={score}
          reviews={reviews}
          category={category}
          pricePerson={pricePerson}
          location={location}
          price={price}
          editable={editable}
          color={color}
        />
      </Box>

      <Box className="branch-main-summary--promotions-container">
        {promotions.map((promotion) => {
          return (
            <Box
              className="branch-main-summary--promotion"
              key={`branch-main-summay--promotions-${promotion.promotion}`}
            >
              <PromotionCard color={color} editable={editable} {...promotion} />
            </Box>
          );
        })}
      </Box>

      <Box className="branch-main-summary--overview-container">
        <BranchContentOverview
          overview={overview}
          editable={editable}
          color={color}
        />
      </Box>

      <Box>
        <ImagesCollage
          images={images}
          buttonTitle="Ver Fotos"
          buttonColor={color}
          buttonSize="large"
          onButtonClick={onImagesButtonClick}
        />
      </Box>
    </Box>
  );
};
