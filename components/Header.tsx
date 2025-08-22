"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { data } from "../data/dataAM";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("");
  return (
    <div className="Header fixed z-50 bg-[#004471] text-white py-4 w-full top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          {/* Logo + Title */}
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="w-10 h-10 sm:w-14 sm:h-14"
              />
              <h3 className="font-semibold text-xs md:text-base max-w-[250px] sm:max-w-[300px]">
                {data.title}
              </h3>
            </div>
          </Link>

          {/* Burger Icon (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : "bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition duration-300 ${
                isOpen ? "opacity-0" : "opacity-100 bg-white"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1" : "bg-white"
              }`}
            ></span>
          </button>

          {/* Navigation (desktop) */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium text-base">
              {data.headerLinks.map((item,i) => {
                const isActive = activeLink === item[0];
                return (
                  <li key={i}>
                    <Link
                      href={item[0]}
                      className={`font-bold hover:underline transition-colors duration-300 ${
                        isActive ? "text-[#008eff]" : "text-white"
                      }`}
                      onClick={() => setActiveLink(item[0])}
                    >
                      {item[1]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Languages (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {data.lang.map((item,i) => (
              <Image
                key={i}
                src={item[0]}
                alt={item[1]}
                width={35}
                height={20}
                className="w-6 h-4 sm:w-8 sm:h-5 md:w-9 md:h-6"
                title={item[1]}
              />
            ))}
          </div>
        </div>

        {/* Mobile menu (dropdown) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col text-center font-medium text-sm">
            {data.headerLinks.map((item,i) => {
              const isActive = activeLink === item[0];
              return (
                <li key={i}>
                  <Link
                    href={item[0]}
                    className={`block py-2 font-bold hover:underline text-sm transition-colors duration-300 ${
                      isActive ? "text-[#008eff]" : "text-white"
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveLink(item[0]);
                    }}
                  >
                    {item[1]}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Languages in mobile */}
          <div className="flex justify-center gap-2 mt-3">
            {data.lang.map((item,i) => (
              <Image
                key={i}
                src={item[0]}
                alt={item[1]}
                width={35}
                height={20}
                className="w-6 h-4 sm:w-8 sm:h-5"
                title={item[1]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
