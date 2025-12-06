import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full text-black">
      <Navbar />
      <div className="w-full flex flex-col items-center text-sm xl:text-lg justify-center h-[80vh]">
        <h2 className="font-bold text-lg md:text-xl">404 | Page Not Found</h2>
        <br />
        <button
          className="border rounded-lg px-2 py-0.5 bg-black text-white"
          onClick={() => navigate("/")}
        >
          Go To Homepage
        </button>
      </div>
    </div>
  );
}

export default NotFound;
