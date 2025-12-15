import React, { lazy, Suspense } from "react";
import ComponentContainer from "../../containers/ComponentContainer";

import Navbar from "../../components/navbar/Navbar";
import FallBack from "../../components/fallBack/FallBack";

const OfferSlider = lazy(() =>
  import("../../components/offerSlider/OfferSlider")
);

const ProductCategories = lazy(() =>
  import("../../components/shopCategories/ProductCategories")
);
const ProductCarousel = lazy(() =>
  import("../../components/productCarousel/ProductCarousel")
);
const LimitedOffer = lazy(() =>
  import("../../components/limitedOffer/LimitedOffer")
);
const ContactTab = lazy(() => import("../../components/contactTab/ContactTab"));
const Footer = lazy(() => import("../../components/footer/Footer"));

import { selectProductLookup } from "../../store/slices/productSlice";
import { useSelector } from "react-redux";

const HomePage = () => {
  const allProducts = useSelector(selectProductLookup);
  const bestSellerCategories = [
    "Health Food",
    "Proteins",
    "Gainers",
    "Pre-Workout",
    "Accessories",
    "Ayurveda",
  ];

  const supplementCategories = [
    "Oils",
    "Skins & Hairs",
    "Vitality",
    "Digestion",
    "Immunity",
    "Peanut Butter",
  ];

  //   console.log(reverseCatalog(allProducts));
  //   console.log(allProducts);

  return (
    <div>
      <ComponentContainer children={<Navbar />} />

      <Suspense fallback={<FallBack />}>
        <ComponentContainer children={<OfferSlider />} />
        <ComponentContainer children={<ProductCategories />} />
        <ComponentContainer
          children={
            <ProductCarousel
              title={"Best Seller"}
              products={allProducts}
              categories={bestSellerCategories}
              isBestSeller={true}
              isAddtoCart={true}
              showmenu={true}
            />
          }
        />

        <ComponentContainer
          children={
            <ProductCarousel
              title={"Supplements"}
              products={allProducts}
              categories={supplementCategories}
              isBestSeller={false}
              isAddtoCart={true}
              showmenu={true}
            />
          }
        />
        <ComponentContainer
          children={
            <ProductCarousel
              title={"New Launched Products"}
              products={allProducts}
              categories={supplementCategories}
              isBestSeller={false}
              isAddtoCart={false}
              showmenu={false}
            />
          }
        />

        <LimitedOffer />
        <ContactTab />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
