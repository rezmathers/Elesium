"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return <Navbar />;
}

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={cn("fixed top-0 inset-x-0 max-w-7xl mx-auto z-50", className)}
    >
      <nav className="fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600 backdrop-blur-3xl bg-slate-100/5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 xs:px-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8" alt="Elesium Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Elesium
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-l-gray-500 dark:hover:bg-gray-700"
            >
              Contact Now
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none  dark:text-gray-400 "
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={cn(
              "items-center justify-between w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-500 ease-in-out",
              {
                "max-h-0 opacity-0": !isMenuOpen,
                "max-h-screen opacity-100": isMenuOpen,
              }
            )}
            id="navbar-sticky"
          >
            <ul className="flex flex-col py-4 font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
