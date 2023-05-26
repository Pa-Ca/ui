import React from "react";
import { Box } from "../../atoms/box/Box";
import styles from "./branchMainSummary.module.scss";
import { ImagesCollage } from "../../molecules/imagesCollage/imagesCollage";
import { AddPromotionCard } from "../../molecules/addPromotionCard/AddPromotionCard";
import { BranchContentSummary } from "../../molecules/branchContentSummary/BranchContentSummary";
import { BranchContentOverview } from "../../molecules/branchContentOverview/BranchContentOverview";
import {
  PromotionCard,
  PromotionCardProps,
} from "../../molecules/promotionCard/PromotionCard";

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
   * Number of branch reviews
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
   * Consumible price
   */
  price: number;
  /**
   * Branch promotion list
   */
  promotions: PromotionCardProps[];
  /**
   * Branch overview
   */
  overview: string;
  /**
   * Branch images
   */
  images: string[];
  /**
   * On view all images click
   */
  onImagesButtonClick?: () => void;
  /**
   * Add promotion function
   */
  addPromotion: () => void;
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
  price,
  promotions = [],
  overview,
  images = [],
  onImagesButtonClick,
  addPromotion,
  editable,
  color,
  width,
  height,
  ...props
}: BranchMainSummaryProps) => {
  return (
    <Box className={styles["branch-main-summary--container"]} style={{ width, height }}>
      <Box className={styles["branch-main-summary--content"]}>
        <BranchContentSummary
          name={name}
          score={score}
          reviews={reviews}
          category={category}
          pricePerson={pricePerson}
          price={price}
          editable={editable}
          color={color}
        />
      </Box>

      <Box className={styles["branch-main-summary--promotions-container"]}>
        {promotions.map((promotion, index) => {
          return (
            <Box
              className={styles["branch-main-summary--promotion"]}
              key={`branch-main-summay--promotions-${index}-${promotion.promotion}`}
            >
              <PromotionCard color={color} editable={editable} {...promotion} />
            </Box>
          );
        })}
        {editable && (
          <Box className={styles["branch-main-summary--promotion"]}>
            <AddPromotionCard
              text="Agregar Promoción"
              onClick={addPromotion}
              color="#A5A5A5"
              secondaryColor="white"
            />
          </Box>
        )}
      </Box>

      <Box className={styles["branch-main-summary--overview-container"]}>
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
