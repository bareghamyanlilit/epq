'use client'

import P from "@/components/descr";
import Image from "next/image";
import { useLanguage } from "@/context/LangContext";


export default function Department({id}:{id:number}) {
  const { data } = useLanguage();
  const department = data.departments[id];

  return (
    <div className="masn  mt-18 sm:mt-26">
      <div
        style={{ backgroundColor: department.color }}
        className={`hero  text-white text-center border-t-2 border-white p-6 sm:p-12`}
      >
        <h1 className="text-base sm:text-2xl font-bold">{department.title}</h1>

        <P txt={department.descr} className="mt-4 text-white"></P>
      </div>

      <div className="about mb-24 container w-full sm:w-[80%] mx-auto">
        <div className="container mx-auto px-4">
          <div className="info grid gap-12">
            <video
              className="w-full max-h-[600px] object-cover mt-12"
              controls
              autoPlay
              muted
              loop
            >
              <source src={department.video} type="video/mp4" /> Ձեր դիտարկիչը չի
              աջակցում տեսանյութերի նվագարկմանը։
            </video>

            <div className="boxs">
              <h3 className="title text-center text-base  sm:text-3xl font-semibold mb-6">
                {department.infoParts.title}
              </h3>
              <div className=" flex flex-wrap gap-20">
                {department.infoParts.info.map((item, i) => (
                  <div key={i}>
                    <div className="relative flex-col flex sm:flex-row items-center  mb-12">
                      <div className="relative w-full sm:w-[600px] h-[250px] sm:h-[500px]">
                        <Image
                          src={item.img}
                          alt="img"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span
                        style={{ backgroundColor: department.color }}
                        className="hidden sm:block absolute left-[105%] top-[0%] w-[80%] h-[2px] -translate-y-1/2 rotate-90 origin-left"
                      ></span>

                      <div
                        className="relative sm:absolute sm:right-0 bg-white p-6 sm:p-8 shadow-lg sm:border-r-[6px] sm:border-b-[6px]  w-full sm:w-[700px] mt-4 sm:mt-0 sm:translate-x-[80%]"
                        style={{ borderBlockColor: department.color }}
                      >
                        <h3 className="text-base sm:text-2xl font-bold mb-3">
                          {item.title}
                        </h3>
                        <P txt={item.desc}></P>
                      </div>
                    </div>
                    <hr
                      style={{ backgroundColor: department.color }}
                      className=" h-[3px] sm:h-[6px] sm:w-[180%] border-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events">
        <h2 className="title text-center text-2xl font-bold mb-10">
          {department.partImgTitle}
        </h2>
        <div className="container mx-auto px-4">
          <div className="images flex flex-wrap justify-center gap-5">
            {department.images.map((item, i) => (
              <div key={i} className="relative w-[500px] h-[350px]">
                <Image
                  src={item}
                  alt={item}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}