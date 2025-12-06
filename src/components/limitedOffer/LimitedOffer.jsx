import React, { useState, useEffect } from "react";
import productImg from "../../assets/LimitedOffer/Products.webp";
// This is 2 days, 16 hours, 45 minutes in seconds
const STARTING_TIME_IN_SECONDS = 233100;

const LimitedOffer = () => {
  // 1. We use ONE state variable: the total seconds remaining.
  const [timeLeft, setTimeLeft] = useState(STARTING_TIME_IN_SECONDS);

  useEffect(() => {
    // 2. This effect sets up the 1-second timer (interval).
    const intervalId = setInterval(() => {
      // 3. We use the functional update form to safely decrement the time.
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const pad = (num) => String(num).padStart(2, "0");
  const days = pad(Math.floor(timeLeft / (60 * 60 * 24)));
  const hours = pad(Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)));
  const minutes = pad(Math.floor((timeLeft % (60 * 60)) / 60));
  const seconds = pad(Math.floor(timeLeft % 60));

  // Helper to add a leading zero (e.g., 9 -> "09")

  return (
    <div className="bg-black w-full my-3 mx-auto 2xl:max-w-[1300px] 2xl:rounded-lg  flex flex-col m1:flex-row overflow-hidden">
      {/* Product Image */}
      <img
        src={productImg}
        alt="Limited Offer"
        className="w-full m1:w-[55%] bg-green-500 lg:w-[50%]"
      />

      {/* Offer Section */}
      <div className="w-full m1:w-[45%] lg:w-[50%] flex items-center justify-center bg-[#1C2122] py-5">
        {/* Inner content */}
        <div className="flex flex-col w-[70%] ">
          {/* Inner content 1 */}
          <div>
            <p className="text-[#38CB89] text-xl lg:text-2xl  font-normal">
              Limited Edition
            </p>
            <p className="text-3xl lg:text-5xl text-white/80 font-semibold">
              Hurry up! 30% OFF
            </p>
            <p className=" text-sm  lg:text-lg my-3.5 text-white/70">
              The World's #1 Sports Nutrition Brand
            </p>
          </div>
          {/* Inner content 2 */}
          <div>
            <p className="mb-2.5 text-white/70">Offer expires in:</p>
            <div className="flex gap-3">
              <div className="flex flex-col items-center ">
                <p className="h-12  flex items-center justify-center rounded-xl text-black text-2xl font-semibold w-12 bg-gray-300">
                  {days}
                </p>
                <p className="text-[11px] my-0.5 text-white/60">Days</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="h-12  flex items-center justify-center text-2xl font-semibold  rounded-xl text-black w-12 bg-gray-300">
                  {hours}
                </p>
                <p className="text-[11px] my-0.5 text-white/60">Hours</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="h-12  flex items-center justify-center rounded-xl text-2xl font-semibold  text-black w-12 bg-gray-300">
                  {minutes}
                </p>
                <p className="text-[11px] my-0.5 text-white/60">Minutes</p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="h-12  flex items-center justify-center rounded-xl text-2xl font-semibold  text-black w-12 bg-gray-300">
                  {seconds}
                </p>
                <p className="text-[11px] my-0.5 text-white/60">Seconds</p>
              </div>
            </div>
            <button className="bg-[#38CB89] my-4 py-0.5 font-semibold m1:text-xl text-center rounded-lg px-10 ">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffer;
