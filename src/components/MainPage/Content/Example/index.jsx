import React from "react";

function Example({ data  }) {
  console.log(data);
  return (
    <>
      <div className="mt-10">
        <div>
         <div className="flex items-center gap-4">
            <h4 className=" italic font-bold text-2xl lowercase">Noun</h4>
            <span className={`w-full h-[1px] bg-[#3a3a3a] `}></span>
         </div>
          <h5>Meaning</h5>
          <ul>
            <li>Example1</li>
            <li>Example2</li>
            <li>Example3</li>
          </ul>
        </div>

        <div>
          <h4>verb</h4>
          <h5>Meaning</h5>
          <ul>
            <li>Example1</li>
            <li>Example2</li>
            <li>Example3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Example;
