import Link from "next/link";

export default function Ratecard1() {
  return (
    <div className="bg-[#D1E6E1] flex-1 rounded-[50px] p-12 transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-5xl">
            Intern Therapists
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <span className="font-poppins text-[#374151] font-semibold leading-relaxed text-7xl">
            $45-$105
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
            An Intern therapist at Alli is a Canadian master's student <br />
            completing their clinical practicum.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            If you're navigating everyday challenges, our Intern Therapists <br />
            stand ready.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            They're skilled in addressing mild anxieties, life transitions,<br />
            self-discovery, and general mental health.
          </span>
          <span className="font-poppins text-[#374151] leading-relaxed text-3xl">
            Ideal for those seeking insights on self-development,<br />
            relationships, and career shifts.
          </span>
        </div>

        {/* Book Now Button */}
        <div className="pt-5">
          <Link
            href={{
              pathname: "/contact-us",
              query: { type: "intern" }
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
