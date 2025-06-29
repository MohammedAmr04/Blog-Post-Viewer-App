"use client";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  spinnerClassName?: string;
  onClick?: () => void;
}

export default function Button({
  children = "View Stories",
  className = "",
  spinnerClassName = "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2",
  onClick,
}: ButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    if (onClick) onClick();
  };

  return (
    <button
      className={`${className} my-5 px-6  py-2 cursor-pointer bg-sky-600 text-gray-200 rounded-lg font-bold shadow hover:bg-sky-900 transition-colors duration-500 flex items-center justify-center`}
      disabled={loading}
      onClick={handleClick}
      title="button"
    >
      {loading ? (
        <span className={spinnerClassName}></span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}
