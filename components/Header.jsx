"use client";

import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  const navLinks = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Projects",
      path: "projects",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  const [scroll, setScroll] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 150) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollPoint();
    };
  }, []);

  function scrollToTop() {
    let scrollTop = document.documentElement.scrollTop;
    scrollTop = 0;
    setScrollTop(0);
  }

  function scrollPoint() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let getclientHeight = document.documentElement.clientHeight;

    let calcHeight = scrollHeight - getclientHeight;
    let final = Math.round((scrollTop * 100) / calcHeight);
    scrollTop = final;
    setScrollTop(scrollTop);
  }

  const [burger, setBurger] = useState(false);
  let [clipPath, setClipPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (burger === true && clipPath < 150) {
        setClipPath((prev) => prev + 30);
      }
      if (burger === false && clipPath > 0) {
        setClipPath((prev) => prev - 30);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [burger, clipPath]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={` ${
        scroll
          ? "header top-0 left-0 z-50 w-full absolute"
          : "header top-0 left-0 z-50 animate-slidedown w-full fixed border-b border-white border-opacity-20 bg-opacity-80 backdrop-blur backdrop-filter"
      } w-full`}
    >
      <div className=" container h-[60px] md:h-[80px] mx-auto px-[15px] w-full flex justify-between items-center opacity-70">
        <Link href="/" className="text-2xl md:text-5xl font-semibold">
          <div className=" flex flex-nowrap justify-center items-baseline align-middle">
            <Image
              width={60}
              height={60}
              src={"/yolologo.svg"}
              alt="Yolo Logo"
              className=" z-[200]"
            />
            <p className=" font-bold text-[#530FFE] hidden lg:block">
              <span className=" md:text-xl lg:text-2xl xl:text-3xl">
                YOLO Digital Myanmar
              </span>
            </p>
          </div>
        </Link>

        <div className=" hidden md:flex flex-row justify-end text-center">
          <ul className="mb-0 inline-flex no-underline list-none gap-7 pl-0">
            {navLinks.map((link, index) => (
              <Link
                activeClass="active-nav"
                to={link?.path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => scrollToTop}
                className="group no-underline relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
              >
                <li className="inline-block align-middle" key={index}>
                  {link?.title}
                  <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="relative md:hidden">
          <button className=" burger " onClick={() => setBurger(!burger)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
          <div
            className={burger ? "bg-clip-path" : "bg-clip-path active"}
            style={{
              clipPath: `circle(${clipPath}% at 92% 3rem)`,
              transition: "clip-path 0.7s",
              transitionTimingFunction:
                "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <ul className={burger ? "nav-items active" : "nav-items"}>
              {navLinks.map((link, index) => (
                <Link
                  to={link?.path}
                  key={index}
                  activeClass="active-nav"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className=" hover:no-underline hover:text-[#5c5c5c]"
                >
                  <li className={burger ? "anniSlideDown" : "anniSlideUp"}>
                    {link?.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="progress-bar-container absolute left-0 top-[60px] md:top-[80px] w-full">
        <div className="w-full h-1">
          <div
            className="bg-gradient-to-r from-[#530FFE60] from-20% via-[#530FFE] via-40% to-sky-600 to-90% h-1"
            style={{ width: `${scrollTop}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
