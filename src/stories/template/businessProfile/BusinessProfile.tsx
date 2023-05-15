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
   * Indicates that the change has already been made
   */
  done: boolean;
  /**
   * Function that is executed when the business name is saved
   */
  onSaveName: (value: string) => void;
  /**
   * Function that is executed when the business phone number is saved
   */
  onSavePhoneNumber: (value: string) => void;
  /**
   * Function that changes the user's password
   */
  onChangePassword: () => Promise<boolean>;

  /**
   * Indicates if any branch is being shown
   */
  haveBranch?: boolean;
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
   * Function that is executed when the branch name is saved
   */
  onSaveBranchName: (value: string) => void;
  /**
   * Function that is executed when the branch description is saved
   */
  onSaveBranchDescription: (value: string) => void;
  /**
   * Function that is executed when the branch location is saved
   */
  onSaveBranchLocation: (value: string) => void;
  /**
   * Function that is executed when the branch phone number is saved
   */
  onSaveBranchPhone: (value: string) => void;
  /**
   * Function that is executed when the branch capacity is saved
   */
  onSaveBranchCapacity: (value: string) => void;
  /**
   * Function that is executed when the branch average reserve time is saved
   */
  onSaveBranchAverageReserveTime: (value: string) => void;
  /**
   * Function that is executed when the branch reservation price is saved
   */
  onSaveBranchPrice: (value: string) => void;
  /**
   * Function that is executed when the branch type is saved
   */
  onSaveBranchType: (value: string) => void;
  /**
   * Function that is executed when the branch google maps link is saved
   */
  onSaveBranchMapsLink: (value: string) => void;

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
  done,
  onSaveName,
  onSavePhoneNumber,
  onChangePassword,

  haveBranch = true,
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

  onSaveBranchName,
  onSaveBranchDescription,
  onSaveBranchLocation,
  onSaveBranchPhone,
  onSaveBranchCapacity,
  onSaveBranchAverageReserveTime,
  onSaveBranchPrice,
  onSaveBranchType,
  onSaveBranchMapsLink,

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
            tabs={["Cuenta", "Local"]}
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
                done={done}
                onSaveName={onSaveName}
                onSavePhoneNumber={onSavePhoneNumber}
                onChangePassword={onChangePassword}
                color={color}
              />
            </Box>
            <Box width="12px" />

            <Box width={`${tabObserver.width - 10}px`}>
              <Text type="h3" weight="700">
                Detalles del local
              </Text>
              <Box height="16px" />
              {haveBranch ? (
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
                  onSaveName={onSaveBranchName}
                  onSaveDescription={onSaveBranchDescription}
                  onSaveLocation={onSaveBranchLocation}
                  onSavePhone={onSaveBranchPhone}
                  onSaveCapacity={onSaveBranchCapacity}
                  onSaveAverageReserveTime={onSaveBranchAverageReserveTime}
                  onSavePrice={onSaveBranchPrice}
                  onSaveType={onSaveBranchType}
                  onSaveMapsLink={onSaveBranchMapsLink}
                  color={color}
                />
              ) : (
                <Box>
                  {" "}
                  <Text> Parece que no tienes ningún local asociado. </Text>
                </Box>
              )}
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
