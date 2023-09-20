import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  //   useEffect(() => {
  //     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch(error => {
  //         console.error('Veri çekerken hata olustu:' , error)
  //       })
  //   }, []);

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("There is no context provider");
  }

  return context;
}

export { useData, DataContextProvider };
