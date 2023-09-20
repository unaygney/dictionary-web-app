import React, { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children, data }) => {
  const [theme, setTheme] = useState(false);

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(){
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('There is no context provider')
    }

    return context
}

export {useTheme , ThemeContextProvider}