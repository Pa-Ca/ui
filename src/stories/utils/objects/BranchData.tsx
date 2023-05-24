import AmenityObject from "./AmenityObject";
import { PlateProps } from "../../molecules/plate/Plate";
import { ReviewProps } from "../../molecules/review/Review";
import { PromotionCardProps } from "../../molecules/promotionCard/PromotionCard";

type BranchData = {
  businessId: number;
  name: string;
  score: number;
  reviews: number;
  category: string;
  pricePerson: number;
  location: string;
  price: number;
  overview: string;
  promotions: PromotionCardProps[];
  images: string[];
  mainImage: string;
  menu: PlateProps[];
  amenities: AmenityObject[];
  reviewsData: ReviewProps[];
  thumbnail: string;
};

export { type BranchData as default };
  