import { data } from "../../data";

export default function MasnPage() {

  return (
    <div className="masn">
      <div
        className={`hero bg-[${data.infoProgrammingDepartment.color}] text-white text-center border-t-2 border-white p-12`}
      >
        <h1 className="text-2xl font-bold">
          {data.infoProgrammingDepartment.title}
        </h1>
        <p className="mt-4 text-lg">{data.infoProgrammingDepartment.descr}</p>
      </div>

      <div className="about mb-24   container w-[80%] mx-auto">
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
              <h2 className="text-2xl/8 font-bold mb-5">
                {data.infoProgrammingDepartment.departmentTitle}
              </h2>
              <p className=" text-xl/8">
                {data.infoProgrammingDepartment.departmentDescr}
              </p>
            </div>

            <div className="boxs">
              <h3 className="title text-center text-3xl font-semibold mb-6">
                {data.infoProgrammingDepartment.infoParts.title}
              </h3>
              <div className="box_items flex flex-wrap gap-20">
                {data.infoProgrammingDepartment.infoParts.info.map((item, i) => (
                  <div key={i}>
                    <div className="relative flex items-center  mb-12">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-[600px] h-[500px] object-cover "
                      />
                      <span className="absolute left-[105%] top-[0%] w-[80%] h-[2px] bg-[#003865] -translate-y-1/2 rotate-90 origin-left"></span>

                      <div className="absolute right-0 bg-white p-8 shadow-lg border-r-[6px] border-b-[6px] border-[#003865] w-[700px] translate-x-[80%]">
                        <h3 className="text-2xl font-bold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-xl/8 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <hr className="bg-[#003865] h-[6px] w-[180%] border-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events">
        <h2 className="title text-center text-2xl font-bold mb-10">
          {data.infoProgrammingDepartment.partImgTitle}
        </h2>
        <div className="container mx-auto px-4">
          <div className="images flex flex-wrap justify-center gap-5">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={`/img/crag${i + 1}.jpg`}
                alt={`crag${i + 1}`}
                className="w-[500px] h-[350px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
