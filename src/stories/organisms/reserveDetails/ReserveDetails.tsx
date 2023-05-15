import React from "react";
import "./reserveDetails.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { InputText } from "../../molecules/inputText/InputText";
import { InputDate } from "../../molecules/inputDate/InputDate";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import { InputLongText } from "../../molecules/inputLongText/InputLongText";
import {
  AddFriends,
  AddFriendsProps,
} from "../../molecules/addFriends/AddFriends";

interface ReserveDetailsProps {
  /**
   * Current date
   */
  date: InputFormHook<Date>;
  /**
   * Current entry hour
   */
  hourIn: InputFormHook<OptionObject>;
  /**
   * Valid entry hours
   */
  validHoursIn?: OptionObject[];
  /**
   * Current departure hour
   */
  hourOut: InputFormHook<OptionObject>;
  /**
   * Valid departure hours
   */
  validHoursOut?: OptionObject[];
  /**
   * Number of people in the reservation
   */
  persons: InputFormHook<string>;
  /**
   * Special occasion in the reservation
   */
  occasion: InputFormHook<string>;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Mode
   */
  mode?: "free" | "paid";
  /**
   * Add friends component props
   */
  invitedFriendsProps?: AddFriendsProps;
  /**
   * Show invite friends
   */
  showInviteFriends?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const ReserveDetails = ({
  date,
  hourIn,
  validHoursIn,
  hourOut,
  validHoursOut,
  persons,
  occasion,
  width,
  height,
  mode = "free",
  invitedFriendsProps,
  showInviteFriends = true,
  ...props
}: ReserveDetailsProps) => {
  if (mode === "paid") {
    var component_title = "Datos de la reserva";
    var centering = "flex-start";
  } else {
    var component_title = "Datos de la reserva";
    var centering = "center";
  }

  return (
    <Box
      className="reserve-details--container"
      style={{ width, height }}
      {...props}
    >
      {/* Branch details */}
      <Box
        className="reserve-details--title"
        style={{
          justifyContent: centering,
        }}
      >
        <Text type="h4" color="#112211" weight="700">
          {" "}
          {component_title}{" "}
        </Text>
      </Box>
      {/* Inputs 1 */}
      <Box className="reserve-details--input-container">
        <Box width="100%" className="reserve-details--input-date">
          <InputDate 
            inputHook={date} 
            minDate={new Date()} />
        </Box>

        <Box width="100%" className="reserve-details--input1">
          <InputText 
              inputHook={persons}
              type="number" 
              label="* Personas" />
        </Box>

        <Box width="100%" className="reserve-details--input1">
          <InputSelect
            inputHook={hourIn}
            options={validHoursIn}
            label="* Llegada"
          />
        </Box>

        <Box width="100%" className="reserve-details--input1">
          <InputSelect
            inputHook={hourOut}
            options={validHoursOut}
            label="Salida"
          />
        </Box>
      </Box>
      {showInviteFriends && (
        <Box className="reserve-details--invite-friends">
          <Text type="p" color="#112211" weight="700">
            Invita a tus amigos
          </Text>
          <AddFriends {...invitedFriendsProps} />
        </Box>
      )}

      <InputLongText
        label = "Ocasión Especial"
        value={occasion.value}
        setValue={occasion.setValue}
        maxLength={430}
        maxRows={5}
        minRows={5}
      />
    </Box>
  );
};