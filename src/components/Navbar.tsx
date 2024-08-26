"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Import Link from next/link
import { cn } from "@/lib/utils";
import ContactPage from "./ContactPage";

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
      className={cn("max-w-7xl z-50", className)}
    >
      <nav className="w-screen items-center justify-center bg-gray-300/10">
        <div className="max-w-7xl w-screen flex flex-wrap items-center justify-between mx-auto py-2 xs:px-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-8" alt="Elesium Logo" />
            <span className="self-center text-4xl whitespace-nowrap text-white font-Cinzel tracking-widest">
              Elesium
            </span>
          </Link>
          <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse xs:justify-between">
            <ContactPage/>
            {/* <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden focus:outline-none dark:text-gray-400"
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
            </button> */}
          </div>
          <div
            className={cn(
              "items-center justify-between w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-500 ease-in-out",
              {
                "max-h-0 opacity-0 md:max-h-full md:opacity-100": !isMenuOpen,
                "max-h-screen opacity-100": isMenuOpen,
              }
            )}
            id="navbar-sticky"
          >
            <ul className="flex flex-col py-4 font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              <li>
                <Link
                  href="#about"
                  className="block py-2 px-3 text-slate-400 md:p-0 hover:text-white"
                  aria-current="page"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-slate-400 md:p-0 hover:text-white"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/caseStudy"
                  className="block py-2 px-3 text-slate-400 md:p-0 hover:text-white"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-slate-400 md:p-0 hover:text-white"
                  onClick={handleLinkClick} // Close the menu on click
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
