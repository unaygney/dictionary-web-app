import React from "react";
import Header from "./Header";
import { useData } from "../context/ThemeContext";

function MainPage() {
  const { theme } = useData();

  return (
    <div className={`w-[100vw] h-[100vh] ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="container mx-auto max-w-[737px] px-10 md:px-0 py-10 ">
        <Header />
      </div>
    </div>
  );
}

export default MainPage;
