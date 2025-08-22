import P from "@/components/descr";
import H2 from "@/components/title";
import { data } from "@/data/dataAM";
import Image from "next/image";
import React from "react";

// Աշխատակազմի էջ
export default function Staff() {
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

      <hr className="border-[#003865] w-[80%] mx-auto border-1 hidden sm:block" />

      <div className=" w-full sm:w-max  mx-auto  px-2 sm:px-10 py-4">
        <H2
          txt={data.staff.chairs.title}
          className=" text-center font-bold  my-5 sm:my-8"
        ></H2>
        <div className=" flex flex-col gap-3 sm:gap-20 justify-around my-5 ">
          {data.staff.chairs.chairs.map((item, i) => (
            <div key={i} className=" grid gap-5">
              <div className=" justify-items-center">
                <h3 className="text-center font-bold text-base sm:text-2xl mb-4">
                  {item.title}
                </h3>
                <P
                  txt={item.descr}
                  className="max-w-[1000px] text-justify whitespace-pre-line"
                />

              </div>
              <div className="sm:flex justify-between">
                <div
                  key={i}
                  className=" flex flex-col items-center gap-0 sm:gap-2"
                >
                  <Image
                    src={item.boss.src}
                    alt={item.boss.name}
                    width={300}
                    height={300}
                    className="object-cover  h-[300px]"
                  />
                  <h1 className="font-bold text-base">{item.boss.name}</h1>
                  <p>{item.boss.descr}</p>
                </div>
                <div className="my-5 sm:mx-30">
                  <p className="my-2 txet-base sm:text-2xl  text-black">
                    {data.staff.chairs.subTitle}
                  </p>
                  {item.staff.map((elem, i) => (
                    <P txt={elem} key={i} className="my-1"></P>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
