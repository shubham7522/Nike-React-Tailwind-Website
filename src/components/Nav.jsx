import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.header
      animate={{ y: 0 }}
      initial={{ y: -80 }}
      className="padding-x py-8 absolute z-10 w-full"
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:flex flex-1 justify-end items-center ">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-10 z-10 bg-coral-red absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item) => (
              <li className="my-1" key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-white "
              >
                {item.label}
              </a>
            </li> 
            ))}
          </ul>
        </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Nav;
