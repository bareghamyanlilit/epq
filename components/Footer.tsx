'use client'
import Link from 'next/link';
import {data} from '../data'
import Image from 'next/image';
export function Footer() {
    return (
      <div className="Footer container bg-[#004471] text-[#fff] py-10 px-5 font-[Segoe UI, sans-serif] flex justify-around text-center"> 
        <div className='flex flex-col gap-5 w-[300px]' >
          <h2 className='text-2xl font-bold'>{data.footer.firstInfo.title}</h2>
          <p >{data.footer.firstInfo.descr}</p>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>{data.footer.pagesLinks.title}</h2>
          <ul>
            {
              data.footer.pagesLinks.links.map((item)=><li key={item.href+item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>)
            }
          </ul>
        </div>
        
        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>{data.footer.contactInfo.title}</h2>
          <div>
            <p>{data.footer.contactInfo.loc}</p>
            <p>{data.footer.contactInfo.phone}</p>
            <p>{data.footer.contactInfo.email}</p>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='text-2xl font-bold'>{data.footer.socials.title}</h2>
          <ul className='flex gap-2.5'>
            {
              data.footer.socials.socImg.map((item)=><li key={item}>
                <Image src={item} alt='item' width={40} height={40}/>
              </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
  