import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";
import profilePhoto from "/public/missie.jpg";

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
      <div className={`py-14 bg-[#F8F8F8]`}>
        <div className="container mx-auto">
          <div className=" flex justify-center items-center align-middle flex-col ">
            <Image
              width={50}
              height={50}
              src={"/comma.svg"}
              alt="Comma"
              className="img select-none text-center "
            />

            <p className="md:text-xl text-lg font-bold text-center whitespace-break-spaces p-10 font-sans md:w-[900px] w-[550px]">
              "As we delve into the digital age, the power of marketing
              transforms. Through digital channels, we craft narratives that
              resonate, forging connections that endure, propelling businesses
              into the forefront of innovation"
            </p>
            <p className={`${oswald.className}`}>
              <Image
                width={35}
                height={35}
                src={profilePhoto}
                alt="Profile"
                className="img rounded-full object-cover inline-block mr-2"
              />
              <span className=" font-semibold text-lg ">Ye Kyaw Lin</span> |{" "}
              <span className=" text-[#6A7280]">CEO at YOLO</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogue;
