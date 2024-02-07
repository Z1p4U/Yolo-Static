"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="z-[200] mb-10">
      <div class="container mx-auto px-10 py-8 flex justify-between items-center align-middle">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="hover:no-underline cursor-pointer"
        >
          <div className=" flex flex-nowrap justify-center items-baseline align-middle">
            {" "}
            <Image
              width={80}
              height={60}
              src={"/yolologo.svg"}
              alt="Yolo Logo"
              className="img"
            />
            <p className=" font-bold text-[#530FFE] hidden lg:block">
              <span className=" md:text-xl lg:text-2xl xl:text-3xl">YOLO </span>
              Digital Myanmar
            </p>
          </div>
        </Link>

        <div className="hidden md:flex md:gap-8 lg:gap-12 md:text-base lg:text-xl font-semibold">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Home
            </p>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              About
            </p>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Services
            </p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className=" cursor-pointer hover:no-underline"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Contact
            </p>
          </Link>
        </div>

        <div className="md:hidden">
          <FaBars
            className=" w-9 h-9 p-2 border border-[#530FFE] text-[#530FFE] rounded-sm cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div
          id="menu"
          className={` ${
            open ? null : "hidden"
          } flex flex-col cursor-pointer h-fit w-full items-center align-middle fixed top-[68px] left-0 transition-all duration-500 bg-[#DBCCFF] `}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Home
            </p>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              About
            </p>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:no-underline cursor-pointer"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Services
            </p>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className=" cursor-pointer hover:no-underline"
          >
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
