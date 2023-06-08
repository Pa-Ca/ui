import React, { useEffect, useState } from "react";

interface ThemeProviderProps {
  /**
   * Indicates if the dark mode is enabled
   */
  isDarkMode: boolean;
}

/**
 *  Ussage:
 *  Inside the child component, get the value of the hook
 *  (dark mode in our case) by using the following code:
 *  `const { isDarkMode } = useThemeProvider();`
 *
 *  Remeber you must import the hook first at the top of the file:
 *  `import useThemeProvider from './useThemeProvider';`
 */
export default (): ThemeProviderProps => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Check for dark mode changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, []);

  return { isDarkMode };
};
