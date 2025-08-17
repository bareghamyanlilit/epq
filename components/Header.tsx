'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { data } from "../data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Header bg-[#004471] text-[#fff] py-4 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">

          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
            />
            <h3 className="font-semibold text-xs sm:text-base md:text-lg max-w-[250px] sm:max-w-[300px]">
              ԷՋՄԻԱԾՆԻ ՎԱՐԴԳԵՍ ՀԱՄԱԶԱՍՊՅԱՆԻ ԱՆՎԱՆ ՊԵՏԱԿԱՆ ՔՈԼԵՋ
            </h3>
          </div>

          {/* Burger Icon (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>

          {/* Navigation (desktop) */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium text-base">
              {data.headerLinks.map((item) => (
                <li key={item[0]}>
                  <Link href={item[0]} className="font-bold hover:underline">
                    {item[1]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Languages (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {data.lang.map((item) => (
              <Image
                key={item[1]}
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
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col text-center font-medium text-sm">
              {data.headerLinks.map((item) => (
                <li key={item[0]}>
                  <Link
                    href={item[0]}
                    className="block py-2 font-bold hover:underline text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {item[1]}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Languages in mobile */}
            <div className="flex justify-center gap-2 mt-3">
              {data.lang.map((item) => (
                <Image
                  key={item[1]}
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
        )}
      </div>
    </div>
  );
}
