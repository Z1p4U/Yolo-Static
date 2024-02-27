import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const roboto300 = Roboto({
  weight: "300",
  subsets: ["latin"],
});
const roboto400 = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Dialogue = () => {
  return (
    <>
      <div className={`py-10 bg-[#F8F8F8]`}>
        <div className="container mx-auto px-2 md:px-5">
          <div className=" flex justify-center items-center align-middle flex-col ">
            <img
              src={"/comma.svg"}
              alt="Comma"
              className=" w-[25px] h-[25px] md:w-[50px] md:h-[50px] select-none text-center "
            />
            <p className="md:text-xl sm:text-lg text-xs font-semibold md:font-bold text-center whitespace-break-spaces p-2 sm:p-3 md:p-10 font-sans md:w-[700px] lg:w-[900px] sm:w-[550px] w-full">
              "As we delve into the digital age, the power of marketing
              transforms. Through digital channels, we craft narratives that
              resonate, forging connections that endure, propelling businesses
              into the forefront of innovation"
            </p>
            <p className={`${oswald.className}`}>
              {/* <img
                src={"/yolologo.svg"}
                alt="Profile"
                className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px]  rounded-full object-cover inline-block mr-2"
              /> */}
              <span className=" font-semibold text-sm sm:text-base md:text-lg ">
                Ye Kyaw Lin
              </span>{" "}
              |{" "}
              <span className=" text-[#6A7280] text-sm sm:text-base md:text-lg">
                CEO at YOLO
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogue;
