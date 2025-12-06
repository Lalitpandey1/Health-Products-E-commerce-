import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProductLookup } from "../../store/slices/productSlice";

const ImageContainer = ({ productId }) => {
  const [selectImage, setSelectImage] = useState();
  const productLookup = useSelector(selectProductLookup);
  const productData = productLookup[productId];
  const handleImage = (selected) => {
    setSelectImage(selected);
  };

  const productImage = productData.images;

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full gap-1 h-full bg-primary">
      {/* Image Bar */}
      <div className="h-full flex flex-row lg:flex-col  items-center min-w-20 lg:w-35 my-3">
        <div className="flex-1 lg:h-full w-full justify-center items-center flex flex-row lg:flex-col rounded-2xl  m3:gap-1 m2:gap-3 m1:gap-6 lg:gap-2  bg-[#F0F0F0]  overflow-scroll scrollbar-hide">
          {productImage.map((item, index) => {
            return (
              <img
                onClick={() => handleImage(item)}
                key={index}
                src={item}
                alt={`product image ${index + 1}`}
                // CHANGE 2: Add 'shrink-0' and fixed 'h-20' (or any height you want)
                className="border m3:w-14 m1:w-18 lg:max-w-15 h-20 shrink-0 object-cover border-[#38CB89] rounded-lg cursor-pointer hover:opacity-80"
              />
            );
          })}
        </div>
      </div>

      {/* Selected Image */}
      <div className="flex items-center rounded-3xl mx-auto">
        <img
          className="max-h-140 m2:max-w-100 m3:max-w-60 lg:max-w-85 xl:max-w-135 rounded-xl object-cover self-center"
          src={selectImage || productImage[0]}
          alt="Selected product"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
