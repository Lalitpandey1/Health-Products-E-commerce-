import React from "react";

export const ShowCategories = ({ categories, titleStyle }) => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
                     gap-x-4 md:gap-x-6 lg:gap-x-8 
                     gap-y-8 md:gap-y-10 "
    >
      {categories.map((cat) => (
        // Product Card
        <div
          key={cat.title}
          // Set the fractional width ONLY for the desktop Flex layout
          className="flex my-1 flex-col items-center border border-[#DCDCDC] rounded-lg bg-[#F0F0F0] hover:bg-green-100"
        >
          <img
            src={cat.img}
            alt={cat.title}
            // Ensure image scales reasonably across breakpoints
            className="rounded-full w-24 sm:w-32 md:w-36 lg:w-40 max-w-full my-1"
          />
          <h2
            className={`font-medium my-1 ${titleStyle} text-black text-center mt-2`}
          >
            {cat.title}
          </h2>
        </div>
      ))}
      <div className="hidden lg:block lg:w-[23%] invisible"></div>
      <div className="hidden lg:block lg:w-[23%] invisible"></div>
    </div>
  );
};
