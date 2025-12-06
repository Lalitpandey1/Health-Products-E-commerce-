import React from "react";
import ComponentContainer from "../containers/ComponentContainer";
import Navbar from "../components/navbar/Navbar";
import OfferSlider from "../components/offerSlider/OfferSlider";
import ProductCategories from "../components/shopCategories/ProductCategories";
import ProductCarousel from "../components/productCarousel/ProductCarousel";
import LimitedOffer from "../components/limitedOffer/LimitedOffer";
import ContactTab from "../components/contactTab/ContactTab";
import Footer from "../components/footer/Footer";
import { selectProductLookup } from "../store/slices/productSlice";
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
    </div>
  );
};

export default HomePage;
