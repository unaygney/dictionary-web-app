import React from "react";
import { ThemeContextProvider } from "../context/ThemeContext";
import Header from "./Header";

function MainPage() {
  return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
}

export default MainPage;
