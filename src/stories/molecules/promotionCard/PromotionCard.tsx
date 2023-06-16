import React, { forwardRef, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import DatePicker from "react-datepicker";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import styles from "./promotionCard.module.scss";
import { Button } from "../../atoms/button/Button";
import "react-datepicker/dist/react-datepicker.css";
import textStyles from "../../atoms/text/text.module.scss";
import inputTextStyles from "../inputText/inputText.module.scss";

export interface PromotionCardProps {
  /**
   * Promotion text
   */
  promotion: string;
  /**
   * Promotion date
   */
  date: Date;
  /**
   * Promotion cost
   */
  cost: number;
  /**
   * Indicates if the component is editable
   */
  editable?: boolean;
  /**
   * On component click
   */
  onClick: () => void;
  /**
   * On save editions button click
   */
  onSave: (promotion: string, date: Date, cost: number) => void;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component second color
   */
  secondaryColor?: string;
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
export const PromotionCard = ({
  promotion,
  date,
  cost,
  editable,
  onClick,
  onSave,
  color,
  secondaryColor = "white",
  width,
  height,
  ...props
}: PromotionCardProps) => {
  const [edit, setEdit] = useState(false);
  const [dateBackup, setDateBackup] = useState(date);
  const [currentDate, setCurrentDate] = useState(date);
  const [costBackup, setCostBackup] = useState(cost);
  const [currentCost, setCurrentCost] = useState(cost);
  const [promotionBackup, setPromotionBackup] = useState(promotion);
  const [currentPromotion, setCurrentPromotion] = useState(promotion);

  const promotionRef = useRef<HTMLInputElement>(null);
  const costRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!!promotionRef.current) {
      promotionRef.current.size = Math.max(currentPromotion.length, 5);
    }
    if (!!costRef.current) {
      costRef.current.style.width =
        (Math.max(currentCost.toString().length, 3) + 1) * 10 + "px";
    }
  }, [edit]);

  const setEditMode = () => {
    setDateBackup(currentDate);
    setCostBackup(currentCost);
    setPromotionBackup(currentPromotion);
    setEdit(true);
  };

  const saveEdits = () => {
    setEdit(false);
    onSave(currentPromotion, currentDate, currentCost);
  };

  const cancelEdits = () => {
    setCurrentDate(dateBackup);
    setCurrentCost(costBackup);
    setCurrentPromotion(promotionBackup);
    setEdit(false);
  };

  const changePromotion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPromotion(event.target.value);
    event.target.size = Math.max(event.target.value.length, 5);
  };

  const changeCost = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCost(Number(event.target.value));
    event.target.style.width =
      (Math.max(event.target.value.toString().length, 3) + 1) * 10 + "px";
  };

  /**
   * Format a date to "12 de Diciembre" for example
   * @param date Date to format
   * @returns Dormatted date
   */
  const formatDate = (date: Date) =>
    date.toLocaleDateString("es-ES", { day: "numeric" }) +
    " de " +
    date.toLocaleString("es-ES", { month: "long" }).charAt(0).toUpperCase() +
    date.toLocaleString("es-ES", { month: "long" }).slice(1);

  type ButtonProps = React.HTMLProps<HTMLButtonElement>;
  const DateInputButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ value, onClick }, ref) => {
      let date: Date;

      if (typeof value !== "string") date = new Date();
      else {
        const [month, day, year] = value.split("/");
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      }

      return (
        <button
          className={classnames(
            textStyles["text"],
            inputTextStyles["input-text--input"],
            styles["promotion-card--date-picker"]
          )}
          onClick={onClick}
          ref={ref}
        >
          {formatDate(date)}
        </button>
      );
    }
  );

  return (
    <Box
      className={styles["promotion-card--container"]}
      borderRadius="5px"
      backgroundColor={color}
      onClick={onClick}
      strongShadow
      style={{ width, height }}
    >
      <Box className={styles["promotion-card--menu"]}>
        <Box>
          {edit ? (
            <input
              type="text"
              ref={promotionRef}
              value={currentPromotion}
              onChange={changePromotion}
              className={classnames(
                styles["promotion-card--input"],
                styles["promotion-card--promotion-input"],
                textStyles["text"],
                textStyles["text--h4"]
              )}
            />
          ) : (
            <Text
              className={styles["promotion-card--menu-text"]}
              weight="700"
              color={secondaryColor}
              type="h4"
            >
              {currentPromotion}
            </Text>
          )}
        </Box>
        <Box>
          {edit ? (
            <DatePicker
              selected={currentDate}
              onChange={(date: Date) => setCurrentDate(date)}
              onSelect={(date: Date) => setCurrentDate(date)}
              customInput={<DateInputButton />}
              minDate={new Date()}
            />
          ) : (
            <Text
              className={styles["promotion-card--date"]}
              weight="400"
              color={secondaryColor}
            >
              {formatDate(currentDate)}
            </Text>
          )}
        </Box>
      </Box>

      <Box className={styles["promotion-card--menu"]}>
        {edit ? (
          <input
            type="number"
            ref={costRef}
            value={currentCost}
            onChange={changeCost}
            className={classnames(
              styles["promotion-card--input"],
              styles["promotion-card--cost-input"],
              textStyles["text"],
              textStyles["text--h6"]
            )}
            style={{
              fontWeight: "600",
            }}
          />
        ) : (
          <Button size="small" primary backgroundColor={secondaryColor}>
            <Text type="h6" weight="700" color={color}>
              {currentCost === 0 ? "Gratis" : `$${currentCost}`}
            </Text>
          </Button>
        )}

        <Box
          className={styles["promotion-card--edition-container"]}
          style={{ width: !editable ? "0" : edit ? "125px" : "40px" }}
        >
          <Editable
            editable={!!editable}
            edit={edit}
            onPencilClick={setEditMode}
            onCancelClick={cancelEdits}
            onSaveClick={saveEdits}
            useIcons
          />
        </Box>
      </Box>
    </Box>
  );
};
