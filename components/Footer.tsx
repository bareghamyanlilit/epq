"use client";
import Image from "next/image";
import P from "./descr";
import Link from "next/link";
import { useLanguage } from "@/context/LangContext";

export function Footer() {
  const { data } = useLanguage();
  return (
    <footer className="Footer bg-[#004471] text-white py-10 px-5 font-[Segoe UI, sans-serif] mt-10">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center md:text-left">
        {/* About / First Info */}
        <div className="flex flex-col gap-4 md:w-[250px]">
          <h2 className="text-xl sm:text-2xl font-bold">
            {data.footer.firstInfo.title}
          </h2>
          <P txt={data.footer.firstInfo.descr} className="text-white"></P>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:w-[250px]">
          <h2 className="text-xl sm:text-2xl font-bold">
            {data.footer.contactInfo.title}
          </h2>
          <div className="text-sm sm:text-base">
            <p>{data.footer.contactInfo.loc}</p>
            <p>{data.footer.contactInfo.phone}</p>
            <p>{data.footer.contactInfo.email}</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4 md:w-[200px]">
          <h2 className="text-xl sm:text-2xl font-bold">
            {data.footer.socials.title}
          </h2>
          <ul className="flex justify-center md:justify-start gap-3">
            {data.footer.socials.socImg.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} >
                  <Image
                    src={item.src}
                    alt={`social-${idx}`}
                    width={40}
                    height={40}
                    className="hover:scale-110 transition-transform duration-200 rounded-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm sm:text-base opacity-80">
        © {new Date().getFullYear()} {data.footer.copyright}
      </div>
    </footer>
  );
}
