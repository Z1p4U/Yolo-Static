import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

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
    title: "Services",
    path: "services",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = ({ visibleDefault }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(visibleDefault || false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsAtTop(currentScrollPos <= 0);

      setVisible(currentScrollPos > prevScrollPos && currentScrollPos > 600);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <header>
      <nav
        className={`${
          isAtTop ? "absolute" : "fixed"
        } mx-auto border-b border-[#33353F] text-black left-0 right-0 z-10 bg-[#fffafaec] bg-opacity-100 transition-all duration-300 ${
          visible ? "bg-opacity-100" : "bg-opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link href="/" className="text-2xl md:text-5xl font-semibold">
            <div className=" flex flex-nowrap justify-center items-baseline align-middle">
              <Image
                width={60}
                height={60}
                src={"/yolologo.svg"}
                alt="Yolo Logo"
                className="img"
              />
              <p className=" font-bold text-[#530FFE] hidden lg:block">
                <span className=" md:text-xl lg:text-2xl xl:text-3xl">
                  YOLO Digital Myanmar
                </span>
              </p>
            </div>
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:opacity-70 transition-all"
              >
                <FaBars />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-800 hover:opacity-70 transition-all"
              >
                <FaXing />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </header>
  );
};

export default Navbar;
