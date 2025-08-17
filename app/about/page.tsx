import Link from "next/link";
import { data } from "../../data";
export default function AboutPage() {
  return (
    <div className="AboutPage  container w-[90%] sm:w-[80%] mx-auto">
      <div className="">
        <h2 className=" text-4xl text-[#004471] font-bold text-center mt-18 mb-7 hidden sm:block">
          {data.aboutInfo.title}
        </h2>
        <h4 className=" text-xl font-bold sm:text-2xl py-4">{data.aboutInfo.title2}</h4>
        <p className="text-sm sm:text-xl/8">{data.aboutInfo.descr}</p>

        <video
          className="w-full max-h-[600px] object-cover mt-12"
          controls
          autoPlay
          muted
          loop
        >
          <source src={data.aboutInfo.video} type="video/mp4" /> Ձեր դիտարկիչը չի
          աջակցում տեսանյութերի նվագարկմանը։
        </video>
      </div>

      <div className=" justify-items-center">
        <h2 className="text-xl sm:text-4xl text-[#004471] font-bold text-center mt-18 mb-10">
          {data.aboutInfo.departmentsPartTitle}
        </h2>
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
      </div>

      <div>
        <h2 className="text-xl sm:text-4xl text-[#004471] font-bold text-center mt-18 mb-10">
          {data.aboutInfo.admissionsData.title}
        </h2>
        <p className="mb-4 text-sm sm:text-xl/8 text-[#1a1a1a]">
          {data.aboutInfo.admissionsData.descr}
        </p>

        <div className="overflow-x-auto ">
          <table className="w-full border-0 text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#003865] text-white  text-sm sm:text-xl">
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.admissionsData.table[0][0]}
                </th>
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.admissionsData.table[0][1]}
                </th>
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.admissionsData.table[0][2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.aboutInfo.admissionsData.table.slice(1).map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50" } >
                  <td className=" px-3 py-2 sm:px-6 sm:py-5 ">{e[0]}</td>
                  <td className=" px-3 py-2 sm:px-6 sm:py-5 ">{e[1]}</td>
                  <td className=" px-3 py-2 sm:px-6 sm:py-5 ">{e[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl sm:text-4xl text-[#004471] font-bold text-center mt-18 mb-10">
          {data.aboutInfo.remotelyAdmissionsData.title}
        </h2>
        <p className="mb-4 text-sm sm:text-xl/8 text-[#1a1a1a]">
          {data.aboutInfo.remotelyAdmissionsData.descr}
        </p>

        <div className="overflow-x-auto ">
          <table className="w-full border-0 text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#003865] text-white  text-sm sm:text-xl">
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.remotelyAdmissionsData.table[0][0]}
                </th>
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.remotelyAdmissionsData.table[0][1]}
                </th>
                <th className=" px-3 py-2 sm:px-6 sm:py-5 font-bold">
                  {data.aboutInfo.remotelyAdmissionsData.table[0][2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.aboutInfo.remotelyAdmissionsData.table.slice(1).map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className=" px-3 py-2 sm:px-6 sm:py-5">{e[0]}</td>
                  <td className=" px-3 py-2 sm:px-6 sm:py-5">{e[1]}</td>
                  <td className=" px-3 py-2 sm:px-6 sm:py-5">{e[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-4 md:px-8 py-8">
        <h2 className="text-xl sm:text-4xl text-[#004471] font-bold text-center mt-18 mb-10">
          {data.aboutInfo.partnersPartTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.aboutInfo.partners.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={e.img}
                alt={e.descr}
                className="w-24 h-24 object-contain mb-4"
              />
              <p className="text-[17px] font-semibold text-[#1a1a1a] leading-snug">
                {e.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
