import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import yolologo from "../public/yolologo.svg";

const Footer = () => {
  return (
    <>
      <div className=" bg-blue-50">
        <div className="container mx-auto py-10">
          <div className=" flex justify-center items-center align-middle flex-col gap-5">
            <div className=" flex flex-col md:flex-row justify-center items-center md:items-baseline align-middle">
              {" "}
              <Image
                width={60}
                height={60}
                src={yolologo}
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

            <p className=" text-[#6A7280] sm:text-sm text-xs">
              © 2024 YOLO Digital Myanmar. All Rights Reserved.
            </p>

            <div className=" flex gap-5 text-3xl md:text-4xl justify-center items-center align-middle">
              <a href="https://www.facebook.com/yolodigitalmarketingagency/">
                <FaFacebook className=" transition-all duration-500 hover:text-blue-800" />
              </a>

              <a href="https://www.instagram.com/yolomyanmar/">
                <FaLinkedin className=" transition-all duration-500 hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/company/yolo-digital-marketing/">
                <FaInstagramSquare className=" transition-all duration-500 hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
