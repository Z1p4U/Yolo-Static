"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Navbar from "./nav/Navbar";

const Header = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return <Navbar visibleDefault />;
};

export default Header;
