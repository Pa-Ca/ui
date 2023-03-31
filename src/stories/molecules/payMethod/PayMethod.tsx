import React, { useMemo } from "react";
import "./payMethod.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import CardObject from "../../utils/objects/CardObject";

interface PayMethodProps {
  /**
   * Pay method type
   */
  method: "visa" | "pagomovil" | "zelle";
  /**
   * Indicates if the current pay method is active
   */
  active: boolean;
  /**
   * Current user cards
   */
  cards?: CardObject[];
  /**
   * Current user active card (cards index)
   */
  activeCard?: number;
  /**
   * On component click
   */
  onClick?: () => void;
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
export const PayMethod = ({
  method,
  active = false,
  cards = [],
  activeCard,
  onClick,
  color,
  secondaryColor,
  ...props
}: PayMethodProps) => {
  const currentColor = useMemo(() => {
    return active ? color : secondaryColor;
  }, [active]);

  const icon = useMemo(() => {
    switch (method) {
      case "visa":
        return "visa";
      case "pagomovil":
        return "smartPhone";
      case "zelle":
        return "zelle";
    }
  }, [method]);

  return (
    <Box className="pay-method--container" onClick={onClick}>
      <Box className="pay-method--header" backgroundColor={currentColor}>
        <Box className="pay-method--method-container">
          <Icon icon={icon} color="white" size="32px" />

          {method === "visa" && !!cards && !!activeCard && activeCard > -1 ? (
            <Box className="pay-method--method-text-container">
              <Text color="white" weight="700">
                **** {cards[activeCard].lastDigits}
              </Text>
              <Box width="8px" />
              <Text color="white" weight="400">
                {cards[activeCard].expirationDate?.toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                })}
              </Text>
            </Box>
          ) : method === "visa" ? (
            <Box className="pay-method--method-text-container">
              <Text color="white" weight="700">
                Tarjeta VISA
              </Text>
            </Box>
          ) : method === "pagomovil" ? (
            <Box className="pay-method--method-text-container">
              <Text color="white" weight="700">
                Pago Móvil
              </Text>
            </Box>
          ) : (
            <Box className="pay-method--method-text-container">
              <Text color="white" weight="700">
                Zelle
              </Text>
            </Box>
          )}
        </Box>

        <Box>
          <Icon
            icon={active ? "double-circle" : "circle"}
            size="35px"
            color="white"
          />
        </Box>
      </Box>

      <Box
        className="pay-method--content-container"
        style={{ maxHeight: active ? "190px" : "0" }}
      >
        <Box
          className="pay-method--content-item"
          height="190px"
          style={{ borderColor: currentColor }}
        >
          <Box className="pay-method--new-card">
            {method === "visa" && (
              <>
                <Icon icon="plus-circle" size="64px" color={color} />
                <Box height="10px" />
                <Text color="#121212" type="h7">
                  {" "}
                  Agregar una nueva tarjeta{" "}
                </Text>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
