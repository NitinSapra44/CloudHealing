import Link from "next/link";

export default function Resourcecard1() {
  return (
    <div className="bg-white flex-1 rounded-[100px] p-28 flex justify-between transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div className="flex flex-col gap-7">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="font-poppins text-[#00373E] text-center text-5xl">
            Articles &<br />
            Guides
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-3xl leading-relaxed text-[#4B5563] text-center mt-4">
            Practical tips on stress management, mindfulness, and emotional resilience.
          </span>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center pt-10">
          <Link href="/resources/articlesandguides">
            <button className="border bg-[#D1E6E1] py-3 px-8 rounded-full font-roboto text-[#374151] text-3xl">
              Explore
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
