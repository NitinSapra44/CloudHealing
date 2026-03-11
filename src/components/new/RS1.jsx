import Link from "next/link";

export default function Resourcecard1() {
  return (
    <div className="bg-white flex-1 rounded-[50px] p-10 flex justify-between flex-col transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div className="flex flex-col gap-2">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="font-poppins text-[#00373E] text-center text-2xl">
            Articles &<br />
            Guides
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-start">
          <span className="font-poppins text-base leading-relaxed text-[#4B5563] text-center mt-4">
            Practical tips on stress management, mindfulness, and emotional resilience.
          </span>
        </div>
    </div>
    <div>
        {/* Explore Button */}
        <div className="flex justify-center pt-5">
          <Link href="/resources/articlesandguides">
            <button className="border bg-[#D1E6E1] py-2 px-6 rounded-full font-roboto text-[#374151] text-base">
              Explore
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
