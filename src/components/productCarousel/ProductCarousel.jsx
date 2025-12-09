import React, { Suspense, useState } from "react";
// import data from "../../assets/BestSellerData.jsx";
import ProductCardComponent from "../productCard/ProductCard";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FallBack from "../fallBack/FallBack";

const ProductCarousel = ({
  title,
  categories,
  products,
  isBestSeller,
  isAddtoCart,
  showmenu,
}) => {
  const data = [...Object.values(products)];
  const subCategories = categories;
  const [activeCategory, setActiveCategory] = useState(subCategories[0]); // Set the first category as default
  // try1.map((item) => console.log(item));
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-0 py-2 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-green-500  hover:text-green-600  hover:bg-white"
        onClick={onClick}
      >
        <ChevronRight size={18} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-0 py-2 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-green-500  hover:text-green-600  hover:bg-white"
        onClick={onClick}
      >
        <ChevronLeft size={18} />
      </div>
    );
  };

  const customPaging = (i) => (
    // Removed 'absolute left-52'
    <div>
      <div className="w-3 h-3 mx-1 bg-gray-400 rounded-full hover:bg-green-400 transition-colors"></div>
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: customPaging,
    // 👇 ADDITION OF THE RESPONSIVE ARRAY
    responsive: [
      {
        // 1. md to lg (Viewport size up to 1024px)
        breakpoint: 1280, // Applies to screens up to 1024px wide (md to lg)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        // 2. 0 to md (Viewport size up to 768px)
        breakpoint: 1024, // Applies to screens up to 768px wide (0 to md)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        // Optional: Smallest screens (e.g., mobile)
        breakpoint: 768, // Applies to screens up to 480px wide
        settings: {
          slidesToShow: 2, // Showing 1.5 slides is often better for mobile UX
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden m1:flex w-full relative px-2  m3:px-6 flex-col gap-1 rounded-lg bg-[#ffff]">
        <div className="">
          {/* title */}
          <div className="flex ml-2 gap-2 items-center">
            <span className="text-green-300 text-xl font-semibold">|</span>
            <span className="font-semibold text-black  md:text-lg text-sm">
              {title}
            </span>
          </div>

          {/* Menu */}
          <div className="flex flex-nowrap text-black mt-2 mb-1 text-[13px] gap-2  ">
            {showmenu &&
              subCategories.map((category) => (
                <span
                  key={category}
                  className={`whitespace-nowrap cursor-pointer transition-colors duration-200 
                  ${
                    activeCategory === category
                      ? "text-green-500 font-bold" // Active style: green and bold
                      : "text-black hover:text-green-400" // Inactive style: black, hover effect
                  }`}
                  onClick={() => setActiveCategory(category)}
                  // Pass the category to the handler
                >
                  {category}
                </span>
              ))}
          </div>
        </div>
        <Suspense fallback={<FallBack />}>
          <Slider {...settings}>
            {data.map((data) => (
              <div key={data.id} className="w-full overflow-hidden">
                <ProductCardComponent
                  id={data.id}
                  images={data.images}
                  title={data.title}
                  rating={data.rating}
                  discount={data.discount}
                  totalPrice={data.totalPrice}
                  Price={data.Price}
                  bestSeller={isBestSeller}
                  AddtoCart={isAddtoCart}
                />
              </div>
            ))}
          </Slider>
        </Suspense>
      </div>

      {/* Mobile Screen Component */}
      <div className="w-full m1:hidden bg-[#ffff] rounded-lg">
        {/* Title, Menu, More_Buttom */}
        <div className="">
          {/* title */}
          <div className="flex ml-2 gap-2 items-center">
            <span className="text-green-300 text-xl font-semibold">|</span>
            <span className="font-semibold text-black md:text-lg text-sm">
              {title}
            </span>
            <button className="ml-auto bg-[#38CB89] rounded-full">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-nowrap my-1 ml-2 text-black text-[13px] gap-2 overflow-scroll scrollbar-hide">
            {subCategories.map((category) => (
              <span
                key={category}
                className={`whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  activeCategory === category
                    ? "text-green-500 font-bold" // Active style: green and bold
                    : "text-black hover:text-green-400" // Inactive style: black, hover effect
                }`}
                onClick={() => handleSubCategory(category)} // Pass the category to the handler
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Products Card */}
        <div className="grid grid-cols-1 m3:grid-cols-2 gap-x-5 my-4 gap-y-8 px-3">
          {data.slice(0, 4).map((data) => (
            <div key={data.id} className="w-full overflow-hidden ">
              <ProductCardComponent
                id={data.id}
                images={data.images}
                title={data.title}
                rating={data.rating}
                discount={data.discount}
                totalPrice={data.totalPrice}
                Price={data.Price}
                bestSeller={false}
                AddtoCart={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
