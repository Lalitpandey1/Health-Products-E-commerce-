import React from "react";
// Defines the custom max-widths for Div C.
// These are not breakpoints, but responsive max-width constraints.
const customWidths =
  "sm:max-w-[594px] md:max-w-[652px] lg:max-w-[904px] xl:max-w-[1200px]";

// Custom breakpoint values for readability.
// Note: We use the arbitrary syntax for these since we cannot edit tailwind.config.js.
const M1_PX = "576px"; // 36rem
const M3_PX = "368px"; // 23rem (The effective BASE for the 23px gap)

const ComponentContainer = ({ children }) => {
  return (
    <div
      id="container_1"
      className="w-full bg-white px-0 md:px-5 pb-2 md:pb-4 "
    >
      <div
        id="container_2"
        className={`bg-[#f8f8f8] w-full  px-[13px] m3:px-7 sm:px-[38px] lg:px-13 transition-all duration-500 ease-in-out
        
        `}
      >
        <div
          id="container_3"
          className={`
            bg-white 
            ${customWidths} 
            w-full 
            mx-auto 
            text-white text-center   rounded-xl
            max-w-[1200px]
            transition-all duration-500 ease-in-out
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentContainer;
