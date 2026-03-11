import Link from "next/link";

export default function Ratecard2() {
  return (
    <div className="bg-[#C5E4F6] flex-1 rounded-[50px] p-12 transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-5xl">
            Associate Therapists
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-7xl">
            $115 - $175
          </span>
          <span className="font-poppins text-[#374151] text-3xl">
            Per 50 Minute Session
          </span>
        </div>

        {/* Divider */}
        <div className="w-full">
          <hr className="border-t border-gray-400" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-6">
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            Our Associate therapists are licensing and licensed professionals with a rich blend of experience.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            Beyond the foundational areas covered by our Residents, they delve into significant mental health challenges, including trauma, PTSD, and specific concerns like gender dysphoria or substance abuse.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            Opt for Associate if you're looking for a deeper, more comprehensive therapeutic journey.
          </span>
        </div>

        {/* Book Now Button */}
        <div className="pt-5">
          <Link
            href={{
              pathname: "/contact-us",
              query: { type: "associate" }
            }}
          >
            <button className="text-[#15355E] text-3xl bg-white px-5 py-2 rounded-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
