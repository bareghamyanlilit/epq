import Image from "next/image";
import Link from "next/link";
import { data } from "../../data/dataAM";
import P from "@/components/descr";

export default function DepartmentsPage() {
  return (
    <div className="DepartmentsPage  mt-20 sm:mt-26">
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
      <div className=" grid gap-4">
        {data.departmentsInfo.departmentsPartInfo.map((e, i) => {
          const directionClass =
            i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row";
          return (
            <div
              key={i}
              className={`flex flex-col ${directionClass} items-center gap-4 sm:gap-8 h-auto sm:h-[100vh]`}
            >
              <div className="w-full md:w-1/2 p-2 sm:py-0 space-y-4 text-center justify-items-center">
                <img
                  src={e.childImg}
                  alt={e.title}
                  className="hidden sm:block w-20 h-20 object-contain"
                />
                <h3 className=" text-xl sm:text-3xl font-semibold">{e.title}</h3>
                <P txt={e.descr} className="mt-4"></P>
                <Link
                  href={`/department/${i}`}
                  className=" text-xl text-blue-600 underline hover:text-blue-800"
                >
                  {e.linkTxt}
                </Link>
              </div>

              <div className="w-full md:w-1/2 relative h-[50vh] sm:h-[100vh]">
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
      </div>
    </div>
  );
}
