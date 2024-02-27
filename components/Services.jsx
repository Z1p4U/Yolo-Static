import React from "react";
import { Oswald } from "next/font/google";
import { BiConversation } from "react-icons/bi";
import { BsPeople, BsCamera } from "react-icons/bs";
import { SiGoogleads } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { MdMotionPhotosPaused } from "react-icons/md";
import { PiChartLineUp, PiPresentationChartLight } from "react-icons/pi";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const Services = () => {
  return (
    <>
      <div id="services" className={` pb-10 pt-12 bg-[#ffffff]`}>
        <div className="container mx-auto px-2 md:px-5">
          <div
            className={` flex justify-center items-center align-middle flex-col ${oswald.className}`}
          >
            <hr className="md:w-[500px] w-full px-2 md:px-5" />
            <p className=" font-bold text-[#530FFE] bg-[#ffffff] px-3 py-2 -mt-[23px] md:text-2xl sm:text-xl text-lg">
              High Expectations
            </p>
            <div className="">
              <p className="font-bold md:text-5xl sm:text-3xl text-2xl text-[#34383A]">
                Services We Provided
              </p>
            </div>
          </div>

          <div className=" grid md:grid-rows-4 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-20">
            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 col-span-1 flex justify-center px-5 items-center align-middle flex-col">
              <BsPeople className=" text-4xl  text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Social Media Marketing
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We specialize in strategic social media campaigns that focus on
                building and protecting a positive brand image.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-2 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <HiOutlineLightBulb className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Campaign Idea
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                Our agency advises and brainstorms the best campaign ideas that
                suit with the brand.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-1  lg:col-start-3 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <PiPresentationChartLight className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Media Strategy
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer personalized media strategy to elevate brand's presence
                and maximize engagement across audiences.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-2 lg:col-start-4 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <PiChartLineUp className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Marketing Strategy
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer customized marketing strategy to enhance brand's reach,
                engagement, and impact across various targets.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 col-span-1 flex justify-center px-5 items-center align-middle flex-col">
              <SiGoogleads className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Programmatic Advertising
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer specialized programmatic advertising strategies to
                optimize your campaigns, targeting precise audiences.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-2 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <IoCodeSlashSharp className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Web Design & Development
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer website development services, creating visually
                stunning websites tailored to your business goals.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-1  lg:col-start-3 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <BsCamera className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                Photography & Videography
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer top-notch photography and videography services to
                showcase your brand's essence.
              </p>
            </div>

            <div className=" col-start-1  text-center hover:shadow-lg rounded-lg py-5 cursor-pointer select-none transition-all duration-500 md:col-start-2 lg:col-start-4 col-span-1 flex px-5 justify-center items-center align-middle flex-col">
              <MdMotionPhotosPaused className=" text-4xl text-[#530FFE]" />
              <p
                className={`  text-[#34383A] mt-3 text-lg sm:text-xl md:text-2xl ${oswald.className}`}
              >
                2D/3D Motion Graphic
              </p>
              <p className=" text-[#44494C] break-normal text-sm mt-2">
                We offer cutting-edge graphic services, crafting immersive
                visual experiences that bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
