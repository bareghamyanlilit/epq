import Image from "next/image";
import { data } from "../../data/dataAM";
export default function ContactPage() {
  return (
    <div className="ContactPage  mt-20 sm:mt-26">
  {/* Hero Section */}
  <div className="relative w-full h-[30vh] sm:h-[70vh] flex items-center justify-center">
    <Image
      src={data.infoContact.image}
      alt="Քոլեջի շենքի պատկեր"
      fill
      className="object-cover -z-10"
      priority
    />
    <h1 className="hidden sm:block text-2xl sm:text-4xl font-bold text-white bg-black/40 p-6 rounded-2xl text-center">
      Կապ մեզ հետ
    </h1>
  </div>

  {/* Contact Info + Form */}
  <div className="mx-auto bg-white mt-0 sm:-mt-12 mb-0 sm:mb-10 p-6 sm:p-16 sm:rounded-xl shadow-lg w-full sm:w-[70%] max-w-6xl">
    <h2 className="text-center text-xl sm:text-3xl text-[#004471] mb-10 sm:mb-12 font-bold">
      Ունե՞ս հարցեր կամ առաջարկություններ
    </h2>

    <div className="flex flex-col lg:flex-row justify-between gap-10">
      {/* Contact Info */}
      <div className="text-[16px] sm:text-[18px] leading-loose max-w-md mx-auto lg:mx-0 text-center lg:text-left">
        <ul className="list-none p-0">
          <li><strong className="text-[#004471]">📍 Հասցե:</strong> {data.infoContact.location}</li>
          <li><strong className="text-[#004471]">📞 Հեռախոս:</strong>  {data.infoContact.phone}</li>
          <li><strong className="text-[#004471]">📧 Էլ․ փոստ:</strong>  {data.infoContact.mail}</li>
          <li><strong className="text-[#004471]">⏰ Ժամեր:</strong> {data.infoContact.days} , {data.infoContact.hours}</li>
        </ul>

        <div className="flex justify-center lg:justify-start mt-5 gap-3">
          <a href="#" aria-label="Facebook">
            <img
              src="/img/facebook.png"
              alt="Facebook"
              className="w-[40px] sm:w-[50px] rounded-full hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              src="/img/insta.png"
              alt="Instagram"
              className="w-[40px] sm:w-[50px] rounded-full hover:scale-110 transition-transform duration-200 "
            />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-[50%] mx-auto">
        <form action="#" method="post" className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Անուն Ազգանուն"
            required
            className="w-full p-2 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Էլ․ փոստ"
            required
            className="w-full p-2 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Քո հաղորդագրությունը"
            required
            className="w-full p-2 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-[#004471] text-white px-6 py-3 rounded-lg text-[16px] hover:bg-[#002d4f] transition-colors"
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
