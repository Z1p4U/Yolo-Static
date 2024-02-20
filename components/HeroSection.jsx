"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const icons = [
  {
    id: 1,
    src: "/logo/p-gs.png",
  },
  {
    id: 2,
    src: "/logo/p-me.png",
  },
  {
    id: 3,
    src: "/logo/p-sandar.jpg",
  },
  {
    id: 4,
    src: "/logo/p-thaya.png",
  },
  {
    id: 5,
    src: "/logo/p-tnt.png",
  },
  {
    id: 6,
    src: "/logo/ps.png",
  },
];

const HeroSection = () => {
  return (
    <>
      <div id="home" className="container mx-auto md:mt-10 mt-20 px-2 md:px-5">
        <div className="grid grid-cols-2 justify-center items-center align-middle ">
          <div className=" col-start-1 col-span-2 md:col-span-1 flex flex-col justify-center items-center md:justify-end md:items-baseline">
            <div className=" mb-5 mx-5">
              <h1
                className={`font-semibold md:font-bold text-4xl lg:text-5xl text-[#530FFE] mb-5 ${oswald.className}`}
              >
                Your Trusted Marketing Agency
              </h1>
              <p className={`text-[#34383ac0] ${oswald.className}`}>
                At YOLO Digital Marketing Company, you can get Digital
                Marketing, Offline Marketing, Application Development and Video
                Production as a One Stop Solution. We are helping services as a
                creative company worthy of your trust.
              </p>
            </div>
            <div className=" flex gap-5 flex-row text-4xl">
              <Link
                href={"https://www.facebook.com/yolodigitalmarketingagency/"}
              >
                <FaFacebook className="px-1 py-1 rounded-md hover:text-blue-800 transition-all duration-300" />
              </Link>
              <Link href={"https://www.instagram.com/yolomyanmar/"}>
                <FaInstagram className="px-1 py-1 rounded-md hover:text-red-500 transition-all duration-300" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/yolo-digital-marketing/"
                }
              >
                <FaLinkedinIn className="px-1 py-1 rounded-md hover:text-blue-600 transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className=" hidden md:flex md:col-start-2 md:col-span-1 justify-center items-center align-middle">
            <img
              src={"/hero_section.svg"}
              alt="Hero Section Image"
              className=" w-[500px] h-[400px] "
            />
          </div>
        </div>
        <Marquee className="w-full" direction="right">
          {icons?.map((icon) => {
            return (
              <div className=" flex justify-center items-center align-middle">
                <img
                  src={icon.src}
                  className=" h-20 mx-16 cursor-pointer rounded-md"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default HeroSection;
