import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUp";

const Modal = ({ toggleModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const [formType, setFormType] = useState("login");
  const pullSignUp = () => {
    setFormType("signup");
  };
  const pullLogIn = () => {
    setFormType("login");
  };
  return (
    <>
      <div
        className="fixed z-50 bg-[#bdbdbd]/70 left-0 right-0 top-0 bottom-0 flex items-center justify-center"
        onClick={toggleModal}
      ></div>
      {
        // Alignment
      }
      <div className="fixed top-1/2 z-60 max-w-[25rem] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {/* Login Container */}
        <div className="bg-gray-200 p-5 rounded-lg shadow-xl">
          {/* Content Container */}
          <div className=" flex  flex-col  text-black/80">
            {formType === "login" ? (
              <LoginForm pullSignUp={pullSignUp} toggleModal={toggleModal} />
            ) : (
              <SignUpForm pullLogIn={pullLogIn} toggleModal={toggleModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
