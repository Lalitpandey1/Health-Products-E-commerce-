import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="flex flex-col w-full mx-auto max-w-[1200px] lg:rounded-lg xl:rounded-2xl  md:flex-row">
      {/* Help Center */}
      <div className="w-full md:w-[50%] flex items-center text-sm 2xl:text-lg text-white bg-white py-10 ">
        {/* green box */}
        <div className="bg-[#38CB89] flex flex-col py-5 w-[50%] mx-auto overflow-hidden h-40 rounded-lg">
          {/* Content box */}
          <div className="w-full flex flex-col">
            {/* Text-alignment Box -> ML */}
            <div className="w-full flex flex-col items-center justify-items-start text-wrap">
              <p>Need Help&nbsp;?</p>
              <p className=" my-2">
                Mail Us
                <span className="italic text-wrap">
                  {" "}
                  @Lalitpandey4all@gmail.com
                </span>
              </p>
              <div className="flex items-center mb-1 gap-1 text-[16px]">
                {/* Assuming you have RiErrorWarningLine imported */}
                <RiErrorWarningLine />
                <p>FAQs</p>
              </div>
            </div>
          </div>
          <button className="bg-white self-center text-[#38CB89] rounded-lg px-1 m1:px-3 md:px-7 py-0.5">
            Help Center
          </button>
        </div>
      </div>

      <div className="w-full md:w-[50%] bg-amber-400 font-semibold text-sm m1:text-[20px] flex items-center justify-center py-10 ">
        <div className="flex flex-col items-center gap-7 py-7 mx-auto w-[50%] bg-white rounded-lg overflow-hidden">
          <p>Connect with Us</p>{" "}
          <div className="flex gap-5 flex-wrap text-[#38CB89]">
            <IoLogoInstagram size={28} />
            <FaFacebookF size={28} />
            <FaTwitter size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
