import React from "react";
import "./inputLongText.scss";
import { TextareaAutosize } from '@mui/material';
import { Box } from "../../atoms/box/Box";

interface InputLongTextProps {
  /**
   * Input value
   */
  value?: string;
  /**
   * Input width
   * @default 100%
    */
  width?: string;
  /**
   * Input height
   * @default 100%
   */
  height?: string;
  /**
   * Minimum number of rows
   * */
  minRows?: number;
  /**
   * Maximum number of rows. Leave undefined for no limit
  */
  maxRows?:  number;
  /**
   * Function that changes the value each time the input is updated
   * (It is only visual!, the user can still write more lines but a scrollbar will appear)
   * To limit the number of characters, use the maxLength prop
   */
  setValue?: Function;
  /**
   * Maximum number of characters
   * @default 800
   */
  maxLength?: number;
  


}

export const InputLongText = ({
  value,
  setValue = () => {},
  minRows = undefined,
  maxRows = undefined,
  width = "100%",
  height = "100%",
  maxLength = 800,
  ...props
}: InputLongTextProps) => {
  

return (
  <Box className='input-long-text-container'  style={ {width, height}}{...props}>


    <TextareaAutosize
      value={value}
      onChange={(event) => { setValue(event.target.value);}}
      style={{ opacity: "0.75", lineHeight: "20px" }}
      className="input-long-text"
      hidden={true}
      minRows={minRows}
      maxRows={maxRows}
      maxLength={maxLength}    />

  </Box>
)
}
