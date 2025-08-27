"use client";

import { data } from "../data/dataAM";
import Image from "next/image";

import { useLanguage } from "@/context/LangContext";
import H2 from "@/components/title";

export default function HomePage() {
  const { data } = useLanguage();

  return (
    <div className="HomePage  bg-[#ffffff]  mt-18 sm:mt-26">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <Image
          src={data.homeInfo.src}
          alt="Քոլեջի պատկերը"
          fill
          className="object-cover  brightness-[0.5] "
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {data.title} <br />
            <span className="text-white">_____________</span>
          </h1>
          <p className="text-white mt-2 text-sm sm:text-lg md:text-xl max-w-2xl">
            {data.homeInfo.descr}
          </p>
        </div>
      </div>

      {/* Info Images Section */}
      {/* <div className="infoImg flex flex-col ">
        {data.homeInfo.infoImg.map((elm, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={i}
              className={`flex flex-col lg:flex-row ${
                reverse ? "lg:flex-row-reverse" : ""
              } h-auto lg:h-[80vh]`}
            >
              <div className="flex w-full lg:w-1/2 lg:h-full bg-white text-gray-700 p-6 lg:p-10 items-center justify-center text-center">
                <h2 className="text-sm sm:text-xl lg:text-2xl font-bold">
                  {elm[0]}
                </h2>
              </div>
              <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
                <Image
                  src={elm[1]}
                  alt={elm[1]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="w-full sm:py-12">
      <H2 txt={data.homeInfo.statsTitle} className=" mb-10 relative text-2xl"></H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {data.homeInfo.stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#0a3760] text-white w-64 h-40 flex flex-col items-center justify-center relative"
          >
            <p className="text-3xl font-semibold">{item.number}</p>
            <p className="mt-2">{item.label}</p>
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#a0d4e4]"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
