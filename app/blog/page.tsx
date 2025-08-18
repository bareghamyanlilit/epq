import Link from "next/link";
import { data } from "../../data/dataAM";
import P from "@/components/descr";
import Image from "next/image";
export default function BlogPage() {
  return (
    <div className="BlogPage mt-18 sm:mt-26 ">
      <section id="blog" className="">
        <div className="main-box flex flex-col md:flex-row h-[90vh] bg-[#e6eeff] w-full">
          <div className="left relative md:w-5/12 h-full flex items-center justify-center">
            <div className="box-descr absolute left-[80%] transform -translate-x-1/2  w-[90%] h-[60%] backdrop-blur-xl border-2 border-[#7c7c7c47] p-[50px] rounded-[2%] flex flex-col justify-around">
              <h1 className="text-[calc(1rem+1vw)] text-[#004471]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
            </div>
          </div>
          <div
            className="right md:w-7/12 h-full bg-fixed bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/img/operator.jpg')" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-[calc(18px+2vw)] text-center text-[#004471] font-serif mb-10">
            My Blogs
          </h1>
          <div className="items grid justify-items-center md:grid-cols-3 gap-10">
            {data.blogInfo.infoVideo.map((item, i) => (
              <div key={i}>
                <div className="relative w-[450px] bg-[#004471] rounded-lg overflow-hidden shadow-lg">
                  <div className="relative w-full h-65">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h2>
                    <P
                      txt={
                        item.descr.length > 100
                          ? item.descr.slice(0, 100) + "..."
                          : item.descr
                      }
                      className="text-white mb-4"
                    ></P>
                    <button className=" text-[white] px-4 py-2 text-sm rounded hover:bg-transparent hover:text-[#ffe0b2] border border-[#ffe0b2] transition-all duration-300">
                      <Link href={`singlBlog/${item.id}`}>Ավելին</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="btn bg-[#004471] text-white hover:bg-transparent hover:text-[#004471] px-6 py-2 border  transition">
              Ավելին
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
