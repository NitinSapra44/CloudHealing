import Link from "next/link";

export default function Ratecard2() {
  return (
    <div className="bg-[#C5E4F6] flex-1 rounded-[50px] p-8 transition-transform duration-300 ease-in-out  flex flex-col hover:scale-105">
      
      <div className="flex flex-col  gap-3">
        {/* Title */}
        <div>
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-2xl">
            Associate Therapists
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-4xl">
            $115 - $175
          </span>
          <span className="font-poppins text-[#374151] text-base">
            Per 50 Minute Session
          </span>
        </div>

        {/* Divider */}
        <div className="w-full">
          <hr className="border-t border-gray-400" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-6">
          <span className="font-poppins text-[#374151] leading-relaxed text-base">
            Our Associate therapists are licensing and licensed professionals with a rich blend of experience.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-base">
            Beyond the foundational areas covered by our Residents, they delve into significant mental health challenges, including trauma, PTSD, and specific concerns like gender dysphoria or substance abuse.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-base">
            Opt for Associate if you're looking for a deeper, more comprehensive therapeutic journey.
          </span>
        </div>
        </div>

        <div>
        <div className="pt-5">
          <Link
            href={{
              pathname: "/contact-us",
              query: { type: "associate" }
            }}
          >
            <button className="text-[#15355E] text-base bg-white px-5 py-2 rounded-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
