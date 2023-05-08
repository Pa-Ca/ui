import React, { useEffect, useState } from "react";
import "./businessProfile.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { HeaderProps } from "../../organisms/header/Header";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BusinessHeader } from "../../molecules/businessHeader/BusinessHeader";
import { BusinessAccountInfo } from "../../organisms/businessAccountInfo/BusinessAccountInfo";
import {
  BranchEditForm,
  OptionType,
} from "../../organisms/branchEditForm/BranchEditForm";

interface BusinessProfileProps {
  /**
   * Header parameters
   */
  header: HeaderProps;
  /**
   * Business main image
   */
  mainImage: string;
  /**
   * Business profile picture
   */
  profilePicture: string;
  /**
   * Business name
   */
  name: string;
  /**
   * Business email
   */
  email: string;
  /**
   * Business phone number
   */
  phoneNumber: string;

  /**
   * Indicates if there is an error with the current password
   */
  currentPasswordError: boolean;
  /**
   * Indicates if there is an error with the new password
   */
  passwordError: boolean;
  /**
   * Message displayed if there is an error with the password
   */
  passwordErrorMessage?: string;
  /**
   * Function that validates the current password
   */
  validateCurrentPassword: (currentPassword: string) => boolean;
  /**
   * Function that changes the user's password
   */
  onChangePassword: (newPassword: string) => void;


  /**
   * Name of the branch
   * */
  branchName?: string;
  /**
   * Description of the branch
   * */
  branchDescription?: string;
  /**
   * Location of the branch
   * */
  branchLocation?: string;
  /**
   * Phone of the branch
   * */
  branchPhone?: string;
  /**
   * Capacity of the branch
   * */
  branchCapacity?: string;
  /**
   * Average reserve time of the branch (in hours)
   * */
  branchAverageReserveTime?: string;
  /**
   * Average price per person of the branch (in USD)
   * */
  branchPrice?: string;
  /**
   * Branch type
   * */
  branchType?: string;
  /**
   * Options for the branch type
   * */
  branchTypeOptions: OptionType[];
  /**
   * Options for the branch location
   * */
  branchLocationOptions: OptionType[];
  /**
   * Precise location of the branch (Google maps link)
   * */
  branchMapsLink?: string;
  /**
   * Google maps API key
   * */
  MapsApiKey: string;

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
export const BusinessProfile = ({
  header,
  mainImage,
  profilePicture,
  name,
  email,
  phoneNumber,

  currentPasswordError,
  passwordError,
  passwordErrorMessage,
  validateCurrentPassword,
  onChangePassword,

  branchName,
  branchDescription,
  branchLocation,
  branchPhone,
  branchCapacity,
  branchAverageReserveTime,
  branchPrice,
  branchMapsLink,
  branchType,
  branchTypeOptions,
  branchLocationOptions,
  MapsApiKey,

  color,
  secondaryColor,
  ...props
}: BusinessProfileProps) => {
  const [page, setPage] = useState(0);
  const observer = useResizeObserver<HTMLDivElement>();
  const tabObserver = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * observer.width;
    }
  }, [observer.width, page]);

  return (
    <BasicPage headerArgs={header}>
      <Box width="100%">
        <BusinessHeader
          mainImage={mainImage}
          profilePicture={profilePicture}
          name={name}
          email={email}
          color={color}
          secondaryColor={secondaryColor}
        />
        <Box height="32px" />

        <Box innerRef={tabObserver.ref}>
          <InputTab
            index={page}
            setIndex={setPage}
            tabs={["Cuenta", "Local", "Métodos de pago"]}
          />
        </Box>

        <Box height="32px" />

        <Box
          className="business-profile--content-container"
          innerRef={observer.ref}
        >
          <Box
            width={`${3 * tabObserver.width}px`}
            className="business-profile--content"
          >
            <Box width={`${tabObserver.width - 40}px`}>
              <BusinessAccountInfo
                currentName={name}
                currentEmail={email}
                currentPhoneNumber={phoneNumber}
                currentPasswordError={currentPasswordError}
                passwordError={passwordError}
                passwordErrorMessage={passwordErrorMessage}
                validateCurrentPassword={validateCurrentPassword}
                onChangePassword={onChangePassword}
                color={color}
              />
            </Box>
            <Box width="40px" />

            <Box width={`${tabObserver.width - 40}px`}>
              <Text type="h3" weight="700">
                {branchName}
              </Text>
              <Box height="16px" />
              
              <BranchEditForm
                width="100%"
                branchName={branchName}
                branchDescription={branchDescription}
                branchLocation={branchLocation}
                branchPhone={branchPhone}
                branchCapacity={branchCapacity}
                branchAverageReserveTime={branchAverageReserveTime}
                branchPrice={branchPrice}
                branchMapsLink={branchMapsLink}
                branchType={branchType}
                branchTypeOptions={branchTypeOptions}
                branchLocationOptions={branchLocationOptions}
                MapsApiKey={MapsApiKey}
              />
            </Box>
            <Box width="40px" />

            <Box width={`${tabObserver.width - 40}px`}>
              <BranchEditForm
                width="100%"
                branchName={branchName}
                branchDescription={branchDescription}
                branchLocation={branchLocation}
                branchPhone={branchPhone}
                branchCapacity={branchCapacity}
                branchAverageReserveTime={branchAverageReserveTime}
                branchPrice={branchPrice}
                branchMapsLink={branchMapsLink}
                branchType={branchType}
                branchTypeOptions={branchTypeOptions}
                branchLocationOptions={branchLocationOptions}
                MapsApiKey={MapsApiKey}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
