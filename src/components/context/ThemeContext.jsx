import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const DataContext = createContext();

const DataContextProvider = ({ children, data }) => {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme === "true";

  const [theme, setTheme] = useState(initialTheme);
  const [font, setFont] = useState("sans-serif");
  const [search, setSearch] = useState("example");
  const [apiData, setApiData] = useState();

  const getData = (e) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .then(() => {
        setSearch("");
      })

      .catch((error) => {
        console.error("Veri çekerken hata olustu:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

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
    [theme, font, search, apiData]
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
