import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const Services = () => {
  return (
    <>
      <div id="services" className={` mt-10 pt-10 bg-[#ffffff]`}>
        <div className="">
          <div
            className={`container mx-auto flex justify-center items-center align-middle flex-col ${oswald.className}`}
          >
            <hr className="md:w-[500px] w-[450px]" />
            <p className=" font-bold text-[#530FFE] bg-[#ffffff] px-3 py-2 -mt-[23px] md:text-2xl text-xl">
              High Expectations
            </p>
            <div className="">
              <p className="font-bold md:text-5xl text-4xl text-[#34383A]">
                Services We Provided
              </p>
            </div>
          </div>

          <div className={`grid grid-rows-3 md:grid-cols-4 h-[1000px] mt-10`}>
            <div
              className={`md:row-start-1 row-span-2 col-start-1 col-span-2 overflow-hidden cursor-pointer select-none`}
            >
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/SMmarketing.jpg')] hover:scale-125 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-3xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Social Media Marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="md:row-start-1 row-span-1 col-start-3 col-span-2 grid grid-cols-2">
              <div
                className={` col-start-1 col-span-1 overflow-hidden cursor-pointer select-none`}
              >
                <div
                  className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/GoogleAdvertising.png')] hover:scale-125 w-full h-full transition-all duration-500`}
                >
                  <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex flex-col justify-center items-center align-middle [&>*]:hover:block gap-2">
                    <p
                      className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                    >
                      Programmatic Advertising
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={` col-start-2 col-span-1 overflow-hidden cursor-pointer select-none`}
              >
                <div
                  className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/DigitalMarketingStragey.jpg')] hover:scale-125 w-full h-full transition-all duration-500`}
                >
                  <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                    <p
                      className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                    >
                      Digital Marketing Strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`md:row-start-2 row-span-1 col-start-3 col-span-2 overflow-hidden cursor-pointer select-none`}
            >
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/CampaignIdea.png')] hover:scale-125 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Campaign Idea
                  </p>
                </div>
              </div>
            </div>

            <div className="md:row-start-3 row-span-1 col-start-1 col-span-1 overflow-hidden cursor-pointer select-none">
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/WebService.png')] hover:scale-125 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Web Design & Development
                  </p>
                </div>
              </div>
            </div>

            <div className="md:row-start-3 row-span-1 col-start-2 col-span-2 overflow-hidden cursor-pointer select-none">
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/PhotoAndVedio.png')] hover:scale-125 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Photography & Videography Service
                  </p>
                </div>
              </div>
            </div>

            <div className="md:row-start-3 row-span-1 col-start-4 col-span-1 overflow-hidden cursor-pointer select-none">
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/2D3DMotionGraphic.png')] hover:scale-125 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    2D 3D motion Graphic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
