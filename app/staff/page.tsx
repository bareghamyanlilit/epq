'use client'

import P from "@/components/descr";
import H2 from "@/components/title";
import { useLanguage } from "@/context/LangContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Աշխատակազմի էջ
export default function Staff() {
  const { data } = useLanguage();

  return (
    <div className="Staff container w-[90%] sm:w-[80%] mx-auto  pt-18 sm:pt-26 bg-white">
      <div className="">
        <H2
          txt={data.staff.boss.title}
          className="text-center font-bold  my-5 sm:my-8"
        ></H2>
        <div className="flex flex-wrap  gap-5 sm:gap-0 justify-around my-5">
          {data.staff.boss.info.map((item, i) => (
            <div key={i} className="w-[280px] flex flex-col gap-1 sm:gap-2">
              {item.src != "" ? (
                <Image
                  src={item.src}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover  h-[300px]"
                />
              ) : null}
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p>{item.descr}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[#003865] w-[80%] mx-auto border-1 hidden sm:block" />

      <div className=" serviceStaff w-full sm:w-max  mx-auto  px-2 sm:px-10 py-4">
        <div>
          <H2
            txt={data.staff.educationalAid.title}
            className="text-center font-bold  my-5 sm:my-8"
          ></H2>
          <div className="flex flex-col gap-3 sm:gap-0 justify-around my-5 ">
            {data.staff.educationalAid.info.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-max flex flex-col gap-1 sm:gap-2"
              >
                <P txt={`${item.descr} - ${item.name}`}></P>
              </div>
            ))}
          </div>
        </div>
        <div>
          <H2
            txt={data.staff.serviceStaff.title}
            className="text-center font-bold  my-5 sm:my-8"
          ></H2>
          <div className="flex flex-col gap-3 sm:gap-0 justify-around my-5 ">
            {data.staff.serviceStaff.info.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-max flex flex-col gap-1 sm:gap-2"
              >
                <P txt={`${item.descr} - ${item.name}`}></P>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <H2
          txt={data.staff.chairs.title}
          className=" text-center font-bold  my-5 sm:my-8"
        ></H2>
        
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10  justify-self-center">
        {data.staff.chairs.chairsInStaff.map((e, i) => {
          return (
            <div key={i} className="w-[250px] sm:w-[400px] border-2 border-[#003865] rounded-2xl p-5">
              <div className=" p-2 sm:py-0 space-y-4 text-center justify-items-center">
                <Image
                  src={e.img}
                  alt={e.title}
                  width={90}
                  height={90}
                  className="object-contain sm:w-30 sm:h-30"
                />
                <h3 className=" text-sm sm:text-2xl font-semibold">
                  {e.title}
                </h3>
                <Link
                  href={`/chair/${i}`}
                  className=" text-base sm:text-xl text-blue-600  hover:text-blue-800 border-1 border-blue-500 rounded px-3 py-1 "
                >
                  {e.linkTxt}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
