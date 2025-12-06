import React from "react";
import allCategories from "../../services/allCategories";
import { ShowCategories } from "./ShowCategories";

const ProductCategories = () => {
  const categories = allCategories;
  const titleStyle =
    "text-[6px] xsm:text-[10px] m2:text-4 md:text-sm xl:text-4";
  return (
    <div className="flex flex-col">
      {/* Heading - Adjusted ml-2 to pl-2 for alignment consistency */}
      <div className="flex gap-2 pl-2 items-center xl:pb-6 sm:pb-4 pb-3">
        <p className="text-xl font-bold text-green-500 pb-1">|</p>
        <p className="text-black text-[12px] xl:text-[25px] sm:text-[20px] font-medium">
          Shop by Categories
        </p>
      </div>

      <div className="px-2">
        {" "}
        {/* Added slight horizontal padding for mobile containment */}
        <ShowCategories titleStyle={titleStyle} categories={categories} />
      </div>
    </div>
  );
};

export default ProductCategories;
