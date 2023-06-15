import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Icon } from "../../atoms/icon/Icon";
import { Editable } from "../editable/Editable";
import useInputForm from "../../hooks/useInputForm";
import styles from "./branchContentSummary.module.scss";
import { InputSelect } from "../inputSelect/InputSelect";
import textStyles from "../../atoms/text/text.module.scss";
import { StarRating } from "../../atoms/starRating/StarRating";
import getAllBranchCategories from "../../utils/getAllBranchCategories";

interface BranchContentSummaryProps {
  /**
   * Branch name
   */
  name: string;
  /**
   * Branch score
   */
  score?: number;
  /**
   * Nomber of branch reviews
   */
  reviews?: number;
  /**
   * Main branch category
   */
  category?: string;
  /**
   * Price per person
   */
  pricePerson: number;
  /**
   * Reservation price
   */
  price: number;
  /**
   * Indicates that card is a consumible
   */
  consumible?: boolean;
  /**
   * Indicates if the data is editable
   */
  editable?: boolean;
  /**
   * On save editions
   */
  onSave?: (
    name: string,
    price: number,
    pricePerson: number,
    category: number
  ) => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchContentSummary = ({
  name,
  score,
  reviews,
  category,
  pricePerson,
  price,
  consumible = false,
  editable = false,
  onSave = () => {},
  color,
  width,
  height,
  ...props
}: BranchContentSummaryProps) => {
  const allCategories = getAllBranchCategories();

  const [edit, setEdit] = useState(false);
  const [nameBackup, setNameBackup] = useState(name);
  const [currentName, setCurrentName] = useState(name);
  const [priceBackup, setPriceBackup] = useState(price);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [pricePersonBackup, setPricePersonBackup] = useState(pricePerson);
  const [currentPricePerson, setCurrentPricePerson] = useState(pricePerson);
  const [categoryBackup, setCategoryBackup] = useState(
    allCategories.find((c) => c.label === category)!
  );

  const currentCategory = useInputForm(
    allCategories.find((c) => c.label === category)!
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const pricePersonRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!!titleRef.current) {
      titleRef.current.size = Math.max(currentName.length, 5);
    }
    if (!!priceRef.current) {
      priceRef.current.style.width =
        (Math.max(currentPrice.toString().length, 3) + 1) * 20 + "px";
    }
    if (!!pricePersonRef.current) {
      pricePersonRef.current.style.width =
        (Math.max(currentPricePerson.toString().length, 3) + 2) * 9 + "px";
    }
  }, [edit]);

  const setEditMode = () => {
    setNameBackup(currentName);
    setPriceBackup(currentPrice);
    setCategoryBackup(currentCategory.value);
    setPricePersonBackup(currentPricePerson);
    setEdit(true);
  };

  const saveEdits = () => {
    setEdit(false);
    onSave(
      currentName,
      currentPrice,
      currentPricePerson,
      currentCategory.value.number!
    );
  };

  const cancelEdits = () => {
    setCurrentName(nameBackup);
    setCurrentPrice(priceBackup);
    currentCategory.setValue(categoryBackup);
    setCurrentPricePerson(pricePersonBackup);
    setEdit(false);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.target.value);
    event.target.size = Math.max(event.target.value.length, 5);
  };

  const changePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrice(Number(event.target.value));
    event.target.style.width =
      (Math.max(event.target.value.toString().length, 3) + 1) * 20 + "px";
  };

  const changePricePerson = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPricePerson(Number(event.target.value));
    event.target.style.width =
      (Math.max(event.target.value.toString().length, 3) + 2) * 9 + "px";
  };

  return (
    <Box
      className={styles["branch-content-summary--container"]}
      style={{ width, height }}
    >
      <Box className={styles["branch-content-summary--data-container"]}>
        <Box className={styles["branch-content-summary--header"]}>
          {edit ? (
            <input
              type="text"
              ref={titleRef}
              value={currentName}
              onChange={changeName}
              className={classnames(
                styles["branch-content-summary--input"],
                textStyles["text"],
                textStyles["text--h3"]
              )}
              style={{
                fontWeight: "600",
              }}
            />
          ) : (
            <>
              <Text type="h3" color="#121212" weight="600">
                {currentName}
              </Text>
              <Box width="43px" />
            </>
          )}
          <Editable
            editable={editable}
            edit={edit}
            onPencilClick={setEditMode}
            onCancelClick={cancelEdits}
            onSaveClick={saveEdits}
          />
        </Box>

        <Box className={styles["branch-content-summary--review"]}>
          <StarRating size={16} rating={score} color={color} />
          <Text
            type="h8"
            color="#121212"
            weight="400"
            className={styles["branch-content-summary--data-text"]}
          >
            {reviews} Reviews
          </Text>
        </Box>

        <Box className={styles["branch-content-summary--data"]}>
          <Icon icon="bell" size="18px" />
          <Box width="5px" />
          {edit ? (
            <InputSelect
              label=""
              height="20px"
              showError={false}
              options={allCategories}
              inputHook={currentCategory}
            />
          ) : (
            <Text type="h6" color="#112211" opacity={0.75}>
              {currentCategory.value?.label!}
            </Text>
          )}

          <Box width="16px" />

          <Icon icon="dollar" size="18px" />
          <Box width="5px" />

          {edit ? (
            <>
              <input
                type="number"
                ref={pricePersonRef}
                value={currentPricePerson}
                onChange={changePricePerson}
                className={classnames(
                  styles["branch-content-summary--input"],
                  textStyles["text"],
                  textStyles["text--h6"]
                )}
                style={{
                  color: "#112211",
                  opacity: "0.75",
                  marginLeft: "5px",
                }}
              />
              <Text
                type="h6"
                color="#112211"
                opacity={0.75}
                className={styles["branch-content-summary--data-text"]}
              >
                $ p/ Persona
              </Text>
            </>
          ) : (
            <Text
              type="h6"
              color="#112211"
              opacity={0.75}
              className={styles["branch-content-summary--data-text"]}
            >
              {currentPricePerson}$ p/ Persona
            </Text>
          )}
        </Box>
      </Box>

      <Box
        className={styles["branch-content-summary--price-container"]}
        style={{ minWidth: consumible ? "270px" : "135px" }}
      >
        <Text type="h3" color="#121212" weight="700">
          Reserva
        </Text>
        {edit ? (
          <Box
            className={styles["branch-content-summary--price-sub-container"]}
          >
            <input
              type="number"
              ref={priceRef}
              value={currentPrice}
              onChange={changePrice}
              className={classnames(
                styles["branch-content-summary--input"],
                textStyles["text"],
                textStyles["text--h3"]
              )}
              style={{
                fontWeight: "700",
                color: color,
              }}
            />
            <Text type="h3" color={color} weight="700">
              $
            </Text>
          </Box>
        ) : (
          <Text type="h3" color={color} weight="700">
            {currentPrice}$ {consumible ? "Consumible" : ""}
          </Text>
        )}
      </Box>
    </Box>
  );
};
