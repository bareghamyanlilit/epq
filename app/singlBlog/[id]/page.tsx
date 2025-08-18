import Image from "next/image";
import { data } from "../../../data/dataAM";
import P from "@/components/descr";

type Params = {
  params: Promise<{ id: number }>;
};

export default async function SinglBlogPage({ params }: Params) {
  const { id } = await params;

  const blog = data.blogInfo.infoVideo[id];
  return (
    <div className="SinglBlogPage  mt-18 sm:mt-26">
      <div className="relative w-full h-[70vh]">
        <Image src={blog.img} alt={blog.title} fill className="object-cover" />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-white text-center px-4 bg-black/40">
          {blog.title}
        </h1>
      </div>

      <div className="my-10 container w-[80%] mx-auto">
        <P txt={blog.descr} className="my-10"></P>
        <div>
          <video
            className="w-[400px] object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src={blog.video} type="video/mp4" /> Ձեր դիտարկիչը չի
            աջակցում տեսանյութերի նվագարկմանը։
          </video>
        </div>
      </div>
    </div>
  );
}
