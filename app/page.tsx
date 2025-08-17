import { data } from "../data";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="HomePage  bg-[#004471]">

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <Image
          src="/img/slide2.jpg"
          alt="Քոլեջի պատկերը"
          fill
          className="object-cover  brightness-[0.5] "
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {data.homeInfo.title} <br />
            <span className="text-white">_____________</span>
          </h1>
          <p className="text-white mt-2 text-sm sm:text-lg md:text-xl max-w-2xl">{data.homeInfo.descr}</p>
        </div>
      </div>

      {/* Info Images Section */}
      <div className="infoImg flex flex-col sm:gap-10 sm:mt-10">
        {data.homeInfo.infoImg.map((elm, i) => {
          const reverse = i % 2 === 1;
          return (
            <div 
              key={elm[1]} 
              className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} h-auto lg:h-[80vh]`}
            >
              <div className="flex w-full lg:w-1/2 h-64 lg:h-full bg-white text-gray-700 p-6 lg:p-10 items-center justify-center text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{elm[0]}</h2>
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
          )
        })}
      </div>

    </div>
  );
}
