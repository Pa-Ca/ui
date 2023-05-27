import { useEffect, useState } from "react";

/**
 * Window Resize interface
 */
export interface WindowResizeHook {
  /**
   * Current windows width
   */
  width: number;
  /**
   * Current windows height
   */
  height: number;
  /**
   * Resolution type
   */
  resolutionType: "desktop" | "mobile" | "mobile rotated" | "tablet";
}

/**
 * Hook to control the state of the inputs of the forms
 */
export default (): WindowResizeHook => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [resolutionType, setResolutionType] =
    useState<WindowResizeHook["resolutionType"]>("desktop");
  
  const verifyResolution = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    if (window.innerWidth <= 430) {
      setResolutionType("mobile");
    } else if (window.innerHeight <= 430) {
      setResolutionType("mobile rotated");
    } else if (window.innerWidth < 1290) {
      setResolutionType("tablet");
    } else {
      setResolutionType("desktop");
    }
  }

  useEffect(() => {
    verifyResolution();
  }, []);

  window.addEventListener("resize", () => {
    verifyResolution();
  });

  return {
    width,
    height,
    resolutionType,
  };
};
