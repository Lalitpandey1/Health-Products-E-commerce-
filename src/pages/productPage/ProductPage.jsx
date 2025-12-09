import React, { lazy, Suspense } from "react";
import Navbar from "../../components/navbar/Navbar";
import Star from "../../components/star/Star";

const ImageContainer = lazy(() => import("./ImageContainer"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const ProductCarousel = lazy(() =>
  import("../../components/productCarousel/ProductCarousel")
);
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../store/slices/cartSlice";
import { selectProductLookup } from "../../store/slices/productSlice";
import { useParams } from "react-router-dom";
import FallBack from "../../components/fallBack/FallBack";

const ProductPage = ({ id }) => {
  const allProducts = useSelector(selectProductLookup);
  const bestSellerCategories = [
    "Health Food",
    "Proteins",
    "Gainers",
    "Pre-Workout",
    "Accessories",
    "Ayurveda",
  ];

  let params = useParams();
  id = id || params.id;
  window.scroll(0, 0);
  const productLookup = useSelector(selectProductLookup);
  const productData = productLookup[id];
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addItem(id));
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="bg-[#ffff] flex flex-col gap-4 my-5 lg:flex-row ">
        <div className="xl:w-[60%] lg:h-140 w-full  overflow-hidden">
          <Suspense fallback={<FallBack />}>
            <ImageContainer productId={id || "A001"} />
          </Suspense>
        </div>

        <div className="pl-3 xl:w-[40%] text-black w-full bg-[#F0F0F0] rounded-2xl justify-items-start">
          {/* Title */}
          <h1 className="text-2xl my-5 text-left font-semibold">
            {productData.title}
          </h1>

          {/* Rating */}
          <div className="flex gap-1 my-3 items-center">
            <p className="text-xs text-[#38CB89]">4.5</p>
            <Star stars={productData.rating} />
          </div>

          {/* Price */}
          <div className="flex my-10 flex-col">
            <div className="flex my-5 gap-3">
              <p className="text-lg font-normal text-red-600">
                {productData.discount}
              </p>{" "}
              {/*discount*/}
              <p className="text-xl font-semibold">{productData.Price}</p>{" "}
              {/*Price*/}
            </div>
            <p className="line-through text-left font-normal text-red-600">
              {productData.totalPrice}
            </p>{" "}
            {/*totalPrice*/}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => handleAddtoCart()}
            className="bg-[#38CB89] mx-auto my-10 px-2.5 rounded-xl font-semibold py-1 text-white text-xl"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-[#F0F0F0] rounded-xl my-5 px-3">
        {/* Product description */}
        <p className="max-w-[20rem] my-3 pl-3 text-left font-semibold text-shadow-md text-gray-700 text-xl">
          Product descriptions
        </p>
        <p className="max-w-[30rem] pl-5 text-left text-gray-900">
          {productData.descriptions}
        </p>
      </div>
      <div className="my-7"></div>
      <Suspense fallback={<FallBack />}>
        <ProductCarousel
          title={"Best Sellers"}
          categories={bestSellerCategories}
          isAddtoCart={true}
          isBestSeller={false}
          products={allProducts}
          showmenu={false}
        />

        <Footer />
      </Suspense>
    </div>
  );
};

export default ProductPage;
