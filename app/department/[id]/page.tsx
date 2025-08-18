import P from "@/components/descr";
import { data } from "../../../data/dataAM";
import Image from "next/image";

type Params = {
  params: Promise<{ id: number }>;
};

export default async function MasnPage({ params }: Params) {
  const { id } = await params;
  const department = data.departments[id];
  console.log(department.color);

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
              <source src="/img/vd8.mp4" type="video/mp4" /> Ձեր դիտարկիչը չի
              աջակցում տեսանյութերի նվագարկմանը։
            </video>

            <div className="text py-10">
              <h2 className=" text-xl sm:text-2xl/8 font-bold mb-5">
                {department.departmentTitle}
              </h2>
              <P txt={department.departmentDescr}></P>
            </div>

            <div className="boxs">
              <h3 className="title text-center text-3xl font-semibold mb-6">
                {department.infoParts.title}
              </h3>
              <div className=" flex flex-wrap gap-20">
                {department.infoParts.info.map((item, i) => (
                  <div key={i}>
                    <div className="relative flex-col flex sm:flex-row items-center  mb-12">
                      <div className="relative w-[600px] h-[250px] sm:h-[500px]">
                        <Image
                          src={item.img}
                          alt="img"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="hidden sm:block absolute left-[105%] top-[0%] w-[80%] h-[2px] bg-[#003865] -translate-y-1/2 rotate-90 origin-left"></span>

                      <div className="relative sm:absolute sm:right-0 bg-white p-6 sm:p-8 shadow-lg sm:border-r-[6px] sm:border-b-[6px] border-[#003865] w-full sm:w-[700px] mt-4 sm:mt-0 sm:translate-x-[80%]">
                        <h3 className="text-base sm:text-2xl font-bold mb-3">
                          {item.title}
                        </h3>
                        <P txt={item.desc}></P>
                      </div>
                    </div>
                    <hr className="bg-[#003865] h-[3px] sm:h-[6px] sm:w-[180%] border-0" />
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
            {[...Array(10)].map((_, i) => (
              <div key={i} className="relative w-[500px] h-[350px]">
                <Image
                  src={`/img/crag${i + 1}.jpg`}
                  alt={`crag${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="profs">
        <h1 className="w-full py-8 text-center text-xl sm:text-3xl bg-[#004471] text-white my-5">
          {department.infoProfs.title}
        </h1>
        <div className="flex flex-wrap gap-5 sm:gap-0 justify-around my-5">
          {department.infoProfs.info.map((item, i) => (
            <div key={i} className="w-max flex flex-col gap-1 sm:gap-2">
              <Image
                src={item.src}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover w-[300px] h-[300px]"
              />
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p>{item.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
