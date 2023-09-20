import React from "react";
import Header from "./Header";
import { useData } from "../context/ThemeContext";

function MainPage() {
const {theme} = useData()
console.log(theme)
  return (

      <div className={`w-full h-[100vh] container mx-auto max-w-[737px] px-10 md:px-0 py-10 ${theme ? "bg-dark" : "bg-light"}`}>
        <Header />
      </div>

  );
}

export default MainPage;
