import React from "react";
import { useData } from "../context/ThemeContext";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";

function MainPage() {
  const { theme } = useData();

  return (


    <div className={` min-h-screen ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="  container mx-auto max-w-[737px] px-10 md:px-0 py-10 ">
        <Header />
        <Search />
        <Content />
      </div>
    </div>


  );
}

export default MainPage;
