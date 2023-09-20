import React, { useState } from "react";
import Logo from "./Logo";
import { useData } from "../../context/ThemeContext";
function Search() {
  const { theme, search, setSearch } = useData();
  return (
    <form className="relative mt-7 md:mt-[50px]   ">
      <input
        className={`w-full h-12 md:h-16 rounded-2xl font-bold outline-[#a445ed]   px-6  ${
          theme ? "bg-[#1f1f1f] " : "bg-[#f4f4f4]"
        } `}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for any word…"
      />
      <Logo />
    </form>
  );
}

export default Search;
