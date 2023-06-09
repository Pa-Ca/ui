import React, { useState, useRef } from "react";
import CustomAvatar from "./customAvatar";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./uploadProfilePictureForm.module.scss";

export interface UploadProfilePictureFormProps {
  /**
   * onSave function (The function is executed when clicking on the save button)
   * */
  onSave?: (fileSrc: string) => void;

  /**
   * upload function executed after save
  */
  upload?: (file: File) => any;
}

export const UploadProfilePictureForm = ({
  onSave,
  upload,
}: UploadProfilePictureFormProps) => {
  // State for preview image
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // State for image source
  const [src, setSrc] = useState<string | undefined>(undefined);

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State for showing avatar
  const [showAvatar, setShowAvatar] = useState<boolean>(true);

  // Function to handle cropping of image
  const onCrop = (preview: string): void => {
    setPreview(preview);
  };

  // Function to handle click on upload button
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle click on save button
  const handleSaveClick = async () => {
    if (onSave && upload && file && preview) {
      onSave(preview);
      const res = await upload(file);
      if (res && !res.isError) {
        onSave(res.data)
      }
    }
  };

  // Function to handle change in file input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Check if the file is an image (only jpg and png are allowed)
      if (!file.type.match(/image\/(jpeg|png)/)) {
        alert("Only JPG and PNG images are allowed.");
        return;
      }
      // Check if the file size is less than 10MB
      if (file.size > 10 * 1024 * 1024) {
        alert("File size should be less than 10MB.");
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (typeof reader.result === "string") {
          setSrc(reader.result);
          if (event.target.files) setFile(event.target.files[0]);
        }
      });
      reader.readAsDataURL(file);
      setShowAvatar(true);
    }
  };

  return (
    <Box className={styles["upload-profile-picture-form--container"]}>
      {showAvatar && src ? (
        <Box className={styles["upload-profile-picture-form--crop-canvas-container"]}>
          <CustomAvatar width={500} height={500} onCrop={onCrop} shadingColor="rgba(0,0,0,0.2)" src={src} />
        </Box>
      ) : (
        <Box className={styles["upload-profile-picture-form--placeholder-box"]}>
          <Text>Sube una imagen</Text>
        </Box>
      )}

      <Box className={styles["upload-profile-picture-form--button-rack"]}>
        <Button onClick={handleUploadClick}>
          <Text type="h6" weight="600" primaryButtonStyle>Subir una Imagen</Text>
        </Button>

        <Button onClick={handleSaveClick}>
          <Text type="h6" weight="600" primaryButtonStyle>Guardar Cambios</Text>
        </Button>
      </Box>
      <input type="file" 
            accept="image/jpeg,image/png" 
            ref={fileInputRef} 
            style={{ display: "none" }} 
            onChange={handleFileChange} />
    </Box>
  );
}; 