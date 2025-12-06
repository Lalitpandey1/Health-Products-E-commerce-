import { createSelector, createSlice } from "@reduxjs/toolkit";

export const catalog = [
  {
    id: "A001",
    title: "Avvatar Whey Protein Malai Kulfi Flavour",
    images: [
      "https://www.avvatarindia.com/images/product_images/1697552095_FOP.jpg",
      "https://www.avvatarindia.com/images/product_images/1756720772_BC.jpg",
      "https://www.avvatarindia.com/images/product_images/1756720772_BC.jpg",
      "https://www.avvatarindia.com/images/product_images/1756723496_Whey Informed Choice Certificate.jpg",
    ],
    discount: "30%",
    Price: 5289,
    Weight: "4kg",
    totalPrice: 7600,
    rating: 4.7,
    Bestcategory: "protien",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "B045",
    title: "Avvatar Whey Protein Belgian Chocolate Flavour",
    images: [
      "https://www.avvatarindia.com/images/product_images/1697547406_FOP.jpg",
      "https://www.avvatarindia.com/images/product_images/1697547406_LEFT.jpg",
      "https://www.avvatarindia.com/images/product_images/1756721126_WHEY_PROTEIN_BELGIAN_4KG_LIFESTYLE_CREATIVE_AVVATAR_28-02-25-01.jpg",
      "https://www.avvatarindia.com/images/product_images/1756723496_Whey Informed Choice Certificate.jpg",
    ],
    discount: "25%",
    Price: 5490,
    totalPrice: 6186,
    rating: 4.5,
    Bestcategory: "protien",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "C120",
    title:
      "SLOVIC Door Pull Up Bar for Home Workout (Load Capacity: 100 KG) Wall Mounted Pullup Bar",
    images: [
      "https://assets.hyugalife.com/catalog/product/6/1/614zfwjfp-l._sl1500_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/7/1/71dr4kfpgal._sl1500_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/7/1/71pml2tjfil._sl1500_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/8/1/81fnm8vo7yl._sl1500_.jpg?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "50%",
    Price: 700,
    totalPrice: 1500,
    rating: 4.9,
    Bestcategory: "accessories",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "D007",
    title: "Unflavoured - Fermented Yeast Protein",
    images: [
      "https://superyou.in/cdn/shop/files/1_3_b909a59b-dacc-40f6-8f0d-5306a11c16de.jpg?v=1762403699",
      "	https://superyou.in/cdn/shop/files/2_c73405f8-4409-4fa1-a5b4-9d1d7da6eaa9.jpg?v=1762403699",
      "https://superyou.in/cdn/shop/files/3_b4cf2704-a80f-411e-b425-0ba9c1202ba7.jpg?v=1762403699",
      "	https://superyou.in/cdn/shop/files/11_96d7d19d-14c8-4125-82d6-24b1e0b11908.jpg?v=1762485445",
    ],
    discount: "25%",
    Price: 4389,
    totalPrice: 6599,
    rating: 4.6,
    Bestcategory: "protien",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "E901",
    title:
      "The Whole Truth Protein For Everyone | Beginners Protein Powder | Cold Coffee Sample",
    images: [
      "https://assets.hyugalife.com/catalog/product/h/s/hshr28x3_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hshr28x3_2.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/t/h/the_whole_truth_ac_odtgz7ugak3yuuyq.png?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hshr28x3_7.jpg?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "30%",
    Price: 6300,
    totalPrice: 7954,
    rating: 4.8,
    Bestcategory: "protien",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "F555",
    title: "MuscleBlaze MB Beginner Protein | Muscle Growth | Strength",
    images: [
      "https://assets.hyugalife.com/catalog/product/h/s/hsfo72g7_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hsfo72g7_2.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hsfo72g7_11.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hsfo72g7_7.png?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "15%",
    Price: 5599,
    totalPrice: 6500,
    rating: 4.4,
    Bestcategory: "pre-workout",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "G311",
    title:
      "OZiva Collagen Builder for Anti-Ageing & Skin Radiance with Vitamin C",
    images: [
      "https://assets.hyugalife.com/catalog/product/h/s/hsad34b7_1_2.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hsad34b7_2_1_2.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/h/s/hsad34b7_7_1.png?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/o/z/oziva_authenticity_certificate_sb86x4vcvnasojbd.png?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "15%",
    Price: 1599,
    totalPrice: 2099,
    rating: 4.3,
    Bestcategory: "healthfood",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "H202",
    title: "AS-IT-IS Nutrition ATOM Chocolate Peanut Butter Creamy",
    images: [
      "https://assets.hyugalife.com/catalog/product/8/9/8904221697709-1_11zon.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/s/l/slide_3_3.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/s/l/slide_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/b/r/brand_authenticity_certificate-1_xxwpjvqkcoadpkrl.png?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "50%",
    Price: 700,
    totalPrice: 1400,
    rating: 4.2,
    Bestcategory: "gainers",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "I777",
    title: "MuscleBlaze MB Pre Workout 200 Xtreme 100g",
    images: [
      "https://assets.hyugalife.com/catalog/product/n/u/nut7944-01_1_1_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/n/u/nut7944-01_6_1_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/n/u/nut7944-01_4_1_1.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/n/u/nut7944-01_9_1.jpg?compress=true&page=unknown&format=webp&q=75",
    ],
    discount: "30%",
    Price: 999,
    totalPrice: 1400,
    rating: 4.6,
    Bestcategory: "pre-workout",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    id: "J808",
    title: "Vedikroots Brahmi Capsules - An Elixir For Mind And Memory",
    images: [
      "https://assets.hyugalife.com/catalog/product/v/r/vr-06_1_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/v/r/vr-06_3_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/v/r/vr-06_5_.jpg?compress=true&page=unknown&format=webp&q=75",
      "https://assets.hyugalife.com/catalog/product/v/e/vedikroots-authenticity-certificate_w44vmxgibccj3nuh.png",
    ],
    discount: "35%",
    Price: 755,
    totalPrice: 1199,
    rating: 5.0,
    Bestcategory: "ayurveda",
    reviews: [
      {
        username: "",
        review: "",
      },
    ],
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
];

const initialState = {
  products: catalog,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.product.products;
export const selectProductLookup = createSelector(
  [selectAllProducts],
  (products) => {
    return products.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {});
  }
);

export const productLookup = catalog.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

export default productSlice.reducer;
