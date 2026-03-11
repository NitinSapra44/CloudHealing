import Link from "next/link";

export default function Resourcecard3() {
  return (
    <div className="bg-white flex-1 rounded-[50px] p-10 flex justify-between flex-col transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="font-poppins text-[#00373E] text-center text-2xl">
            Webinars & <br />
            Workshops
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-base leading-relaxed text-[#4B5563] text-center mt-4">
            Live and recorded sessions with mental health professionals.
          </span>
        </div>
        </div>
    <div>

        {/* Explore Button */}
        <div className="flex justify-center pt-10">
          <Link href="/resources/webinarsandworkshops">
            <button className="border bg-[#C7D9A7] py-2 px-6 rounded-full font-roboto text-[#374151] text-base">
              Explore
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
