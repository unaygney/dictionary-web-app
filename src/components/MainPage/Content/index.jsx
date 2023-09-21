import React from "react";
import Logo from "./Logo";
import { useData } from "../../context/ThemeContext";
import Example from "./Example";

function Content() {
  const { apiData  } = useData();
  const data = apiData ? apiData[0] : null;
  
  return (
    <>
      <div className="mt-7 md:mt-12 flex  justify-between items-center gap-2 md:gap-3">
        <div className="flex flex-col">
          <h2 className="font-bold text-[32px]">
            {data ? data?.word : "keyboard"}
          </h2>
          <p className="text-lg text-[#A445ED] font-normal">
            {data ? data?.phonetic : "/ˈkiːbɔːd/"}
          </p>
        </div>
        <button onClick={handlePlay}>
          <Logo />
        </button>
      </div>
<Example  data={data} />
    </>
  );
}

export default Content;
