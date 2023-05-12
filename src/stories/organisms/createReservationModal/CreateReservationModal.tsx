import React, { useState } from "react";
import "./createReservationModal.scss";
import { Box } from "../../atoms/box/Box";
import { Icon } from "../../atoms/icon/Icon";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { InputText } from "../../molecules/inputText/InputText";
import { InputFormHook } from "../../hooks/useInputForm";
import OptionObject from "../../utils/objects/OptionObject";
import { ClientInfoForm } from "../../molecules/clientInfoForm/ClientInfoForm";
import { ReserveDetails } from "../reserveDetails/ReserveDetails";

interface CreateReservationModal {
    /**
     * Client first name input hook
     */
    firstName: InputFormHook<string>;
    /**
     * Client last name input hook
     */
    lastName: InputFormHook<string>;
    /**
     * Client phone input hook
     */
    phone: InputFormHook<string>;
    /**
     * Client email input hook
     */
    email: InputFormHook<string>;
    /**
     * Reservation date input hook
     */
    date: InputFormHook<Date>;
    /**
     * Reservation hourIn input hook
     */
    hourIn: InputFormHook<OptionObject>;
    /**
     * List of valid start hour for reservation
     */
    validHoursIn: OptionObject[];
    /**
     * Reservation hourIn input hook
    */
    hourOut: InputFormHook<OptionObject>;
    /**
    * List of valid end hours for reservation
    */
    validHoursOut: OptionObject[];
    /**
    * Reservation persons number input hook
    */
    persons: InputFormHook<string>;
    /**
     * Reservation occasion input hook
     */
    occasion: InputFormHook<string>;
    /**
     * Color of the submit button
     */
    submitButtonColor: string;

    createReservation: boolean;
    setCreateReservation: (open: boolean) => void;

    /**
     * Submit fuction
     */
    onSubmit: (
        date: Date,
        persons: number,
        hourIn: string,
        hourOut: string | null,
        occasion: string | null
    ) => void;
}

/**
 * Primary UI component for user interaction
 */
export const CreateReservationModal = ({
    createReservation,
    setCreateReservation,
    firstName,
    lastName,
    phone,
    email,
    date,
    hourIn,
    validHoursIn,
    hourOut,
    validHoursOut,
    persons,
    occasion,
    submitButtonColor,
    onSubmit,
    ...props
}: CreateReservationModal) => {

  return (
    <Modal open={createReservation} setOpen={setCreateReservation}>
        <Box className="create-reservation-modal--container">

            {/* Client Form */}
            <ClientInfoForm
                firstName = {firstName}
                lastName = {lastName}
                email = {email}
                phone={phone}
            />

            {/* Reservation Form */}
            <ReserveDetails
                date={date}
                hourIn={hourIn}
                validHoursIn={validHoursIn}
                hourOut={hourOut}
                validHoursOut={validHoursOut}
                persons={persons}
                occasion={occasion}
                showInviteFriends={false}
            />

            {/* Submit Button */}
            <Button
                fullWidth
                primary
                size="large"
                backgroundColor={submitButtonColor}
                onClick={() =>
                onSubmit(
                    date.value,
                    parseInt(persons.value),
                    typeof hourIn!.value === "string"
                    ? hourIn!.value
                    : hourIn!.value.toString(),
                    typeof hourOut!.value === "string"
                    ? hourOut!.value
                    : hourOut!.value.toString(),
                    occasion.value
                )
                }
            >
                <Box className="login-form--button-text">
                <Text color="white" type="h6" weight="600">
                    Completar Reserva
                </Text>
                </Box>
            </Button>
        </Box>
    </Modal>
    );
};