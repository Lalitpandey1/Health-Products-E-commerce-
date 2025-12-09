import React from "react";
import { addItem } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Heart } from "lucide-react"; // Assuming you still use lucide-react for the Heart icon
import Star from "../star/Star";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  images,
  title,
  rating,
  discount,
  Price,
  totalPrice,
  bestSeller,
  AddtoCart,
}) => {
  const maxTitleString = 50;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (id) => {
    console.log("clicked");
    navigate(`/products/${id}`);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addItem(id));
  };

  return (
    // Add 'relative' to the parent container
    <div
      className="relative flex flex-col items-center justify-center px-3 md:px-8 xl:px-9 border border-[#DCDCDC] hover:border-[#E0E0E0] bg-[#F0F0F0] hover:bg-green-100  rounded-2xl shadow-lg mx-auto  "
      onClick={() => handleNavigate(id)}
    >
      {/* BESTSELLER Tag - Adjusted for positioning */}
      {bestSeller && (
        <h2 className="invisible lg:visible self-start font-medium text-[#38CB89] py-1 px-2 z-10">
          BestSeller
        </h2>
      )}

      {/* 50% Discount Badge - positioned relative to the parent div */}
      <span className="xl:text-[10px] lg:text-[9px] md:text-[10px] m2:text-[10px] m3:text-[6px] text-[5px] text-white px-0.5 py-1 rounded-full bg-red-600 absolute xl:left-10 md:left-7 m1:left-7 m3:left-5  top-10 z-20  invisible m3:visible">
        {/* Higher z-index for visibility */}
        {discount}
      </span>

      {/* Heart Icon - positioned relative to the parent div */}
      <Heart
        className="absolute xl:right-[13%] lg:top-3 md:right-6 top-4 right-3  lg:w-6 lg:h-6 w-5 h-5 border border-gray-300 bg-white p-0.5 rounded-full z-20 text-gray-700" // Adjusted colors/styles
      />

      {/* Product Image - No need for relative or z-index here if it's the main content */}
      {/* The image should not have relative position or z-index on it as it's not absolutely positioned itself */}

      <img
        src={images && images.length > 0 ? images[0] : category6}
        alt="title"
        className=" py-1 max-w-full max-h-[200px] "
      />

      {AddtoCart && (
        <button
          onClick={handleAddToCart}
          className="md:py-1.5 py-1 px-2 md:px-4 my-1 text-[5px] m2:text-xs rounded-2xl bg-green-400 text-white font-semibold hover:bg-green-500 transition-colors"
        >
          Add to Cart
        </button>
      )}

      {/* Rating and Title */}
      <div className="flex flex-col  m1:ml-2 w-full justify-start">
        <Star stars={rating} />

        {/* Title */}
        <h2 className="text-left text-ellipsis font-medium text-black xl:text-[14px] md:text-[10px] text-[8px]">
          {String(title).length > maxTitleString
            ? title.substring(0, maxTitleString) + "..."
            : title}
        </h2>
      </div>
      {/* Pricing */}
      <div className="flex flex-col gap-1 self-start text-[10px] md:text-xs">
        <span className="text-[#38CB89] font-semibold">{Price}</span>
        <span className="text-[#CB4138] font-semibold">
          ₹<span className="line-through">{totalPrice}</span>
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
