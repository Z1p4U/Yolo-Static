"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="z-[200] mb-10">
      <div class="container mx-auto px-10 py-2 flex justify-between items-center align-middle">
        <Link href={"/"}>
          <div className=" flex flex-nowrap justify-center items-baseline align-middle">
            {" "}
            <Image
              width={60}
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

        <div className="hidden md:flex justify-center items-center align-middle md:gap-4 lg:gap-5 md:text-base lg:text-lg">
          <Link href={"/"}>
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Home
            </p>
          </Link>
          <Link href={"/"}>
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              About
            </p>
          </Link>
          <Link href={"/"}>
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Work
            </p>
          </Link>
          <Link href={"/"}>
            <p className=" text-[#530FFE] hover:text-[#530FFEa0] transition-all duration-300">
              Services
            </p>
          </Link>
          <Link href={"/"}>
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
            href={"/"}
            className="w-full py-2 block text-center text-[#530FFE] hover:bg-[#530FFE20] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="w-full py-2 block text-center text-[#530FFE] hover:bg-[#530FFE20] transition-all duration-300"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="w-full py-2 block text-center text-[#530FFE] hover:bg-[#530FFE20] transition-all duration-300"
          >
            Work
          </Link>
          <Link
            href={"/"}
            className="w-full py-2 block text-center text-[#530FFE] hover:bg-[#530FFE20] transition-all duration-300"
          >
            Service
          </Link>
          <Link
            href={"/"}
            className="w-full py-2 block text-center text-[#530FFE] hover:bg-[#530FFE20] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
