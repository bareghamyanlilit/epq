"use client";

import Link from "next/link";
import H2 from "@/components/title";
import P from "@/components/descr";
import Image from "next/image";
import { useLanguage } from "@/context/LangContext";

// Մեր մասին էջ

export default function AboutPage() {
  const { data } = useLanguage();
  return (
    <div className="AboutPage  container w-[90%] sm:w-[80%] mx-auto mt-18 sm:mt-36">
      <div className="">
        <H2 txt={data.aboutInfo.title} className=" hidden sm:block"></H2>
        <h4 className=" text-base font-bold sm:text-2xl py-4">
          {data.aboutInfo.title2}
        </h4>
        <P txt={data.aboutInfo.descr} className=" indent-10 text-justify"></P>
        <div className="w-full max-h-[600px] mt-12">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ejmiacni.petakan.k.olej/videos/2092955561144224&show_text=false&width=600"
            width="100%"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* <div className=" justify-items-center">
        <H2 txt={data.aboutInfo.departmentsPartTitle}></H2>
        <ul className="grid gap-4 sm:gap-8 w-full sm:w-2xl">
          {data.aboutInfo.departments.map((e, i) => (
            <li
              key={i}
              className=" cursor-pointer bg-white px-[25px] py-2 sm:py-[18px] rounded-[12px] no-underline text-sm sm:text-[20px] text-[#004471] font-medium shadow-[0_6px_12px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out  hover:bg-[#004471] hover:text-white hover:-translate-y-1 hover:scale-[1.02]"
            >
              <Link href={e.href}>{e.descr}</Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div>
        <H2 txt={data.aboutInfo.admissionsData.title}></H2>
        <P txt={data.aboutInfo.admissionsData.descr} className="mb-4 "></P>

        <div className="overflow-x-auto ">
          <table className="w-full border-0 text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#003865] text-white  text-sm sm:text-xl">
                {data.aboutInfo.admissionsData.table[0].map((elem, i) => (
                  <th key={i} className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                    {elem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.aboutInfo.admissionsData.table.slice(1).map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {e.map((elem, i) => (
                    <td key={i} className=" px-3 py-2 sm:px-6 sm:py-5 ">
                      {elem}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <H2 txt={data.aboutInfo.remotelyAdmissionsData.title}></H2>
        <P
          txt={data.aboutInfo.remotelyAdmissionsData.descr}
          className="mb-4 "
        ></P>

        <div className="overflow-x-auto ">
          <table className="w-full border-0 text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#003865] text-white  text-sm sm:text-xl">
                {data.aboutInfo.remotelyAdmissionsData.table[0].map(
                  (elem, i) => (
                    <th
                      key={i}
                      className=" px-3 py-2 sm:px-6 sm:py-5 font-bold"
                    >
                      {elem}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.aboutInfo.remotelyAdmissionsData.table
                .slice(1)
                .map((e, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {e.map((elem, i) => (
                      <td key={i} className=" px-3 py-2 sm:px-6 sm:py-5 ">
                        {elem}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 md:px-8 py-8">
        <H2 txt={data.aboutInfo.partnersPartTitle}></H2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.aboutInfo.partners.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <Image
                src={e.img}
                alt={e.descr}
                width={96}
                height={96}
                className="object-contain mb-4"
              />
              <P txt={e.descr} className="font-semibold"></P>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
