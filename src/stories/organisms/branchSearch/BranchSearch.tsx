import React from "react";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import styles from "./branchSearch.module.scss";
import { Button } from "../../atoms/button/Button";
import getValidHours from "../../utils/getValidHours";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { InputText } from "../../molecules/inputText/InputText";
import { InputDate } from "../../molecules/inputDate/InputDate";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";

interface BranchSearchProps {
  /**
   * Date input hook
   */
  date: InputFormHook<Date>;
  /**
   * Hour input hook
   */
  hour: InputFormHook<OptionObject>;
  /**
   * Persons number input hook
   */
  persons: InputFormHook<string>;
  /**
   * Branch search input hook
   */
  search: InputFormHook<string>;
  /**
   * On search button click
   */
  onClick?: () => void;
  /**
   * Total component width
   */
  width?: string;
  /**
   * Total component height
   */
  height?: string;
  /**
   * Main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchSearch = ({
  date,
  hour,
  persons,
  search,
  onClick,
  width,
  height,
  color,
  ...props
}: BranchSearchProps) => {
  return (
    <Box
      className={styles["branch-search--container"]}
      style={{ width, height }}
    >
      {/* Searchs */}
      <Box className={styles["branch-search--search-zone"]}>
        <Box className={styles["branch-search--search-date"]}>
          <InputDate inputHook={date} minDate={new Date()} />
        </Box>

        <Box className={styles["branch-search--search-hour"]}>
          <InputSelect
            inputHook={hour}
            options={getValidHours()}
            label="Hora"
          />
        </Box>

        <Box className={styles["branch-search--search-persons"]}>
          <InputText inputHook={persons} type="number" label="Personas" />
        </Box>

        <Box className={styles["branch-search--search-text"]}>
          <InputText
            inputHook={search}
            label="Locación, Restaurante, Cuisine"
          />
        </Box>
      </Box>

      {/* Button */}
      <Box className={styles["branch-search--button-zone"]}>
        <Button
          primary={true}
          size="large"
          backgroundColor={color}
          onClick={onClick}
        >
          <Box
            className={styles["branch-search--button"]}
            backgroundColor="transparent"
          >
            <Icon icon="paper-plane" size={"16px"} color="white" />
            <Text className={styles["branch-search--button-text"]}>
              Muéstrame Locales
            </Text>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
