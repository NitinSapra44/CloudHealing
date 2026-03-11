import Image from "next/image";
import Link from "next/link";

export default function Card3() {
  return (
    <div className="bg-[#C7D9A7] flex-1 rounded-[50px] pt-12 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex flex-col gap-7 px-10">
        {/* Title */}
        <div className="flex justify-start">
          <span className="font-torus text-[#374151] font-bold text-5xl">
            Individual Therapy
          </span>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-3xl leading-relaxed text-[#4B5563] mt-4">
            Address specific concerns while <br />
            incorporating mindfulness practices for improved well-being.
          </span>
        </div>

        {/* Read More Button */}
        <div className="flex justify-start pt-10">
          <Link href="/services/individual-therapy">
            <button className="border bg-white py-2 px-6 rounded-full font-roboto text-[#374151] text-3xl">
              Read More
            </button>
          </Link>
        </div>

        {/* Star Image */}
        <div className="pt-36 flex justify-end">
          <Image src="/Star.png" width={200} height={100} alt="star" />
        </div>
      </div>
    </div>
  );
}
