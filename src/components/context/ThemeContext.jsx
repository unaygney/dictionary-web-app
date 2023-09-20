import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const DataContext = createContext();

const DataContextProvider = ({ children, data }) => {
  const [theme, setTheme] = useState(false);
  const [font, setFont] = useState("Sans-Serif");
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState('');

  const getData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Veri çekerken hata olustu:", error);
      });
  };



  const contextData = useMemo(
    () => ({
      theme,
      apiData,
      setTheme,
      font,
      setFont,
      setSearch,
      search,
      getData,
    }),
    [theme, font, search  ]
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
