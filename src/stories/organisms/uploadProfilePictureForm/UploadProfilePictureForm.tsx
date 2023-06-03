import React, { useState, useRef } from "react";
import CustomAvatar from "./customAvatar";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import styles from "./uploadProfilePictureForm.module.scss";

export interface UploadProfilePictureFormProps {
  /**
   * Component main color
   * @default #EF7A08
   * */
  color?: string;

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
  color = "#EF7A08",
  onSave,
  upload,
}: UploadProfilePictureFormProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAvatar, setShowAvatar] = useState<boolean>(true);

  const onCrop = (preview: string): void => {
    setPreview(preview);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSaveClick = async () => {
    if (onSave && upload && file && preview) {
      onSave(preview);

      const res = await upload(file);

      if (res && !res.isError) {
        onSave(res.data)
      }
    }

    // Ejecutar upload y luego onsave
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (typeof reader.result === "string") {
          setSrc(reader.result);
          if (event.target.files) setFile(event.target.files[0]);
        }
      });
      reader.readAsDataURL(event.target.files[0]);
    }
    setShowAvatar(true);
  };

  return (
    <Box
      className={styles["upload-profile-picture-form--container"]}
      backgroundColor="white"
    >
      {showAvatar && src ? (
        <Box className={styles["upload-profile-picture-form--crop-canvas-container"]}>
          <CustomAvatar
          width={500}
          height={500}
          onCrop={onCrop}
          shadingColor="rgba(0, 0, 0, 0.2)"
          src={src}
          />
        </Box>
      ) : (
        <Box className={styles["upload-profile-picture-form--placeholder-box"]}>
          <Text>Sube una imagen</Text>
        </Box>
      )}

      <Box className={styles["upload-profile-picture-form--button-rack"]}>
        <Button backgroundColor={color} onClick={handleUploadClick}>
          <Text type="h6" weight="600">
            Subir una Imagen
          </Text>
        </Button>

        <Button backgroundColor={color} onClick={handleSaveClick}>
          <Text type="h6" weight="600">
            Guardar Cambios
          </Text>
        </Button>
      </Box>
      <input
        width={0}
        height={0}
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Box>
  );
};
