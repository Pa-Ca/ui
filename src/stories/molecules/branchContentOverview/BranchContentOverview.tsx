import React, { ChangeEvent, useState } from "react";
import { Box } from "../../atoms/box/Box";
import { Text } from "../../atoms/text/Text";
import { Editable } from "../editable/Editable";
import { TextareaAutosize } from "@mui/material";
import styles from "./branchContentOverview.module.scss";
import textStyles from "../../atoms/text/text.module.scss";

interface BranchContentOverviewProps {
  /**
   * Branch overview
   */
  overview: string;
  /**
   * Indicates if the data is editable
   */
  editable?: boolean;
  /**
   * On save editions
   */
  onSave?: (overview: string) => void;
  /**
   * Component width
   */
  width?: string;
  /**
   * Component height
   */
  height?: string;
  /**
   * Component main color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const BranchContentOverview = ({
  overview,
  editable = false,
  onSave = () => {},
  width,
  height,
  color,
  ...props
}: BranchContentOverviewProps) => {
  const [edit, setEdit] = useState(false);
  const [overviewBackup, setOverviewBackup] = useState(overview);
  const [currentOverview, setCurrentOverview] = useState(overview);

  const setEditMode = () => {
    setOverviewBackup(currentOverview);
    setEdit(true);
  };

  const saveEdits = () => {
    setEdit(false);
    onSave(currentOverview);
  };

  const cancelEdits = () => {
    setCurrentOverview(overviewBackup);
    setEdit(false);
  };

  const changeOverview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentOverview(event.target.value);
  };

  return (
    <Box
      className={styles["branch-content-overview--container"]}
      style={{ width, height }}
    >
      <Box className={styles["branch-content-overview--header"]}>
        <Text type="h5" color="#112211" weight="700">
          {" "}
          Overview{" "}
        </Text>
        <Editable
          editable={editable}
          edit={edit}
          onPencilClick={setEditMode}
          onCancelClick={cancelEdits}
          onSaveClick={saveEdits}
        />
      </Box>

      <Box height="16px" />

      {edit ? (
        <TextareaAutosize
          value={currentOverview}
          onChange={changeOverview}
          style={{ width: "100%", opacity: "0.75", lineHeight: "20px" }}
          className={textStyles["text"]}
        />
      ) : (
        <Text
          color="#112211"
          opacity={0.75}
          className={styles["branch-content-overview--overview"]}
        >
          {currentOverview}
        </Text>
      )}
    </Box>
  );
};
