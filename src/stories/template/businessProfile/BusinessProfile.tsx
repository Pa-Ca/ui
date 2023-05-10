import React, { useEffect, useState } from "react";
import "./businessProfile.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { InputFormHook } from "../../hooks/useInputForm";
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
   * Business name input hook
   */
  name: InputFormHook<string>;
  /**
   * Business email input hook
   */
  email: InputFormHook<string>;
  /**
   * Business phone number input hook
   */
  phoneNumber: InputFormHook<string>;
  /**
   * Business password input hook
   */
  password: InputFormHook<string>;
  /**
   * Business new password input hook
   */
  newPassword: InputFormHook<string>;
  /**
   * Function that validates the current password
   */
  validateCurrentPassword: () => boolean;
  /**
   * Function that changes the user's password
   */
  onChangePassword: () => void;


  /**
   * Name of the branch
   * */
  branchName: InputFormHook<string>;
  /**
   * Description of the branch
   * */
  branchDescription: InputFormHook<string>;
  /**
   * Location of the branch
   * */
  branchLocation: InputFormHook<string>;
  /**
   * Phone of the branch
   * */
  branchPhone: InputFormHook<string>;
  /**
   * Capacity of the branch
   * */
  branchCapacity: InputFormHook<string>;
  /**
   * Average reserve time of the branch (in hours)
   * */
  branchAverageReserveTime: InputFormHook<string>;
  /**
   * Average price per person of the branch (in USD)
   * */
  branchPrice: InputFormHook<string>;
  /**
   * Branch type
   * */
  branchType: InputFormHook<string>;
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
  branchMapsLink: InputFormHook<string>;
  /**
   * Google maps API key
   * */
  mapsApiKey: string;

  /**
   * Function that is executed when the name is saved
   */
  onSaveName: (value: string) => void;
  /**
   * Description of the branch
   */
  onSaveDescription: (value: string) => void;
  /**
   * Location of the branch
   */
  onSaveLocation: (value: string) => void;
  /**
   * Phone of the branch
   */
  onSavePhone: (value: string) => void;
  /**
   * Capacity of the branch
   */
  onSaveCapacity: (value: string) => void;
  /**
   * Average reserve time of the branch (in hours)
   */
  onSaveAverageReserveTime: (value: string) => void;
  /**
   * Average price per person of the branch (in USD)
   */
  onSavePrice: (value: string) => void;
  /**
   * Branch type
   */
  onSaveType: (value: string) => void;
  /**
   * Precise location of the branch (Google maps link)
   */
  onSaveMapsLink: (value: string) => void;

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
  password,
  newPassword,
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
  mapsApiKey,

  onSaveName,
  onSaveDescription,
  onSaveLocation,
  onSavePhone,
  onSaveCapacity,
  onSaveAverageReserveTime,
  onSavePrice,
  onSaveType,
  onSaveMapsLink,

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
          name={name.value}
          email={email.value}
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
            <Box width={`${tabObserver.width - 10}px`}>
              <BusinessAccountInfo
                name={name}
                email={email}
                phoneNumber={phoneNumber}
                password={password}
                newPassword={newPassword}
                validateCurrentPassword={validateCurrentPassword}
                onChangePassword={onChangePassword}
                color={color}
              />
            </Box>
            <Box width="12px" />

            <Box width={`${tabObserver.width - 10}px`}>
              <Text type="h3" weight="700">
                {branchName.value}
              </Text>
              <Box height="16px" />

              <BranchEditForm
                name={branchName}
                description={branchDescription}
                location={branchLocation}
                phone={branchPhone}
                capacity={branchCapacity}
                averageReserveTime={branchAverageReserveTime}
                price={branchPrice}
                mapsLink={branchMapsLink}
                type={branchType}
                typeOptions={branchTypeOptions}
                locationOptions={branchLocationOptions}
                mapsApiKey={mapsApiKey}
                onSaveName={onSaveName}
                onSaveDescription={onSaveDescription}
                onSaveLocation={onSaveLocation}
                onSavePhone={onSavePhone}
                onSaveCapacity={onSaveCapacity}
                onSaveAverageReserveTime={onSaveAverageReserveTime}
                onSavePrice={onSavePrice}
                onSaveType={onSaveType}
                onSaveMapsLink={onSaveMapsLink} />
            </Box>
            <Box width="12px" />

            <Box width={`${tabObserver.width - 10}px`}>
              <Text type="h3" weight="700">
                Métodos de pago
              </Text>
              <Box height="16px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </BasicPage>
  );
};
