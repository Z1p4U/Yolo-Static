import Image from "next/image";
import React from "react";
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

const AboutUs = () => {
  return (
    <>
      <div id="about" className={` mt-10 py-10 bg-[#F8F8F8]`}>
        <div className="container mx-auto">
          <div
            className={`flex justify-center items-center align-middle flex-col ${oswald.className}`}
          >
            <hr className=" w-[500px]" />
            <p className=" font-bold text-[#530FFE] bg-[#F8F8F8] px-3 py-2 -mt-[23px] text-2xl">
              Recognized By Everyone
            </p>
            <div className="">
              <p className="font-bold text-5xl text-[#34383A]">
                About Our Company
              </p>
            </div>
          </div>

          <div className=" mt-10 grid grid-cols-2 gap-10">
            <div className=" col-start-1 col-span-2 md:col-span-1 ">
              <Image
                width={200}
                height={400}
                src={"/missie.jpg"}
                alt="Hero Section Image"
                className="img w-full h-full rounded-sm"
              />
            </div>
            <div
              className={`col-start-1 md:col-start-2 md:col-span-1 flex flex-col gap-4`}
            >
              <p className={`font-bold text-xl ${roboto400.className}`}>
                BRINGING IDEAS TO LIFE
              </p>
              <hr />
              <div
                className={`flex flex-col justify-start items-center align-middle text-lg leading-6 gap-3 text-[#44494cc0] ${roboto300.className}`}
              >
                <p>
                  {" "}
                  Yolo Digital Myanmar is a full service digital agency. With
                  providing full services based on brand presence and social
                  media advertising we create well rounded up story in order to
                  fulfill your goals. Our team consists of people with variety
                  of expertise and interest, with a great number of successful
                  projects behind us. Along with those projects come great
                  opportunity but knowledge as well - in the field of Internet
                  Marketing, Web Developing, Design, and Public Relations.
                </p>
                <p>
                  Through the world’s leading technology and services in
                  business process and document management, we’re at the heart
                  of the enterprises small to large, giving our clients the
                  freedom to focus on what matters most: their real business.
                </p>
                <p>
                  Our Vision is to receive national recognition as the most
                  innovative, dedicated, productive marketing, and
                  communications firm in Myanmar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
