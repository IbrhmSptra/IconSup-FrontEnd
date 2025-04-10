import React from "react";
import Logo from "../assets/img/Logo.png";
import HamburgMenu from "./HamburgMenu";

const Navbar = () => {
  return (
    <nav className="absolute font-poppins text-sm w-full h-10 px-4 py-8 sm:px-8 md:px-12 xl:px-40 flex items-center justify-between z-10">
      <a href="/">
        <img src={Logo} alt="IconSup Logo" className="max-w-20" />
      </a>
      <li className="hidden sm:flex sm:gap-x-4 md:gap-x-6 xl:gap-x-8">
        <ul>Home</ul>
        <ul>Report</ul>
        <ul>History</ul>
        <ul>About</ul>
      </li>
      <HamburgMenu />
    </nav>
  );
};

export default Navbar;
