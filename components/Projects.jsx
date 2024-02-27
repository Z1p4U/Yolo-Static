import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <>
      <div id="projects" className={` pt-10 bg-[#ffffff]`}>
        <div className="">
          <div
            className={` container mx-auto px-2 md:px-5 flex justify-center items-center align-middle flex-col ${oswald.className}`}
          >
            <hr className="md:w-[500px] w-full px-2 md:px-5" />
            <p className=" font-bold text-[#530FFE] bg-[#ffffff] px-3 py-2 -mt-[23px] md:text-2xl sm:text-xl text-lg">
              Recognized By Everyone
            </p>
            <div className="">
              <p className="font-bold md:text-5xl sm:text-3xl text-2xl text-[#34383A]">
                Our Last Projects
              </p>
            </div>
          </div>

          <div
            className={`grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-4 h-[1000px] md:h-[800px] lg:h-[600px] mt-10`}
          >
            <div
              className={`row-start-1 row-span-1 lg:row-span-2 col-start-1 col-span-2 overflow-hidden cursor-pointer `}
            >
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/projects/powerflash.jpg')] hover:scale-110 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-3xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Power Flash Myanmar
                  </p>
                </div>
              </div>
            </div>

            <div className="row-start-2 lg:row-start-1 row-span-2 md:row-span-1 col-start-1 col-span-2 lg:col-start-3 grid grid-cols-2 grid-rows-2 md:grid-rows-1">
              <div
                className={` col-start-1 col-span-2 md:col-span-1 row-start-1 row-span-1 overflow-hidden cursor-pointer select-none`}
              >
                <div
                  className={`bg-no-repeat bg-cover bg-center bg-[url('../public/projects/aki.jpg')] hover:scale-110 w-full h-full transition-all duration-500`}
                >
                  <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex flex-col justify-center items-center align-middle [&>*]:hover:block gap-2">
                    <p
                      className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                    >
                      AKI College
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`col-start-1 md:col-start-2 col-span-2 md:col-span-1 row-start-2 row-span-1 md:row-start-1 md:row-span-1 overflow-hidden cursor-pointer select-none`}
              >
                <div
                  className={`bg-no-repeat bg-cover bg-center bg-[url('../public/projects/bb.jpg')] hover:scale-110 w-full h-full transition-all duration-500`}
                >
                  <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                    <p
                      className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                    >
                      Random
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` row-start-4 md:row-start-3 lg:row-start-2 row-span-1 col-start-1 lg:col-start-3 col-span-2 overflow-hidden cursor-pointer select-none`}
            >
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/projects/cc.jpg')] hover:scale-110 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    Random
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="md:row-start-3 row-span-1 col-start-1 col-span-1 overflow-hidden cursor-pointer select-none">
              <div
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/WebService.png')] hover:scale-110 w-full h-full transition-all duration-500`}
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
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/PhotoAndVedio.png')] hover:scale-110 w-full h-full transition-all duration-500`}
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
                className={`bg-no-repeat bg-cover bg-center bg-[url('../public/Service/2D3DMotionGraphic.png')] hover:scale-110 w-full h-full transition-all duration-500`}
              >
                <div className=" bg-transparent hover:bg-[#000000aa] transition-all duration-500 h-full w-full flex justify-center items-center align-middle [&>*]:hover:block gap-2">
                  <p
                    className={` hidden font-medium text-2xl text-[#F8F8F8] ${oswald.className}`}
                  >
                    2D 3D motion Graphic
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
