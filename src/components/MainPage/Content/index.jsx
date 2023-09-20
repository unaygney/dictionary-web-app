import React from "react";

function Content() {
  return (
    <div className="mt-7 md:mt-12 flex justify-between items-center gap-2 md:gap-3">
      <div className="flex flex-col">
        <h2 className="font-bold text-[32px]">Keyboard</h2>
        <p className="text-lg text-[#A445ED] font-normal">Okunusu</p>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
        >
          <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29 27V48L50 37.5L29 27Z"
            fill="#A445ED"
          />
        </svg>
      </button>
    </div>
  );
}

export default Content;
