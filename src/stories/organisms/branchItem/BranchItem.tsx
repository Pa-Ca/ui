import React from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import styles from "./branchItem.module.scss";
import getDollars from "../../utils/getDollars";
import { Button } from "../../atoms/button/Button";
import useResizeObserver from "../../hooks/useResizeObserver";
import { StarRating } from "../../atoms/starRating/StarRating";

export interface BranchItemProps {
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
   * Branch main category
   */
  category: string;
  /**
   * Branch location
   */
  location: string;
  /**
   * First reserve hour
   */
  firstReserve: string;
  /**
   * Second reserve hour
   */
  secondReserve: string;
  /**
   * Price score
   */
  priceScore: number;
  /**
   * Does the user like this branch?
   */
  like: boolean;
  /**
   * Branch image from url
   */
  image: string;
  /**
   * On click in view more button
   */
  onViewMoreClick: () => void;
  /**
   * On first reserve click
   */
  onFirstReserveClick: () => void;
  /**
   * On first reserve click
   */
  onLikeClick: () => void;
  /**
   * On second reserve click
   */
  onSecondReserveClick: () => void;
  /**
   * Card width
   */
  width?: string;
  /**
   * Card height
   */
  height?: string;
  /**
   * Card main color
   */
  color?: string;
  /**
   * Price color
   */
  priceColor?: string;
  /**
   * Starting price
   */
  startingPrice?: number;
}

// Do a list of branch objects to use as a placeholder
const branchItemList = [
  {
    name: "La Nonna",
    score: 4.7,
    reviews: 56,
    amenity: "Bar",
    location: "El Paraíso",
    firstReserve: "02:00 pm",
    secondReserve: "08:00 pm",
    priceScore: 2,
    category: "Comida Italiana",
    like: true,
    image: "/images/branch-listing-resources/1.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 7,
  },
  {
    name: "Ciao Ciao",
    score: 4.4,
    reviews: 87,
    amenity: "Bar",
    location: "El Paraíso",
    firstReserve: "04:00 pm",
    secondReserve: "05:00 pm",
    priceScore: 4,
    category: "Comida Italiana",
    like: false,
    image: "/images/branch-listing-resources/2.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 25,
  },
  {
    name: "Lassi",
    score: 3.5,
    reviews: 78,
    amenity: "Música en vivo",
    location: "Chacao",
    firstReserve: "06:00 pm",
    secondReserve: "04:00 pm",
    priceScore: 4,
    category: "Comida India",
    like: true,
    image: "/images/branch-listing-resources/3.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 14,
  },
  {
    name: "Lima's fish",
    score: 3.8,
    reviews: 36,
    amenity: "Salón",
    location: "La Candelaria",
    firstReserve: "03:00 pm",
    secondReserve: "06:00 pm",
    priceScore: 1,
    category: "Vida Nocturna",
    like: true,
    image: "/images/branch-listing-resources/4.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 12,
  },
  {
    name: "Churrosko",
    score: 4.7,
    reviews: 59,
    amenity: "Valet Parking",
    location: "Los Palos Grandes",
    firstReserve: "02:00 pm",
    secondReserve: "08:00 pm",
    priceScore: 2,
    category: "Comida Americana",
    like: false,
    image: "/images/branch-listing-resources/5.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 50,
  },
  {
    name: "El Rincón de la India",
    score: 3.7,
    reviews: 75,
    amenity: "Música en vivo",
    location: "Chacao",
    firstReserve: "04:00 pm",
    secondReserve: "04:00 pm",
    priceScore: 2,
    category: "Comida India",
    like: true,
    image: "/images/branch-listing-resources/6.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 65,
  },
  {
    name: "Kofta",
    score: 4.1,
    reviews: 88,
    amenity: "Música en vivo",
    location: "Chacao",
    firstReserve: "01:00 pm",
    secondReserve: "09:00 pm",
    priceScore: 2,
    category: "Comida India",
    like: false,
    image: "/images/branch-listing-resources/7.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 33,
  },
  {
    name: "Croquetas pa' ti",
    score: 3.6,
    reviews: 66,
    amenity: "wifi",
    location: "Las Mercedes",
    firstReserve: "04:00 pm",
    secondReserve: "03:00 pm",
    priceScore: 1,
    category: "Restaurante",
    like: true,
    image: "/images/branch-listing-resources/8.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 16,
  },
  {
    name: "Artillero de Ron",
    score: 4.8,
    reviews: 32,
    amenity: "pet-friendly",
    location: "Altamira",
    firstReserve: "04:00 pm",
    secondReserve: "05:00 pm",
    priceScore: 2,
    category: "Bar",
    like: true,
    image: "/images/branch-listing-resources/9.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 5,
  },
  {
    name: "Rudy Bar",
    score: 4.9,
    reviews: 36,
    amenity: "Valet Parking",
    location: "Los Palos Grandes",
    firstReserve: "01:00 pm",
    secondReserve: "08:00 pm",
    priceScore: 1,
    category: "Comida Americana",
    like: true,
    image: "/images/branch-listing-resources/10.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 10,
  },
  {
    name: "Comiendo con Mariachis",
    score: 4.2,
    reviews: 2,
    amenity: "pet-friendly",
    location: "Altamira",
    firstReserve: "00:00 pm",
    secondReserve: "04:00 pm",
    priceScore: 4,
    category: "Bar",
    like: false,
    image: "/images/branch-listing-resources/11.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 13,
  },
  {
    name: "Torre di pizza",
    score: 3.7,
    reviews: 15,
    amenity: "Valet Parking",
    location: "Los Palos Grandes",
    firstReserve: "02:00 pm",
    secondReserve: "07:00 pm",
    priceScore: 2,
    category: "Comida Americana",
    like: true,
    image: "/images/branch-listing-resources/12.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 12,
  },
  {
    name: "Burger House",
    score: 3.5,
    reviews: 32,
    amenity: "Valet Parking",
    location: "Los Palos Grandes",
    firstReserve: "03:00 pm",
    secondReserve: "03:00 pm",
    priceScore: 4,
    category: "Comida Americana",
    like: true,
    image: "/images/branch-listing-resources/13.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 55,
  },
  {
    name: "Shibuya's Ramen",
    score: 5,
    reviews: 3,
    amenity: "wifi",
    location: "Las Mercedes",
    firstReserve: "00:00 pm",
    secondReserve: "05:00 pm",
    priceScore: 3,
    category: "Restaurante",
    like: true,
    image: "/images/branch-listing-resources/14.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 23,
  },
  {
    name: "Comer & Beber",
    score: 4,
    reviews: 27,
    amenity: "Valet Parking",
    location: "Los Palos Grandes",
    firstReserve: "02:00 pm",
    secondReserve: "04:00 pm",
    priceScore: 4,
    category: "Comida Americana",
    like: false,
    image: "/images/branch-listing-resources/15.jpg",
    onViewMoreClick: () => console.log("View more"),
    onFirstReserveClick: () => console.log(""),
    onLikeClick: () => console.log("Like"),
    onSecondReserveClick: () => console.log("Second Reserve"),
    startingPrice: 6,
  },
];

// Do a list of branch objects to use as a placeholder (This will be the
// concatenation of the branchItemList and the longBranchList)
export const exampleLongBranchList = [
  branchItemList[0],
  branchItemList[1],
  branchItemList[2],
  branchItemList[3],
  branchItemList[4],
  branchItemList[5],
  branchItemList[6],
  branchItemList[7],
  branchItemList[8],
  branchItemList[9],
  branchItemList[10],
  branchItemList[11],
  branchItemList[12],
  branchItemList[13],
  branchItemList[14],
];

/**
 * Primary UI component for user interaction
 */
export const BranchItem = ({
  name,
  score,
  reviews,
  category,
  location,
  firstReserve,
  secondReserve,
  priceScore = 0,
  like = false,
  image,
  onViewMoreClick,
  onLikeClick,
  onFirstReserveClick,
  onSecondReserveClick,
  width,
  height,
  color,
  priceColor,
  startingPrice,
  ...props
}: BranchItemProps) => {
  const containerObserver = useResizeObserver<HTMLDivElement>();
  const leftSideObserver = useResizeObserver<HTMLDivElement>();
  const rightSizeWidth = containerObserver.width - leftSideObserver.width - 40;

  return (
    <Box
      backgroundColor="white"
      borderRadius="12px"
      weakShadow
      className={styles["branch-item--container"]}
      style={{ width, height }}
      innerRef={containerObserver.ref}
    >
      {/* Summary */}
      <Box className={styles["branch-item--row-container"]}>
        {/* Image */}
        <Box
          className={styles["branch-item--image"]}
          borderRadius="12px"
          backgroundImage={image}
        />

        <Box
          className={styles["branch-item--summary-container"]}
          width={`${rightSizeWidth}px`}
        >
          {/* Data */}
          <Box className={styles["branch-item--summary-data"]}>
            <Box>
              <Text weight="600" opacity={0.75} color="#121212">
                {name}
              </Text>
            </Box>

            <Box>
              <StarRating size={16} rating={score} color={color} />
              <Text type="h8" color="#121212" weight="400">
                {reviews} Reviews
              </Text>
            </Box>

            <Box className={styles["branch-item--summary"]}>
              <Text type="h7" weight="400">
                {" "}
                {category}{" "}
              </Text>
              <Text type="h7" weight="400">
                {" "}
                &nbsp;•&nbsp;{" "}
              </Text>
              <Text> {getDollars(priceScore, name)} </Text>
              <Text type="h7" weight="400">
                {" "}
                &nbsp;•&nbsp;{" "}
              </Text>
              <Text type="h7" weight="400">
                {" "}
                {location}{" "}
              </Text>
            </Box>

            <Box className={styles["branch-item--reserve-container"]}>
              <Box>
                <Button
                  size="extra-small"
                  primary={true}
                  onClick={onFirstReserveClick}
                  backgroundColor={color}
                >
                  <Text type="h7" weight="700">
                    {firstReserve}
                  </Text>
                </Button>
              </Box>

              <Box>
                <Button
                  size="extra-small"
                  primary={true}
                  onClick={onSecondReserveClick}
                  backgroundColor={color}
                >
                  <Text type="h7" weight="700">
                    {secondReserve}
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box
              height="0.5px"
              backgroundColor="#112211"
              className={styles["branch-item--line"]}
            />
          </Box>

          {/* Price */}
          <Box className={styles["branch-item--price-container"]}>
            <Text type="h7" color="#112211" opacity={0.75}>
              Starting from
            </Text>
            <Text type="h4" color={priceColor} weight="700">
              {startingPrice ? `$${startingPrice}` : "$104"}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* View details */}
      <Box className={styles["branch-item--row-container"]}>
        {/* Dummy box */}
        <Box innerRef={leftSideObserver.ref} />

        {/* Buttons */}
        <Box className={styles["branch-item--button-container"]}>
          <Box className={styles["branch-item--like-container"]}>
            <Button
              size="box"
              primary={like}
              borderColor={color}
              backgroundColor={color}
              onClick={onLikeClick}
            >
              <Icon
                icon={like ? "heart-fill" : "heart"}
                size="20px"
                color={like ? "white" : "black"}
              />
            </Button>
          </Box>

          <Button
            primary
            fullWidth
            size="large"
            onClick={onViewMoreClick}
            backgroundColor={color}
          >
            <Text type="h6" weight="600">
              Ver detalles
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
