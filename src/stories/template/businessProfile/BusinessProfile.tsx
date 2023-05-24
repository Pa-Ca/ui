import React, { useEffect, useState } from "react";
import "./businessProfile.scss";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { BasicPage } from "../basicPage/BasicPage";
import { Modal } from "../../molecules/modal/Modal";
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
import { Button } from "../../atoms/button/Button";

export interface IncompleteBranch {
  /**
   * Branch name
   */
  name: string;
  /**
   * Incomplete fields
   */
  incompleteFields: string[];
}

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
   * On create new branch button click
   */
  onCreateBranch: () => void;
  /**
   * Function that is executed when clicking on the profile picture
   */
  onPictureClick: () => void;

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
   * Indicates that an email was sent to change the password
   */
  emailSent: boolean;
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
  onChangePassword: () => void;
  /**
   * Function that will be executed when clicking on you forgot your password
   */
  onForgotPassword: () => void;

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
   * Average reserve time of the branch
   * */
  branchAverageReserveTimeHours: InputFormHook<string>;
  /**
   * Average reserve time of the branch
   * */
  branchAverageReserveTimeMinutes: InputFormHook<string>;
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
   * Opening time hours of the branch
   */
  branchOpeningTimeHour: InputFormHook<string>;
  /**
   * Opening time minutes of the branch
   */
  branchOpeningTimeMinute: InputFormHook<string>;
  /**
   * Closing time hours of the branch
   */
  branchClosingTimeHour: InputFormHook<string>;
  /**
   * Closing time minutes of the branch
   */
  branchClosingTimeMinute: InputFormHook<string>;
  /**
   * Google maps API key
   * */
  mapsApiKey: string;
  /**
   * Incomplete branches
   */
  incompleteBranches: IncompleteBranch[];
  /**
   * Indicates whether to display the error modal when creating a branch
   */
  showErrorModal: boolean;
  /**
   * Function that change the error modal state
   */
  setShowErrorModal: (value: boolean) => void;

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
  onSaveBranchAverageReserveTime: (hours: string, minutes: string) => void;
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
   * On save event for the opening time
   * */
  onSaveBranchOpeningTime: (hour: string, minute: string) => void;
  /**
   * On save event for the closing time
   * */
  onSaveBranchClosingTime: (hour: string, minute: string) => void;
  /**
   * On delete branch
   */
  onDeleteBranch: () => void;

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
  onCreateBranch,
  onPictureClick,

  name,
  email,
  phoneNumber,
  password,
  newPassword,
  emailSent,
  done,
  onSaveName,
  onSavePhoneNumber,
  onChangePassword,
  onForgotPassword,

  haveBranch = true,
  branchName,
  branchDescription,
  branchLocation,
  branchPhone,
  branchCapacity,
  branchAverageReserveTimeHours,
  branchAverageReserveTimeMinutes,
  branchPrice,
  branchMapsLink,
  branchType,
  branchTypeOptions,
  branchLocationOptions,
  branchOpeningTimeHour,
  branchOpeningTimeMinute,
  branchClosingTimeHour,
  branchClosingTimeMinute,
  mapsApiKey,
  incompleteBranches,
  showErrorModal,
  setShowErrorModal,

  onSaveBranchName,
  onSaveBranchDescription,
  onSaveBranchLocation,
  onSaveBranchPhone,
  onSaveBranchCapacity,
  onSaveBranchAverageReserveTime,
  onSaveBranchPrice,
  onSaveBranchType,
  onSaveBranchMapsLink,
  onSaveBranchOpeningTime,
  onSaveBranchClosingTime,
  onDeleteBranch,

  color,
  secondaryColor,
  ...props
}: BusinessProfileProps) => {
  const [page, setPage] = useState(0);
  const [changePassword, setChangePassword] = useState(false);

  const observer = useResizeObserver<HTMLDivElement>();
  const tabObserver = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * observer.width;
    }
  }, [observer.width, page]);

  useEffect(() => {
    password.setValue("");
    newPassword.setValue("");
  }, [changePassword]);

  return (
    <BasicPage headerArgs={header}>
      <Box width="100%">
        <BusinessHeader
          mainImage={mainImage}
          profilePicture={profilePicture}
          name={name.value}
          email={email.value}
          onCreateBranch={onCreateBranch}
          onPictureClick={onPictureClick}
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
                emailSent={emailSent}
                done={done}
                changePassword={changePassword}
                setChangePassword={setChangePassword}
                onSaveName={onSaveName}
                onSavePhoneNumber={onSavePhoneNumber}
                onChangePassword={onChangePassword}
                onForgotPassword={onForgotPassword}
                color={color}
                secondaryColor={secondaryColor}
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
                  averageReserveTimeHours={branchAverageReserveTimeHours}
                  averageReserveTimeMinutes={branchAverageReserveTimeMinutes}
                  price={branchPrice}
                  mapsLink={branchMapsLink}
                  type={branchType}
                  typeOptions={branchTypeOptions}
                  locationOptions={branchLocationOptions}
                  openingTimeHour={branchOpeningTimeHour}
                  openingTimeMinute={branchOpeningTimeMinute}
                  closingTimeHour={branchClosingTimeHour}
                  closingTimeMinute={branchClosingTimeMinute}
                  mapsApiKey={mapsApiKey}
                  email={email.value}
                  onSaveName={onSaveBranchName}
                  onSaveDescription={onSaveBranchDescription}
                  onSaveLocation={onSaveBranchLocation}
                  onSavePhone={onSaveBranchPhone}
                  onSaveCapacity={onSaveBranchCapacity}
                  onSaveAverageReserveTime={onSaveBranchAverageReserveTime}
                  onSavePrice={onSaveBranchPrice}
                  onSaveType={onSaveBranchType}
                  onSaveMapsLink={onSaveBranchMapsLink}
                  onSaveOpeningTime={onSaveBranchOpeningTime}
                  onSaveClosingTime={onSaveBranchClosingTime}
                  onDeleteBranch={onDeleteBranch}
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

        <Modal open={showErrorModal} setOpen={setShowErrorModal}>
          <Box className="business-profile--modal-centered">
            <Text type="h4" weight="600" color="#112211">
              Error creando el local
              <br />
              <br />
            </Text>
          </Box>
          <Text type="h6" weight="400" color="#112211">
            No puedes crear un local mientras algún otro no tiene sus datos
            completos.
          </Text>
          <Text type="h6" weight="400" color="#112211">
            Los locales que no tienen los datos completos son:
            <br />
            <br />
          </Text>

          <ul>
            {incompleteBranches.map((branch, i) => (
              <li
                key={`business-profile--incomplete-branch-${i}-${branch.name}`}
              >
                <Text weight="600" color="#112211">
                  {branch.name}
                </Text>
                <ul>
                  {branch.incompleteFields.map((field, j) => (
                    <li
                      key={`business-profile--incomplete-field-${i}-${branch.name}-${j}-${field}`}
                    >
                      <Text type="h6" weight="400" color="#112211">
                        {field}
                      </Text>
                    </li>
                  ))}
                </ul>
                <br />
              </li>
            ))}
          </ul>

          <Box className="business-profile--modal-centered">
            <Button
              fullWidth
              primary
              onClick={() => setShowErrorModal(false)}
              backgroundColor={color}
            >
              <Box className="business-profile--modal-centered">
                <Text>Entendido</Text>
              </Box>
            </Button>
          </Box>
        </Modal>
      </Box>
    </BasicPage>
  );
};
