import { data } from "../data";
import Image from "next/image";

export default function HomePage() {
  
  return (
    <div className="HomePage"> 
      <div className="relative w-full h-[80vh]">
        <Image
          src='/img/slide2.jpg'
          alt="Քոլեջի պատկերը"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">{data.homeInfo.title} <br /><span className="text-white">_____________</span></h1>
          <p className="text-white mt-2 text-lg md:text-xl max-w-2xl">{data.homeInfo.descr}</p>
        </div>
      </div>

      <div className="infoImg">
        {
          data.homeInfo.infoImg.map((elm,i)=> { 
            const direction: 'row' | 'row-reverse' = i % 2 == 1 ? 'row-reverse':'row'
            return(
              <div className=" flex h-[80vh]" style={{flexDirection:direction}} key={elm[1]}>
                <h2 className=" font-bold w-1/2 h-full bg-white text-gray-700 text-center content-center text-2xl p-10">{elm[0]}</h2>
                <Image className=" w-1/2 h-full object-cover" alt={elm[1]} src={elm[1]} width={1000} height={1000}/>
              </div>
            )
          })
        }
      </div>
      <hr className="  my-5 border-0 bg-[#004471] h-[80px]"/>
      <div className="infoImg container">
        {
          data.homeInfo.infoVideo.map((elm,i)=> {
            const direction: 'row' | 'row-reverse' = i % 2 == 0 ? 'row-reverse':'row'
            return(
              <div className=" flex justify-center" style={{flexDirection:direction}} key={i}>
                <p className=" w-2xl h-full text-gray-700 text-center content-center p-10">{elm[0]}</p>
                {/* <video className=" w-2xl h-full object-cover" src={elm[1]}  controls muted /> */}
                <video className="w-[400px] object-cover" controls autoPlay muted loop>
                <source src={elm[1]} type="video/mp4" /> Ձեր դիտարկիչը չի աջակցում տեսանյութերի նվագարկմանը։</video>

              </div>
            )
          })
        }
      </div>
    </div>
    
  );
}
