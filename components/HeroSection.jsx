"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "../public/logo";
import { Autoplay, FreeMode } from "swiper/modules";
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
      <div className=" container mx-auto ">
        <div className=" grid grid-cols-2 justify-center items-center align-middle ">
          <div className=" col-start-1 col-span-2 md:col-span-1 flex flex-col justify-center items-center md:justify-end md:items-baseline">
            <div className=" mb-5 mx-5">
              <h1
                className={`font-semibold md:font-bold text-3xl md:text-4xl lg:text-5xl text-[#530FFE] mb-5 ${oswald.className}`}
              >
                Your Trusted Marketing Agency
              </h1>
              <p className={` text-[#34383ac0] ${oswald.className}`}>
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
                <FaFacebook className=" border border-[#530ffe] px-1 py-1 rounded-md hover:bg-[#530ffe40] hover:text-blue-500 transition-all duration-300" />
              </Link>
              <Link href={"https://www.instagram.com/yolomyanmar/"}>
                <FaInstagram className=" border border-[#530ffe] px-1 py-1 rounded-md hover:bg-[#530ffe40] hover:text-red-500 transition-all duration-300" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/company/yolo-digital-marketing/"
                }
              >
                <FaLinkedinIn className=" border border-[#530ffe] px-1 py-1 rounded-md hover:bg-[#530ffe40] transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className=" hidden md:col-start-2 md:col-span-1 md:flex justify-center">
            <Image
              width={500}
              height={400}
              src={"/hero_section.svg"}
              alt="Hero Section Image"
              className="img"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center align-middle">
          <Swiper
            className={"flex justify-center items-center align-middle"}
            breakpoints={{
              "@0.00": {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
            freeMode={true}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            // className="mySwiper"
          >
            {icons?.map((icon) => {
              return (
                <SwiperSlide className="">
                  <Image
                    width={75}
                    height={50}
                    src={icon.src}
                    className="img"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
