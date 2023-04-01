import React, { useState } from "react";
import "./payMethodSelector.scss";
import { Box } from "../../atoms/box/Box";
import CardObject from "../../utils/objects/CardObject";
import { PayMethod } from "../../molecules/payMethod/PayMethod";

interface PayMethodSelectorProps {
  /**
   * Current user cards
   */
  cards?: CardObject[];
  /**
   * Current user active card (cards index)
   */
  activeCard?: number;
  /**
   * Component main color
   */
  color?: string;
  /**
   * Component secondary color
   */
  secondaryColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PayMethodSelector = ({
  cards,
  activeCard,
  color,
  secondaryColor,
  ...props
}: PayMethodSelectorProps) => {
  const [activeMethod, setActiveMethod] = useState(-1);

  const selectMethod = (index: number) => {
    setActiveMethod((oldActiveMethod) => {
      if (oldActiveMethod === index) return -1;
      return index;
    });
  };

  return (
    <Box className="pay-method-selector--container">
      <Box className="pay-method-selector--method">
        <PayMethod
          method="visa"
          active={activeMethod === 0}
          cards={cards}
          activeCard={activeCard}
          color={color}
          secondaryColor={secondaryColor}
          onClick={() => selectMethod(0)}
        />
      </Box>
      <Box className="pay-method-selector--method">
        <PayMethod
          method="pagomovil"
          active={activeMethod === 1}
          color={color}
          secondaryColor={secondaryColor}
          onClick={() => selectMethod(1)}
        />
      </Box>
      <Box className="pay-method-selector--method">
        <PayMethod
          method="zelle"
          active={activeMethod === 2}
          color={color}
          secondaryColor={secondaryColor}
          onClick={() => selectMethod(2)}
        />
      </Box>
    </Box>
  );
};
