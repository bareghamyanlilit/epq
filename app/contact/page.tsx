import Image from "next/image";
import { data } from "../../data";
export default function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="relative w-full h-[70vh] content-center">
        <Image
          src={data.infoContact.image}
          alt="Քոլեջի շենքի պատկեր"
          fill
          className="object-cover absolute -z-1"
          priority
        />
        <h1 className="text-4xl font-bold text-white bg-black/40 p-6 rounded-2xl w-fit h-fit m-auto">
          Կապ մեզ հետ
        </h1>
      </div>

      <div className="mx-auto bg-white -mt-12 mb-10 p-20 rounded-xl shadow-lg w-[70vw] max-w-6xl">
        <h2 className="text-center text-3xl text-[#004471] mb-12 font-bold">
          Ունե՞ս հարցեր կամ առաջարկություններ
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="text-[18px] leading-loose max-w-md">
            <ul className="list-none p-0">
              <li><strong className="text-[#004471]">📍 Հասցե:</strong> {data.infoContact.location}</li>
              <li><strong className="text-[#004471]">📞 Հեռախոս:</strong>  {data.infoContact.phone}</li>
              <li><strong className="text-[#004471]">📧 Էլ․ փոստ:</strong>  {data.infoContact.mail}</li>
              <li><strong className="text-[#004471]">⏰ Ժամեր:</strong> {data.infoContact.days} , {data.infoContact.hours} </li>
            </ul>

            <div className="flex mt-5">
              <a href="#" aria-label="Facebook">
                <img
                  src="/img/facebook.png"
                  alt="Facebook"
                  className="w-[50px] rounded-full mr-2 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/img/insta.png"
                  alt="Instagram"
                  className="w-[50px] rounded-full hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl">
            <form action="#" method="post" className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Անուն Ազգանուն"
                required
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-[16px]"
              />
              <input
                type="email"
                name="email"
                placeholder="Էլ․ փոստ"
                required
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-[16px]"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Քո հաղորդագրությունը"
                required
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-[16px]"
              />
              <button
                type="submit"
                className="bg-[#004471] text-white px-8 py-3 rounded-lg text-[16px] hover:bg-[#002d4f] transition-colors"
              >
                Ուղարկել
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
