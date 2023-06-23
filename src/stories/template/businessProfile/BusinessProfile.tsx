import React, { useEffect, useMemo, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./businessProfile.module.scss";
import { Modal } from "../../molecules/modal/Modal";
import useWindowResize from "../../hooks/useWindowResize";
import OptionObject from "../../utils/objects/OptionObject";
import { HeaderProps } from "../../organisms/header/Header";
import useThemeProvider from "../../hooks/useThemeProvider";
import { InputTab } from "../../molecules/inputTab/InputTab";
import useResizeObserver from "../../hooks/useResizeObserver";
import { BasicPage } from "../../organisms/basicPage/BasicPage";
import { InputText } from "../../molecules/inputText/InputText";
import { InputTime } from "../../molecules/inputTime/InputTime";
import { InputSelect } from "../../molecules/inputSelect/InputSelect";
import useInputForm, { InputFormHook } from "../../hooks/useInputForm";
import { InputLongText } from "../../molecules/inputLongText/InputLongText";
import { BusinessHeader } from "../../molecules/businessHeader/BusinessHeader";
import { BranchEditForm } from "../../organisms/branchEditForm/BranchEditForm";
import { BasicMobilePage } from "../../organisms/basicMobilePage/BasicMobilePage";
import { BusinessAccountInfo } from "../../organisms/businessAccountInfo/BusinessAccountInfo";

import { UploadProfilePictureForm } from "../../organisms/uploadProfilePictureForm/UploadProfilePictureForm";

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
  onCreateBranch: (
    name: InputFormHook<string>,
    phoneNumber: InputFormHook<string>,
    price: InputFormHook<string>,
    type: InputFormHook<OptionObject<string | null>>,
    capacity: InputFormHook<string>,
    location: InputFormHook<OptionObject<string | null>>,
    averageReserveTimeHours: InputFormHook<string>,
    averageReserveTimeMinutes: InputFormHook<string>,
    openingTimeHour: InputFormHook<string>,
    openingTimeMinute: InputFormHook<string>,
    closingTimeHour: InputFormHook<string>,
    closingTimeMinute: InputFormHook<string>,
    description: InputFormHook<string>,
    mapsLink: InputFormHook<string>
  ) => void;
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
  branchLocation: InputFormHook<OptionObject<string | null>>;
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
  branchType: InputFormHook<OptionObject<string | null>>;
  /**
   * Options for the branch type
   * */
  branchTypeOptions: OptionObject<string>[];
  /**
   * Options for the branch location
   * */
  branchLocationOptions: OptionObject<string>[];
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
   * Function that is executed when the branch name is saved
   */
  onSaveBranchName: () => void;
  /**
   * Function that is executed when the branch description is saved
   */
  onSaveBranchDescription: () => void;
  /**
   * Function that is executed when the branch location is saved
   */
  onSaveBranchLocation: () => void;
  /**
   * Function that is executed when the branch phone number is saved
   */
  onSaveBranchPhone: () => void;
  /**
   * Function that is executed when the branch capacity is saved
   */
  onSaveBranchCapacity: () => void;
  /**
   * Function that is executed when the branch average reserve time is saved
   */
  onSaveBranchAverageReserveTime: () => void;
  /**
   * Function that is executed when the branch reservation price is saved
   */
  onSaveBranchPrice: () => void;
  /**
   * Function that is executed when the branch type is saved
   */
  onSaveBranchType: () => void;
  /**
   * Function that is executed when the branch google maps link is saved
   */
  onSaveBranchMapsLink: () => void;
  /**
   * On save event for the opening time
   * */
  onSaveBranchOpeningTime: () => void;
  /**
   * On save event for the closing time
   * */
  onSaveBranchClosingTime: () => void;
  /**
   * On delete branch
   */
  onDeleteBranch: () => void;

  /**
   * On save profile picture TODO: Check if the type is correct
   */
  onSaveProfilePicture: (profilePicture: string) => void;
  /**
   * On upload profile picture
   */
  uploadProfilePicture: (profilePicture: File) => void;
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
  onSaveProfilePicture,
  uploadProfilePicture,

  ...props
}: BusinessProfileProps) => {
  const [page, setPage] = useState(0);
  const windowSize = useWindowResize();
  const [changePassword, setChangePassword] = useState(false);

  const observer = useResizeObserver<HTMLDivElement>();
  const tabObserver = useResizeObserver<HTMLDivElement>();

  // New branch data
  const [showCreateBranchModal, setShowCreateBranchModal] = useState(false);
  const newBranchName = useInputForm("");
  const newBranchPhone = useInputForm("");
  const newBranchPrice = useInputForm("");
  const newBranchMapsLink = useInputForm("");
  const newBranchCapacity = useInputForm("1");
  const newBranchDescription = useInputForm("");
  const newBranchOpeningTimeHour = useInputForm("00");
  const newBranchClosingTimeHour = useInputForm("24");
  const newBranchOpeningTimeMinute = useInputForm("00");
  const newBranchClosingTimeMinute = useInputForm("00");
  const newBranchAverageReserveTimeHours = useInputForm("00");
  const newBranchAverageReserveTimeMinutes = useInputForm("00");
  const newBranchType = useInputForm<OptionObject<string | null>>({
    label: "",
    value: null,
  });
  const newBranchLocation = useInputForm<OptionObject<string | null>>({
    label: "",
    value: null,
  });

  // Get the theme from the provider
  const { isDarkMode } = useThemeProvider();
  const PageWrapper = useMemo(
    () =>
      windowSize.resolutionType === "desktop" ? BasicPage : BasicMobilePage,
    [windowSize.resolutionType]
  );

  useEffect(() => {
    if (observer.ref.current) {
      observer.ref.current.scrollLeft = page * observer.width;
    }
  }, [observer.width, page]);

  useEffect(() => {
    password.setValue("");
    newPassword.setValue("");
  }, [changePassword]);

  useEffect(() => {
    // Retrieve image
  });

  const [showUploadProfilePictureModal, setshowUploadProfilePictureModal] =
    useState(false);

  const onProfilePictureEditClick = () => {
    setshowUploadProfilePictureModal(true);
  };

  const [currentProfilePicture, setCurrentProfilePicture] =
    useState(profilePicture);
  const [headerProps, setHeaderProps] = useState<HeaderProps>(header);

  headerProps.dark = isDarkMode;

  const onProfilePictureChange = (value: string) => {
    setCurrentProfilePicture(value);
    setshowUploadProfilePictureModal(false);
    onSaveProfilePicture(value);
    setHeaderProps({ ...headerProps, picture: value });
  };
  const asterisk = (
    <Text color="red" type="h6" weight="400">
      &nbsp;&nbsp;&nbsp;*&nbsp;
    </Text>
  );

  return (
    <PageWrapper headerArgs={headerProps}>
      <Box width="100%" className={styles["business-profile--container"]}>
        <BusinessHeader
          mainImage={mainImage}
          profilePicture={currentProfilePicture}
          name={name.value}
          email={email.value}
          onCreateBranch={() => setShowCreateBranchModal(true)}
          onPictureClick={onPictureClick}
          onPicturePencilClick={onProfilePictureEditClick}
        />

        <Box
          innerRef={tabObserver.ref}
          className={styles["business-profile--nav-tab"]}
        >
          <InputTab
            index={page}
            setIndex={setPage}
            tabs={["Cuenta", "Local"]}
          />
        </Box>

        <Box
          className={styles["business-profile--content-container"]}
          innerRef={observer.ref}
        >
          <Box
            width={`${3 * tabObserver.width}px`}
            className={styles["business-profile--content"]}
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
              />
            </Box>
            <Box width="12px" />

            <Box width={`${tabObserver.width - 10}px`}>
              <Text
                type={windowSize.resolutionType === "desktop" ? "h3" : "h4"}
                weight="700"
              >
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

        <Modal
          open={showUploadProfilePictureModal}
          setOpen={setshowUploadProfilePictureModal}
        >
          <UploadProfilePictureForm
            onSave={onProfilePictureChange}
            upload={uploadProfilePicture}
          />
        </Modal>

        <Modal open={showCreateBranchModal} setOpen={setShowCreateBranchModal}>
          <Box className={styles["business-profile--modal-container"]}>
            <Box style={{ marginBottom: "32px" }}>
              <Text type="h3" weight="700">
                Crear local
              </Text>
              <Text type="h6" weight="400">
                {" "}
                Completa los datos para crear un nuevo local{" "}
              </Text>
            </Box>

            <Box>
              <InputText
                required
                width="100%"
                label="Nombre"
                inputHook={newBranchName}
                placeholder="Mi Nuevo Local"
              />
            </Box>

            <Box className={styles["business-profile--two-column-row"]}>
              <InputText
                required
                label="Capacidad"
                type="naturalNumber"
                inputHook={newBranchCapacity}
              />

              <Box>
                <Box className={styles["business-profile--label"]}>
                  {asterisk}
                  <Text type="h6" weight="400">
                    Tiempo promedio de reserva
                  </Text>
                </Box>
                <InputTime
                  type="duration"
                  hoursInputHook={newBranchAverageReserveTimeHours}
                  minutesInputHook={newBranchAverageReserveTimeMinutes}
                />
              </Box>
            </Box>

            <Box className={styles["business-profile--two-column-row"]}>
              <Box style={{ zIndex: 3 }}>
                <InputSelect
                  required
                  label="Tipo"
                  inputHook={newBranchType}
                  options={branchTypeOptions}
                />
              </Box>

              <Box>
                <InputText
                  required
                  type="noNegativeNumber"
                  inputHook={newBranchPrice}
                  label="Coste por persona ($)"
                />
              </Box>
            </Box>

            <Box className={styles["business-profile--two-column-row"]}>
              <Box>
                <Box className={styles["business-profile--label"]}>
                  {asterisk}
                  <Text type="h6" weight="400">
                    {" "}
                    Hora de apertura{" "}
                  </Text>
                </Box>
                <InputTime
                  type="localtime"
                  hoursInputHook={newBranchOpeningTimeHour}
                  minutesInputHook={newBranchOpeningTimeMinute}
                />
              </Box>

              <Box>
                <Box className={styles["business-profile--label"]}>
                  {asterisk}
                  <Text type="h6" weight="400">
                    {" "}
                    Hora de cierre{" "}
                  </Text>
                </Box>
                <InputTime
                  type="localtime"
                  hoursInputHook={newBranchClosingTimeHour}
                  minutesInputHook={newBranchClosingTimeMinute}
                />
              </Box>
            </Box>

            <Box className={styles["business-profile--two-column-row"]}>
              <Box>
                <InputText
                  required
                  type="phoneNumber"
                  inputHook={newBranchPhone}
                  label="Número de teléfono"
                  placeholder="+58 4240000000 | 04240000000"
                />
              </Box>

              <Box style={{ zIndex: 3 }}>
                <InputSelect
                  required
                  width="100%"
                  label="Ubicación"
                  inputHook={newBranchLocation}
                  options={branchLocationOptions}
                />
              </Box>
            </Box>

            <Box style={{ marginBottom: "24px" }}>
              <InputLongText
                minRows={6}
                maxRows={6}
                width="100%"
                height="100%"
                maxLength={480}
                label="Descripción"
                placeholder="Escribe una descripción para tu local"
                value={newBranchDescription.value}
                setValue={newBranchDescription.setValue}
              />
            </Box>

            <Box
              className={styles["business-profile--precise-location-container"]}
            >
              <InputText
                width="100%"
                showError={false}
                label="Ubicación en Google Maps"
                inputHook={newBranchMapsLink}
                placeholder="https://www.google.com/maps/place/Caracas,+Capital+District/data=!4m2!3m1!1s0x8c2a58adcd824807:0x93dd2eae0a998483?sa=X&ved=2ahUKEwjBkcHWrI__AhVvRzABHY_VCfIQ8gF6BAgIEAI&hl=es-419"
              />
              <Text type="h6" weight="400" color="#6C6C6C">
                Esta ubicación debe ser un enlace de Google Maps. Este se usará
                para mostrar la ubicación del local en la aplicación.
              </Text>
            </Box>

            <Box className={styles["business-profile--modal-buttons"]}>
              <Button
                fullWidth
                size="large"
                onClick={() => setShowCreateBranchModal(false)}
              >
                <Box
                  className={styles["business-profile--button-create-branch"]}
                >
                  <Text weight="600">Cancelar</Text>
                </Box>
              </Button>
              <Button
                fullWidth
                primary
                size="large"
                onClick={() =>
                  onCreateBranch(
                    newBranchName,
                    newBranchPhone,
                    newBranchPrice,
                    newBranchType,
                    newBranchCapacity,
                    newBranchLocation,
                    newBranchAverageReserveTimeHours,
                    newBranchAverageReserveTimeMinutes,
                    newBranchOpeningTimeHour,
                    newBranchOpeningTimeMinute,
                    newBranchClosingTimeHour,
                    newBranchClosingTimeMinute,
                    newBranchDescription,
                    newBranchMapsLink
                  )
                }
              >
                <Box
                  className={styles["business-profile--button-create-branch"]}
                >
                  <Text weight="600">Crear</Text>
                </Box>
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </PageWrapper>
  );
};
