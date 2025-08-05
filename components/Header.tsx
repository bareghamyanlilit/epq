'use client'

import Image from "next/image";
import Link from "next/link";
import {data} from '../data'

export function Header() {
    return (
      <div className="Header container bg-[#004471] text-[#fff] py-5 text-center"> 
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/img/logo.png" alt="Logo" width={70} height={70} />
              <h3 className=" font-semibold w-[300px] text-start">
                ԷՋՄԻԱԾՆԻ ՎԱՐԴԳԵՍ ՀԱՄԱԶԱՍՊՅԱՆԻ ԱՆՎԱՆ ՊԵՏԱԿԱՆ ՔՈԼԵՋ
              </h3>
            </div>

            <nav>
              <ul className="flex gap-6 font-medium">
                {
                  data.headerLinks.map((item)=><li key={item[0]}>
                    <Link href={item[0]} className=" font-bold">{item[1]}</Link>
                  </li>)
                }
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              {data.lang.map((item)=><Image key={item[1]} src={item[0]} alt={item[1]} width={40} height={20} title={item[1]} />)}
            </div>

          </div>
        </div>
      </div>
    );
  }
  