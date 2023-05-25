import React, { useState, useRef } from 'react';
import './uploadProfilePictureForm.scss';
import Avatar from 'react-avatar-edit';
import { Box } from '../../atoms/box/Box';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';

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
 }

export const UploadProfilePictureForm = ({ 
  color = '#EF7A08',
  onSave,
}: UploadProfilePictureFormProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAvatar, setShowAvatar] = useState<boolean>(true);

  const onClose = (): void => {
    setShowAvatar(false);
    setSrc(undefined);
  };

  const onCrop = (preview: string): void => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem: React.ChangeEvent<HTMLInputElement>): void => {
    if (elem.target.files && elem.target.files[0].size > 10 * 1000 * 1000) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSaveClick = () => {
    if (onSave && preview) {
      onSave(preview);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (typeof reader.result === 'string') {
          setSrc(reader.result);
        }
      });
      reader.readAsDataURL(event.target.files[0]);
    }
    setShowAvatar(true);
  };

  return (
    <Box className="upload-profile-picture-form--container"  backgroundColor='white'>

      {(showAvatar && src) ? (
        <Box className="upload-profile-picture-form--crop-canvas-container">
          <Avatar
            width={300}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            shadingColor="rgba(0, 0, 0, 0.5)"
            onBeforeFileLoad={onBeforeFileLoad}
            src={src}
          />
        </Box>
      ) : (
        <Box className='upload-profile-picture-form--placeholder-box'>
          <Text >
          Sube una imagen
          </Text>
        </Box>
      )}
      
      <Box className='upload-profile-picture-form--button-rack'>
        
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
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

    </Box>
  );
};
