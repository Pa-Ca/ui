import React from 'react';

interface ThemeContextValue {
  isDarkMode: boolean;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  isDarkMode: false,
});

interface ThemeProviderProps {
  /**
   * Children to be rendered
   */
  children: React.ReactNode;
}

/**
   *  Ussage:
   *  Inside the child component, get the value of the context 
   *  (dark mode in our case) by using the following code:
   *  `const { isDarkMode } = React.useContext(ThemeContext);
   *  `
   * 
   *  Remeber you must import the context first at the top of the file:
   *  `import { ThemeContext } from './themeProvider';`
   */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
   
  const [isDarkMode, setIsDarkMode] = React.useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  // Check for dark mode changes
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};