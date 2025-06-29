"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import DarkModeToggle from "./ToggleDarkMode";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section title="header" className="relative flex flex-col gap-12 px-2 py-8">
      <div className="h-[60px] py-2.5 flex items-center justify-between">
        <div className="font-semibold username">Mohammed Amr</div>
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <span className="hidden md:block">
          <DarkModeToggle />
        </span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 flex items-center font-semibold -left-full h-screen w-full bg-white text-black dark:bg-black  dark:text-white p-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-0 "
            : "translate-x-full opacity-100"
        } md:hidden z-50`}
      >
        {/* <div className="flex justify-end">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div> */}
        <ul className="flex flex-col items-center w-full mt-10 space-y-6">
          <li className="text-xl">Mohammed Amr</li>
          <li className="text-lg">Blog</li>
          <li className="text-lg">Projects</li>
          <li className="text-lg">About</li>
          <li className="text-lg">Newsletter</li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        <MdClose
          onClick={toggleMenu}
          className="absolute text-3xl cursor-pointer -translate-[50%] bottom-7 left-[50%]"
        />
      </div>

      <h1 className="font-bold text-6xl sm:text-[72px] md:text-[140px] border-solid border-y my-0 line- py-3 border-black/30 dark:border-white uppercase lg:text-[180px] text-[var(--black-color)] dark:text-white text-center">
        <span className="me-4">The</span>
        <span>blog</span>
      </h1>
    </section>
  );
}
