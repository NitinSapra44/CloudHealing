import Image from "next/image";
import Link from "next/link";

export default function Card3() {
  return (
    <div className="bg-[#C7D9A7] flex-1 rounded-[25px] pt-5 pl-3 scroll-pb-36 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col gap-3 px-6">
        {/* Title */}
        <div className="flex justify-start">
          <span className="font-torus text-[#374151] font-bold text-2xl">
            Individual Therapy
          </span>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-base leading-relaxed text-[#4B5563] mt-4">
            Address specific concerns while <br />
            incorporating mindfulness practices for improved well-being.
          </span>
        </div>

        {/* Read More Button */}
        <div className="flex justify-start ">
          <Link href="/services/individual-therapy">
            <button className="border bg-white py-2 px-6 rounded-full font-roboto mt-3 text-[#374151] text-base">
              Read More
            </button>
          </Link>
        </div>

        {/* Star Image */}
        <div className="pt-10 flex justify-end">
          <Image src="/Star.png" width={100} height={50} alt="star" />
        </div>
      </div>
    </div>
  );
}
