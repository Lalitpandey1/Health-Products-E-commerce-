import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Visa from "../../assets/paymentPartners/Visa.webp";
import AEX from "../../assets/paymentPartners/AEX.webp";
import MasterCard from "../../assets/paymentPartners/MasterCard.webp";
import Stripe from "../../assets/paymentPartners/Stripe.webp";
import PayPal from "../../assets/paymentPartners/PayPal.webp";

const Footer = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);

  return (
    <div>
      {/* Structure 1 */}
      <div className="w-full mt-3 md:bg-[#2B2B2B] px-2 py-1 hidden md:block">
        <div className="w-full mx-auto max-w-[1200px] ">
          <div className="md:grid  lg:grid-cols-[3fr_1fr_1fr_2fr] my-[55px] md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-4 md:gap-7 lg:gap-10 overflow-hidden">
            <div>
              <div>
                {/* Title */}
                <p className="text-[30px] text-[#38CB89] font-bold font-postnobills">
                  EnergizeX
                </p>
                {/* List */}
                <p className="text-left md:text-center my-2 text-white/75 text-[17px]">
                  Fuel your fitness, naturally. One shelf for all your protein,
                  pre-workout, and holistic wellness needs.
                </p>
              </div>
            </div>
            <div>
              <div className="text-left">
                {/* Title */}
                <h3 className="text-[20px] text-[#38CB89]  font-medium">
                  Page
                </h3>
                <div className="text-[15px] text-white/85 my-3 ">
                  {" "}
                  <p>Home</p>
                  <p>Shop</p>
                  <p>Product</p>
                  <p>Articles</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-left">
                {/* Title */}
                <h3 className="text-[20px]  text-[#38CB89] font-medium">
                  Info
                </h3>
                <div className="text-[15px] text-white/85 my-3 ">
                  {" "}
                  <p>Shipping Policy</p>
                  <p>Return & Refund</p>
                  <p>Support</p>
                  <p>FAQs</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-left">
                <h3 className="text-[20px]   text-[#38CB89] font-medium">
                  Office
                </h3>
                <div className="text-[15px] md:text-[13px] text-white/85 my-3 ">
                  {" "}
                  <p>G3, Manyata Techpark,</p>
                  <p>Bengaluru, Karnataka</p>
                  <p>India</p>
                  <p>8888888888</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-8 mx-3 flex gap-5 justify-between items-center">
            {/* Copyright Statement */}
            <div className="text-white/75">
              Copyright © 2023 EnergizeX. All rights reserved
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <img
                src={Visa}
                className="lg:max-w-none md:max-w-10"
                alt="Visa Card"
              />
              <img
                src={AEX}
                alt="American Express Card Logo"
                className="lg:max-w-none md:max-w-10"
              />
              <img
                src={MasterCard}
                alt="MasterCard Logo"
                className="lg:max-w-none md:max-w-10"
              />
              <img
                src={Stripe}
                alt="Stripe Card Logo"
                className="lg:max-w-none md:max-w-10"
              />
              <img
                src={PayPal}
                alt="Stripe Card Logo"
                className="lg:max-w-none md:max-w-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Structure 2 */}

      <div className="flex bg-black flex-col gap-y-4 md:hidden">
        {/* Header */}
        <div>
          <h3 className="text-[25px] text-[#38CB89] font-bold font-postnobills">
            EnergizeX
          </h3>
          <p className="my-2 text-white/75 text-[14px]">
            Fuel your fitness, naturally. One shelf for all your protein,
            pre-workout, and holistic wellness needs.
          </p>
        </div>
        <hr />

        {/* Pages Section */}
        <div>
          <div className="flex justify-between text-[17px] font-semibold text-[#38CB89]">
            <h3>Pages</h3>
            <button onClick={() => setIsPagesOpen(!isPagesOpen)}>
              {isPagesOpen ? (
                <IoIosArrowUp size={16} />
              ) : (
                <IoIosArrowDown size={20} />
              )}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isPagesOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="text-left my-2 text-[16px] text-white/85">
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Articles</p>
            </div>
          </div>
        </div>
        <hr />

        {/* Info Section */}
        <div>
          <div className="flex justify-between text-[17px] font-semibold text-[#38CB89]">
            <h3 className="text-[18px] font-medium">Info</h3>
            <button onClick={() => setIsInfoOpen(!isInfoOpen)}>
              {isInfoOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isInfoOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="text-left my-2 text-[16px] text-white/85">
              <p>Shipping Policy</p>
              <p>Return & Refund</p>
              <p>Support</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
        <hr />

        {/* Office Section */}
        <div>
          <div className="flex justify-between text-[17px] font-semibold text-[#38CB89]">
            <h3 className="text-[18px] font-medium">Office</h3>
            <button onClick={() => setIsOfficeOpen(!isOfficeOpen)}>
              {isOfficeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOfficeOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="text-left my-2 text-[16px] text-white/85">
              <p>43111 Hai Trieu street,</p>
              <p>District 1, HCMC</p>
              <p>Vietnam</p>
              <p>84-756-3237</p>
            </div>
          </div>
        </div>
        <hr className="my-8" />

        {/* Footer */}
        <div className="w-full my-8 flex flex-col-reverse gap-5 justify-between items-center">
          <div>Copyright © 2023 EnergizeX. All rights reserved</div>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Payment Icons */}
            <img src={Visa} alt="Visa Card" className="max-w-12" />
            <img
              src={AEX}
              alt="American Express Card Logo"
              className="max-w-12 w-full"
            />
            <img
              src={MasterCard}
              alt="MasterCard Logo"
              className="max-w-12 w-full"
            />
            <img
              src={Stripe}
              alt="Stripe Card Logo"
              className="max-w-12 w-full"
            />
            <img
              src={PayPal}
              alt="Stripe Card Logo"
              className="max-w-12 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
