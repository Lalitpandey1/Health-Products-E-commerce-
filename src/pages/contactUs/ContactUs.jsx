import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contactTab/ContactTab";

const ContactUs = () => {
  return (
    <div className="text-black">
      <Navbar />
      <div className="w-full my-5">
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;
