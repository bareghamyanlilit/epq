"use client";

import Image from "next/image";
import Link from "next/link";
import P from "@/components/descr";
import { useLanguage } from "@/context/LangContext";

// Բոլոր մասնագիտությունների էջ
export default function DepartmentsPage() {
  const { data } = useLanguage();
  return (
    <div className="DepartmentsPage  mt-18 sm:mt-26">
      {/* Hero Section (80vh) */}
      <div className="relative w-full h-[50vh] sm:h-[80vh] mb-6 sm:mb-0">
        <Image
          src={data.departmentsInfo.img}
          alt="Քոլեջի պատկերը"
          fill
          className="object-cover brightness-[0.5] "
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-[600px]">
            <h1 className="text-white text-xl md:text-3xl font-bold leading-snug">
              {data.departmentsInfo.title}
            </h1>
            <p className="text-white mt-2 text-base md:text-xl">
              {data.departmentsInfo.descr}
            </p>
          </div>
        </div>
      </div>

      {/* Departments List Section */}
      {/* <div className=" grid gap-4">
        {data.departmentsInfo.departmentsPartInfo.map((e, i) => {
          const directionClass =
            i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row";
          return (
            <div
              key={i}
              className={`flex flex-col ${directionClass} items-center gap-4 sm:gap-8 h-auto sm:h-[100vh]`}
            >
              <div className="w-full md:w-1/2 p-2 sm:py-0 space-y-4 text-center justify-items-center">
                <div className="hidden sm:block w-20 h-20 relative">
                  <Image
                    src={e.childImg}
                    alt={e.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className=" text-base sm:text-3xl font-semibold">
                  {e.title}
                </h3>
                <P txt={e.descr} className="mt-4"></P>
                <Link
                  href={`/department/${i}`}
                  className=" text-base sm:text-xl text-blue-600  hover:text-blue-800 border-1 border-blue-500 rounded px-3 py-1 "
                >
                  {e.linkTxt}
                </Link>
              </div>

              <div className="w-full md:w-1/2 relative h-[30vh] sm:h-[100vh]">
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            // <hr className=" h-[80px] bg-[#004471] border-0"/>
          );
        })}
      </div> */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-self-center">
        {data.departmentsInfo.departmentsPartInfo.map((e, i) => {
          return (
            <div key={i} className="flex flex-col  w-[250px] sm:w-[400px] border-2 rounded-2xl p-10 text-center justify-between items-center gap-2">
                <Image
                  src={e.childImg}
                  alt={e.title}
                  width={60}
                  height={60}
                  className="object-contain sm:w-30 sm:h-30"
                />
                <h3 className=" text-sm sm:text-2xl font-semibold">
                  {e.title}
                </h3>
                <Link
                  href={`/department/${i}`}
                  className=" text-base sm:text-xl text-blue-600  hover:text-blue-800 border-1 border-blue-500 rounded px-3 py-1 "
                >
                  {e.linkTxt}
                </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
