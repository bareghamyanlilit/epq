import Image from "next/image";
import Link from "next/link";
import { data } from "../../data";

export default function DepartmentsPage() {

  return (
    <div className="DepartmentsPage">
      {/* Hero Section (80vh) */}
      <div className="relative w-full h-[80vh]">
        <Image
          src={data.departmentsInfo.img}
          alt="Քոլեջի պատկերը"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-[600px]">
            <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">
              {data.departmentsInfo.title}
            </h1>
            <p className="text-white mt-2 text-lg md:text-xl">
              {data.departmentsInfo.descr}
            </p>
          </div>
        </div>
      </div>

      {/* Departments List Section */}
      <div className=" ">
        {data.departmentsInfo.departmentsPartInfo.map((e, i) => {
        
        const direction: 'row' | 'row-reverse' = i % 2 == 1? 'row-reverse':'row'
       return (
          
          <div key={i} className="flex flex-col md:flex-row items-center gap-8 h-[100vh]"  style={{flexDirection:direction}}>
            
            <div className="w-full md:w-1/2 space-y-4 text-center justify-items-center">
              <img src={e.childImg} alt={e.title} className="w-20 h-20 object-contain" />
              <h3 className="text-3xl font-semibold">{e.title}</h3>
              <p className=" text-xl text-gray-700">{e.descr}</p>
              <Link href={`/department/${i}`} className=" text-xl text-blue-600 underline hover:text-blue-800">
                {e.linkTxt}
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[100vh]">
                  <Image
                        src={e.img}
                        alt={e.title}
                        fill
                        className="object-cover"
                  />
            </div>
            
          </div>
            // <hr className=" h-[80px] bg-[#004471] border-0"/>
        )})}
      </div>
    </div>
  );
}
