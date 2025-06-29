"use client";
import { useState, useEffect } from "react";
import SunLight from "../assets/sun.svg";
import SunDark from "../assets/sunDark.svg";
import MoonLight from "../assets/moon.svg";
import MoonDark from "../assets/moonDark.svg";
import Image from "next/image";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className="relative inline-flex items-center cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        className="sr-only"
        id="dark-mode-toggle"
      />
      <div
        className="flex justify-center gap-1 transition-colors duration-200 bg-[#090D1F] rounded-full shadow-inner w-14 h-7 dark:bg-white"
        onClick={toggleDarkMode}
      >
        {!darkMode && (
          <>
            <Image src={SunLight} alt="Sun" width={18} height={18} />
            <Image src={MoonLight} alt="Moon" width={18} height={18} />
          </>
        )}
        {darkMode && (
          <>
            <Image src={SunDark} alt="Sun" width={18} height={18} />
            <Image src={MoonDark} alt="Moon" width={18} height={18} />
          </>
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
