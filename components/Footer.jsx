import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" border-2 border-s-0  border-e-0  border-b-0 border-t-gray-200 mt-10 ">
        <div className="container mx-auto py-10">
          <div className=" flex justify-center items-center align-middle flex-col">
            <div className=" flex flex-nowrap justify-center items-baseline align-middle">
              {" "}
              <Image
                width={60}
                height={60}
                src={"/yolologo.svg"}
                alt="Yolo Logo"
                className="img"
              />
              <p className=" font-bold text-[#530FFE]">
                <span className=" md:text-lg lg:text-xl xl:text-2xl">
                  YOLO{" "}
                </span>
                Digital Myanmar
              </p>
            </div>

            <p className=" text-[#6A7280] text-sm mt-10">
              © 2024 YOLO Digital Myanmar. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
